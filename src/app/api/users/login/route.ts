import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import React from "react";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await prisma.tbl_next_auth.findFirst({
      where: { email: email },
    });

    //check if user exist
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 401 }
      );
    }

    //check if password valid
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 402 });
    }

    //create token data
    const tokenData = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
    };

    console.log("tokenData", tokenData);

    //create token

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1h",
    });

    // return NextResponse.json({
    //   message: "Login successful",
    //   success: true,
    // });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user,
    });

    // response.cookies.set("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   maxAge: 30 * 1000,
    // });

    response.cookies.set("token", token, {
      expires: new Date(Date.now() + 60 * 60 * 1000),
    });

    console.log("reqBody===", reqBody);
    console.log("user===", user);

    return response;
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
