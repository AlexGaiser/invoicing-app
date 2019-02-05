import React, { Component } from 'react';
import ListContainer from './ListContainer'
import ListItem from './ListItem'
import MainInvoice from './MainInvoice'
import Axios from 'axios';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getData = async()=>{
        const response = await Axios.get('/records')
        console.log(response.data)
        this.setState({allInvoices: response})
    }

    componentDidMount =()=>{
        this.getData()
    }


    render() { 
        return ( 
            <ListContainer 
                
            />
         );
    }
}
 
export default UserPage;