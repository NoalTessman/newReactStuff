import React from 'react';
import Reactdom from 'react-dom'
import { APIkey }  from './APIkey'
import {dattom} from './components/getCurrentDate'
const date = dattom();
const other = "`http://maps.openweathermap.org/maps/2.0/weather/TA2/5/-26/12?&appid=${APIkey}`";
export default class mapLoader extends React.Component{
 state = {
   loading:true,
   call:null, 
  };
  //https://tile.openweathermap.org/map/pressure_new/0/0/0.png?APPID=${APIkey}

async componentDidMount() {
  const url =`https://picsum.photos/1920/1080`;
  const response = await fetch(url);
  const data = await response;
  this.setState({call:data.url});
}

render(){
  return(
    <div>
      {this.state.loading || !this.state.call ? (<div>loading...</div>
      ) : (
      <div>{console.log("neat")}{this.state.call}</div>)}
      <img src={this.state.call}/>
    </div>
  )
}
}
