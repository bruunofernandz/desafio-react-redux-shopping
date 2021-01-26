# Como inicar o sistema

Ao baixar o projeto execute o comando yarn para baixar todas as dependências.
Estou utilizando um MOCK API com json-server, então você vai precisar executar
o seguinte comando antes da aplicação:

npx json-server --watch src/api/api.json --port 33333

Assim o "servidor" irá começar a funcionar, então execute em outra aba do terminal
yarn start para inicar a aplicação.

## Scripts Disponíveis

In the project directory, you can run:

npx json-server --watch src/api/api.json --port 33333
yarn start 

### `yarn start`

A aplicação irá executar em:
Abra [http://localhost:3000](http://localhost:3000) e veja no seu navegador.

## Sobre o desafio

Desafio front-end
O sistema deverá ser em React com redux.

- Deverá conter uma rota de listagem e descrição de produtos.

- O layout deverá ser criado pelo desenvolvedor.

- Os dados devem vir de um MOCK API.

- Deverá existir a possibilidade de adicionar o produto no carrinho.

- Acrescentar e diminuir a quantidade.

- Remover do carrinho.

- - Deverá ser possível acessar o carrinho com os produtos em qualquer tela do sistema.

- Na listagem, deverá ser possível filtrar pelo nome dos produtos ou id.

- Utilizar alguma metodologia css ou JSS ou Styled Component.

- Disponibilizar o código em um repositório do github.
