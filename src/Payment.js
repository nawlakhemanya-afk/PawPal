
import React from "react";

function Payment() {

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Unable to start payment");
      }

    } catch (error) {
      console.log(error);
      alert("Could not connect to payment server");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🐾 PawPal</h1>

      <h2>Support PawPal</h2>

      <p>Make a ₹500 donation to help our pets.</p>

      <button onClick={handlePayment}>
        Pay ₹500 with Stripe
      </button>
    </div>
  );
}

export default Payment;

