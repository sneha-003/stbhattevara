import React from 'react';

const Payment = () => {
  return (
    <div>
      <h3>Payment</h3>
      <form>
        <div>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input type="text" name="expiryDate" />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" />
        </div>
      </form>
    </div>
  );
}

export default Payment;
