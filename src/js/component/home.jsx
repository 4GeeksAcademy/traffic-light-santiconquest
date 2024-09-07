import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//hook 
	const [color,setColor]=useState("");
	
	return (
		<>
			<div className="traffic d-inline-block bg-dark ms-45%">
				<div 
					onClick={()=>setColor("red")}
					className={
						"circle red bg-danger"+( (color==="red")? " selected" : "")
					}
				></div>
				<div onClick={()=>setColor("yellow")}
				className={
					"circle yellow bg-warning"+( (color==="yellow")? " selected" : "")
				}></div>
				<div onClick={()=>setColor("green")}
				className={
					"circle green bg-success"+( (color==="green")? " selected" : "")
				}></div>
			</div>
		</>
	);
};

export default Home;
