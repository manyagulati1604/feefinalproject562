import React, { useState } from 'react';
import './UniquePaymentForm.css'; // Ensure you have the CSS in this file

function UniquePaymentForm() {
  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing Info:', billingInfo);
    console.log('Payment Info:', paymentInfo);
  };

  return React.createElement(
    'div',
    { className: 'unique-payment-form' },
    React.createElement(
      'div',
      { className: 'unique-header' },
      React.createElement(
        'div',
        { className: 'unique-container' },
        React.createElement(
          'div',
          { className: 'unique-left' },
          React.createElement('h3', null, 'BILLING ADDRESS'),
          React.createElement(
            'form',
            null,
            'Full name',
            React.createElement('input', {
              type: 'text',
              name: 'fullName',
              placeholder: 'Enter name',
              value: billingInfo.fullName,
              onChange: handleBillingChange
            }),
            'Email',
            React.createElement('input', {
              type: 'text',
              name: 'email',
              placeholder: 'Enter email',
              value: billingInfo.email,
              onChange: handleBillingChange
            }),
            'Address',
            React.createElement('input', {
              type: 'text',
              name: 'address',
              placeholder: 'Enter address',
              value: billingInfo.address,
              onChange: handleBillingChange
            }),
            'City',
            React.createElement('input', {
              type: 'text',
              name: 'city',
              placeholder: 'Enter City',
              value: billingInfo.city,
              onChange: handleBillingChange
            }),
            React.createElement(
              'div',
              { className: 'unique-zip' },
              React.createElement(
                'label',
                null,
                'State',
                React.createElement(
                  'select',
                  {
                    name: 'state',
                    value: billingInfo.state,
                    onChange: handleBillingChange
                  },
                  React.createElement('option', null, 'Choose State..'),
                  React.createElement('option', null, 'Punjab'),
                  React.createElement('option', null, 'Haryana'),
                  React.createElement('option', null, 'Delhi'),
                  React.createElement('option', null, 'Madhya Pradesh')
                )
              ),
              React.createElement(
                'label',
                null,
                'Pin Code',
                React.createElement('input', {
                  type: 'number',
                  name: 'zip',
                  placeholder: 'Pin Code',
                  value: billingInfo.zip,
                  onChange: handleBillingChange
                })
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'unique-right' },
          React.createElement('h3', null, 'PAYMENT'),
          React.createElement(
            'form',
            null,
            'Accepted Card',
            React.createElement('br', null),
            React.createElement('img', { src: './card1.png', width: '100', alt: 'Accepted Card 1' }),
            React.createElement('img', { src: './card2.png', width: '50', alt: 'Accepted Card 2' }),
            React.createElement('br', null),
            React.createElement('br', null),
            'Credit card number',
            React.createElement('input', {
              type: 'text',
              name: 'cardNumber',
              placeholder: 'Enter card number',
              value: paymentInfo.cardNumber,
              onChange: handlePaymentChange
            }),
            'Exp month',
            React.createElement('input', {
              type: 'text',
              name: 'expMonth',
              placeholder: 'Enter Month',
              value: paymentInfo.expMonth,
              onChange: handlePaymentChange
            }),
            React.createElement(
              'div',
              { className: 'unique-zip' },
              React.createElement(
                'label',
                null,
                'Exp year',
                React.createElement(
                  'select',
                  {
                    name: 'expYear',
                    value: paymentInfo.expYear,
                    onChange: handlePaymentChange
                  },
                  React.createElement('option', null, 'Choose Year..'),
                  React.createElement('option', null, '2022'),
                  React.createElement('option', null, '2023'),
                  React.createElement('option', null, '2024'),
                  React.createElement('option', null, '2025')
                )
              ),
              React.createElement(
                'label',
                null,
                'CVV',
                React.createElement('input', {
                  type: 'number',
                  name: 'cvv',
                  placeholder: 'CVV',
                  value: paymentInfo.cvv,
                  onChange: handlePaymentChange
                })
              )
            )
          ),
          React.createElement('input', {
            type: 'submit',
            value: 'Proceed to Checkout',
            onClick: handleSubmit
          })
        )
      )
    )
  );
}

export default UniquePaymentForm;