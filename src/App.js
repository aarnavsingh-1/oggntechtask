import React, { useState } from 'react';
import './App.css';

function App() {
  const [address, setAddress] = useState('Your Address Here');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [selectedBank, setSelectedBank] = useState('centralBank');
  const [upiId, setUpiId] = useState('');

  const handleEditAddress = () => {
    const newAddress = prompt('Enter your new address:');
    if (newAddress) {
      setAddress(newAddress);
    }
  };
  

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    
    alert(' Successful!');
  };
  
  const handleCashOnDeliverySubmit = () => {
   
    alert('Order placed for Cash on Delivery!');
  };

  return (
    <div className="container">
      <div className="header">
        <p className="name">Name: <span className="name">Aarnav</span></p>
        <p className="details">Address: <span className="address">{address}</span> <button className="edit-button" onClick={handleEditAddress}>Edit</button></p>
      </div>

      <h2>Select a Payment Method</h2>

      <div className="payment-option">
        <input type="radio" name="paymentMethod" id="card" value="card" onChange={handlePaymentMethodChange} />
        <label htmlFor="card">Credit or Debit Card</label>
      </div>

      <div className="payment-option">
        <input type="radio" name="paymentMethod" id="netBanking" value="netBanking" onChange={handlePaymentMethodChange} />
        <label htmlFor="netBanking">Net Banking</label>
      </div>

      <div className="payment-option">
        <input type="radio" name="paymentMethod" id="upi" value="upi" onChange={handlePaymentMethodChange} />
        <label htmlFor="upi">Other UPI</label>
        {paymentMethod === 'upi' && (
          <div>
            <label htmlFor="upiId">Enter UPI ID:</label>
            <input type="text" id="upiId" name="upiId" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
          </div>
        )}
      </div>

      <div className="payment-option">
        <input type="radio" name="paymentMethod" id="cashOnDelivery" value="cashOnDelivery" onChange={handlePaymentMethodChange} />
        <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        {paymentMethod === 'cashOnDelivery' && (
          <button className="payment-button"onClick={handleCashOnDeliverySubmit}>Proceed</button>
        )}
      </div>

      {paymentMethod && paymentMethod !== 'cashOnDelivery' && (
        <div className="payment-details">
          <h2>Enter Payment Details</h2>
          <form onSubmit={handlePaymentSubmit}>
          {paymentMethod === 'card' && (
              <div>
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                <label htmlFor="expDate">Expiration Date:</label>
                <input type="text" id="expDate" name="expDate" placeholder="MM/YY" value={expDate} onChange={(e) => setExpDate(e.target.value)} />
                <label htmlFor="cardName">Name on Card:</label>
                <input type="text" id="cardName" name="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
              </div>
            )}

            {paymentMethod === 'netBanking' && (
              <div>
                <label htmlFor="bank">Select Bank:</label>
                <select id="bank" name="bank" value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}>
                  <option value="centralBank">Central Bank</option>
                  <option value="sbi">SBI</option>
                  <option value="bankOfMaharashtra">Bank of Maharashtra</option>
                  <option value="indianBank">Indian Bank</option>
                
                </select>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <label htmlFor="upiId">UPI ID:</label>
                <input type="text" id="upiId" name="upiId" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
              </div>
            )}


            <button className="payment-button" type="submit">Proceed</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
