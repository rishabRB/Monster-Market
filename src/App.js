import React, { Component } from 'react';
// import logo from './logo.svg';
import {Cardlist} from './components/card-list/card-list.components';
import {SearchBox} from './components/searchBox/search-box.component';
import './App.css';



class App extends Component {
   
  constructor(){
    super()
    this.state={
      monster:[
         // {
        //   name:'Frankentein',
        //   id:'ars1'
        // },

        // {
        //   name:'Dracula',
        //   id:'ars2'
        // },

        // {
        //   name:'Zombies',
        //   id:'ars3'
        // }
      ],
      searchField:""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monster:user}));
  }


  render() {

   const { monster,searchField}=this.state;

   const filteredMonster=monster.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLocaleLowerCase())
   );


    return (


      <div className="App">
      <h2 >Monster Market</h2>
      <SearchBox placeholder='Search Monster' handler={e=>this.setState({searchField:e.target.value})}/>
        <Cardlist monster={filteredMonster} />
          
        </div>
    );
  }
}

export default App;
