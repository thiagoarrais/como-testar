Como testar usando mocks
======

Testa rotina que não tem retorno próprio através da atuação dela em mocks.

O código em `../side-effects` é equivalente a isso, mas aqui é usada uma lib
de mocking.

Para rodar os testes:

    ./gradlew test

Código fica em `src/main/java/Roteador.java`

Teste fica em `src/test/java/RoteadorTest.java`

Introdução a Mockito: http://site.mockito.org/#how

Dependencias
------
Gradle (>= 4.0? não cheguei a testar com versões anteriores, mas deve funcionar)

