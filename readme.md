# To-Do List Challenge Project

Este projeto é parte da segunda fase do Processo Seletivo da Aceleradora Ágil, focado na criação de um layout para uma lista de tarefas (ToDo). O objetivo é desenvolver uma interface com um menu lateral contendo uma foto, um nome, uma descrição e 4 links. Além disso, são necessárias duas colunas de ToDo para listar tarefas diurnas e noturnas, com um estilo personalizado para proporcionar uma experiência agradável e intuitiva.

## ✏️ Pesquisa e Design

Para iniciar o projeto, conduzi pesquisas em diferentes implementações de To-Do Lists para obter ideias inspiradoras. Em seguida, utilizei a ferramenta Figma para criar o layout, incluindo versões para telas menores, garantindo uma experiência responsiva e amigável.

### Layout

![Layout](/src/layoutToDo.jpeg)
![Layout Responsivo](/src/layoutResponsivo.jpeg)

Você pode acessar o layout completo no Figma [clicando aqui](https://www.figma.com/file/iylOG2xxATxcrX4OUIdPnK/Untitled?type=design&node-id=0%3A1&mode=design&t=l3tkX8gc5Te0V5Gh-1)

## ⚙️ Desenvolvimento

Com o design em mãos, iniciei o desenvolvimento utilizando HTML, CSS e JavaScript para criar uma interface funcional e atraente. Abaixo estão os principais passos do processo:

### Funcionalidades Implementadas:

- **Adição de Tarefas:**
  - Criado um botão interativo para adicionar tarefas, acionando a abertura de um modal.
  - Modal contém um campo de input para o nome da tarefa e opções para escolher a lista na qual a tarefa será adicionada (diurna ou noturna).

- **Exclusão de Tarefas:**
  - Implementado um botão de exclusão para remover tarefas da lista.

- **Lista de Tarefas Interativa:**
  - Desenvolvida lógica em JavaScript para tornar a lista de tarefas interativa, permitindo marcação de tarefas como concluídas ou não concluídas.

### Funcionalidades Ainda Não Implementadas:

- **Marcação de Tarefas Concluídas:**
  - Enfrentei desafios na implementação da funcionalidade para mudar a formatação do input radio ao ser clicado, sinalizando que a tarefa foi concluída. Ao clicar novamente, a tarefa deveria retornar à formatação de tarefa não concluída. Esta funcionalidade ainda está pendente de implementação.

- **Responsividade:**
  - A execução completa da responsividade ainda não foi alcançada. A experiência do usuário pode variar em diferentes dispositivos e tamanhos de tela.

- **Perfil do Usuário:**
  - A adição de um botão com a imagem do perfil, que abriria um modal contendo detalhes como imagem, nome, descrição e links do usuário, é um desafio que ainda não foi abordado. Esta funcionalidade visa proporcionar uma experiência mais personalizada e informativa.

- **Interação entre Listas:**
  - A interatividade entre as listas de tarefas diurnas e noturnas não foi completamente implementada. A ideia era que, ao clicar na aba "Night", a lista de tarefas noturnas seria exibida e a lista diurna seria reduzida, e vice-versa. Esta interação visa simplificar a visualização de tarefas com base no período do dia.

- **Estilização do Modal de Criação de Tarefa:**
  - A estilização completa do modal de criação de tarefa ainda não foi implementada. O modal pode não oferecer a melhor experiência visual e precisa de ajustes estéticos.


## 🛠️ Próximos Passos

- Implementar a marcação de tarefas como concluídas ou não concluídas.
- Refinar o design e garantir uma experiência responsiva em diferentes dispositivos.
- Testar e corrigir possíveis bugs.
- Documentar o código e adicionar comentários explicativos.
