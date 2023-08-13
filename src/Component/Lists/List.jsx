import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {

    const data=[
        {
            id: 1,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 30,
            price: 24,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto-compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 40,
            price: 31,
        }
    ]
  return (
    <div className='list'>
      {
        data?.map((item=><Card key={item.id} item={item}/>))
      }
    </div>
  )
}

export default List
