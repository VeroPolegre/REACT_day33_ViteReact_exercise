import "./Person.css";

const Person = (props) => {
  console.log("props", props);
  return (
    <div clasName="Person">
      <p>
        <span className="Name">{props.name}</span>
        <span className="Surname">{props.surname}</span>
      </p>
      <p>
        <span className="Age">{props.age} years old</span>
      </p>
    </div>
  );
};

export default Person;
