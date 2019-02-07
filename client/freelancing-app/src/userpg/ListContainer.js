import React from "react"
import Axios from 'axios'
import ListItem from './ListItem'
import '../App.css'

const ListContainer = (props) => {
    return(
        <div className= "list-container-wrapper">
            <div className="list-container">
               <div>{props.listItems}</div>
            </div>
       </div>
    )
}


export default ListContainer

