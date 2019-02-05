import React, { Component } from 'react';
import './Main-styles.css'
import {   InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class RateComponent extends Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      dropdownClick:null,
      inputValue:" "
    };

  }

//$(this).parents(".dropdown-menu").find("input").val($(this).attr('data-value'));


  toggleDropDown(evt) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownClick: evt.target.value, //event dropdown click
      inputValue: evt.target.value
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


  render() {
    return (
      <div className="rates-input-container">
        <InputGroup>
          <Input value={this.state.inputValue}/>
          <InputGroupButtonDropdown componentClass="select" placeholder="Select Rate" addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Rates
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Rates</DropdownItem>
              <DropdownItem value="20.00">$20.00</DropdownItem>
              <DropdownItem value="40.00">$40.00</DropdownItem>
              <DropdownItem value="50.00">$50.00</DropdownItem>
              <DropdownItem value="60.00">$60.00</DropdownItem>
              <DropdownItem value="70.00">$70.00</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>

      </div>
    );
  }
}






export default RateComponent;
