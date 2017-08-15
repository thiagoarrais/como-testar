Olá!
========

[![Join the chat at https://gitter.im/como-testar/Lobby](https://badges.gitter.im/como-testar/Lobby.svg)](https://gitter.im/como-testar/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Este é um repo de estudo sobre testes unitários. O código aqui serve
de referência. A coisa acontece mesmo é no [nosso canal gitter][1]. Entra
lá e vamos conversar sobre testes!

Como _ler_ esse repositório
---------
Cada pasta aqui contém código que demonstra uma técnica para escrever
testes unitários. Você pode executar todo o código aqui por conta
própria. As linguagens de programação e abordagens variam de uma pasta
para a outra, mas você não precisa ser o grande programadorzão ninja
poliglota para entender.

Em cada pasta você vai encontrar um README. Eles são guias para que
você consiga tanto executar os testes como ler o código. O README vai
indicar onde encontrar o código de teste e código testado. Dê uma olhada
em tudo e [entre no gitter][1] para conversarmos.

O problema padrão
-----------------
Para que nos concentremos nas várias técnicas de teste, escolhemos
resolver o mesmo problema de várias formas. Assim a gente pode comparar
soluções e discutir cada uma sem entrar em um contexto diferente para
cada.

Nosso problema padrão é rotear mensagens. Cada mensagem é composta de
código e de corpo. Cada programa precisa receber mensagens nesse formato
e decidir para qual de dois componentes rotear.

Caso o código seja par, o programa deve rotear a mensagem para
um componente. Caso seja ímpar, para outro.

A mensagem abaixo, por exemplo, deve ser roteada para o processador de
mensagens pares:

    {
        "codigo": 42,
        "corpo": "não entre em pânico"
    }
    
Esta outra deve ser roteada para o processador de ímpares:

    {
        "codigo": 13,
        "corpo": "quebrei um espelho"
    }

Como _modificar_ esse repositório
-----

Escreva o programa e, principalmente, _os testes_ que demonstram
que seu programa funciona. Você pode usar o que quiser. Qualquer
linguagem, qualquer biblioteca de testes, qualquer framework,
etc.

1. Crie uma pasta nova para sua solução
2. Escreva seu código e seus testes
3. Crie um README com instruções de como executar seu código
4. Envie uma pull request

 [1]: https://gitter.im/como-testar/Lobby
