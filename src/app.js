/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let todoslosdominios = function() {
    for (let pro of pronoun) {
      for (let adj1 of adj) {
        for (let nuon of noun) {
          dominios.push(domainname(pro, adj1, nuon));
        }
      }
    }
    return dominios;
  };
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dominios = [];
  let domainname = function(pronoun, adj, noun) {
    return `${pronoun}${adj}${noun}.com`;
  };
  document.querySelector(".container").innerHTML =
    "<p class='d'>" + todoslosdominios() + "</p>";
};
