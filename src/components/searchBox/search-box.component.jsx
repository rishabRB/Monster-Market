import React from'react';

import '../searchBox/search-box.style.component.css';


export const SearchBox=({placeholder,handler})=>(
    <input className='search' type='search' placeholder={placeholder} onChange={handler}/>
);