import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const newUser = await request.json();

    console.log(`New client is ${JSON.stringify(newUser)}`);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
