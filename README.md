Como testar
========

[![Join the chat at https://gitter.im/como-testar/Lobby](https://badges.gitter.im/como-testar/Lobby.svg)](https://gitter.im/como-testar/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Este é um repo de estudo sobre testes unitários. Vamos criar
em conjunto várias estratégias de teste para um único problema.

Crie o seu programa e seus testes ou leia o que as outras pessoas
criaram. O importante é discutirmos. Vá para
https://gitter.im/como-testar/Lobby para nos encontrar.

Problema
-----

Programa precisa receber uma mensagem JSON e decidir para
qual de dois sub-programas rotear.

Formato da mensagem:

    {
        "codigo": 42,
        "conteudo": "não entre em pânico"
    }

Caso o codigo seja par, o programa deve rotear a mensagem para
um sub-programa. Caso seja ímpar, para outro.

Proposta
-----

Escreva o programa e, principalmente, _os testes_ que demonstram
que seu programa funciona. Você pode usar o que quiser (qualquer
linguagem, qualquer biblioteca de testes, qualquer framework,
etc.).

1. Crie uma pasta nova para sua solução
2. Escreva seu código e seus testes
3. Crie um README com instruções de como executar seu código
