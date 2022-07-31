import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	from{
		transform: rotate(0);
	}

	to{
		transform: rotate(360deg);
	}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: red;

  background-color: rgba(246, 245, 252, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;

	svg{
		animation: ${rotate} 2s linear infinite;
	}
`;
