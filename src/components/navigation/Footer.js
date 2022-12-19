import "./Footer.css";
const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="f">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">About Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Contact Us</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Contribute
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="">
            <p class="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <a href="/">Deenozer</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
