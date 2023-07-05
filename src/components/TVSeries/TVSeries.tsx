import { ItemsContainer } from "../Reccomended/Home.styled";
import Item from "../Reccomended/Item";

// import data from "../../data.json";

interface Info {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
interface Props {
  info: Info[];
  handler: (string: string) => void;
}

export default function TVSeries(props: Props) {
  const moviesArr = props.info.filter((elem) => elem.category === "TV Series");

  return (
    <>
      <h1>TV Series</h1>
      <ItemsContainer>
        {moviesArr.map((elem, index) => (
          <Item
            src={elem.thumbnail.regular.small}
            key={index}
            title={elem.title}
            year={elem.year}
            category={elem.category}
            rating={elem.rating}
            bookmarked={elem.isBookmarked}
            handler={props.handler}
          />
        ))}
      </ItemsContainer>
    </>
  );
}
