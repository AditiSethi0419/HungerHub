import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

const ItemList = ({items}) => {

   const dispatch =  useDispatch();

    function handleAddItem(item) {
        //Dispatch an action
        dispatch(addItem(item));
    }

  return (
    <div>
        <ul>
            {items.map((item)=>(
<li key={item.card.info.id}>
    <span>{item.card.info.name}</span>
    <span> - ₹{item.card.info.price / 100}</span>
    <p>{item.card.info.description}</p>
    <button onClick={()=>handleAddItem(item)}>ADD+</button>
</li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList