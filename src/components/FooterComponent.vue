<template>
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Dhivakar. All rights reserved.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #f8f9fa;
    padding: 0px 0;
    border-top: 1px solid #e7e7e7;
  }
  
  .footer-top {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: left;
  }
  
  .footer-section h4 {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .footer-section ul li a {
    color: #333;
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    text-align: center;
    padding: 15px;
    font-size: 14px;
    color: #888;
    background-color: #f1f1f1;
    border-top: 1px solid #ddd;
  }
  
  .newsletter-form {
    display: flex;
  }
  
  .newsletter-form input {
    padding: 8px;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  
  .newsletter-form button {
    padding: 8px 16px;
    background-color: #28a745;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .newsletter-form button:hover {
    background-color: #218838;
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
  }
  
  .social-links li {
    margin-bottom: 10px;
  }
  
  .social-links i {
    margin-right: 8px;
  }
  </style>
  