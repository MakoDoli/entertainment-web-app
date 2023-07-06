import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 16px;
  max-width: 1170px;
  @media screen and (min-width: 755px) {
    gap: 30px;
  }
  @media screen and (min-width: 1050px) {
    gap: 16px;
  }
`;
