import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message, inquiryType } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
        // For now, we'll just log the data
        console.log("Contact Form Submission:", {
            name,
            email,
            inquiryType,
            message,
            timestamp: new Date().toISOString(),
        });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
