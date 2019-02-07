import React from "react"
import Axios from 'axios';


 const ListItem =(props)=>{
  

    const createAuthHeader = ()=>{
      const token = localStorage.getItem('token')
      return {
        headers: {
          'Authorization': "bearer " + token
        }
      };
    }

  return(
                <div className = "list-item-wrapper" >
                  <div onClick={props.renderMainInvoice} className = "list-info">
                      <h1 className = "item-title">{props.invoice.title}</h1>
                      <div className= "title-line"></div>
                      <h3 className = "item-id">Invoice ID:{props.invoice.id}</h3>
                      <h2 className = "item-date">Date submitted: {props.invoice.date}</h2>
                    <div className="edit-container"><div className ="item-edit-btn" onClick={props.renderMainInvoice}></div></div>
                    <div className="delete-container"><div className ="item-delete-btn" onClick={()=>alert('deleted')}></div></div>
                  </div>	
        </div>)
    }

export default ListItem
// const deleteData = async()=>{
  //   const header = createAuthHeader()
  //   console.log('delete')
  //   await Axios.delete('/records/1', header, async(req,res)=>{
  //     const kill = await req.body.destroy({
  //       where:{
  //         id: req.params.id
  //       }
  //     })
  //     res.send({kill})
  //   })

  // } 