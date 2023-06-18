import "./main.css";

import clock from "../../../images/fi_clock.png"
import vector from "../../../images/vector.png"

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-wrapper">
          <div className="main-sana">
            <p className="kunlar">20-21-22-IYUN</p>
            <div className="online">
              <p>
                20:00 <img src={clock} />
              </p>
              <button>ONLINE</button>
            </div>
          </div>

          <div className="main-text">
            <h1>Grafik Dizayn</h1>
            <h3>SOHASIGA KIRISH</h3>
            <div className="main-mini-text">
              <img src={vector} />
              <div className="main-mini-text-p">
                <p>Ismoil Mahmudjonov</p>
                <p>
                  <b>Bepul Master-Klass</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
