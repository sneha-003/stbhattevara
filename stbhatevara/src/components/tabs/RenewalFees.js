import React from 'react';

const RenewalFees = () => {
  return (
    <div>
      <h3>Renewal Fees</h3>
      <form>
        <div>
          <label>Renewal Amount:</label>
          <input type="text" name="renewalAmount" />
        </div>
        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default RenewalFees;
