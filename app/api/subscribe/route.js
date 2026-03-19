import nodemailer from "nodemailer";

function getMissingEnvVars() {
  const required = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "SMTP_TO"
  ];

  return required.filter((key) => !process.env[key]);
}

export async function POST(request) {
  try {
    const missing = getMissingEnvVars();

    if (missing.length > 0) {
      return Response.json(
        {
          error: `missing smtp config: ${missing.join(", ").toLowerCase()}`
        },
        { status: 500 }
      );
    }

    const { email } = await request.json();
    const normalizedEmail = String(email || "").trim().toLowerCase();

    if (!normalizedEmail) {
      return Response.json({ error: "email is required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: "new portfolio email signup",
      text: [
        "a new email was submitted from the portfolio form.",
        "",
        `email: ${normalizedEmail}`,
        `time: ${new Date().toISOString()}`
      ].join("\n")
    });

    return Response.json({
      message: "thanks. i'll keep you posted."
    });
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message.toLowerCase() : "unable to send email."
      },
      { status: 500 }
    );
  }
}
