import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Mail from "@/models/Mail"; 
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    await connectDB(); // Veritabanına bağlan

    const reqBody = await request.json(); // İstek gövdesini al
    const { email } = reqBody;

    const mail = new Mail({ email });

    // E-posta adresini kaydetmeye çalış
    const savedEmail = await mail.save();

    return NextResponse.json(
      {
        message: "Email successfully saved",
        email: savedEmail,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Eğer duplicate key hatasıysa
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "This email is already registered" },
        { status: 400 }
      );
    }
    // Diğer validation hataları
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    } else {
      console.error("Error during email saving:", error);
      return NextResponse.error();
    }
  }
}
