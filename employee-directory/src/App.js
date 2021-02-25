import './App.css';
import Wrapper from "./Components/Wrapper";
import Main from "./Components/Main"
import Header from "./Components/Header"

function App() {
  return (
    <div className="class">
		<Wrapper>
			<Header/>
			<Main/>
		</Wrapper>
	</div>
  );
}

export default App;
