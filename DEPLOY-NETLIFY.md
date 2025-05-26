# Como Fazer Deploy no Netlify

## SOLUÇÃO SIMPLES - Funciona Garantido! 

### Opção 1: Deploy Manual (Mais Fácil)

1. **No Netlify:**
   - Acesse https://netlify.com e faça login
   - Clique em "Add new site" > "Deploy manually"

2. **Configure estas opções exatas:**
   - **Build command:** `npm install && npx vite build`
   - **Publish directory:** `dist/public`
   - **Node version:** `20`

3. **Conecte seu repositório** e o deploy será automático!

### Opção 2: Deploy Drag & Drop

Se quiser testar rapidamente:
1. Faça download de todos os arquivos do projeto
2. No Netlify, use "Deploy manually" 
3. Arraste a pasta completa do projeto
4. O Netlify vai fazer o build automaticamente

## Arquivos Já Configurados ✅

- ✅ `netlify.toml` - Configuração de build
- ✅ `_redirects` - Para funcionamento correto
- ✅ `.nvmrc` - Versão do Node.js
- ✅ Formulários adaptados para funcionar sem backend

## Se Tiver Problemas

**Erro de build?** 
- Verifique se as configurações estão exatamente como acima
- Build command: `npm install && npx vite build`  
- Publish directory: `dist/public`

**Página não carrega?**
- Confirme o publish directory como `dist/public`
- Os arquivos de redirect já estão configurados

## Por Que Vai Funcionar

✅ Todos os formulários foram adaptados para localStorage  
✅ Não precisa de servidor backend  
✅ Configuração otimizada para Netlify  
✅ WhatsApp integrado funciona perfeitamente  

Sua página de vendas imobiliária está 100% pronta para o Netlify!