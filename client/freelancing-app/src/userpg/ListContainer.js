import React from "react"
import Axios from 'axios'
import ListItem from './ListItem'



// class ListContainer extends React.Component{
//     constructor(){
//         super()
//     }




//     render(){
    
//         return( 
//         <div className="list-container">
            
//         </div>
//    ) }
// }
// d
const ListContainer = (props) => {
    return(
        <div className="list-container">
            {props.listItems}
        </div>
    )
    
}


export default ListContainer

