# Medlogus - Frontend

Este é o frontend do sistema Medlogus desenvolvido em Angular com Tailwind CSS.

## Funcionalidades

- Cadastro de consultas médicas
- Listagem de consultas ordenadas por data/hora
- Filtro de consultas por data específica
- Validação de formulários
- Interface responsiva com Tailwind CSS
- Integração com API Java Spring Boot

## Tecnologias Utilizadas

- Angular 18
- Tailwind CSS
- TypeScript
- Angular Material (opcional)

## Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- API Java Spring Boot rodando na porta 8080

### Instalação

1. Navegue até o diretório do projeto:
```bash
cd frontLogus
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
ng serve
```

4. Acesse a aplicação em: `http://localhost:4200`

### Configuração da API

Certifique-se de que a API Java Spring Boot esteja rodando na porta 8080. A URL da API está configurada em:
`src/app/services/consulta.service.ts`

Se a API estiver em uma porta diferente, altere a variável `apiUrl` no serviço.

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── consulta-form/     # Formulário de cadastro
│   │   └── consulta-list/     # Lista de consultas
│   ├── models/
│   │   └── consulta.model.ts  # Modelo de dados
│   ├── services/
│   │   └── consulta.service.ts # Serviço de API
│   └── app.*                  # Componente principal
├── styles.css                 # Estilos globais (Tailwind)
└── index.html
```

## Funcionalidades Implementadas

### Formulário de Cadastro
- Campos obrigatórios: Nome do Paciente, CRM do Médico, Nome do Médico, Data/Hora, Número do Consultório
- Validação de formulário
- Feedback visual de sucesso/erro
- Reset automático após cadastro bem-sucedido

### Lista de Consultas
- Exibição de todas as consultas ordenadas por data/hora
- Filtro por data específica
- Contador de consultas encontradas
- Estados de loading e erro
- Interface responsiva

### Integração com API
- Endpoint POST `/consultas` para cadastro
- Endpoint GET `/consultas` para listagem
- Parâmetro opcional `data` para filtro
- Tratamento de erros da API

## Regras de Negócio Implementadas

- Validação de campos obrigatórios
- Formatação de datas e horários em português brasileiro
- Interface responsiva para diferentes tamanhos de tela
- Feedback visual para todas as operações

## Próximos Passos

- [ ] Implementar edição de consultas
- [ ] Implementar exclusão de consultas
- [ ] Adicionar paginação na lista
- [ ] Implementar autenticação/autorização
- [ ] Adicionar testes unitários
- [ ] Implementar notificações em tempo real