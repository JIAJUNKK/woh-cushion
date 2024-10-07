import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>TianYe Cushion</h3>
        <p>15-kawasan Perindustrian, 27000, Jerantut, Pahang</p>

        <div className="contact-image-container">
          <img src="/whatsapp.svg"></img>  
          <div className="vertical-line">&#8203;</div>
          <img src="/phone.svg"></img>
          <p>0199881901</p>

        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TianYe Cushion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
