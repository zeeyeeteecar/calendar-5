import { prisma } from "../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, password } = body;

  console.log("body====", body);

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email, or password", {
      status: 400,
    });
  }

  const result: any = await prisma.tAdmin.findMany({
    // where: {
    //   Login: name,
    // },
  });

  // if (result) {
  //   return new NextResponse("User already exists", {
  //     status: 400,
  //   });
  // }

  await prisma.$disconnect();

  //return new Response(JSON.stringify(result));
  return NextResponse.json(result);
}
