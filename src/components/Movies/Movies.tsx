import { ItemsContainer } from "../Reccomended/Home.styled";
import Item from "../Reccomended/Item";

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

export default function Movies(props: Props) {
  const moviesArr = props.info.filter((elem) => elem.category === "Movie");
  console.log(props.info);

  return (
    <>
      <h1>Movies</h1>
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
