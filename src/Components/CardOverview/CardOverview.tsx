import "./CardOverview.scss";

type CardOverviewProps = {
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
};

function CardOverview({
  name,
  description,
  image_url,
  ibu,
  abv,
  first_brewed,
  tagline,
}: CardOverviewProps) {
  return (
    <div className="overview-card">
      <div className="overview-card__info">
        <h3 className="overview-card__info--head">{name}</h3>
        <div className="overview-card__img">
          <img src={image_url} alt="" />
        </div>
        <p className="overview-card__info--text">{description}</p>
        <p className="overview-card__info--tag">{tagline}</p>
        <p className="overview-card__info--abv">{abv}</p>
        <p className="overview-card__info--ibu">{ibu}</p>
        <p className="overview-card__info--date">{first_brewed}</p>
      </div>
    </div>
  );
}

export default CardOverview;
