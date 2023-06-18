import "./footer.css";
import imaga from "../../../images/logo.png"
import telegram from "../../../images/telegram.png"
import insta from "../../../images/insta.png"
import fi from "../../../images/fi.png"
import youtube from "../../../images/youtube.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={imaga} alt="" />
        </div>

        <div className="qism-2">
          <div className="sci">
            <a href="https://instagram.com/ismoil_mahmudjonov?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img src={insta} alt="" />
            </a>
            <a href="https://t.me/ismoil_mahmudjonov" target="_blank">
              <img src={telegram} alt="" />
            </a>
            <a href="https://youtube.com/@ismoilmahmudjonov6144" target="_blank">
              <img src={youtube} alt="" />
            </a>
          </div>

          <div className="footer-aloqa">
            <p>
              Biz bilan bog'laning:
              <br />
              <span>+9989 99 821 33 91</span>
            </p>
            <img src={fi} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
