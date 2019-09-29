import React from "react";
import * as $ from "jquery";
import THead from "../Atom/Table/THead";
import TBody from "../Atom/Table/TBody";

function GumiApi(props) {
  let dataGlobal;

  const addProduct = product => {
    console.log("data from addProduct", product);

    product.map((ele, index) => (
      <TBody
        id={ele.id}
        title={ele.title}
        description={ele.description}
        director={ele.director}
        release_date={ele.release_date}
        rt_score={ele.rt_score}
        people={ele.people}
        species={ele.species}
        locations={ele.locations}
        vehicles={ele.vehicles}
        url={ele.url}
      />
    ));
  };

  const dataFromAPI = (url, method) => {
    $.ajax({
      url: url,
      method: method
    })
      .done(result => {
        dataGlobal = result;
        if (dataGlobal === undefined) {
          console.log(
            "dataGlobal is undefined, please get correct API",
            dataGlobal
          );
        } else {
          console.log("dataGlobal from ajax", dataGlobal);
          addProduct(dataGlobal);
        }
      })
      .catch(error => {
        console.log("GumiApp Error", error);
      });
  };
  return (
    <div>
      This is GumiApi
      <table>
        <THead />
        {$.ajax([
          {
            url: "https://ghibliapi.herokuapp.com/films"
          },
          {
            method: "GET"
          }
        ])}
        {$.ajax(
          {
            url: "https://ghibliapi.herokuapp.com/films"
          },
          {
            method: "GET"
          }
        )}

        {console.log("this is dataGlobal from return", dataGlobal)}
      </table>
    </div>
  );
}

export default GumiApi;
