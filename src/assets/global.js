const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			transition: color 0.2s ease-in, background-color 0.2s linear;
		}

		body{
			font-family: 'Nunito Sans', sans-serif;
		}

		button, input{
			cursor: pointer;
			border-radius: 4px;
		}

		ul{
			list-style: none;
		}

		a{
			text-decoration: none;
		}
`;
