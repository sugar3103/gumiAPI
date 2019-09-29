import React from "react";
import Button from "../../button";

function TBody(props) {
  return (
    <tbody>
      {console.log("props from tbody",props)}
      <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.director}</td>
        <td>{props.release_date}</td>
        <td>{props.rt_score}</td>
        <td>{<Button people={props.people}></Button>}</td>
        <td>{props.species}</td>
        <td>{props.locations}</td>
        <td>{props.vehicles}</td>
        <td>{props.url}</td>
      </tr>
    </tbody>
  );
}

export default TBody;
