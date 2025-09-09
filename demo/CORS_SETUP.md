# Configuração CORS - API Java Spring Boot

## ✅ Configurações Aplicadas

### 1. Classe de Configuração CORS
- **Arquivo:** `src/main/java/com/logus/config/CorsConfig.java`
- **Funcionalidade:** Configuração global de CORS para permitir requisições do frontend Angular

### 2. Anotação @CrossOrigin no Controller
- **Arquivo:** `src/main/java/com/logus/controller/ConsultaController.java`
- **Funcionalidade:** Permite requisições CORS especificamente para `http://localhost:4200`

## 🚀 Como Testar

### 1. Iniciar a API Java
```bash
cd demo
mvn spring-boot:run
```

### 2. Iniciar o Frontend Angular
```bash
cd frontLogus
npm start
```

### 3. Testar no Navegador
- Acesse: `http://localhost:4200`
- Tente cadastrar uma consulta
- Verifique se a lista de consultas carrega

## 🔧 Configurações CORS Aplicadas

### Headers Permitidos:
- `Access-Control-Allow-Origin: http://localhost:4200`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- `Access-Control-Allow-Headers: *`
- `Access-Control-Allow-Credentials: true`

### Métodos Permitidos:
- GET (listar consultas)
- POST (cadastrar consulta)
- OPTIONS (preflight requests)

## 🐛 Solução de Problemas

### Se ainda houver erro de CORS:
1. Verifique se a API está rodando na porta 8080
2. Verifique se o frontend está rodando na porta 4200
3. Limpe o cache do navegador (Ctrl+F5)
4. Verifique o console do navegador para erros específicos

### Logs para Verificar:
- Console do navegador (F12)
- Logs da aplicação Spring Boot
- Network tab no DevTools
