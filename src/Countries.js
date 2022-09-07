import React from "react";
export default function Countries(props, index) {
  return (
    <ul className="Countries">
      {props.countries.map(function (country) {
        return (
          <li key={index}>
            {country.capital} is the capital of {country.name}
          </li>
        );
      })}
    </ul>
  );
}
