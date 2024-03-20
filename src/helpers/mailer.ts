// import nodemailer from 'nodemailer';
// import User from '@/models/userModel';
// import bcryptjs from 'bcryptjs';

// export const sendemail = async ({ email, emailType, userid }: any) => {
//     try {
//         //Create hashed token
//         const hashedToken = await bcryptjs.hash(userid.toString(), 10)

//         if (emailType === "VERIFY") {
//             await User.findByIdAndUpdate(userid,
//                 {
//                     verifyToken: hashedToken,
//                     verifyTokenExpiry: Date.now() + 360000
//                 }, { new: true, runValidators: true })
    
//         }else if(emailType === "RESET"){
//             await User.findByIdAndUpdate(userid,
//                 {
//                     forgotPasswordToken: hashedToken,
//                     forgotPasswordTokenExpiry: Date.now() + 360000
//                 })
    
//         }
//         var transport = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: "cc944eaa31ff46",
//               pass: "e5e935c4967289"
//             //   TODO : add these cred in .env file
//             }
//           });

//           const mailOptions={
//             from: 'hitesh@gmail.com',
//             to: email,
//             subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
//             html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
//             or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
//             </p>`
//           }

//           const mailresponse = await transport.sendMail
//           (mailOptions);
//           return mailresponse;

//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// }