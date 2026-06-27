# InfnetFood 

Aplicativo mobile desenvolvido em React Native com Expo para gerenciamento de pedidos e delivery de lanches e refeições.

##  Sobre o Projeto

O InfnetFood foi desenvolvido como projeto integrado da disciplina de Desenvolvimento Mobile utilizando React Native e Expo.

O aplicativo permite:

* Cadastro e autenticação de usuários
* Listagem de restaurantes
* Visualização de produtos
* Adição de itens ao carrinho
* Finalização de pedidos
* Consulta automática de endereço via CEP
* Histórico de pedidos
* Perfil do usuário
* Navegação entre telas utilizando React Navigation

---

##  Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* Context API
* ViaCEP API
* JavaScript ES6+

---

##  Estrutura do Projeto

```text
InfnetFoodAT/
│
├── assets/
├── components/
├── context/
│   ├── CartContext.js
│   └── OrdersContext.js
│
├── screens/
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── RestaurantsScreen.js
│   ├── RestaurantDetailsScreen.js
│   ├── ProductDetailsScreen.js
│   ├── CheckoutScreen.js
│   ├── OrdersScreen.js
│   └── ProfileScreen.js
│
├── App.js
├── package.json
└── README.md
```

---

##  Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/InfnetFoodAT.git
```

Entre na pasta:

```bash
cd InfnetFoodAT
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npx expo start
```

---

##  Funcionalidades

### Login e Cadastro

* Autenticação simulada
* Persistência de navegação

### Restaurantes

* Listagem de restaurantes
* Visualização dos detalhes

### Produtos

* Visualização de produtos
* Adição ao carrinho

### Carrinho

* Controle de quantidade
* Cálculo automático do total

### Checkout

* Consulta de CEP utilizando ViaCEP
* Escolha da forma de pagamento
* Confirmação do pedido

### Pedidos

* Histórico de pedidos realizados

### Perfil

* Exibição dos dados do usuário

---

##  API Utilizada

ViaCEP

https://viacep.com.br

Responsável pela consulta automática de endereço através do CEP informado pelo usuário.

---

##  Evidências do Projeto

As capturas de tela de cada etapa do desenvolvimento encontram-se anexadas ao relatório PDF solicitado pela atividade.

---

##  Desenvolvido por

Keila Santana

Projeto acadêmico desenvolvido para a INFNET.
