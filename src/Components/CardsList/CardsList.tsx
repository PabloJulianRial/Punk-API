import "./CardsList.scss";
import Card from "../Card/Card";
import "../../assets/data/beers";
import "../../assets/data/types";
import beers from "../../assets/data/beers";
import { Beer } from "../../assets/data/types";

type CardsListProps = {
  searchTerm: string;
  checkedBoxes: string[];
};

function CardsList({ searchTerm, checkedBoxes }: CardsListProps) {
  let beersByCheckBox: Beer[] = [];
  beersByCheckBox = [...beers];

  if (checkedBoxes.includes("acidity")) {
    beersByCheckBox = beersByCheckBox.filter((beer) => {
      return beer.ph <= 4;
    });
  }
  if (checkedBoxes.includes("classic")) {
    beersByCheckBox = beersByCheckBox.filter((beer) => {
      return Number(beer.first_brewed.slice(-4)) >= 2010;
    });
  }
  if (checkedBoxes.includes("abv")) {
    beersByCheckBox = beersByCheckBox.filter((beer) => {
      return beer.abv >= 6;
    });
  }
  console.log(beersByCheckBox);

  const filteredBeers = beersByCheckBox.filter((beer) => {
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
