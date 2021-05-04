
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

// Selecionando elemento por atributo
// console.log($("[key = 2]").remove());

// Empty -> remove todo os filhos
// lista.empty();

// Inserir elementos
// let itens = lista.html();
// lista.html(itens + "<li> teste </li>");

// Inserir elementos com append => adicionou um elementou no final
// lista.append("<li> novo teste </li>")

// Inserir elemento no início
// lista.prepend("<li> novo teste </li>")

// Inseri após o fechamento da lista 
// lista.after("<li> novo teste </li>")

// Inseri antes o abrimento da lista 
// lista.before("<li> novo teste 2 </li>")

let rec = $(".rect");

rec.append("append");
rec.prepend("prepend");
rec.after("after");
rec.before("before");

