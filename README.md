# Javascript Functional Programming Fundamentals

- Funções permitem criar blocos de código com escopos restritos e com funcionalidade específica.
- Funções podem receber valores para serem manipulados internamente assim como também retornar valores.
- Os valores recebidos por uma função são chamados de parâmetros e o valor retornado é realizado pela palavra-chave **return**.

## 1. Function Declaration

```
function greet(name) {
    return `Hello, ${name}!`
}

console.log(greet("John"))

const greetMessage = greet("Ann")
console.log(greetMessage)
```

## 2. Arrow Function

- Arrow Functions são uma forma diferente de declarar uma função em JavaScript.
- Arrow Functions têm uma sintaxe mais curta e sucinta.

```
const greet = name => `Hello, ${name}!` // -> string interpolation

const greetMessage = greet("Ann")
console.log(greetMessage)
```

- Arrow Functions que possuem mais de uma linha de código devem ser envolvidas com `{}` e também se algum valor for retornado a palavra-chave **return** deve ser usada.
- Também, Arrow Functions que possuem mais de um parâmetro devem usar `()` para envolver os parâmetros.

```
const greet = (name, surname) => `Hello, ${name}!` // -> string interpolation

const greetMessage = greet("Ann", "Lanne")
console.log(greetMessage)
```
