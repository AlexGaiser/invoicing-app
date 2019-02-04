import React from "react"
import Axios from 'axios';


class ListItem extends React.Component{
    constructor(){
        super()
        this.state={
            invoices:[]
        }
    }

    componentDidMount= async () => {
        const response = await Axios.get('/records')
    }

    render(){
        
                return(
                <div>
                  <div className = "list-info">
                      
                  </div>	
              </div>)
        
              
        
    }

}

export default ListItem
