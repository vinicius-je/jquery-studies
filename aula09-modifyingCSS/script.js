
// adiciona classe
setTimeout(() => {
    $("h1").addClass("bg-blue")
}, 1000)

// remove classe
setTimeout(() => {
    $("h1").removeClass("bg-blue")
}, 3000)

// adiciona ou remove classe
setInterval(() => {
    $("h1").toggleClass("bg-blue")
}, 1000);

// acessa propriedades do css e define valores
$("h1").toggleClass("bg-blue")

console.log($("h1").css("background-color", "red"))

// definindo valores para duas propriedades css
let h1 = $("h1");

console.log(h1.css({
    "background-color":"red", 
    "font-size": "50px"
}))