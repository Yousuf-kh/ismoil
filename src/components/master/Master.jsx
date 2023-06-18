import "./master.css";

function Master() {
  return (
    <div>
      <div className="master-wrapper">
        <div className="master-container">
          <div className="darslar">
            <div className="dars-title">3 kunlik Master-Klassda siz:</div>
            <div className="soha">
              <img src="./images/pocket.png" />
              <p>Grafik dizayn qanday sohaligini tushunib olasiz;</p>
            </div>
            <div className="soha">
              <img src="./images/pocket.png" />
              <p>Fotoshopda ilk ishlaringizni qila olasiz;</p>
            </div>
            <div className="soha">
              <img src="./images/pocket.png" />
              <p>
                Grafik dizayn orqali daromad qilish yo’llarini o’rganib olasiz
              </p>
            </div>
          </div>
 
          <div className="narx">
            <h3>
              $ <s>300.000</s> SO'M
            </h3>
            <a href="https://t.me/ismoil_mahmudjonov" target="_blank">ISHTROK ETISH</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Master;
