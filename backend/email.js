require('dotenv').config({ path: '../.env' });
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require('path'); // Use this if you want to specify file paths

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.OAUTH_ID,
  process.env.OAUTH_SECRET,
  process.env.REDIRECT_URL
);


// Set the refresh token
oAuth2Client.setCredentials({
  refresh_token: process.env.MY_TOKEN, // Your valid refresh token
});

// Function to send email with attachment
async function sendEmail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken(); // Get a new access token

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'dej.jonas12@gmail.com', // Your Gmail address
        clientId: process.env.OAUTH_ID,
        clientSecret: process.env.OAUTH_SECRET,
        refreshToken: process.env.MY_TOKEN, //should be from oauth2
        accessToken: accessToken.token, // Use the new access token
      },
    });

    const mailOptions = {
      from: 'dej.jonas12@gmail.com', // Sender address
      to: 'dej.jonas12@gmail.com', // Recipient address
      subject: 'Test Email with Attachment', // Subject line
      text: 'Hello, this is a test email with an attachment!', // Plain text body
      attachments: [
        {
          filename: 'test.txt', // The name the file will have when received
          path: path.join(__dirname, 'test.txt'), // Path to the attachment
        },
        // You can add more attachments as needed
        // {
        //   filename: 'image.png',
        //   path: 'https://example.com/path/to/image.png' // Or a remote URL
        // }
      ],
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

// Call the sendEmail function
sendEmail();
