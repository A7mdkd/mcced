import nodemailer from 'nodemailer';

export async function sendContactEmail({ name, email, subject, message }: { name: string; email: string; subject: string; message: string; }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // يمكنك تغيير المزود حسب الحاجة
    auth: {
      user: 'your-company-email@gmail.com', // ضع هنا ايميل الشركة
      pass: 'your-app-password', // استخدم app password وليس كلمة المرور العادية
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'your-company-email@gmail.com', // نفس ايميل الشركة
    subject: `[Contact Form] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  });
}
