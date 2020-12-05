import { Component } from'react';
import {Cardlist} from './components/card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
constructor(){
super();
this.state ={
monsters:[],
searchfield:''
};
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>this.setState({monsters:users}))
}
handleChange=(e)=>{this.setState({searchfield:e.target.value});};

render(){
const {monsters,searchfield} =this.state;
const filtereMonsters =monsters.filter(monster =>
  monster.name.toLowerCase().includes(searchfield.toLowerCase()))
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
    <Searchbox
    placeholder='search monsters'
    handleChange={e => this.setState({searchfield:e.target.value})}
    />
    <Cardlist monsters={filtereMonsters}/>
    </div>
  );
}
}

export default App;
