
let selected = $("#container2").children();

// filtrar por critério
selected.filter(".div2")

// somente o primeiro elemeto e o último
selected.first();
selected.last();

// evitar elemento
selected.not("#div8");

// eq -> seleciona pelo index
selected.eq(2);
