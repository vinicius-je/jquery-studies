
// text() => retorna o texto do conteúdo html
// html() => retonar o elemento html e seu conteúdo
// val()  => retorna o valor do input
// attr() => atributo do elemento

let elemento = $("#lista1");

console.log(elemento.text())
console.log(elemento.html())

let input = $("#novo");
console.log(input.val())
console.log(input.attr("name"))

