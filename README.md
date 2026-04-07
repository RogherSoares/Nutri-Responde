# Nutri Responde API

[![CI](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/actions/workflows/ci.yml)
![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-20%2B-339933?logo=node.js&logoColor=white)

Backend da plataforma Nutri Responde, desenvolvido com NestJS, TypeScript e TypeORM.

O projeto organiza o dominio de uma aplicacao para acompanhamento nutricional, incluindo cadastro de usuarios, perfil profissional do nutricionista, pacientes, duvidas e respostas, plano nutricional, refeicoes do plano, pagamentos, especialidades e vinculo nutricionista-paciente.

## Sumario

- [Visao Geral](#visao-geral)
- [Arquitetura e Stack](#arquitetura-e-stack)
- [Ferramentas e Funcionalidades](#ferramentas-e-funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Modelo de Dados](#modelo-de-dados)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Scripts Disponiveis](#scripts-disponiveis)
- [Colaboradores](#colaboradores)
- [Licenca](#licenca)

## Visao Geral

O objetivo deste backend e oferecer uma API REST para suportar fluxos centrais de uma plataforma de nutricao:

- Gestao de usuarios com papeis diferentes.
- Relacao entre nutricionistas e pacientes.
- Registro de avaliacao antropometrica.
- Organizacao de planos nutricionais e refeicoes.
- Fluxo de duvidas e respostas.
- Controle de pagamentos.

Atualmente, o modelo relacional esta mapeado no TypeORM com entidades e relacionamentos alinhados ao DER do projeto.

## Arquitetura e Stack

### Linguagem e framework

- Node.js
- TypeScript
- NestJS

### Persistencia

- TypeORM
- MySQL
- Driver mysql2

### Qualidade de codigo e testes

- ESLint
- Prettier
- Jest

### Bibliotecas de suporte

- class-validator
- class-transformer
- @nestjs/config

## Ferramentas e Funcionalidades

### Ferramentas utilizadas

![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-0.3-E83524?logo=typeorm&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30-C21325?logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3-F7B93E?logo=prettier&logoColor=1A2B34)

- Nest CLI para geracao e organizacao de modulos, controllers e services.
- TypeORM para mapeamento objeto-relacional e sincronizacao de schema.
- MySQL como banco de dados relacional principal.
- ESLint e Prettier para padrao de codigo e formatacao.
- Jest para testes unitarios e e2e.

### Funcionalidades de dominio mapeadas

- Usuario
- Nutricionista Perfil
- Paciente
- Duvida
- Resposta
- Especialidade
- Nutricionista Especialidade
- Vinculo Nutri Paciente
- Avaliacao Antropometrica
- Plano Nutricional
- Refeicao Plano
- Pagamento

### Estado atual da API

- Entidades e relacionamentos ja conectados ao banco via TypeORM.
- Modulos registrados no AppModule.
- Estrutura base CRUD gerada para os recursos.

## Estrutura do Projeto

```text
src/
  main.ts
  app/
    app.module.ts
  usuario/
  nutricionista_perfil/
  paciente/
  duvida/
  resposta/
  especialidade/
  nutricionista_especialidade/
  vinculo_nutri_paciente/
  avaliacao_antropometrica/
  plano_nutricional/
  receita_plano/
  pagamento/
test/
```

Padrao adotado por modulo:

- controller para endpoints HTTP
- service para regras de negocio
- dto para contratos de entrada e saida
- entities para mapeamento com o banco

## Modelo de Dados

As entidades foram modeladas com relacoes principais como:

- Usuario para NutricionistaPerfil (1:1)
- Usuario para Paciente (1:1)
- NutricionistaPerfil para Especialidade por tabela associativa (N:N)
- NutricionistaPerfil para Paciente por VinculoNutriPaciente
- Paciente e NutricionistaPerfil para Duvida
- Duvida para Resposta
- Paciente e NutricionistaPerfil para AvaliacaoAntropometrica
- Paciente e NutricionistaPerfil para PlanoNutricional
- PlanoNutricional para ReceitaPlano
- Paciente e NutricionistaPerfil para Pagamento

Configuracao atual do TypeORM:

- banco: MySQL
- database: nutri_responde
- synchronize: true

Observacao importante:

- Em ambiente de producao, use migrations e evite synchronize: true.

## Como Executar o Projeto

Esta secao apresenta o fluxo completo, desde a criacao do projeto ate a execucao local.

### 1) Pre-requisitos

- Node.js 20+
- npm 10+
- MySQL 8+
- Git

### 2) Comandos usados para criar e preparar o projeto

Se voce for recriar o projeto do zero, os comandos base sao:

```bash
npm install -g @nestjs/cli
nest new nutri-responde --package-manager npm
cd nutri-responde
npm i --save @nestjs/typeorm typeorm mysql2 @nestjs/config class-validator class-transformer
```

### 3) Clonar e instalar dependencias

Para rodar este repositorio ja existente:

```bash
git clone <url-do-repositorio>
cd nutri-responde
npm install
```

### 4) Criar banco no MySQL

No MySQL, execute:

```sql
CREATE DATABASE nutri_responde;
```

### 5) Verificar configuracao de conexao

No arquivo src/app/app.module.ts, confirme os dados de conexao:

- host
- port
- username
- password
- database

Exemplo atual do projeto:

- host: localhost
- port: 3306
- username: root
- password: (vazio)
- database: nutri_responde

### 6) Executar em desenvolvimento

```bash
npm run start:dev
```

### 7) Gerar build de producao

```bash
npm run build
npm run start:prod
```

### 8) Testes e qualidade

```bash
npm run test
npm run test:e2e
npm run test:cov
npm run lint
npm run format
```

## Scripts Disponiveis

- npm run start: inicia aplicacao
- npm run start:dev: inicia com watch
- npm run start:debug: inicia com debug
- npm run build: gera build em dist
- npm run start:prod: executa build de producao
- npm run test: testes unitarios
- npm run test:e2e: testes end-to-end
- npm run test:cov: cobertura de testes
- npm run lint: analise estatica
- npm run format: formatacao automatica

## Colaboradores

- Rogher Soares
- Mateus Yano
- Joao Vinicius

## Licenca

Este projeto esta licenciado sob a licenca MIT.

Consulte o arquivo LICENSE para mais detalhes.
