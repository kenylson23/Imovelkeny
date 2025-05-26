# Página de Vendas - Agente Imobiliário

Uma página de vendas de alta conversão para agentes imobiliários, com design profissional e formulários de captura de leads.

## Deploy no Netlify

### Preparação dos Arquivos
Os seguintes arquivos foram configurados para o deploy no Netlify:

1. **netlify.toml** - Configuração de build e redirects
2. **_redirects** - Redirecionamento para SPA
3. **Build command**: `vite build`
4. **Publish directory**: `dist`

### Recursos da Página

✅ **Header Profissional**
- Informações de contato
- Botão WhatsApp integrado

✅ **Seção Hero com Formulário de Captura**
- Formulário para ofertas exclusivas
- Validação completa dos campos
- Design responsivo

✅ **Seção de Serviços**
- 6 serviços especializados
- Ícones profissionais
- Descrições detalhadas

✅ **Imóveis em Destaque**
- Gallery de propriedades premium
- Informações detalhadas
- Preços e características

✅ **Sobre o Agente**
- Credenciais e experiência
- Estatísticas de performance
- Foto profissional

✅ **Depoimentos de Clientes**
- Reviews reais com fotos
- Sistema de 5 estrelas
- Histórico de transações

✅ **FAQ Interativo**
- Perguntas frequentes
- Respostas expansíveis
- Conteúdo relevante

✅ **Formulário de Contato**
- Solicitação de consulta gratuita
- Múltiplas opções de contato
- Integração WhatsApp

✅ **Botão WhatsApp Flutuante**
- Acesso rápido
- Mensagem pré-definida

### Funcionalidades Técnicas

- **Armazenamento Local**: Os formulários salvam dados no localStorage do navegador
- **Validação de Formulários**: Validação completa com Zod
- **Design Responsivo**: Funciona perfeitamente em mobile e desktop
- **Otimizado para Conversão**: Cores, textos e CTAs otimizados
- **Performance**: Build otimizado para carregamento rápido

### Como Deployar

1. Faça upload dos arquivos para o Netlify
2. Configure o build command: `vite build`
3. Configure o publish directory: `dist`
4. O arquivo `netlify.toml` já está configurado com todas as configurações necessárias

### Personalização

Para personalizar a página:

1. **Informações de Contato**: Edite os componentes Header, Footer e Contact Section
2. **Dados do Agente**: Modifique o componente About Agent
3. **Propriedades**: Atualize o array de propriedades em Featured Properties
4. **Depoimentos**: Edite o array de testimonials
5. **Cores e Branding**: Modifique as variáveis CSS em `index.css`

A página está 100% pronta para deploy no Netlify!