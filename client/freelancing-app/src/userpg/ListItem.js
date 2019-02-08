import React, {Component} from "react";
import Axios from 'axios'
import ListItemModal from './ListItemModal'
import Modal from 'react-bootstrap/Modal'


class ListItem extends Component {
  constructor (props) {
    super (props);
    this.state = {
      modalShow:false
    }

  };

  createAuthHeader = () => {
      const token = localStorage.getItem('token')
      return {
        headers: {
          'Authorization': "bearer " + token
        }
      }
  };

  render () {

    let modalClose = () => this.setState({modalShow:false});

    return(
      <div className="list-item-wrapper">
        <div onClick={this.props.renderMainInvoice} className="list-info">
            <h1 className ="item-title">{this.props.invoice.title}</h1>
            <div className="title-line"></div>
            <h3 className ="item-id">Invoice ID:{this.props.invoice.id}</h3>
            <h2 className ="item-date">Date submitted: {this.props.invoice.date}</h2>
            {/*<div className="edit-container"><div className ="item-edit-btn" onClick={this.props.updateInvoice}></div></div>*/}
            <div className="edit-container"><div className ="item-edit-btn" onClick={() => this.setState({ modalShow:true })}></div></div>
            <div className="delete-container"><div className ="item-delete-btn" onClick={this.props.deleteInvoice}></div></div>
        </div>
        <ListItemModal
        invoiceData={this.state.invoiceData}
        userInfo={this.state.userInfo}


        timerValue={this.state.timerValue}
        liftState={this.liftState}
        jobtitle={this.state.jobtitle}
        rate={this.state.rate}
        name={this.state.name}
        comments={this.state.comments}
        handleChange={this.handleChange}
        sendData={this.sendData}

        show={this.state.modalShow} onHide={modalClose} />

      </div>



    );






  }



}

export default ListItem;
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
