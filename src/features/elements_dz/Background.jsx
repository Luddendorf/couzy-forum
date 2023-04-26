import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter,Routes,Route, useParams, useOutletContext} from 'react-router-dom';

function Background(props){
	const colorOne=useOutletContext()
	const colorSpecified=useParams().color || colorOne ;
	const styles={
		backgroundColor:colorSpecified,width:"100px",height:"100px"
	}
	return (
    <div className="Background">
	
     <div style={styles}>
		</div>
    </div>
  );
}

export default Background;