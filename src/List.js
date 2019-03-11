import React from "react";
import Grocery from "./Grocery"

const List = ({ items, name, handleClick }) => (
    <div>
      <h2>{name}</h2>
      <hr />
      <ul>
        { items.map( item => <Grocery key={item.id} {...item} handleClick={handleClick} /> )}
        {/* { items.map( item => <Grocery key={item.id} id={item.id} name={item.name} complete={item.complete} /> )} */}
        {/* { items.map( item => <li key={item.id}>{item.name}</li>) } */}
      </ul>
    </div>
)

export default List;