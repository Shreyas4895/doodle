import { cardData } from "../utils/mockData";
import "./card.css";

const Card = () => {
  return (
    <div className="main">
      <div className="topContainer">
        <div>
          <h2>Leadership</h2>
        </div>
        <div className="heading">
          <div className="effect">
            <h3 className="boldText">Leadership</h3>
          </div>
        </div>
      </div>
      <div className="container">
        {cardData.map((item) => (
          <div
            className="leader"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className="content">
              <div className="title">
                <h3>{item.name}</h3>
                <h5>{item.title}</h5>
              </div>
              <div className="separator"></div>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
