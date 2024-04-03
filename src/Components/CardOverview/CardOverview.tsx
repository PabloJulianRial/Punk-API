import "./CardOverview.scss";
import { Beer } from "../../assets/data/types";
import { useParams } from "react-router-dom";
type CardOverviewProps = {
  beers: Beer[];
};

function CardOverview({ beers }: CardOverviewProps) {
  const { beerId } = useParams();
  const beer = beers.find((beer) => beer.id.toString() === beerId);
  if (beer == undefined) {
    return <p>couldn't find a beer with that id</p>;
  }

  return (
    <div className="overview-card">
      <h3 className="overview-card__head">{beer.name}</h3>
      <div className="overview-card__stats">
        <p className="overview-card__info--abv">Alcohol content {beer.abv}%</p>
        <p className="overview-card__info--ibu">Acidity {beer.ibu} IBU</p>
      </div>
      <div className="overview-card__content">
        <div className="overview-card__img">
          <img src={beer.image_url} alt="" />
        </div>
        <div className="overview-card__info">
          <p className="overview-card__info--tag">{beer.tagline}</p>
          <p className="overview-card__info--date">Since {beer.first_brewed}</p>
          <p className="overview-card__info--text">{beer.description}</p>

          <p className="overview-card__info--food--head">Goes with:</p>
          <p className="overview-card__info--food">{beer.food_pairing}</p>
        </div>
      </div>
    </div>
  );
}

export default CardOverview;
