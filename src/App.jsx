import React from 'react'
import { countries } from './assets/countries'
import './App.css'
//import axios from 'axios';

// function getData(){
//   axios.get('https://www.apicountries.com/countries')
//    .then(res=>res.json())
//    .then(data=>{
//      countries = data
//    })
//    .catch(error => {
//     console.error('Error fetching the country data:', error);
//   })
//   }

function App() {
// getData()

  //state variables
  const [country, setCountry] = React.useState({
    countryName: "Canada",
    coatOfArmsURL: "https://mainfacts.com/media/images/coats_of_arms/ca.svg",
    flag: "placeholder",
    currencySym: "$",
    currenctType: "CANADIAN DOLLAR",
    isClicked: true
  })

  //state toggle setter function
  function toggleCountry(country){
    // setCountry((prevCountry)=>{
    //   prevCountry = [...prevCountry, prevCountry.isClicked = false]
    //   prevCountry = countries.find(({ country }) => countryName === countryName)
    //   prevCountry.isClicked = true})
      
  }

  //declaritive variables
  const country1 = "Canada"
  const country2 = "Spain"
  const country3 = "Chile"


  
  return (
    <div className="wrapper">
      <div className="countryContainer">
        <button className={country.isClicked ? "clicked": ""} onClick={()=>{toggleCountry(country1)}}>{country1}</button>
        <button className={country.isClicked ? "clicked": ""} onClick={()=>{toggleCountry(country2)}}>{country2}</button>
        <button className={country.isClicked ? "clicked": ""} onClick={()=>{toggleCountry(country3)}}>{country3}</button>
      </div>
      <div className = "content">
        
          <section className = "tile countryName" >{country.countryName.toUpperCase()}</section>
          <section className = "tile countryCurrency" >
            <span>{country.currencySym}</span>
            <p>{country.currenctType.toUpperCase()}</p>
          </section>
        
       
          <section className = "tile countryCOA" >
            <img src={`${country.coatOfArmsURL}`}/>
          </section>
          <section className = "tile countryFlag" >
            <img src={`${country.flag}`}/>
          </section>
        
      </div>
    </div>
  )
}

export default App
