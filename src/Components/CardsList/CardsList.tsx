import "./CardsList.scss";
import Card from "../Card/Card";
import "../../assets/data/beers";
import "../../assets/data/types";
import beers from "../../assets/data/beers";

type CardsListProps = {
  searchTerm: string;
};

function CardsList({ searchTerm }: CardsListProps) {
  const filteredBeers = beers.filter((beer) => {
    return beer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="cards-list">
      {filteredBeers.map((beer) => {
        return (
          <Card
            key={beer.id}
            name={beer.name}
            tagline={beer.tagline}
            description={beer.description}
            first_brewed={beer.first_brewed}
            abv={beer.abv}
            ibu={beer.ibu}
            image_url={beer.image_url}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
