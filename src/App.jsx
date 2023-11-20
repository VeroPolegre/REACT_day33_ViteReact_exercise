import React from "react";
import "./App.css";
import Person from "./components/Person/Person";
import PersonClass from "./components/PersonClass/PersonClass";
const people = [
  {
    name: "Tifa",
    surname: "Lockheart",
    age: 3,
  },
  {
    name: "Papaya",
    surname: "Paya",
    age: 6,
  },
  {
    name: "Mango",
    surname: "Monguito",
    age: 4,
  },
];

function App() {
  return (
    <div>
      {people.map(({ name, surname, age }, index) => (
        <Person key={index} name={name} surname={surname} age={age} />
      ))}
      {people.map(({ name, surname, age }, index) => (
        <PersonClass key={index} name={name} surname={surname} age={age} />
      ))}
    </div>
  );
}

export default App;
