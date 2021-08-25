# Project Architecture

A arquitetura do projeto segue práticas de clean architecture e DDD.

## domain
Camada responsável por cuidar das responsabilidades de 'enterprise', bem como business rules

## app
Camada responsável por cuidar das responsabilidades da aplicação, bem como casos de uso e repositories

## infra
Camada responsável por fazer a comunicação entre a aplicação e outras aplicações externas, como outras integrações e banco de dados

## presentation
Camada responsável por identificar como ocorre a comunicação com o mundo externo, como a aplicação final, erros, middleware, controllers, etc.
