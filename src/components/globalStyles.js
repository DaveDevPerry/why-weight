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
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.bgGrey};
	font-size: 1.6rem;
	font-weight: 400;
  font-family: "Poppins";
  transition: all 200ms linear;
  }
  .App {
    width: 100vw;
	height: 100vh;
	width: clamp(32rem, 100vw, 100vw);
	${'' /* margin: auto; */}
	${'' /* overflow: hidden; */}
  ${'' /* border: 5px solid black; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
  ${'' /* overflow-y: auto; */}
	${'' /* position: relative; */}
  ${
		'' /* header{
    border: 2px solid blue;
  } */
	}
  .pages{
    flex: 1;
    ${'' /* border: 2px solid red; */}
  max-width: 42rem;
  padding: 0 1rem;
  overflow-y:auto;
  ${'' /* overflow: hidden; */}
  ${'' /* overflow-y: auto; */}
  ${'' /* margin-bottom: 1rem; */}
  ${'' /* margin: 0 auto; */}
  transition: all 200ms linear;
}
  }
  ${
		'' /* header {
  background: ${({ theme }) => theme.white};
}
header .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
} */
	}
header a {
  color: ${({ theme }) => theme.txtDarkGrey};
  text-decoration: none;
}
${
	'' /* .pages{
  max-width: 1400px;
  padding: 20px;
  margin: 0 auto;
} */
}

${
	'' /* .home {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
} */
}

${
	'' /* .create{
  color: ${({ theme }) => theme.txtGrey};
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  margin: 0 auto 10px auto;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
}
.create p.form-title{
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
  margin-bottom: 5px;
  font-size: 0.9em;
  text-align: center;
  margin-top: 10px;
}
.create h3{
  text-align: center;
  margin: 0;
}
.create .input-wrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
}
.create .input-wrapper label{
  font-size: 0.9em;
  text-align: right;
}
.create .input-wrapper #input-number{
  padding: 8px 10px;
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.txtGrey};
} */
}

${
	'' /* .weight-details {
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  margin: 5px auto;
  padding: 10px 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 4rem;
}
.weight-details h4 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: ${({ theme }) => theme.primaryColor};
}
.weight-details p {
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.txtGrey};
}
.weight-details span {
  position: absolute;
  top: 12px;
  right: 20px;
  cursor: pointer;
  background: ${({ theme }) => theme.bgGrey};
  padding: 6px;
  border-radius: 50%;
  color: ${({ theme }) => theme.txtDarkGrey};
} */
}
${
	'' /* .target-details {
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  margin: 10px auto;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 4rem;
}
.target-details h4 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: ${({ theme }) => theme.primaryColor};
}
.target-details p {
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.txtGrey};
}
.target-details span {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background: ${({ theme }) => theme.bgGrey};
  padding: 6px;
  border-radius: 50%;
  color: ${({ theme }) => theme.txtDarkGrey};
} */
}
${
	'' /* .progress-widget{
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  margin: 0 auto 10px auto;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
 
  display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex: 1;
}
.progress-widget .progress-bar-container{
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  flex: 1;
}
.progress-widget .progress-bar-container p{
  margin: 0;
}
.progress-widget .progress-bar-container progress[value] {
  width: 100%;
  appearance: none;
}
::-webkit-progress-bar {
  height: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgGrey};
  border: 1px solid ${({ theme }) => theme.txtDarkGrey};
  width: 100%;
}
 ::-webkit-progress-value {
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primaryColor};
}
.wrapper{
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
}
.wrapper p{
  text-align: center;
  margin: 0;
}
.wrapper p.figure{
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme }) => theme.txtGrey};
}
.wrapper p.stat-name{
  margin: 0;
  font-size: 0.8em;
  color: ${({ theme }) => theme.txtGrey};
  text-transform: uppercase;
} */
}
${
	'' /* p.weights-list{
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
  margin-bottom: 5px;
  font-size: 0.9em;
} */
}
${
	'' /* .countdown-widget{
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  margin: 0 auto 10px auto;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.countdown-widget p{
  margin: 0;
  color: ${({ theme }) => theme.txtGrey};
} */
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
  ${'' /* color: ${({ theme }) => theme.white}; */}
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
  ${'' /* margin: 20px 0; */}
}
input.error {
  border: 1px solid ${({ theme }) => theme.error};
}

${
	'' /* nav {
  display: flex;
  align-items: center;
}
nav a, nav button {
  margin-left: 10px;
}
nav button {
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primaryColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  padding: 6px 10px;
  border-radius: 4px;
  font-family: "Poppins";
  cursor: pointer;
  font-size: 1em;
} */
}

${
	'' /* form.signup, form.login {
  max-width: 400px;
  margin: 40px auto;
  padding: 2rem;
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
} */
}
`;
