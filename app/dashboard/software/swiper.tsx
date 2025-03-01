import React from 'react';
import './software.css'; // Import the external CSS file

const Slider: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      {/* Left (Sticky) Section */}
      <div className="left-fixed">
      <div className="content">
        <h2>
        <span className="relative z-50 text-transparent bg-clip-text bg-gradient-to-r from-[#b23ed5] to-[#AA55B5]">Unique </span>Benefits</h2>
        <p>Discover 6 unique benefits of choosing Googenix.</p>
      </div>
</div>
      {/* Right (Scrollable) Section */}
      <div className="right-scroll">
        <div className="cards">
          {/* Card 1 */}
          <div className="cardslid">
            <h3>Customizable &amp; Whitelabel</h3>
            
            <p>
              A whitelabel solution is a ready-to-use software suite that with 
              little, over-the-top customizations and branding becomes a 
              part of your business identity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="cardslid">
            <h3>Deploy on a Server of Choice</h3>
            
            <p>
              We help you deploy the solution on the server of your choice 
              whether shared, hosted or cloud. In case you don’t have 
              access to a server, we can deploy on ours for a nominal fee.
            </p>
          </div>

          {/* Card 3 */}
          <div className="cardslid">
            <h3>Multiple Payment Gateways</h3>
            
            <p>
              Whether you want to integrate our recommended Stripe, 
              Uber’s Braintree, the very popular PayPal, or a payment 
              gateway of choice, the integration is uncomplicated.
            </p>
          </div>

          {/* Card 4 */}
          <div className="cardslid">
            <h3>Scalable and Robust</h3>
            
            <p>
              What started with a handful of drivers and few hundred users 
              will soon grow to include hundreds of drivers and thousands 
              of users in many cities. Our solution is scalable.
            </p>
          </div>

          {/* Card 5 */}
          <div className="cardslid">
            <h3>Various Support Options</h3>
            
            <p>
              At all times, you must support your drivers and customers or 
              you risk losing them. Likewise, as a client, we are at your 
              back all the times, dusk to dawn.
            </p>
          </div>

          {/* Card 6 */}
          <div className="cardslid">
            <h3>Fastest Time to Market</h3>
            
            <p>
              As the base solution is ready to use, we can with minimum 
              modifications, almost zero coding, over-the-top 
              customizations can deliver the solution to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
