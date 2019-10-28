import React,{Component} from 'react';
import AppelApi from './components/AppelApi'
import './App.css';
import axios from 'axios';

const demo =
  {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      citation : demo
    }
    this.getCitation = this.getCitation.bind(this);
  }
  getCitation() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes?count=num')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          citation: data[0]
        });
    });
  }

render (){
  return (
    <div className="style">
      
      <AppelApi citation={this.state.citation}/>
      <button type="button" onClick={this.getCitation}>Get Simpson citation</button>
    </div>
  );
}
  
}

export default App;
