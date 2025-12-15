const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mail gönderme endpoint'i
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Form validasyonu
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Ad, email ve mesaj alanları zorunludur.'
    });
  }

  try {
    // Nodemailer transporter oluştur (kendi mail sunucunuzla)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // örn: mail.yourdomain.com
      port: process.env.SMTP_PORT, // genelde 587 veya 465
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // örn: info@zetacnc.com.tr
        pass: process.env.SMTP_PASS  // mail şifreniz
      },
      // Bazı sunucular için SSL sertifika doğrulaması
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email içeriği
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // gönderen
      to: process.env.RECEIVE_EMAIL, // mailin gideceği adres
      replyTo: email, // müşteri maili (cevapla'ya basınca bu açılır)
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">ZETA CNC - Yeni İletişim Formu Mesajı</h2>
          <hr style="border: 1px solid #e5e7eb;">

          <div style="margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
          </div>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Bu mesaj ZETA CNC web sitesi iletişim formundan otomatik olarak gönderilmiştir.<br>
            Tarih: ${new Date().toLocaleString('tr-TR')}
          </p>
        </div>
      `
    };

    // Mail gönder
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Email başarıyla gönderildi!'
    });

  } catch (error) {
    console.error('Email gönderme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Email gönderilemedi. Lütfen tekrar deneyin.',
      error: error.message
    });
  }
});

// Test endpoint'i
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server çalışıyor!' });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
