# Guia de Deploy no Netlify

## Método 1: Deploy via Interface Web do Netlify

### Passo a Passo:

1. **Faça o build local primeiro:**
   ```bash
   npm install
   npx vite build --mode production
   ```

2. **Acesse o Netlify:**
   - Vá para https://netlify.com
   - Faça login na sua conta

3. **Deploy Manual:**
   - Clique em "Add new site" > "Deploy manually"
   - Arraste a pasta `dist/public` (após o build) para a área de upload
   - Aguarde o deploy finalizar

## Método 2: Deploy via Git

### Configurações no Netlify:

- **Build command:** `npm install && npx vite build --mode production`
- **Publish directory:** `dist/public`
- **Node version:** `20`

### Arquivos de Configuração Inclusos:

- ✅ `netlify.toml` - Configuração automática
- ✅ `_redirects` - Redirecionamentos para SPA
- ✅ `.nvmrc` - Versão do Node.js

## Troubleshooting

### Se o build falhar:

1. **Verifique as dependências:**
   ```bash
   npm install
   ```

2. **Teste o build localmente:**
   ```bash
   npx vite build --mode production
   ```

3. **Verifique se a pasta `dist/public` foi criada**

### Se a página não carregar:

1. Verifique se o **Publish directory** está como `dist/public`
2. Confirme se os redirects estão funcionando (arquivo `_redirects`)

## Funcionalidades da Página

✅ **100% Funcional sem Backend**
- Formulários salvam no localStorage
- Validação completa dos campos
- Mensagens de sucesso/erro
- Integração WhatsApp

✅ **Otimizada para Conversão**
- Design profissional
- Cores corporativas (azul e dourado)
- CTAs estratégicos
- Responsivo para mobile

A página está completamente preparada para o Netlify!