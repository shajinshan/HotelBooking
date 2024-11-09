// import React from "react";
// import { useRazorpay } from "react-razorpay";

// const PaymentComponent = () => {
//   const Razorpay = useRazorpay();

//   const handlePayment = () => {
//     const options = {
//       key: "YOUR_RAZORPAY_KEY",
//       amount: 50000, // Amount in paise (500.00 INR)
//       currency: "INR",
//       name: "Test Company",
//       description: "Test Transaction",
//       order_id: "order_9A33XWu170gUtm", // Generate order_id on your server
//       handler: (response) => {
//         console.log(response);
//         alert("Payment Successful!");
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const razorpayInstance = new Razorpay(options);
//     razorpayInstance.open();
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentComponent;
