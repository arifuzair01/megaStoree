import React,{useState} from "react";
import {MdOutlineEast,MdOutlineWest} from 'react-icons/md'
import './Slider.scss'


const Slider=()=>{
    const [currentSlide,setCurrentSlide] = useState(0)

const data=[
    "https://media.boohoo.com/i/boohooamplience/Desktop_Essentials_UKUS_1",
    "https://www.moncler.com/dw/image/v2/BCTD_PRD/on/demandware.static/-/Library-Sites-library-global/default/dw06c7816d/HP-5/hp-hero-slider-M-new-collection-fw23-edit-revamp-03-08-desk.jpg?sw=1600",
    "https://www.moncler.com/dw/image/v2/BCTD_PRD/on/demandware.static/-/Library-Sites-library-global/default/dwbbb3bb76/HP-5/hp-hero-slider-W-new-arrivals-fw23-edit-revamp-03-08-desk.jpg?sw=1600",
];

const prevSlide=()=>{
setCurrentSlide(currentSlide===0?2:(prev)=>prev-1 )
}
const nextSlide=()=>{
    setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)
}
return(
    <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {
            data.map((images,index)=><img src={images} key={index}/>)
        }
    </div>
    <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <MdOutlineWest/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <MdOutlineEast/>
        </div>
    </div>

    </div>
)
}
export default Slider