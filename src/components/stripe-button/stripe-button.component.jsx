import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_BMvThTG5dUwmX45UbhzBUGHo00IvhZZ1Ok';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
        label='Pay Now'
        name = 'ecom'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabe='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;