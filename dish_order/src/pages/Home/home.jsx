import React, {useState} from 'react'
import "./home.css"
import Header from '../../components/Header/header.jsx'
import ExploreMenu from '../../components/ExploreMenu/exploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx' // we will mount food display componeent here in the homepage and pass the category as props to it so that it can filter the food items based on the category selected in the explore menu component
import AppDownload from '../../components/AppDownload/AppDownload.jsx'

const home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      <AppDownload />
    </div>
  )
}

export default home;
