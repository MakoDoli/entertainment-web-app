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

export default function Bookmarks(props: Props) {
  const bookmarksArr = props.info.filter((elem) => {
    if (elem.isBookmarked) return elem;
  });

  return (
    <>
      <h1>Bookmarked movies</h1>
      <ItemsContainer>
        {bookmarksArr.map((elem, index) => (
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
