import React from 'react'
import { countries } from './assets/countries'
import './App.css'
import axios from 'axios';
import { clsx } from "clsx"
//const contries=;
function getData(){
  // axios.get('https://www.apicountries.com/countries')
  //   .then(response => {
  //   countries = response.data;
  //   })
  // .catch(error => {
  //   console.error('Error fetching the country data:', error);
  // });
  // //  .then(res=>res.json())
  // //  .then(data=>{
  // //    console.log(data)
  // //  })
  // //  .catch(error => {
  // //   console.error('Error fetching the country data:', error);
  // //})
  }

function App() {
 getData()
 //declaritive variables
 const country1 = "Canada"
 const country2 = "Spain"
 const country3 = "Chile"
 let clickedClassName = ""
  //state variables
  const [country, setCountry] = React.useState({
    countryName: countries.find((ind) => ind.name === country1).name,
    coatOfArmsURL: "https://mainfacts.com/media/images/coats_of_arms/ca.svg",
    flag: countries.find((ind) => ind.name === country1).flags.png,
    currencySym: countries.find((ind) => ind.name === country1).currencies[0].symbol,
    currencyType: countries.find((ind) => ind.name === country1).currencies[0].name,
    isClicked: true
  })

  //state toggle setter function
  function toggleCountry(countryValue){

    
    setCountry(prevCountry=>({
      countryName: countries.find((ind) => ind.name === countryValue).name,
      coatOfArmsURL: (countryValue === country3?
       "https://mainfacts.com/media/images/coats_of_arms/cl.svg":
       countryValue === country2?
      "https://mainfacts.com/media/images/coats_of_arms/es.svg":
      "https://mainfacts.com/media/images/coats_of_arms/ca.svg"),
      flag: countries.find((ind) => ind.name === countryValue).flags.png,
      currencySym: countries.find((ind) => ind.name === countryValue).currencies[0].symbol,
      currencyType: countries.find((ind) => ind.name === countryValue).currencies[0].name,
      isClicked: !prevCountry.isClicked
    }))
    // clickedClassName = clsx(country.isClicked && "clicked")
  
  }
   clickedClassName = clsx(country.isClicked && "clicked")
//  country.isClicked ? clickedClassName ="clicked": clickedClassName =""

  return (
    <div className="wrapper">
      <div className="countryContainer">
        <button className={clickedClassName} onClick={()=>{toggleCountry(country1)}}>{country1.toUpperCase()}</button>
        <button className={clickedClassName} onClick={()=>{toggleCountry(country2)}}>{country2.toUpperCase()}</button>
        <button className={clickedClassName} onClick={()=>{toggleCountry(country3)}}>{country3.toUpperCase()}</button>
      </div>
      <div className = "content">
        <div className= "row">
            <section className = "tile countryName" >{country.countryName.toUpperCase()}</section>
            <section className = "tile countryCurrency" >
              <span>{country.currencySym}</span>
                <p>{country.currencyType.toUpperCase()}</p>
            </section>
        </div>   
        <div className= "row">
            <section className = "tile countryCOA" >
              <img src={country.coatOfArmsURL}/>
            </section>
            <section style = {{
              backgroundImage: `url(${country.flag})`
              }
              } 
              className = "tile countryFlag" ></section>
        </div>
        
      </div>
    </div>
  )
}

export default App
