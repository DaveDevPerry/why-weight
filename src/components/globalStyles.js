import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
	  -webkit-user-select: none;
	  -khtml-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
    width: 100vw;
	height: 100vh;
  overflow: hidden;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.bgGrey};
	font-size: 1.6rem;
	font-weight: 400;
  font-family: "Poppins";
  transition: all 200ms linear;
  width: 100vw;
	height: 100vh;
  }
  .App {
    width: 100vw;
	height: 100vh;
	width: clamp(32rem, 100vw, 100vw);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
 
  ${
		'' /* .pages{
    flex: 1;
  max-width: 42rem;
  padding: 0 1rem;
  overflow-y:auto;

  transition: all 200ms linear;
} */
	}
  }

header a {
  color: ${({ theme }) => theme.txtDarkGrey};
  text-decoration: none;
}

label, input {
  display: block;
  color: ${({ theme }) => theme.txtGrey};
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.borderGrey};
  border-radius: 4px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  border: none;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  box-sizing: border-box;
}
form button {
  background: ${({ theme }) => theme.primaryColor};
  border: 0;
  color: #fff;
  padding: 1rem;
  font-family: "Poppins";
  border-radius: 4px;
  cursor: pointer;
}
div.error {
  padding: 1rem;
  background: ${({ theme }) => theme.bgError};
  border: 1px solid ${({ theme }) => theme.error};
  color: ${({ theme }) => theme.error};
  border-radius: 4px;
}
input.error {
  border: 1px solid ${({ theme }) => theme.error};
}

.br{
  border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	${'' /* box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5); */}
}
p.dev-red{
  color: ${({ theme }) => theme.error};
  ${'' /* font-weight: bold; */}
  text-align:center;
  padding: 1rem;
  font-style: italic;
  border: 1px solid;
  margin-top: 2rem;
}
.mono-font{
  font-family: 'Roboto Mono', monospace;
}

`;
