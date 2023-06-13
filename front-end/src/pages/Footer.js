import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__logo">
          {/* <!-- Your logo or brand name here --> */}
          <h2>Your Brand</h2>
        </div>
        <nav class="footer__navigation">
          <ul class="footer__nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="footer__social-icons">
          {/* <!-- Add your social media icons here --> */}
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2023 Night Owl. All rights reserved.</p>
      </div>
    </footer>
  );
}
