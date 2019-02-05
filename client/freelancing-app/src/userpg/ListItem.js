import React from "react"
import Axios from 'axios';


class ListItem extends React.Component{
    constructor(){
        super()
        this.state={
            listInfo:[]
        }
    }

    componentDidMount= async () => {
        const response = await Axios.get('/records')
        this.setState({
            listInfo: response.data
        })
        console.log(response.data)
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
