import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
class Pay extends Component {
  onToken = token => {
    console.log(token);
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`THX FOR DA DOLLARZ`);
      });
    });
  };
  // ...
  render() {
    return (
      // ...
      <StripeCheckout
        name="Niro Shop"
        description="some text"
        token={this.onToken}
        stripeKey="pk_test_yYg0mtIomH3mM3TIixAmQsK8005vBiT2Yb"
      />
    );
  }
}
export default Pay;
