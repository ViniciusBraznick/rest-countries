import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
`;

export const HeaderContent = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
	flex-wrap: wrap;
  margin: auto;

  h1 {
    font-size: clamp(14px, 100vw, 24px);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ToggleTheme = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;

  svg {
    width: 18px;
  }

  p {
    text-transform: capitalize;
  }
`;
