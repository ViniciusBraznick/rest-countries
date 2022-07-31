const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			transition: color 0.1s ease-in, background-color 0.1s linear;
		}

		body{
			font-family: 'Nunito Sans', sans-serif;
			background-color: ${({ theme }) => theme.colors.backgroundBody};
		}

		button, input{
			cursor: pointer;
			border-radius: 4px;
			font-family: inherit;
		}

		ul{
			list-style: none;
		}

		a{
			text-decoration: none;
		}
`;
