
// Jquery retorna o próprio objeto, deste modo é possível encadear funções
let jq = $("#lista1").slideUp(2000).slideDown(1000);

console.log(jq)

// Demonstração da lógica do Jquery com Javascript

let objeto = {
    print10: function(){
        console.log(10)
        return this;
    },
    print20: function(){
        console.log(20)
        return this;
    }
}

let eleMesmo = objeto.print10().print20().print10().print20();


