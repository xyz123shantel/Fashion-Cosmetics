import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-and-conditions container text-center mt-5 bg-info p-4 rounded text-dark">
      <h1>Terms and Conditions</h1>

      <section>
        <h2>1. Appointments</h2>
        <ul>
          <li>Appointments are recommended to ensure availability. Walk-ins are welcome based on availability.</li>
          <li>A deposit may be required to secure certain services (e.g., hair coloring, bridal packages).</li>
          <li>Clients must arrive on time as agreed. When one arrives later than expected, another client will take over.</li>
        </ul>
      </section>

      <section>
        <h2>2. Payments</h2>
        <ul>
          <li>We accept cash, major credit/debit cards, and mobile payments.</li>
          <li>Prices are subject to change without notice but will be confirmed during booking.</li>
          <li>All payments are due at the time of service.</li>
        </ul>
      </section>

      <section>
        <h2>3. Refunds</h2>
        <ul>
          <li>Services are non-refundable. If you are unsatisfied, please contact us within 48 hours to discuss a resolution.</li>
          <li>Retail products may be exchanged or returned within 7 days if unopened and in original condition.</li>
        </ul>
      </section>

      <section>
        <h2>4. Health & Safety</h2>
        <ul>
          <li>Please inform us of any allergies, sensitivities, or medical conditions before your appointment.</li>
          <li>We reserve the right to refuse service to anyone with a contagious condition or who is under the influence of drugs or alcohol.</li>
        </ul>
      </section>

      <section>
        <h2>5. Children & Guests</h2>
        <ul>
          <li>Children under 12 must be supervised at all times.</li>
          <li>Due to limited space and safety concerns, only clients receiving services are allowed in service areas.</li>
        </ul>
      </section>

      <section>
        <h2>6. Personal Belongings</h2>
        <ul>
          <li>We are not responsible for lost or damaged personal items.</li>
        </ul>
      </section>

      <section>
        <h2>8. Conduct</h2>
        <ul>
          <li>Disrespectful or abusive behavior toward staff or other clients will not be tolerated and may result in immediate termination of services.</li>
        </ul>
      </section>

      {/* Back to Home Button */}
      <button
        className="btn btn-dark mt-4"
        onClick={() => navigate('/')}
      >
        Go Back
      </button>
    </div>
  );
};

export default TermsAndConditions;
