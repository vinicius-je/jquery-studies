
let lista1 = $("#lista1");

// Vai além dos elememtos filhos (vários níveis)
lista1.find(".item2").fadeOut(2000);

// Apenas elemtos filhos(apenas um nível)
lista1.children(".item2").fadeIn(4000);


