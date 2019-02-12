import React, { Component } from 'react';
import Axios from 'axios'



class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    submitForm=()=>{
       
        
        this.sendData(this.state)
    }
  
    


    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    handleClick = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };

    sendData = async (data)=>{
        // const token = localStorage.getItem('token')
        // const header = {
        //   headers:{'Authorization':  "bearer " +token}
        // }
        console.log(data);
        const header = this.createAuthHeader()
        // localStorage.setItem('authorization', header)
        const response =  await Axios.post('/users', data, header)
        console.log(response.data);
      }

    //   const data = 
    //         {
    //             "id":3,
    //            "business_name": "Cool Business Industries",
    //            "name":"Alex Gaiser",
    //            "username": "agaiser",
    //            "password":"password",
    //            "user_email": "Kwalex.json@gmail.com",
    //            "user_phone": "5555555555",
    //            "user_street": "1344 Fake ave.",
    //            "user_city":"Notaplace",
    //            "user_zip":"54321"
    //         }	
    
    render() { 
        return ( 
            <div>
            <h1>Create Account</h1>
            <form className="form-group" onSubmit={this.submitForm}>
                <input name='username' type='text' onChange={this.handleChange}/>
                <input name='password' type='password' onChange={this.handleChange}/>
                <input name='name' type='text' onChange={this.handleChange}/>
                <input name='business_name' type='text' onChange={this.handleChange}/>
                <input name='user_email' type='text' onChange={this.handleChange}/>
                <input name='user_street' type='text' onChange={this.handleChange}/>
                <input name='user_city' type='text' onChange={this.handleChange}/>
                <input name='user_zip' type='text' onChange={this.handleChange}/>

            </form>
            </div>
         );
    }
}
 
export default Registration;