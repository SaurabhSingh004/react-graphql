import React,{useState} from "react"
import { useQuery } from '@apollo/react-hooks'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from "apollo-boost"
import {CountrySelect} from "./CountrySelect"
import "../App.css"
const GET_CONTINENTS = gql`{ 
    continents {
      code,
      name,
    }
  }`
  

export const List=()=>{
	
	const [state, setState] = useState({
		continents: "PL",
		
	})
	const { loading, error, data } = useQuery(GET_CONTINENTS);

	if (loading) return <p>Loading...</p>;

  	if (error) return <p>An error occured!</p>;
	// set the selected country to the new input value
	const onContinentChange=(e)=> {
	
		setState({ continents: e.target.value})
        
	};
	
		return (
			<div>
				
				 <select
					value={state.continents}
					onChange={onContinentChange}
					style={{ marginTop: "30px", height: "50px", fontSize: "20px" }}
				>
				{data.continents.map(({ code, name }) => (
					<option  key={code} value={code} >
					{code} {name}
					</option>
				))}
				</select>
			
				<h3>Continent Selected: {state.continents}
                  </h3>
				  
				  {state.continents=="PL"?<></>:<CountrySelect code={state.continents} />}
				  </div>
		)
}

