import React from 'react';
import "./Home.css";

function App() {
  return (
    <div className="App" style={{display: "flex"  , flexDirection: "column"}}>
     <Header />
     <Home />
    </div>
  );
}

export const Header = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "1rem",
      borderBottom: "1px solid #ccc"
    }}>
      <h1>iRecruitmentHub</h1>
    </div>
  );
}

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-heading">
        Unlock Global Tech Talent While Cutting Hiring Costs
      </div>
      <div className="home-text">
        At iRecruitmentHub, we specialize in connecting businesses with top-tier
        software engineers worldwide, all while reducing recruitment costs. By
        tapping into global talent pools, we provide a cost-effective,
        high-quality alternative to traditional hiring models.
      </div>
      <div className="home-section-title">Why Choose Us?</div>
      <ul className="home-list">
        <li className="home-list-item">
          <strong>Affordable Expertise:</strong> Our global reach allows us to
          offer access to skilled engineers at competitive rates, maximizing
          your budget without compromising on quality.
        </li>
        <li className="home-list-item">
          <strong>Efficient Hiring Process:</strong> Save time and resources
          with our streamlined recruitment process, designed to identify,
          evaluate, and onboard the right talent for your specific needs.
        </li>
        <li className="home-list-item">
          <strong>Scalable Solutions:</strong> Whether you need a single
          developer or an entire team, we provide scalable staffing options to
          grow with your business.
        </li>
      </ul>
      <div className="home-partner-text">
        Partner with iRecruitmentHub and see how affordable international
        recruitment can enhance your tech capabilities and drive your business
        forward.
      </div>

      <div className="home-partner-text">
        Feel free to book a call
        <a
          href="https://calendly.com/irecruitmenthub/moreinformation"
          className="home-cta"
        >
          here
        </a>
        or email us:
      </div>
      <a href="mailto:hello@recruitmenthub.com" className="home-email">
        hello@recruitmenthub.com
      </a>
    </div>
  );
};

export default App;
