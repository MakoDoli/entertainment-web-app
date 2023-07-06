import styled from "styled-components";

import TrendingItem from "./TrendItem";

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
    <>
      <h1>Trending</h1>
      <TrendingContainer>
        {trending.map((elem, index) => (
          <TrendingItem
            src={elem.thumbnail.trending?.small}
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
    </>
  );
}

const TrendingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  gap: 15px;
  margin: 16px;
`;
