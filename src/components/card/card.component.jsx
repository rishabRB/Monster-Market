import React from 'react';
import  '../card-list/card-list.style.css';

export const Card=(props)=>(
    <div className='container-card'>
       <img alt='robots' src={`https://robohash.org/${props.monster.id}&200x200`} />
       
          <h1>{props.monster.name}</h1>
          <p>{props.monster.email}</p>
    </div>
);
