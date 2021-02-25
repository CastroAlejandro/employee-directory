import React from "react";
import Header from "./Header"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar";


const Wrapper = () => {
	return (
		<div className="wrapper">
			<Header/>
			<SearchBar/>
			<NavBar/>
		</div>
	);
}
 
export default Wrapper;