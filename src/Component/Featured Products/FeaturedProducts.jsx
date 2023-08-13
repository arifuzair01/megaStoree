import React from "react"
import "./FeaturedProducts.scss"
import Card from "../Card/Card"

const FeaturedProducts=({type})=>{
    const data=[ 
        {      
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs-tinysrgb&w=1600", 
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb6-1680", 
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
             oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
    return(
        <>
            <div className="featuredProducts">
            
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi accusamus libero ducimus molestiae, dignissimos maiores cum suscipit eaque veniam, reprehenderit magnam debitis eum, velit voluptas laudantium quis architecto sed.</p>
            </div>
            <div className="bottom">
                {
                    data.map((item)=><Card item={item} key={item.id}/>)
                }
            </div>
        </div>
        </>
    )
}
export default FeaturedProducts