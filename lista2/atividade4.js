"use strict";
let dataAtual = new Date();
let aniversario = new Date(2006, 9, 6);
if (dataAtual.getMonth() > aniversario.getMonth()) {
    console.log(`Já fez aniversario`);
}
else if (dataAtual.getMonth() < aniversario.getMonth()) {
    console.log(`Não fez aniversario`);
}
else {
    if (dataAtual.getDate() > aniversario.getDate()) {
        console.log(`já fez aniversario`);
    }
    else {
        console.log(`Não fez aniversario`);
    }
}
