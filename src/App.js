import React from "react";
import "./App.css";


class App extends React.Component{
  constructor(){
    super()
    this.state={
      newItem:"test",
      list:[]
    }
  }

  addItem(todoValue){
    console.log(todoValue)
    if(todoValue!==""){
      const newItem={
        id:Date.now(),
        value:todoValue,
        isDone:false,
      };
      //console.log(newItem);
      const list=[...this.state.list]  //like object distucting 
      list.push(newItem)
      this.setState({
        list,
        newItem:""
      })
    }
  }

  updateInput(input){
    this.setState({
      newItem:input
    })
   // console.log(this.state.newItem)
  }

  render(){
    return(
      <div>
        <h1 className="app-title">React TODO App</h1>
        <div className="container">
          Add An Item
          <br/>
          <input 
          type="text"
          className="input-text"
          placeholder="Enter An Item"
          value={this.state.newItem}
          onChange={e=>this.updateInput(e.target.value)}

          />
          <button className="add-btn" onClick={(e)=>this.addItem(this.state.newItem)}>Add</button> 

          <div className="list">
            <ul>
              {/* <li>
                <input type="checkbox" name="" id="" />
                 Lern Ract
                 <button className="btn">Delete</button>
              </li> */}
              {this.state.list.map(item=>{
                return(
                  <li>
                    <input type="checkbox" name="" id=""/>
                    {item.value}
                    <button className="btn">Delete</button>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>
      </div>
    )

    }
}
export default App