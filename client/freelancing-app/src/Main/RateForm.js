import React, { Component } from 'react';
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
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
          <Input />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Rates
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Rates</DropdownItem>
              <DropdownItem>$20.00</DropdownItem>
              <DropdownItem>$20.00</DropdownItem>
              <DropdownItem>$20.00</DropdownItem>
              <DropdownItem>$20.00</DropdownItem>
              <DropdownItem>$20.00</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>
    );
  }
}






export default RateComponent;
