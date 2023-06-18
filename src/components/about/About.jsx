import "./about.css";

import receipt from "../../../images/receipt.png"
import heart from "../../../images/u_comment-heart.png"
import comparison from "../../../images/u_comparison.png"
import edit from "../../../images/fi_edit-3.png"

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="haqida">
          <div className="haqida-logo">
            <img src={receipt} />
            <div className="line">
              <hr />
            </div>
          </div>
          <h1>Ismoil Mahmudjonov</h1>
          <h2>HAQIDA</h2>
        </div>

        <div className="about-cards">
          <div className="about-card">
              <img src={heart} alt=""/>
            Grafik dizayn sohasida 120 dan oshiq <b>muvaffaqiyatli</b>
            loyihalar.
          </div>
          <div className="about-card">
              <img src={comparison} alt=""/>
            Grafik dizayn sohasida <br /> <b>4 yillik tajriba</b>
          </div>
          <div className="about-card">
              <img src={edit} alt=""/>
            10 dan ortiq <b>Logo</b>lar muallifi
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
