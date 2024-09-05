# Guia de Organização do Projeto com TailwindCSS

## Passo 1: Configuração Inicial

**Antes de começar a codar usando Tailwind, execute o seguinte comando para atualizar automaticamente sempre que você alterar o estilo:**

```bash
npx tailwindcss -i ./src/css/input.css -o ./build/assets/css/app.css --watch
```

> **Dica:** Para facilitar ainda mais o desenvolvimento, instale a extensão **"Tailwind CSS IntelliSense"** no seu editor de código. Ela vai te ajudar a ter autocompletes, sugestões e documentação diretamente no editor.

## Estrutura de Pastas e Arquivos

Aqui está a estrutura inicial do projeto:

```txt
projeto/
│
├── src/
│   ├── css/
│   │   └── input.css  # Arquivo onde importar os componentes do Tailwind e suas personalizações.
│   ├── js/
│   │   └── script.js  # Coloque aqui os arquivos JavaScript.
│   └── index.html     # Coloque aqui o arquivo principal HTML.
│
├── /build
│   ├── /assets
│   │   ├── /css          # Arquivos CSS gerados pelo Tailwind
│   │   └── /images       # Imagens otimizadas para produção
│   └── /js               # Arquivos JavaScript compilados
│   └── index.html  # Copia ou versão otimizada do arquivo HTML para produção.
│
└── tailwind.config.js  # Arquivo de configuração do TailwindCSS para customizar cores, fontes, etc.
```

### Explicação dos Caminhos e Pastas

- **`src/`:** Pasta principal onde você vai trabalhar diretamente com seus arquivos de desenvolvimento.
  - **`css/`:** Contém o arquivo `input.css`, onde você importa os estilos do Tailwind e define seus próprios estilos personalizados.
  - **`js/`:** Coloque aqui os arquivos JavaScript que controlam o comportamento interativo da sua página.
  - **`index.html`:** O arquivo HTML principal do seu projeto. Todo o desenvolvimento inicial será feito aqui.

- **`build/`:** Pasta destinada a conter os arquivos finais, otimizados e prontos para produção.
  - **`assets/css/`:** Aqui será gerado o arquivo `app.css` pelo Tailwind, contendo todas as classes de estilo que você usou no seu projeto.
  - **`assets/js/`:** Você pode mover seu arquivo `script.js` otimizado para cá após a compilação/minificação.
  - **`index.html`:** Este será o arquivo HTML para produção, que pode ser uma versão otimizada do original em `src`.

- **`tailwind.config.js`:** Arquivo de configuração do Tailwind. Use-o para definir cores personalizadas, fontes, tamanhos e outros ajustes específicos do projeto.

## Configurações Customizadas

Adicione cores, fontes e tamanhos personalizados no arquivo `tailwind.config.js` conforme o exemplo abaixo:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cor-0': 'var(--cor-0)',
        'cor-1': 'var(--cor-1)',
        // continue para todas as cores
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kulim': ['Kulim Park', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', '1.35'], 
        'sm': ['0.875rem', '1.43'],
        // continue para todos os tamanhos de fonte
      },
      backgroundImage: {
        'bg-principal': 'radial-gradient(circle at top left, rgba(235, 101, 18, 0.45) 0%, rgba(0, 0, 0, 0) 25%), radial-gradient(circle at bottom right, rgba(235, 101, 18, 0.45) 0%, rgba(0, 0, 0, 0) 25%), #000000',
      },
    },
  },
  plugins: [],
}
```
