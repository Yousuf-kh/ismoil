import "./ega.css";

import check from "../../../images/u_presentation-check.png"
import circle from '../../../images/u_check-circle.png'
import bonus from "../../../images/1614574146_2-p-podarok-na-belom-fone-2 1.png"

function Ega() {
  return (
    <div className="ega">
      <div className="ega-container">
        <div className="ega-haqida"> 
          <div className="ega-logo">
            <img src={check} />
            <div className="line"> 
              <hr />
            </div>
          </div>
          <h1>3 kunlik Master-Klassda</h1>
          <h2>siz quyidagi bilimlarga ega bo’lasiz:</h2>
        </div>

        <div className="ega-bolasiz">
          <div className="ega-card">
            <img src={circle} alt="" />
            <p>Grafik dizayner bo’lish uchun nimalarni bilish kerak</p>
          </div>
          <div className="ega-card">
            <img src={circle} alt="" /> 
            <p>Fotoshopdagi boshlang’ich barcha elementlarni qo’llash</p>
          </div>
          <div className="ega-card">
            <img src={circle} alt="" />
            <p>Rasmlarni PNG holatga o’tkazish (Orqa fonni kesish)</p>
          </div>
        </div>

        <div className="ega-bolasiz">
          <div className="ega-card bonus">
            <img src={circle} alt="" />
              <p>Bonus</p>
              <img src={bonus} alt=""/>
          </div>
          <div className="ega-card">
            <img src={circle} alt="" />
            <p>O’zingizni go’yoki Dubayda turgandek qilib dizayn qilish</p>
          </div>
          <div className="ega-card">
            <div className="ega-narx">
              <h3>
                $ <s>300.000</s> SO'M
              </h3>
              <a href="https://t.me/ismoil_mahmudjonov" target="_blank">ISHTROK ETISH</a>
            </div>
          </div>
        </div>

        <div className="bajarilgan-ish">
          <div className="ish-logo">
            <img src="../../../images/u_palette.png" alt="" />
            <hr />
          </div>
          <div className="ish-title">
            <h2>Bajarilgan loyihalardan misollar:</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ega;
