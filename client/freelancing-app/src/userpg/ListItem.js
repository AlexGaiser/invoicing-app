import React from "react"
import Axios from 'axios';


class ListItem extends React.Component{
    constructor(){
        super()
        this.state={
            listInfo:[]
        }
    }

    render(){
        
                return(
                <div>
                  <div className = "list-info">
                      {/* {this.state.listInfo} */}
                  </div>	
              </div>)
        
              
        
    }

}

export default ListItem
