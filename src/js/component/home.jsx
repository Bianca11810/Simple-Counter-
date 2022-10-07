import React from "react";
import Count from './Count';

//create your first component
const Home = () => {
	let [counter, setCounter] = React.useState(0)
	React.useEffect(() => {
		setInterval(() => {
			setCounter(counter++)
			// console.log(counter);
		},1000);
	},[])
	


	return (
		<div className="container d-flex">
			<Count orange = { Math.floor(counter / 100000) }/>
			<Count orange = { Math.floor(counter / 10000) }/>
			<Count orange = { Math.floor(counter / 1000) }/>
			<Count orange = { Math.floor(counter / 100)  }/>
			<Count orange = { Math.floor(counter / 10) }/>
			<Count orange = { Math.floor(counter / 1) }/>

		</div>
	);
};

export default Home;