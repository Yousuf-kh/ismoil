import "./portfolio.css";

import img1 from "../../../images/1.jpg"
import img2 from "../../../images/2.jpg"
import img3 from "../../../images/3.jpg"
import img4 from "../../../images/4.jpg"
import img5 from "../../../images/5.jpg"
import img6 from "../../../images/6.jpg"
import img7 from "../../../images/7.jpg"
import img8 from "../../../images/8.jpg"
import img9 from "../../../images/9.jpg"
import img10 from "../../../images/10.jpg"

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="prt">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>

      <div className="prt2">
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
      </div>
    </div>
  );
}

export default Portfolio;
