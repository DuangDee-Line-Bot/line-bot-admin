require("dotenv").config();

let globalOtp = null;
let otpLength = 0;

exports.fetchOTP = async () => {
  try {
    const response = await fetch(process.env.API_URL + "/api/otp"); // Replace with your API URL
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    otpLength = data.length;
    return data;
  } catch (error) {
    console.error("Error fetching otp:", error);
  }
};
exports.getOTPLenghth = async () => {
  return otpLength;
};
