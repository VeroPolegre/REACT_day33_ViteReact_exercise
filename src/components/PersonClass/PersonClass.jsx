import React, { Component } from "react";
import "./PersonClass.css";

export class PersonClass extends Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div className="PersonClass">
        <p>
          <span className="NameClass">{name}</span>
          <span className="SurnameClass"> {surname} </span>
          <span className="AgeClass">{age} years old</span>
        </p>
      </div>
    );
  }
}

export default PersonClass;
