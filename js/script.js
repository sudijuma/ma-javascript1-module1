const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Q1
const cat = [
    {
        complain: function () {
            console.log("Meow!")
        }
    },
]

//Q2
const heading = document.querySelector("h3");
heading.innerHTML = "Uppdated heading"


//Q3
heading.style.fontSize = "2em";

//Q4
heading.className = "subheading";
console.log(heading);

//Q5
var paragraphs = document.querySelectorAll("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#ff0000";
}

//Q6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Q7
function dude(list){
    for (var i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}
dude(cats)

//Q8
