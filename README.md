# Cifra de César


## 1. Prefácio

Cifrar significa codificar. A cifra de César é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

caeser-cipher

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (offset) de 3 posições:

    Alfabeto sem cifrar: A B C D E F G

    H I J K L M N O P Q R S T U V W X Y Z
    Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
    A letra A será D
    A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são
decifradas com facilidade e não oferecem muita segurança na comunição, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13

## 2. Resumo do projeto

Nesse projeto foi criado uma interface onde o usário digita uma mensagem em uma caixa de texto (input) e um numero de deslocamento para poder codificar a mensagem digitada usando a lógica da cifra de cesar. Na caixa de texto ao lado, o usuário pode decodificar usando a mesma lógica.

### Definição do produto

obejetivo do meu projeto é fazer uma continuação do filme Meninas Malvadas (lançado no Brasil no dia 9 de julho de 2004). No filme, as personagens principais fazem um livro onde colocam os segredos dos seus colegas de escola. Em certo momento do enredo as páginas do livro são descobertas gerando o conflito principal do filme.

Sendo assim, o site é um meio que as personagens criaram para não correr mais o risco de serem descobertas por terceiros, um meio de falarem mal da vida dos outros com segurança e sem medo. 

Esse site é divulgado apeas para membros do grupo, só elas tem acesso. Nele uma das meninas cifra a fofoca que quer compartilhar e manda a mensagem cifrada para as colegas, e essas entram no site para decifrar assim que as recebem. Fazendo assim um jeito mais seguro de compartilhar a informação.


### Interface do usuário (UI)

* Dois campos de mensagens = Inputs onde o usuário digita a mensagem que deseja codificar/decodificar

* Dois campos de mensagens = inputs onde o usuário digita a chave de deslocamento para codificar/decodificar

* Dois botões = Rodam as funções para codificar e decodificar as mensagens digitadas no momento em que são clicados

* Dois paragráfos distintos = Um para mostrar a mensagem cifrada e outro para mostrar a mensagem decifrada


## 10. Checklist

Essa seção é para te ajudar a ter um controle do que você precisa completar.

### Parte Obrigatória

* [X] `README.md` adicionar informação sobre o processo e decisões do desenho.
* [X] `README.md` explicar claramente quem são os usuários e as suas relações
  com o produto.
* [X] `README.md` explicar claramente como o produto soluciona os
  problemas/necessidades dos usuários.
* [X] Usar VanillaJS.
* [X] **Não** usar `this`.
* [X] Implementar `cipher.encode`.
* [X] Implementar `cipher.decode`.
* [ ] Passar o linter com a configuração definida.
* [X] Passar as provas unitárias.
* [X] Testes unitários cubrindo 70% dos _statements_, _functions_ e _lines_, e
  no mínimo 50% das _branches_.
* [X] Interface que permita escolher o `offset` (chave de deslocamento) usava
  para cifrar/decifrar.
* [X] Interface que permita escrever um texto para ser cifrado.
* [X] Interface que mostre o resultado da cifra corretamente.
* [X] Interface que permita escrever um texto para ser decifrado.
* [X] Interface que mostre o resultado decifrado corretamente.

### Parte Opcional: "Hacker edition"

* [X] Cifrar/decifrar minúsculas.
* [X] Cifrar/decifrar _outros_ caractéres (espações, pontuação, `ç`, `á`, ...).
* [X] Permitir usar `offset` negativo.
