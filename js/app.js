'use strict'
//share7 allab 
/*function Person(name,isStudent)
{
this.name=name;
this.isStudent=isStudent;



}

Person.prototype.sayHi =function(){
console.log(`Hi ${this.name}`)

}
var mahmood =new Person("Mahmood",false);
var ahmad=new Person("Ahmad",true);
mahmood.sayHi();

console.log(ahmad);
console.log(Person);*/
var cats= [];

var frankie = new Cat("Frankie", ["cuddling", "chasing", "food"], `images/frankie.jpeg`, true, true, "shorthair");
//new Cat("Frankie", ["cuddling", "chasing", "food"], `images/frankie.jpeg`, true, true, "shorthair");
//momken heek kaman
var serena=new Cat("Sereena",["cuddling", "chasing", "food"],`images/serena.jpeg`, false, true, "Turkish");
var jumper = new Cat("Jumper", ["cuddling", "chasing", "napping"], `images/jumper.jpeg`, true, false, "British")
function Cat(name, likes, imagePath, goodWithDogs, goodWithCats, breed) {
    this.name = name;
    this.age = 0;
    this.likes = likes;
    this.imagePath = imagePath;
    this.goodWithCats = goodWithCats;
    this.goodWithDogs = goodWithDogs;
    this.breed = breed;
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



    var imgEl = document.createElement("img");
    articleEl.appendChild(imgEl);
    //setAttribute awal para alattribute name o altani alvalue elo
    imgEl.setAttribute("src", this.imagePath);


}



/*var frankie =
{
    name: "Frankie",

    age: 0,
    likes: ["cuddling", "chasing", "food"],
    imagePath: `images/frankie.jpeg`,
    goodWithDogs: false,
    goodWithCats: true,
    breed: "britich shorthair",
    getAge: function (min, max) {
        this.age = getRandomNum(min, max);
    },

    //kol al7aki eli 3melto ta7t taba3 alDom bedi ajebo o a3melo hoon be method 
    //3adi altare2teen bzboto
    render: function () {
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



        var imgEl = document.createElement("img");
        articleEl.appendChild(imgEl);
        //setAttribute awal para alattribute name o altani alvalue elo
        imgEl.setAttribute("src", this.imagePath);


    }


};





var sereena =
{
    name: "Sereena",
    age: 0,
    likes: ["cuddling", "chasing", "napping"],
    imagePath: `images/serena.jpeg`,
    goodWithDogs: false,
    goodWithCats: true,
    breed: "britich shorthair",
    getAge: function (min, max) {
        this.age = getRandomNum(min, max);
    },

    //kol al7aki eli 3melto ta7t taba3 alDom bedi ajebo o a3melo hoon be method 
    //3adi altare2teen bzboto
    render: function () {
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
        pEl.textContent = `Serena is adorable,and is ${this.age} months old`;
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



        var imgEl = document.createElement("img");
        articleEl.appendChild(imgEl);
        //setAttribute awal para alattribute name o altani alvalue elo
        imgEl.setAttribute("src", this.imagePath);


    }


};

//anytime you make a functions inside the object thay must be called from outside the object
//hay altare2a eli banadeeh fiha lazem esem alobj . ese, alfunction
//eza ma 3nelet heek ma ra7 yetnada alfunction la7aloo 


//anytime you make a functions inside the object thay must be called from outside the object
//hay altare2a eli banadeeh fiha lazem esem alobj . ese, alfunction
//eza ma 3nelet heek ma ra7 yetnada alfunction la7aloo 
var jumper =
{
    name: "Jumper",
    age: 0,
    likes: ["cuddling", "chasing", "napping"],
    imagePath: `images/jumper.jpeg`,
    goodWithDogs: false,
    goodWithCats: true,
    breed: "britich shorthair",
    getAge: function (min, max) {
        this.age = getRandomNum(min, max);
    },

    //kol al7aki eli 3melto ta7t taba3 alDom bedi ajebo o a3melo hoon be method 
    //3adi altare2teen bzboto
    render: function () {
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
        pEl.textContent = `jumper is adorable,and is ${this.age} months old`;
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



        var imgEl = document.createElement("img");
        articleEl.appendChild(imgEl);
        //setAttribute awal para alattribute name o altani alvalue elo
        imgEl.setAttribute("src", this.imagePath);


    }


};*/
function getRandomNum(min,max)

{
return Math.floor(Math.random() * (max-min+1))+min;
}
//var cats=[frankie,serena,jumper];
for(let i=0;i<cats.length;i++){
    cats[i].getAge(3,7);
    cats[i].render();


}

//frankie.getAge(2, 5);
//frankie.render();
//serena.getAge(3, 7);
//serena.render();
//jumper.getAge(1, 6);
//jumper.render();