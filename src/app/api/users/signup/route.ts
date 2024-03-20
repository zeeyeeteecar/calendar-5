import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await prisma.tbl_next_auth.findFirst({
      where: { email: email },
    });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const createUser = await prisma.tbl_next_auth.create({
      data: { username: username, email: email, password: hashedPassword },
    });

    prisma.$disconnect();

    console.log(createUser);

    //send verification email

    //await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      createUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
