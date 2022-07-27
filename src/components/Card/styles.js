import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 264px;
  border-radius: 6px;
  padding-bottom: 46px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  header {
    height: 180px;

    img {
      width: 100%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

export const CardData = styled.div`
  padding-left: 24px;
`;

export const CountryName = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  margin-top: 28px;
`;

export const DataList = styled.ul`
  li {
    color: ${({ theme }) => theme.colors.text};

    b {
      font-weight: 600;
    }
  }
`;
