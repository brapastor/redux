import React from 'react'
import Category from "./category";
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
function Categories(props) {
    return (
        <div className="Categories">
            <SearchContainer/>
            {
                props.categories.map((item) => {
                   return (
                       <Category
                           handleOpenModal={props.handleOpenModal}
                           key={item.id}
                           {...item}/>
                   )
                })
            }
        </div>
    )
}

export default Categories;