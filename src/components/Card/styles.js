import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 264px;
  border-radius: 6px;
  padding-bottom: 46px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  header {
    height: 11rem;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
  }
`;

export const CardData = styled.div`
  padding: 0 24px;
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
