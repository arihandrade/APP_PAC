# PAC - Projeto de Aprendizagem Colaborativa Extensionista do Curso de Engenharia de Software da Católica de Santa Catarina

## Aplicativo móvel para controle e gestão do almoxarifado da Creche Conde Modesto Leal

### Justificativa do PAC perante a entidade beneficiada com respectivo nome

O aplicativo móvel desenvolvido para a Creche Conde Modesto Leal tem como principal objetivo modernizar o processo de controle e gestão do almoxarifado, trazendo mais agilidade e eficiência na requisição, controle de estoque e distribuição de materiais. A plataforma permitirá que os funcionários da creche façam solicitações de materiais diretamente de seus aparelhos celulares, sem a necessidade de deslocamento até o almoxarifado.

### Benefícios Esperados:
- **Agilidade nas requisições:** A partir do aplicativo, os colaboradores poderão fazer as solicitações de materiais de forma rápida e fácil, com apenas alguns toques na tela. Isso resulta em maior eficiência no atendimento das demandas.
- **Maior controle de estoque:** O sistema permitirá que o almoxarifado tenha um controle preciso sobre a quantidade de materiais, evitando faltas ou excessos e garantindo que os itens necessários estejam sempre disponíveis.
- **Redução de erros e retrabalho:** Com a digitalização do processo de requisição e controle de materiais, há uma diminuição significativa de erros manuais de registro e organização.
- **Melhor comunicação:** O aplicativo melhora a comunicação entre as equipes de trabalho, uma vez que as solicitações de materiais serão feitas diretamente pelo celular, sem a necessidade de intermediários ou processos presenciais.
- **Transparência e rastreabilidade:** O aplicativo permitirá que todos os registros de requisições sejam armazenados de forma digital, oferecendo maior transparência no processo de distribuição de materiais, com histórico de todas as transações realizadas.

---

## Descrição do App

Aplicativo móvel para controle e gestão do almoxarifado da Creche Conde Modesto Leal. O aplicativo visa trazer mais comodidade e agilidade ao possibilitar as requisições de materiais ao almoxarifado através do aparelho celular.

---

## Requisitos e Funcionalidades

- **Autenticação de Usuário:** Tela de login onde o usuário insere nome e senha para acessar o sistema.
- **Consulta de Estoque:** Exibição do material disponível no estoque, com visualização da quantidade para cada item.
- **Consulta de Estoque de Doações:** Exibição do material disponível no estoque na categoria de itens doados, com visualização de quantidade para cada item.
- **Solicitação de Retirada:** Usuário pode solicitar a retirada de material, preenchendo informações como nome do material, setor, quantidade, data e e-mail.
- **Menu de Navegação:** Opções para acessar diferentes seções do app, como estoque, doações, sair e voltar.

---

## Arquitetura do App

A tecnologia utilizada para o frontend foi React e realizamos a integração com o banco de dados MySQL apresentado no semestre passado no nosso desenvolvimento de sistema de estoque Web para a Creche Monde Modesto Leal com API. Para o Backend foi utilizado Node.js.

---

## Requisitos para preparar o ambiente de desenvolvimento

### Requisitos de Software:
- Node.js (com npm): Para o backend e gerenciamento de pacotes.
- React Native.
- Expo CLI: Para desenvolvimento de apps React Native.
  - Instalar com: `npm install -g expo-cli`
- MySQL: Banco de dados para armazenamento de dados.
- Android Studio: Para emulação Android e ferramentas de desenvolvimento.
- Editor de Código (Recomendado: Visual Studio Code).

### Requisitos de Hardware:
- Memória RAM: Mínimo de 4 GB (8 GB recomendado).
- Processador: Dual-core ou superior.
- Espaço em Disco: Pelo menos 10 GB livres.
- Sistema Operacional:
  - Windows 10 ou superior, macOS 10.14+, ou Linux (Ubuntu recomendado).

### Requisitos Adicionais:
- Dispositivo Móvel: Para testar no mundo real (opcional).
- Emulador Android: Instalado via Android Studio, ou Xcode (se for usar iOS).

---

## Capturas de Tela

- **Autenticação de Usuário:** Tela de login onde o usuário insere nome e senha para acessar o sistema.
  - Login e senha padrão para iniciar o aplicativo.
![Tela de Login](https://drive.google.com/file/d/1WiKl15ZpQMEs55mBNkalmp_OgvbTA755/view?usp=sharing)
![Tela de Login - Sucesso](https://drive.google.com/file/d/1csjNH_eeUL7-H8jXYRLyFG9jWBzt5Q4I/view?usp=sharing)
- **Menu de Navegação:** Opções para acessar diferentes seções do app, como estoque, doações, sair e voltar.
![Tela de Menu](https://drive.google.com/file/d/1Z1kH80nKJbVobZNQd66ITcYUVKj7Pmh5/view?usp=sharing)
- **Consulta de Estoque:** Exibição do material disponível no estoque, com visualização da quantidade para cada item.
  - Integrado o banco de dados para visualização dos itens e quantidades em estoque.
![Tela de Estoque](https://drive.google.com/file/d/1AIWtfz8bTbp14hGh1TyJVRbq2fkiUDux/view?usp=sharing)
- **Consulta de Estoque de Doações:** Exibição do material disponível no estoque na categoria de itens doados, com visualização de quantidade para cada item.
  - Integrado o banco de dados para visualização dos itens e quantidades em estoque doação.
![Tela de Estoque Doação](https://drive.google.com/file/d/1vkZFu9eWe2pD9pzb0TaYWbyDtlt7sMKP/view?usp=sharing)
- **Solicitação de Retirada:** Usuário pode solicitar a retirada de material, preenchendo informações como nome do material, setor, quantidade, data e e-mail.
  - Ao finalizar, realiza o envio do e-mail para o almoxarifado realizar a separação do material e assim que houver efetivação é disparado uma notificação via e-mail para realizar a retirada do material solicitado. O Backend salva as informações do formulário e envia para o e-mail administrativo do almoxarifado juntamente com as informações do solicitante.
![Tela de Retirada](https://drive.google.com/file/d/1w7MtI7b20ntn46iD0IrFFbKY_hR3nAzj/view?usp=sharing)
---

## Links Importantes

- **Vídeo de demonstração:** [Link para o vídeo](https://drive.google.com/file/d/19UyEE_aTQRaxBzjQ2naRkcUiwJ2yCWgw/view?usp=drivesdk)
- **Jira e Confluence:**
  - [Jira Timeline](https://andradearihh.atlassian.net/jira/software/projects/SCRUM/boards/1/timeline?shared=&atlOrigin=eyJpIjoiN2NlZGNhZDM5OGFiNDYzOGIxMmI2NzQwODI1YjI5MjgiLCJwIjoiaiJ9)
  - [Confluence](https://andradearihh.atlassian.net/l/cp/ufrvBzLz)
- **GitHub:** [Repositório no GitHub](https://github.com/arihandrade/APP_PAC)

---

## Resumo

O aplicativo começa na tela de login, onde o usuário deve inserir o nome de usuário **"condeleal"** e a senha **"conde123"**, que são os dados padrão de acesso para todos os usuários. O app é destinado exclusivamente para solicitações de retirada de materiais, com base no que está disponível no estoque.

Na tela inicial (menu), existem três botões: um para acessar o estoque, outro para as doações, e um botão pequeno para sair do aplicativo.

Tanto o estoque quanto as doações possuem a mesma funcionalidade, que é armazenar informações sobre os respectivos materiais. Em cada seção (estoque ou doações), o usuário tem a opção de solicitar a retirada de algum item. Ao clicar nessa opção, o usuário é direcionado para uma tela de solicitação de retirada, onde deverá preencher as informações necessárias, como forma de contato, material desejado, quantidade e especificar se o material está no estoque de doações ou no estoque normal.

Assim que o administrador receber a solicitação, ele irá reservar o material e enviar uma confirmação por e-mail para o solicitante.

---

## Alunos:
- Gustavo Vieira Wesolowski  
- Ariane Ferreira  
- Guilherme Renzo  
- Diogo Veiga

