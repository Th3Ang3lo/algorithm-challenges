## Exercícios

---

### **1. fibonacci.js**

Crie uma função que sempre recebe um número como argumento, e deve retornar uma array com os N elementos da sequência de Fibonacci.

<aside>
💡 Ex.: ao passar 6 como argumento, deve retornar: **[0, 1, 1, 2, 3, 5]**.

</aside>

### 2. classificador.js

Crie uma função que sempre recebe uma array de objetos com as seguintes propriedades:

- souEu: bool
- responsavel: bool
- nome: str

Você deve organizar os objetos da mesma maneira de um grupo de WhatsaApp e retornar um array de nomes, na seguinte ordem:

1. Você (propriedade souEu: “true”)
2. Responsáveis (propriedade responsavel: “true” e listados em ordem alfabética)
3. Não responsáveis (listados em ordem alfabética)

### 3. faxina.js

Crie uma função que sempre recebe um objeto como argumento e retorna-o excluindo as propriedades sem valor.

<aside>
💡 Ex.: {"fizz": "buzz", "foo": null, "bar": 42} deve retornar {"fizz": "buzz", "bar": 42}

</aside>

### 4. validade.js

Crie uma função que recebe uma data e uma string. Essa string é a validade. Você deve retornar indicando se está expirado ou não.

<aside>
💡 Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") retorna true.

</aside>

### 5. molduras.js (EXTRA, OPCIONAL)

Crie uma função que recebe dois números maiores que zero e exibe na tela (console) uma moldura com essas dimensões.