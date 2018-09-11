import React from 'react';
import './search.css'

const Search = (props) => (
    <form
        onSubmit={props.handleSubmit}
        className="Search">
        <input
            ref={props.setRef}
            className="Search-input"
            placeholder="Busca tu video"
            type="text"
            name="search"
            onChange={props.handleChange}
            value={props.value}
            // defaultValue="Hola"
        />
    </form>
);

export default Search