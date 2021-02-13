 import React from "react"
  import "./App.css"
  
  import {List} from "./components/List"
  
  const query = `{ 
    continents {
      code,
      name,
    }
  }`;
  const query1 = `
  query getCountries($code: String) {
    continent(code: $code) {
      countries {
        name
      }
    }
  }`;
  function App() {
    return (
      <div className='App'>
        <List />
      </div>
    )
  }
  
  export default App