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

# Estrutura do Projeto

```txt
InfnetFoodAT/
│
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
│
├── assets/
│   └── images/
│       ├── banner.jpg
│       ├── bebidas.jpg
│       ├── brownie.jpg
│       ├── coca.jpg
│       ├── espaguete.jpg
│       ├── lanches.jpg
│       ├── logo.png
│       ├── pizza-calabresa.jpg
│       ├── sobremesas.jpg
│       ├── suco.jpg
│       ├── sushi.jpg
│       ├── xburguer.jpg
│       └── xsalada.jpg
│
├── components/
│   ├── CategoryCard.js
│   ├── CustomButton.js
│   ├── CustomInput.js
│   ├── ProductCard.js
│   └── RestaurantCard.js
│
├── context/
│   ├── AuthContext.js
│   ├── CartContext.js
│   ├── OrdersContext.js
│   └── ThemeContext.js
│
├── data/
│   ├── categories.js
│   ├── orders.js
│   ├── products.js
│   └── restaurants.js
│
├── navigation/
│   └── AppNavigator.js
│
├── screens/
│   ├── CartScreen.js
│   ├── CheckoutScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── OrdersScreen.js
│   ├── ProductDetailsScreen.js
│   ├── ProductsScreen.js
│   ├── ProfileScreen.js
│   ├── RestaurantDetailsScreen.js
│   ├── RestaurantsScreen.js
│   └── SettingsScreen.js
│
├── services/
│   └── api.js
│
└── theme/
    ├── colors.js
    └── styles.js
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
