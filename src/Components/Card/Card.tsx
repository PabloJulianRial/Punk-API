import "./Card.scss";

type CardProps = {
  name: string;
  tagline: string;
  first_brewed: string;

  image_url: string;
  abv: number;
  ibu: number;
};

function Card({ name, image_url, tagline, abv, ibu }: CardProps) {
  let abvClass: string;
  let ibuClass: string;
  if (abv >= 10) {
    abvClass = "red";
  } else if (abv <= 4) {
    abvClass = "green";
  } else {
    abvClass = "yellow";
  }

  if (ibu >= 80) {
    ibuClass = "red";
  } else if (ibu <= 40) {
    ibuClass = "green";
  } else {
    ibuClass = "yellow";
  }
  const abvClasses = `card__info--abv ${abvClass}`;
  const ibuClasses = `card__info--ibu ${ibuClass}`;
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__info">
          <h3 className="card__info--head">{name}</h3>
          <p className="card__info--tag">{tagline}</p>
          <p className={abvClasses}>{abv}% ABV</p>
          <p className={ibuClasses}>{ibu} IBU</p>
          <p></p>
        </div>
        <div className="card__img">
          <img src={image_url} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
