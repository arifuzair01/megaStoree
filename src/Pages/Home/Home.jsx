import React from "react";
import Slider from "../../Component/Slider/Slider";
import './Home.scss'
import FeaturedProducts from "../../Component/Featured Products/FeaturedProducts";
import Categories from "../../Component/Categories/Categories";
import Contact from "../../Component/Contact/Contact";

const Home=()=>{
    return(
        <>
<div className="home">
    <Slider/>
    <FeaturedProducts type="featured" />
    <Categories/>
    <FeaturedProducts type="trending" />
    <Contact/>
</div>
        </>
    )
}
export default Home