import { NextResponse } from "next/server";

export async function GET() {
  const html = `Pinterest VerificationLooking good! You are ready to return to the verification page and complete the process.`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}