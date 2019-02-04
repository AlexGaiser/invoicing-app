import React from "react"
import Axios from 'axios'
import ListItem from './ListItem'



class ListContainer extends React.Component{
    constructor(){
        super()
    }



    render(){
        return( 
        <div className="list-container">
            <ListItem />
        </div>
   ) }
        

}

export default ListContainer

