import React from 'react'
import './category.css'
import Playlist from '../../playlist/components/playlist'
function Category(props) {
    return (
        <div className="Category">
            <p className="Category-title">{props.description}</p>
            <h2 className="Category-description">{props.title}</h2>
            <Playlist handleOpenModal={props.handleOpenModal} playlist={props.playlist}/>
        </div>
    )
}

export default Category;