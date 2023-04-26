import React from "react";
import { Outlet,useLocation } from "react-router-dom";
function ElementNew(){
	const value=useLocation()
    console.log(value)
	return(
	<div>
	<h1>Using Outlet</h1>
	<h1>{value.state}</h1>
	<Outlet context={'blue'}/>
	</div>)
}
export default ElementNew