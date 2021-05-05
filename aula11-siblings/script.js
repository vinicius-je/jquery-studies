
let selected = $("#div3")

// retorna todos os elementos irmãos
selected.siblings("#div4");

// retorna os proximos elemtos 
selected.nextAll();

// retorna o próximo elemento
selected.next();

// retorna o elemento anterior
selected.prev();

// retorna todos os elementos anteriores
selected.prevAll();

// retorna todos os elementos até um elemento específico
selected.nextUntil(); 
selected.prevUntil()

console.log(selected.nextUntil("#div5"))