import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;

  @media (max-width: 375px) {
    padding-bottom: 72px;
  }
`;

export const ButtonBack = styled.a`
  width: 140px;
  height: 40px;
  margin: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const CountryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 120px;

  aside {
    width: 100%;
    height: 100%;
    max-width: 560px;
    max-height: 400px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const CountryDataContainer = styled.article`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CountryDataList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.text};

  ul {
    flex: 1;
    min-width: 180px;
    li {
      margin-bottom: 4px;
    }
  }
`;

export const BorderCountryContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  p {
    min-width: 8em;
    flex: 0.3;
  }

  ul {
    display: flex;
    gap: 8px;
    flex: 1;
    flex-wrap: wrap;

    li {
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      a {
        color: ${({ theme }) => theme.colors.text};
        padding: 2px 12px;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.colors.backgroundHeader};
      }
    }
  }
`;
