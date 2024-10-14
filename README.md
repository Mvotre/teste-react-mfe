# Projeto feito com Vite, React com Typescript 

**PS:** No momento que eu criei esse teste, o projeto com os MFE **NÃO RODAVA** em nenhum browser baseado em Chrome, mas roda perfeitamente no Firefox. Então, rodar no Firefox.

## Para rodar:
- Baixar o repositório
- Rodar `npm install` nas pastas `host-app`, `cards-mfe`, `footer-mfe` e `header-mfe`.
- Rodar `npm preview` em `cards-mfe`, `footer-mfe` e `header-mfe`. O preview vai executar o build, configurar a porta correta e começar o preview.
- Rodar `npm start` no projeto `host-app` e abrir a url. Em qualquer outro dos projetos também é possível rodar `npm start` e ter só o MFE separado para desenvolvimento.

Não consegui fazer tudo que eu queria, pois me faltou tempo. Basicamente queria melhorar os componentes (modularizando mais quando necessário), escrevendo testes, colocando loaders onde necessário e removendo uns bugzinhos de TS.

Todo o projeto foi feito em uma pasta só, para facilitar a distribuição. Todos os projetos foram construídos com o `vite create` e deixados com a estrutura completa, por simplicidade. Assim é possível rodar cada projeto separadamente com um simples `npm run dev`.

Usei como padrão de nomenclatura colocar o projeto container como `host-app` e todos os outros com o nome do elemento (header, footer, etc) mais o sufixo `-mfe`. 

Para estilos usei somente o Tailwind. Não usei de referência o Figma pq não estava funcionando. Mas peguei cores e alguns padrões do [www.vr.com.br](http://www.vr.com.br) para ter unidade.

Nos cards optei por colocar algumas informações, e reduzir o texto da descrição para no máximo 3 linhas. Num projeto real, ao clicar no produto eu exibiria mais detalhes e aí a descrição completa. 

No footer coloquei links que não enviam para lugar nenhum, e informações falsas bem comuns encontradas em footers por aí. Deixei footer e header como sticky e o centro com comportamento de scroll. 

Optei por simplicidade ao invés de complexidade. Portanto, só usei alguma coisa adicional quando absolutamente necessário. Como por exemplo, para limitar a descrição do produto em 3 linhas. Podia instalar um plugin do Tailwind que faz isso, mas como era pouco código CSS, preferi só adicionar uma classe.

Ao clicar em cada produto, eu simplesmente adiciono uma versão "resumida" do mesmo em um novo array no host, e consigo controlar o modal só com um `useState`, sem necessidade de nenhum tipo de controle de estado ou context nesse cenário. 
Num caso real eu salvaria só o id e quantidade em uma requisição para o back-end, ou poderia salvar os dados completos no front também, dependendo de como os usuário utilizam a plataforma.