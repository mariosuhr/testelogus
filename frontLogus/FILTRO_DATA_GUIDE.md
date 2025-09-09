# Guia de Teste - Filtro de Data

## ✅ Melhorias Implementadas

### 1. **Filtro via API**
- O filtro agora é aplicado diretamente na API Java
- Não há mais filtro local no frontend
- Melhor performance e consistência

### 2. **Interface Melhorada**
- Indicador visual quando há filtro ativo
- Botão "Limpar Filtro" desabilitado quando não há filtro
- Logs no console para debug

### 3. **Formato de Data Correto**
- Data enviada no formato ISO (YYYY-MM-DD)
- Compatível com a API Java Spring Boot

## 🧪 Como Testar

### 1. **Iniciar Aplicações**
```bash
# Terminal 1 - API Java
cd demo
./mvnw spring-boot:run

# Terminal 2 - Frontend Angular
cd frontLogus
npm start
```

### 2. **Testar Filtro de Data**

#### **Passo 1: Cadastrar Consultas**
1. Acesse `http://localhost:4200`
2. Cadastre algumas consultas com datas diferentes
3. Exemplo:
   - Consulta 1: Data de hoje
   - Consulta 2: Data de amanhã
   - Consulta 3: Data de ontem

#### **Passo 2: Testar Filtro**
1. Na lista de consultas, selecione uma data no campo "Filtrar por data"
2. Observe que:
   - Aparece um indicador azul mostrando a data filtrada
   - Apenas consultas da data selecionada são exibidas
   - O botão "Limpar Filtro" fica habilitado

#### **Passo 3: Limpar Filtro**
1. Clique em "Limpar Filtro"
2. Observe que:
   - Todas as consultas voltam a ser exibidas
   - O indicador de filtro desaparece
   - O botão fica desabilitado

## 🔍 Debug

### **Console do Navegador**
Abra o DevTools (F12) e vá na aba Console. Você verá logs como:
```
Filtrando consultas com data: 2024-01-15
Consultas recebidas: [array de consultas]
```

### **Network Tab**
Na aba Network do DevTools, você pode ver:
- Requisições GET para `/consultas?data=2024-01-15`
- Status da resposta (200 OK)
- Dados retornados pela API

## 🐛 Solução de Problemas

### **Se o filtro não funcionar:**
1. Verifique se a API está rodando na porta 8080
2. Verifique os logs no console do navegador
3. Verifique a aba Network para ver se a requisição está sendo feita
4. Verifique se há consultas cadastradas na data selecionada

### **Se aparecer erro de CORS:**
1. Verifique se a configuração CORS está ativa na API
2. Reinicie a API Java
3. Limpe o cache do navegador

## 📝 Formato de Data

- **Frontend → API:** `YYYY-MM-DD` (ex: `2024-01-15`)
- **API → Frontend:** `ISO 8601` (ex: `2024-01-15T14:30:00`)
- **Exibição:** Formato brasileiro (ex: `15/01/2024`)
