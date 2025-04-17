import React from 'react'
import { countries } from './assets/countries'
import './App.css'
import axios from 'axios';
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
 let countryCOA = "https://mainfacts.com/media/images/coats_of_arms/ca.svg"
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

    //console.log(country)
    setCountry(prevCountry=>({
      countryName: countries.find((ind) => ind.name === countryValue).name,
      coatOfArmsURL: "https://mainfacts.com/media/images/coats_of_arms/ca.svg",
      flag: countries.find((ind) => ind.name === countryValue).flags.png,
      currencySym: countries.find((ind) => ind.name === countryValue).currencies[0].symbol,
      currencyType: countries.find((ind) => ind.name === countryValue).currencies[0].name,
      isClicked: !prevCountry.isClicked
    }))

    // Code here runs but doesnt change the state which doesn't update COA or isClicked Class
    //
    //setting COA to current country
    if(country.countryName === country1){
      countryCOA = "https://mainfacts.com/media/images/coats_of_arms/ca.svg"      
    }
    if(country.countryName === country2){
      countryCOA = "https://mainfacts.com/media/images/coats_of_arms/es.svg"     
    }
    if(country.countryName === country3){
      countryCOA = "https://mainfacts.com/media/images/coats_of_arms/cl.svg"
    }
    
    country.isClicked ? clickedClassName ="clicked": clickedClassName =""
    // console.log(clickedClassName)
  }

 

  return (
    <div className="wrapper">
      <div className="countryContainer">
        <button className={clickedClassName} onClick={()=>{toggleCountry(country1)}}>{country1}</button>
        <button className={clickedClassName} onClick={()=>{toggleCountry(country2)}}>{country2}</button>
        <button className={clickedClassName} onClick={()=>{toggleCountry(country3)}}>{country3}</button>
      </div>
      <div className = "content">
          <div className= "row">
            <section className = "tile countryName" >{country.countryName}</section>
            <section className = "tile countryCurrency" >
              <span>{country.currencySym}</span>
              <p>{country.currencyType}</p>
            </section>
          </div>   
          <div className= "row">
            <section className = "tile countryCOA" >
              <img src={countryCOA}/>
            </section>
            <section className = "tile countryFlag" >
              <img src={`${country.flag}`}/>
            </section>
          </div>
        
      </div>
    </div>
  )
}

export default App
