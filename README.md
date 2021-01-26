# Getting Started with Create React App

Ao baixar o projeto execute o comando yarn para baixar todas as dependências.
Estou utilizando um MOCK API com json-server, então você vai precisar executar
o seguinte comando antes da aplicação:

npx json-server --watch src/api/api.json --port 33333

Assim o "servidor" irá começar a funcionar, então execute em outra aba do terminal
yarn start para inicar a aplicação.

## Available Scripts

In the project directory, you can run:

npx json-server --watch src/api/api.json --port 33333
yarn start 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

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
