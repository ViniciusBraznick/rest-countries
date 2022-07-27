import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
  margin-top: 48px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InputSearch = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;

  input {
    width: 100%;
    height: 56px;
    max-width: 480px;
    padding-left: 74px;
    border: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundHeader};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  label {
    width: 74px;
    position: absolute;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

export const SelectSearch = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  select {
    width: 100%;
    max-width: 200px;
    height: 56px;
    width: 200px;
  }
`;

export const CardContainer = styled.section`
  margin-top: 50px;
  display: grid;
  grid-gap: 72px;
  grid-template-columns: repeat(auto-fit, 264px);

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
