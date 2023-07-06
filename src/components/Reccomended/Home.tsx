import { ItemsContainer } from "./Home.styled";
import Item from "./Item";
import Trending from "../Trending/Trending";

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

export default function Home(props: Props) {
  return (
    <>
      <Trending info={props.info} handler={props.handler} />
      <h1>Reccomended for you</h1>
      <ItemsContainer>
        {props.info.map((elem, index) => (
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
