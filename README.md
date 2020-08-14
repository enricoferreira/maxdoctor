# app-formulario
Este Projeto tem como objetivo fazer uma validação em um formulário, onde temos informações de CRM e UF fornecidas pelo usuário, a UF é um campo de select onde os dados são carregados de uma api.
O projeto foi desenvolvido em Vue e utiliza VueRouter para direcionamento de rotas (como a transição da rota "/" para a rota "/maxdoctor") e Vuex para atualização do estado de variáveis como por exemplo o estado da mensagem de sucesso ao término das validações no formulário se tudo estiver OK.

## Project setup
Para rodar o Projeto é necessário ter em sua máquina o node instalado, caso não tenha => https://nodejs.org/en/download/ . Para confirmar que o node está instalado, digite em seu terminal <b>node -v</b> , para verificar se existe alguma versão.
Após a confirmação de que você tem o node em sua máquina e o download do projeto do github, vá até a pasta onde o projeto foi baixado e procure pelo arquivo package.json, inicie o terminal no diretório que contém o package.json e digite o comando:

```
npm install
```

Esse comando carregará as dependências do projeto na pasta node_modules.
Feito isso, digite o comando:

```
npm run serve
```

Esse comando irá executar o projeto e disponibilizar duas URLs para que você possa testar o projeto