import React from 'react'
import Item from './Item';



function ItemList(props) {

    


  return (
    <div>
        {
        props.data.map(
          item =>{
            return <Item
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      img ={item.img}
                      price = {item.price}
                    />
          }
        )
      }

    </div>

  )
}

export default ItemList