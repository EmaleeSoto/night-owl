import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer class="footer">
      <div className="footer__navigationContainer">
        <div className="footer__legal">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
            <li>
              <a href="#">Intellectual Property</a>
            </li>
          </ul>
        </div>
        <div class="footer__navList">
          <h5>Nav</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h5>Social Media</h5>
          <ul>
            <li>
              <a>
                <img
                  src={require("../assets/logos/twitter.png")}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src={require("../assets/logos/instagram.png")}
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a>
                <img src={require("../assets/logos/tiktok.png")} alt="TikTok" />
              </a>
            </li>
            <li>
              <a>
                <img
                  src={require("../assets/logos/facebook.png")}
                  alt="Facebook"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="footer__content">
        <div class="footer__logo">
          <h2>Get the app!</h2>
          <div className="footer__logo__mobileAppLogo">
            <img src={require("../assets/logos/mobile-logos.png")} />
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2023 Night Owl. All rights reserved.</p>
      </div>
    </footer>
  );
}
