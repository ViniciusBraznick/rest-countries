import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 42px;
	margin-top: 42px;
	height: 50vh;

  img {
    max-width: 180px;
  }
`;

export const EmptyTextContainer = styled.article`
  text-align: center;
	color: ${({ theme }) => theme.colors.text};

  small {
    font-size: 18px;
  }
`;
