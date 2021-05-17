// const { response } = require("express");
// const { get } = require("mongoose");

var elementsArray = [];
var num = 2;
const father = document.getElementsByClassName('row')[0]
console.log(father)
const card = document.getElementById("my_card")
const box = document.getElementById("card-box")
const body = document.getElementById("card-body")
const img = "../assets/g-dink250.jpg"
let len = 0

function createPricingHTML() {
    fetch('http://localhost:8000/bikes/pricing')
}

function createCards() {


    fetch('http://localhost:8000/bikes')
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.length; i++) {

                var new_card_div = document.createElement("div")
                new_card_div.className = card.className;

                var new_box_div = document.createElement('div')
                new_box_div.className = box.className;

                var new_body_div = document.createElement('div')
                new_body_div.innerHTML = body.innerHTML;

                var new_text = new_body_div.querySelectorAll("h6")
                new_text[5].innerHTML = data[i].manufacturer
                new_text[6].innerHTML = data[i].model
                new_text[7].innerHTML = data[i].year
                new_text[8].innerHTML = data[i].price
                new_text[9].innerHTML = data[i].tank

                new_body_div.querySelector('img').src = data[i].img

                // appending children
                father.appendChild(new_card_div)
                new_card_div.appendChild(new_box_div)
                new_box_div.appendChild(new_body_div)
            }
        })


}