# Pasta de Imagens dos Produtos

Esta pasta armazena as imagens dos produtos do cardápio.

## Como usar:

1. **Coloque suas imagens aqui** - Salve as imagens dos produtos nesta pasta
2. **Extenções suportadas**: jpg, jpeg, png, webp
3. **Tamanho recomendado**: 800x600px ou superior

## Exemplo de estrutura:

```
img/
├── pizza-margherita.jpg
├── pizza-calabresa.jpg
├── pizza-frango-catupiry.jpg
├── x-burger.jpg
├── x-bacon.jpg
├── refrigerante-lata.jpg
└── combo-familia.jpg
```

## Como adicionar no cardápio:

### No arquivo `script.js` (produtos padrão):
```javascript
{ 
    id: 1, 
    name: 'Pizza Margherita', 
    description: 'Molho de tomate, mussarela fresca e manjericão', 
    price: 45.00, 
    category: 'pizzas', 
    image: 'img/pizza-margherita.jpg',  // ← Caminho da imagem
    emoji: '🍕',  // ← Fallback se imagem não carregar
    ingredients: ['Molho de tomate', 'Mussarela', 'Manjericão'] 
}
```

### Via Painel Admin:
1. Vá para o **Painel Administrativo**
2. Clique em **Cardápio**
3. Preencha o formulário:
   - **URL da Imagem**: `img/nome-do-produto.jpg`
   - **Emoji para Fallback**: `🍕` (opcional)
4. Clique em **Adicionar ao Cardápio**

## Dicas:

- Se deixar o campo "URL da Imagem" vazio, o site usará o emoji como fallback
- Use nomes descritivos para as imagens (ex: `pizza-calabresa.jpg`)
- Mantenha as imagens otimizadas para carregar mais rápido
- Se uma imagem não carregar, o emoji será exibido automaticamente

---

Pronto! Agora seu site suporta tanto **imagens reais** quanto **emojis** como fallback.
