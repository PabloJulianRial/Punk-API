import "./Card.scss";

type CardProps = {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
};

function Card({ name, description, image_url }: CardProps) {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__info">
          <h3 className="card__info--head">{name}</h3>
          <p className="card__info--text">{description}</p>
        </div>
        <div className="card__img">
          <img src={image_url} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
