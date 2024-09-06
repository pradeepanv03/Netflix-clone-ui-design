import React from "react";
import "../Footer/FooterStyle.scss";
export function Footer() {
  return (
    <section className="footer">
      <div className="footer_body">
        <div>
          <ul>
            <li>Questions? Call 000-800-040-1843</li>
          </ul>
        </div>

        <div className="enquery">
          <div>
            <ul>
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Centre</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Centre</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <button className="footer_btn">English</button>
        <div>
          <ul>
            <li>Netflix India</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
