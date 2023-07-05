import styled from "styled-components";

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

export default function Trending(props: Props) {
  const trending = props.info.filter((elem) => elem.isTrending);
  return (
    <TrendingContainer>
      {trending.map((elem, index) => (
        <TrendingItem
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
    </TrendingContainer>
  );
}

const TrendingContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  gap: 15px;
  margin: 16px;
`;

const TrendingItem = styled(Item)`
  img {
    width: 240px;
    height: 140px;
  }

  @media screen and (min-width: 755px) {
    img {
      width: 470px;
      height: 240px;
    }
  }
`;
