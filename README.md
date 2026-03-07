# 🚀 API GitHub

### Uma aplicação Front-end moderna e responsiva para explorar perfis e repositórios do GitHub, com análise estatística de linguagens.

## 📖 Sobre o Projeto

O **GitHub Repositories Explorer** é uma aplicação Single Page Application (SPA) desenvolvida para consumir a API pública do GitHub. O objetivo principal é oferecer uma experiência de busca fluida, onde o usuário pode localizar um perfil e visualizar seus repositórios de forma organizada.

O diferencial técnico do projeto é o **processamento de dados no front-end**: a aplicação analisa todos os repositórios retornados, identifica as linguagens utilizadas e gera dinamicamente um sistema de filtros e estatísticas, permitindo que o usuário navegue pelos projetos baseados em tecnologias específicas (ex: filtrar apenas projetos em JavaScript).

## 🛠️ Tecnologias e Ferramentas

O projeto foi construído com uma stack moderna focado em performance e escalabilidade:

- **Core:** [ReactJS](https://reactjs.org/) (Hooks, Functional Components)
- **Build Tool:** [Vite](https://vitejs.dev/) (Substituindo o CRA para builds extremamente rápidos)
- **Estilização:** [Styled Components](https://styled-components.com/) (CSS-in-JS, Theming, Global Styles)
- **Roteamento:** [React Router DOM v6](https://reactrouter.com/)
- **Http Client:** [Axios](https://axios-http.com/) (Com configuração de BaseURL e interceptors)
- **Ícones:** React Icons
- **Qualidade de Código:** ESLint (Padrão Airbnb), Prettier e PropTypes.

## ✨ Funcionalidades em Destaque

### 1. Busca e Navegação
Interface limpa para entrada de usuário (`/:login`). Validação de busca e redirecionamento para rota dinâmica.

<img width="1909" height="864" alt="Captura de tela 2026-02-23 052135" src="https://github.com/user-attachments/assets/2f49c78e-af79-4798-8286-d884aed988f4" />

### 2. Dashboard do Usuário (Sidebar)
Exibição detalhada com Avatar, Seguidores, Seguindo, Empresa, Localização e Blog. Dados tratados para não quebrar o layout caso estejam ausentes na API.

### 3. Sistema de Filtragem Inteligente (Lógica de Negócio)
Uma das partes mais complexas da aplicação. Ao receber os dados da API, utilizamos o método `.reduce()` para criar um mapa de ocorrências das linguagens.
- **Visual:** Cores dinâmicas para cada linguagem (ex: JS é amarelo, TS é azul).
- **UX:** Ao clicar em uma linguagem, a lista de repositórios é filtrada instantaneamente sem novas requisições.

<img width="1908" height="875" alt="Captura de tela 2026-02-23 052427" src="https://github.com/user-attachments/assets/d975dc64-3327-48fa-947f-9392fb130c38" />

### 4. Responsividade (Mobile First)
Layout adaptativo utilizando `flexbox` e `grid`.
- **Desktop:** Layout de duas colunas (Sidebar fixa + Grid de Cards).
- **Mobile:** Layout em coluna única, com menu de filtros adaptado e cards expandidos.

## 🧠 Destaques da Arquitetura

O código foi organizado seguindo princípios de **Clean Code** e **Atomic Design**:

### Performance com Promise.all
Para evitar o "efeito cascata" (waterfall) nas requisições, utilizamos `Promise.all` na página de repositórios. Isso permite buscar os dados do usuário (`getUser`) e os repositórios (`getRepos`) em paralelo, reduzindo o tempo de carregamento pela metade.

```javascript
// src/pages/RepositoriesPage/index.jsx
const [userResponse, repositoriesResponse] = await Promise.all([
    getUser(login),
    getRepos(login),
]);
```
Design System Centralizado
Toda a identidade visual (cores, espaçamentos, fontes e breakpoints) está centralizada no Theme.jsx. Isso facilita a manutenção e garante consistência visual (ex: Dark Mode nativo).
```script
color: ${(props) => props.theme.colors.gray600};
font-family: ${(props) => props.theme.fontFamily.sans};
```
### 1. Clone o repositório.
```bash
git clone [https://github.com/GustavoAbreuuu/React-Git-API.git](https://github.com/GustavoAbreuuu/React-Git-API.git)
```
### 2. Instale as dependências.
```bash
npm install
```
### 3. Crie um arquivo .env na raiz baseado no .env.example.
```bash
VITE_API_BASE_URL=[https://api.github.com](https://api.github.com)
```
### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
