# Seleção Bitlab 2023

Olá, bem vindo ao desafio para seleção de bolsistas para o Bitlab 2023! Nesse documento você encontrará as instruções para a execução do seu desafio! Sem enrolação, vamos as instruções.

## Desafio

Havia uma vez uma pequena empresa de tecnologia chamada "Segurança Online". Eles eram especializados em segurança cibernética e estavam comprometidos em ajudar as pessoas a navegar na Internet de forma segura.

Um dia, a equipe da "Segurança Online" foi contatada por um cliente preocupado com o conteúdo inapropriado que estava aparecendo em seu site. O cliente explicou que o site permitia que os usuários postassem comentários e que muitos desses comentários continham linguagem ofensiva e até mesmo ameaças violentas.

A equipe da "Segurança Online" entendeu imediatamente a gravidade do problema e se comprometeu a encontrar uma solução. Eles sabiam que a melhor maneira de lidar com esse tipo de situação era criar um algoritmo de detecção de conteúdo impróprio.

Assim, suponha que você foi o profissional escolhido pela "Segurança Online" para implementar tal solução. **Logo, você deve criar um sistema capaz de detectar textos com conteúdo impróprio.**

> Entenda por conteúdo impróprio o texto que possui expressões ofensivos ou palavões.

Você pode criar um conjunto de palavras e expressões ofensivas, caso ache necessário.

### Apresentação

Para a utilização do seu algoritmo, crie uma interface simples **web** que permita que o usuário escreva um texto e submeta a análise se contém ou não conteúdo ofensivo. Você deve apresentar na interface claramente o resultado obtido pelo algoritmo.

Você está livre para utilizar qualquer linguagem ou ferramenta.

## Instruções

1. Acesso o link https://classroom.github.com/a/1a1_PfEr e aceite o convite
1. Isso criará um repositório no seu nome, por onde deves enviar o seu código.
1. Faça as alterações no repositório, comite e envie ao repositório remoto.
1. Escreva um código limpo e de fácil compreensão
1. Faça deploy para algum serviço de **cloud** para que possamos acessar facilmente e testar sua aplicação. Sugestão https://vercel.com/
1. Adicione a esse README instruções de acesso ao seu sistema

## Acesso

Você pode acessar e testar o aplicativo por meio do link [FilterLab (filter-lab.onrender.com)](https://filter-lab.onrender.com/). Na tela inicial, insira o texto que gostaria que fosse analisado. Após isso, clique em _Enviar_, onde o programa retornará um resultado positivo - caso não haja conteúdo ofensivo - ou negativo - se houver conteúdo ofensivo.

### Acesso Local

Caso deseje acessar localmente o aplicativo, faça os seguintes passos:

1. Certifique-se de que você tem o _Node.js_ instalado em seu computador. Caso não, instale-o por este link: [Download | Node.js (nodejs.org)](https://nodejs.org/en/download).
    - Para verificar se está instalado ou não, digite o comando `node --version` ou `npm --version`. Se estiver instalado, será retornado a versão do programa.
2. Utilize o comando `git clone https://github.com/bitlab-ufrn/selecao-2023-leirdan` para clonar este repositório em sua máquina e ter acesso a todo o código.
3. Em seguida, rode o comando `npm i` para instalar todas as dependências necessárias a partir do arquivo `package.json`.
4. Com todas as dependências configuradas automaticamente, utilize o comando `npm run build && npm run start` para rodar a aplicação.
    - Adicionalmente, crie um arquivo de nome **.env** e insira o seguinte código nele: `PORT=8082`.
5. Por fim, acesse o navegador e insira `localhost://8082`. Assim, você conseguirá ter acesso à aplicação localmente.
