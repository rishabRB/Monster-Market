import React from 'react';
import {Card} from '../card/card.component';
import '../card-list/card-list.style.css';
export const Cardlist=props=>(
  
  <div className='card-list'>
       {props.monster.map(monster=>(
       <Card key={monster.id} monster={monster}/>
      ))}
      </div>
);