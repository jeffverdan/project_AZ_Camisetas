# Projeto de Loja de Camisetas

Este é um projeto de loja de camisetas desenvolvido com Next.js, Node.js v18.17, Tailwind CSS e TypeScript.

## Visão Geral

Este projeto consiste em uma página principal que mostra uma lista de camisetas disponíveis para compra. Além disso, há uma página de detalhes que exibe informações específicas sobre uma camiseta selecionada.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): Framework React com funcionalidades avançadas para renderização no servidor, roteamento e muito mais.
- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript para o servidor.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS utilitário para estilização rápida e eficiente.
- TypeScript: Linguagem de programação tipada que se integra perfeitamente com o JavaScript.

## Configuração do Ambiente de Desenvolvimento

1. Certifique-se de ter o Node.js (v18.17 ou superior) instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Clone este repositório em sua máquina local.
3. Navegue até o diretório do projeto e execute `npm install` ou `yarn install` para instalar as dependências.
4. Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.

## Estrutura do Projeto

/
|-- pages/ # Páginas do Next.js
| |-- index.tsx # Página principal com a lista de camisetas
| |-- camiseta/[id].tsx # Página de detalhes da camiseta
|-- components/ # Componentes React reutilizáveis
|-- public/ # Arquivos estáticos públicos
|-- styles/ # Arquivos de estilo, incluindo global.css
|-- tsconfig.json # Configurações do TypeScript
|-- next.config.js # Configurações do Next.js
|-- package.json # Arquivo de manifesto do Node.js
|-- README.md # Este arquivo README