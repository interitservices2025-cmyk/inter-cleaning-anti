import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      type, 
      name, 
      email, 
      phone, 
      subject, 
      message, 
      serviceNeeded, 
      propertyType, 
      frequency 
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required fields." },
        { status: 400 }
      );
    }

    // Configure Nodemailer SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // Port 465 is secure (SSL)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let emailSubject = "";
    let emailHtml = "";

    // Generate responsive HTML design based on form type (Contact or Quote request)
    if (type === "contact") {
      emailSubject = `[Contact] ${subject || "New contact message"} - ${name}`;
      emailHtml = `
        <div style="font-family: 'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 16px; background-color: #ffffff; color: #1F2937;">
          <div style="text-align: center; border-bottom: 2px solid #DC0D73; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #DC0D73; font-family: 'Montserrat', sans-serif; font-size: 24px; margin: 0;">Inter-Cleaning Services</h1>
            <p style="color: #6B7280; font-size: 14px; margin: 5px 0 0 0;">Nouveau Message de Contact</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563; width: 120px;">Nom :</td>
              <td style="padding: 8px 0; color: #1F2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">E-mail :</td>
              <td style="padding: 8px 0; color: #1F2937;"><a href="mailto:${email}" style="color: #DC0D73; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Téléphone :</td>
              <td style="padding: 8px 0; color: #1F2937;">${phone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Sujet :</td>
              <td style="padding: 8px 0; color: #1F2937; font-weight: bold;">${subject || "Sans sujet"}</td>
            </tr>
          </table>
          <div style="background-color: #F8F8F8; padding: 20px; border-radius: 12px; border-left: 4px solid #DC0D73; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #1F2937; font-size: 14px;">Message :</h4>
            <p style="margin: 0; color: #4B5563; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="text-align: center; font-size: 11px; color: #9CA3AF; border-top: 1px solid #f0f0f0; padding-top: 15px; margin-top: 25px;">
            Cet e-mail a été envoyé automatiquement depuis le formulaire de contact du site inter-cleaning.ca.
          </div>
        </div>
      `;
    } else {
      // Default to quote request
      emailSubject = `[Devis] Demande d'estimation gratuite - ${name}`;
      emailHtml = `
        <div style="font-family: 'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 16px; background-color: #ffffff; color: #1F2937;">
          <div style="text-align: center; border-bottom: 2px solid #DC0D73; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #DC0D73; font-family: 'Montserrat', sans-serif; font-size: 24px; margin: 0;">Inter-Cleaning Services</h1>
            <p style="color: #6B7280; font-size: 14px; margin: 5px 0 0 0;">Nouvelle Demande d'Estimation Gratuite</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563; width: 160px;">Nom complet :</td>
              <td style="padding: 8px 0; color: #1F2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">E-mail :</td>
              <td style="padding: 8px 0; color: #1F2937;"><a href="mailto:${email}" style="color: #DC0D73; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Téléphone :</td>
              <td style="padding: 8px 0; color: #1F2937;">${phone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Service demandé :</td>
              <td style="padding: 8px 0; color: #1F2937;"><span style="background-color: #E0F2FE; color: #0369A1; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${serviceNeeded || "Non spécifié"}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Type de propriété :</td>
              <td style="padding: 8px 0; color: #1F2937;">${propertyType || "Non spécifié"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4B5563;">Fréquence :</td>
              <td style="padding: 8px 0; color: #1F2937;">${frequency || "Non spécifié"}</td>
            </tr>
          </table>
          
          <div style="background-color: #F8F8F8; padding: 20px; border-radius: 12px; border-left: 4px solid #DC0D73; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #1F2937; font-size: 14px;">Détails complémentaires / Message :</h4>
            <p style="margin: 0; color: #4B5563; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || "Aucun message ou détail supplémentaire fourni."}</p>
          </div>
          
          <div style="text-align: center; font-size: 11px; color: #9CA3AF; border-top: 1px solid #f0f0f0; padding-top: 15px; margin-top: 25px;">
            Cet e-mail a été envoyé automatiquement depuis le formulaire de devis du site inter-cleaning.ca.
          </div>
        </div>
      `;
    }

    // Send email using SMTP
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Authentication identity in <>, displayed as Client Name
      to: process.env.CONTACT_RECEIVER || "contact@inter-cleaningservices.com",
      replyTo: email, // Direct response goes to client
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in send-email API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email message via SMTP." },
      { status: 500 }
    );
  }
}
