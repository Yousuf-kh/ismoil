import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src="../../../images/logo.png" alt="" />
        </div>

        <div className="qism-2">
          <div className="sci">
            <a href="https://instagram.com/ismoil_mahmudjonov?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img src="../../../images/insta.png" alt="" />
            </a>
            <a href="https://t.me/ismoil_mahmudjonov" target="_blank">
              <img src="../../../images/telegram.png" alt="" />
            </a>
            <a href="https://youtube.com/@ismoilmahmudjonov6144" target="_blank">
              <img src="../../../images/youtube.png" alt="" />
            </a>
          </div>

          <div className="footer-aloqa">
            <p>
              Biz bilan bog'laning:
              <br />
              <span>+9989 99 821 33 91</span>
            </p>
            <img src="../../../images/fi.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
