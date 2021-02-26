import React from "react"
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import EmployeeTable from "./Components/EmployeeTable"
import API from './Utils/API'
import './App.css';

class App extends React.Component {
	state = {
		employees: []
	}

	componentDidMount() {
		API.getUsers()
		.then(res => {
			this.setState({ employees: res.data.results })
			console.log(res)
		})
			.catch(err => console.error(err.message))
	}

	render() {
		return (
			<Wrapper>
				<Header />
				<SearchBar />
				<br/>
				<EmployeeTable employees={this.state.employees} />
			</Wrapper>
		);
	}
}

export default App;

// class app extends React.Component {
// 	state = {
// 		employees: []
// 	}

// 	API.getUsers()
// 		.then(res => {
// 			this.setState({employes: res.data.results})
// 		})


// 	render(){
// 		return(

// 		)
// 	}
// }