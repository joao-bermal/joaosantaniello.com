# Site pessoal João Bermal

Site estático de uma página só, sem build, sem framework e sem dependências. Pronto
para deploy direto no Vercel.

## Estrutura

```
joao-bermal-vercel/
├── index.html   # site inteiro (HTML + CSS + JS inline)
├── assets/      # coloque aqui a imagem da vitrine OBSIDIAN
└── README.md
```

## Antes de publicar

Adicione o arquivo `assets/obsidian-branding.jpg` com a imagem do case OBSIDIAN, The
Origin (a arte de identidade visual feita com IA). Sem esse arquivo, a seção mostra
automaticamente um aviso de imagem pendente no lugar, o site continua funcionando
normalmente.

## Deploy no Vercel

Opção mais simples, sem linha de comando:

1. Acesse [vercel.com](https://vercel.com) e entre com sua conta (ou crie uma).
2. No dashboard, clique em "Add New" > "Project".
3. Escolha a opção de importar uma pasta local ou arraste a pasta
   `joao-bermal-vercel` para a área de upload.
4. Não é preciso configurar nada (sem build command, sem framework): o Vercel detecta
   como site estático automaticamente.
5. Clique em "Deploy". Em menos de um minuto o site fica no ar num link
   `algo.vercel.app`.

Opção via GitHub (recomendada a médio prazo, permite atualizar o site só dando push):

```bash
git init
git add .
git commit -m "Site pessoal João Bermal"
```

Depois crie um repositório no GitHub, suba o código:

```bash
git remote add origin https://github.com/joao-bermal/SEU-REPO.git
git branch -M main
git push -u origin main
```

E no Vercel: "Add New" > "Project" > "Import Git Repository", selecione o repositório.
Toda vez que você der push no `main`, o Vercel republica o site sozinho.

## Domínio próprio (opcional, mais pra frente)

Depois que o site estiver no ar em `algo.vercel.app`, dá pra apontar um domínio
próprio (ex.: `joaobermal.com`) nas configurações do projeto no Vercel, aba
"Domains". Não é necessário para começar a divulgar o link.
