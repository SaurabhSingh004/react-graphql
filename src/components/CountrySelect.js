import { gql } from "apollo-boost"
import React,{useState} from "react"
import { useQuery } from '@apollo/react-hooks'
import "../App.css"
const GET_COUNTRIES = gql`
query getCountries($code: ID!) {
 continent(code: $code) {
    countries {
      name
    }
  }
}`
export const CountrySelect=(props)=> {
	console.log(props.code)
	const  { data, error,loading } = useQuery(GET_COUNTRIES,{variables:{code:props.code},});
	
	if (loading) return <p>Loading...</p>;

  	if (error) return <p>An error occured!</p>;
				return (
					<div className="Box">
					 
					{data.continent.countries.map(({ code, name}) => (
						<ul>
						<li  key={code} value={code} >
						{code} {name}
						</li>
						</ul>
					))}
					
				</div>
		
		)
}
