"use strict";
let imiona = ["Jan", "Kasia", "Dam"];
console.log(`${imiona[0]}`);
let nazwiska = new Array("Adam", "Maciek", "Gargamel");
let tablicki = [];
tablicki.push(14);
console.log(`${typeof tablicki}`);
/*
concat() - łączy dwa stringi i tworzy z nich tablica
join()-zwracany jest ciąg tekstowy wszystkich wartości z tablicy
pop()-metoda usuwa i zwraca pierwszy element
reverse()-odwraca i zwraca pierwszy element
slice()-zwraca fragment tablicy
sort()-sortuje od najmniejszej do największej
splice()-usuwa podaną liczbę elementów
unshift()-wstawia nowy element na przód tablicy
*/
console.log("______________");
let owoce = ["jabłko", "arbuz", "banan", "gruszka"];
console.log(`${owoce.length}`);
owoce.push("ananas");
owoce.sort();
for (let i of owoce) {
    console.log(i);
}
owoce.shift();
owoce.pop();
owoce.push("cytryna");
owoce.reverse();
console.log("_____---_____");
for (let i of owoce) {
    console.log(i);
}
let kolory = ["czerwony", "zielony"];
let kolorki = ["niebieski", "żółty"];
let kolor = kolory.concat(kolorki);
console.log(`${kolor}`);
