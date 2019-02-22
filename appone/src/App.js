import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import CateClicked from "./CateClicked";

class App extends Component {
  
  state = { cateList: [], err: null, cateItems: null, title: "" };
  
  componentDidMount() {
    axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then(res => {
        // console.log(res);
        this.setState({ cateList: res.data });
      })
      .catch(err => this.setState({ err }));
  }
  
  onCateClick = (cate_short_name) => {
    axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${cate_short_name}`)
      .then(res => {
        // console.log(res);
        this.setState({ title: cate_short_name });
        this.setState({ cateItems: res.data });
      })
      .catch(err => this.setState({ err }));
  }
  
  render() {
    return (
      <div className="App">
        <h4>Menu Categories</h4>
        <div className="cate_list">
        <ul>
          {this.state.cateList.map(({name, short_name}) => {
            return (
              <li className="cate_row" key={name} onClick={() => this.onCateClick(short_name)}>
                {`${name} - (${short_name})`}
              </li>
            );
          })}
        </ul>
        </div>
        
        <CateClicked items={this.state.cateItems} cateName={this.state.title}/>
      </div>
    );
  }
}

export default App;

