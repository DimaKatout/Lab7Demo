'use strict'

var cats = [];
var form=document.getElementById("catsForm");

function Cat(name, likes, goodWithDogs, goodWithCats, breed) {
    this.name = name;
    this.age = 0;
    this.likes = likes;
    this.imagePath = `images/${name.toLowerCase()}.jpeg`;
    this.goodWithCats = goodWithCats;
    this.goodWithDogs = goodWithDogs;
    this.breed = breed;
    this.getAge(3,5);
    cats.push(this);
}
Cat.prototype.getAge = function (min, max) {
    this.age = getRandomNum(min, max);


}
Cat.prototype.render = function () {

    var container = document.getElementById("kittenProfiles");
    console.log(container);
    var articleEl = document.createElement("article");
    console.log(articleEl);
    //kol ma a3mel eshi lazem a3melo append la alab ta3o
    container.appendChild(articleEl);
    var h2El = document.createElement("h2");
    h2El.textContent = this.name;
    console.log(h2El);

    articleEl.appendChild(h2El);
    var pEl = document.createElement("p");
    //mola7aza hoon ana bara alobject fa ma basta5dem this.age basta5dem frankie.age
    pEl.textContent = `frankie is adorable,and is ${this.age} months old`;
    console.log(pEl);
    articleEl.appendChild(pEl);
    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);
    //frankie.likes.length entebhi hadool aktar ashya2 btentasa
    for (let i = 0; i < this.likes.length; i++) {
        var liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.textContent = this.likes[i];
    }


    var tableEl = document.createElement("table");
    //create the first row
    var headerRowEl = document.createElement("tr");
    //cearte the second row
    var dataRowEl = document.createElement("tr");
    //create three here we create just two table headeres
    //append the table headers to the first row

    var th1El = document.createElement("th");
    th1El.textContent = "good with cats";
    headerRowEl.appendChild(th1El);
    var th2El = document.createElement("th");
    th2El.textContent = "good with dogs";
    headerRowEl.appendChild(th2El);
    /*var th3El=doc.createElement("th");
    th3El.textContent="good with kids";
    headerRowEl.appendChild(th3El);*/

    //create three td here we create just twe table data
    //append the table data to the second row
    var td1El = document.createElement("td");
    td1El.textContent = this.goodWithCats;

    dataRowEl.appendChild(td1El);
    var td2El = document.createElement("td");
    td2El.textContent = this.goodWithDogs;
    dataRowEl.appendChild(td2El);
    //append th two rows to the table
    tableEl.appendChild(headerRowEl);
    tableEl.appendChild(dataRowEl);
    //append the table to the article
    articleEl.appendChild(tableEl);

    var imgEl = document.createElement("img");
    articleEl.appendChild(imgEl);
    //setAttribute awal para alattribute name o altani alvalue elo
    imgEl.setAttribute("src", this.imagePath);


}

function handleSubmit()
{
    event.preventDefault();
    var name =event.target.name.value;
    var likes=event.target.likes.value.split(",");
    var breed=event.target.breed.value;
    var cats=event.target.cats.checked;
    var dogs=event.target.dogs.checked;
    var cat=new Cat(name,likes,dogs,cats,breed);
    //i want to show my new cat to the html so i use render
    cat.render();
}
form.addEventListener('submit',handleSubmit)
new Cat("Frankie", ["cuddling", "chasing", "food"], true, true, "shorthair");


new Cat("Serena", ["cuddling", "chasing", "food"], false, true, "Turkish");

new Cat("Jumper", ["cuddling", "chasing", "napping"], true, false, "British")


for (let i = 0; i < cats.length; i++) {
    cats[i].getAge(3, 7);
    cats[i].render();


}


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var cats=[frankie,serena,jumper];

