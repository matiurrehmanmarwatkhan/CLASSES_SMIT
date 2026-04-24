import express from "express";
import { config } from "dotenv";
import nodemailer from "nodemailer";
config();
const app = express();

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "matiurrehmanmarwatkhan@gmail.com",
    pass: process.env.EMAIL_SECRET_KEY,
  },
});

const mailOption = {
  from: "matiurrehmanmarwatkhan@gmail.com",
  to: "wahidullah812002@gmail.com",
  subject: "Testing Nodemailer",
  html: `
 <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Frontend Internship Application</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px;">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#4f46e5; color:#ffffff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
              Frontend Developer Internship
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px; color:#333;">

              <p>Dear Hiring Manager,</p>

              <p>Assalamualaikum,</p>

              <p>
                My name is <strong>Mati Ur Rehman</strong>, and I am a web development student currently pursuing a diploma in Web Development from Saylani Mass IT.
              </p>

              <p>
                I am writing to express my interest in a <strong>Frontend Developer Internship</strong> at your company. I have hands-on experience with React.js, JavaScript, HTML, CSS, and Tailwind CSS.
              </p>

              <p><strong>Projects:</strong></p>
              <ul>
                <li>React Dashboard</li>
                <li>E-Commerce Website (Hackathon Project)</li>
                <li>Todo App with CRUD Operations</li>
              </ul>

              <p>
                <strong>Portfolio:</strong><br>
                <a href="https://personal-portfolio-mu-brown-49.vercel.app/">View Portfolio</a><br><br>

                <strong>GitHub:</strong><br>
                <a href="https://github.com/matiurrehmanmarwatkhan">GitHub Profile</a>
              </p>

              <!-- Button -->
              <div style="text-align:center; margin-top:20px;">
                <a href="https://personal-portfolio-mu-brown-49.vercel.app/"
                   style="background:#4f46e5; color:#ffffff; padding:12px 25px; text-decoration:none; border-radius:6px; display:inline-block;">
                   View My Work
                </a>
              </div>

              <p style="margin-top:30px;">
                I am highly motivated to learn and grow as a developer and would love the opportunity to work with your team.
              </p>

              <p>
                Thank you for your time and consideration.<br>
                I look forward to your response.
              </p>

              <p>
                Best regards,<br>
                <strong>Mati Ur Rehman</strong><br>
                Phone: 03270950418<br>
                Email: matiurrehmanmarwatkhan@gmail.com<br>
                <a href="https://www.linkedin.com/in/mati-ur-rehman-8bbb44376/">LinkedIn Profile</a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9; text-align:center; padding:15px; font-size:12px; color:#777;">
              © 2026 Mati Ur Rehman | All Rights Reserved
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `,
};

app.get("/test", (req, res) => {
  transpoter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Email Sent : info.response");
    }
  });
});

app.listen(7000, () => {
  console.log("http://localhost:7000");
});
