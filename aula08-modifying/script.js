
//html("texto") => adiciona elementos html e texto dentro dos mesmos
//text("texto") => adiciona somente texto

console.log($("#lista1").html("<li>Novo item 1</li> <li>Novo item 2</li>"))

console.log( $("#novo").attr("name", "Item de compra") );

console.log( $("li").attr("name", (i) => {
    return "Item " + i;
}) );

// i -> index ; oValue -> valor original do name
$("li").attr("name",(i, oValue) => {
    return oValue + i;
})

$("input").attr("maxlength", 5).attr("type", "password");

