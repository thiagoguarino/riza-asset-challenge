#### riza Project Folder
senha bitcket project: ATBBt7GfSa9PWsHJVwg6YWbjkdK8121AAFB3

A aplicação PWA deve estar disponível no endereço: https://riza-seed.web.app
O código deve preferencialmente estar em um repositório no Bitbucket.

1 - Exercício 1;  riza.seed - angular/pwa + deploy firebase
A página inicial da aplicação deve conter o logo da Riza.

referencias:
1/ VS Code Setup
- Use Prettier, Use Firacode Font, Use Firacode Font, Add Angular and Ionic VSCode Extensions;

2/ Typescript
https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661
https://www.c-sharpcorner.com/article/typescript-best-practices/
https://github.com/andredesousa/typescript-best-practices
https://medium.com/typescript/typescript-enums-1f5cc877aaa3
https://www.typescriptlang.org/docs/handbook/interfaces.html

3/ Functional Programming (Esses conceitos são muito importantes!!!)
https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4

4/ Angular & Ionic
https://angular.io
https://ionicframework.com
https://ionicframework.com/docs/angular/pwa

5/ Firebase
https://remotestack.io/connect-firebase-to-ionic-app/

2 - - Exercício 2; riza.seed - angular/pwa + design system + deploy firebase dev/prod
A página inicial da aplicação deve conter componentes referentes a Mousik

Referencias:
1/ lighthouse a 100%
https://web.dev/i18n/pt/performance-scoring/
https://matteus.dev/100-pontos-no-google-lighthouse/

2/ design system
https://mds.mousik.com/

3/ criar na home um componente lista que ao clicar no item da lista te leva para uma página de detalhe (usar comunicação de eventos, comunicação pai/filho, smart/dumb
https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/

4/ firasebase hosting criação de ambientes prod/stage/dev
https://dev.to/benzguo/firebase-setup-3320
https://medium.com/@bpraveen.in/how-to-manage-dev-and-prod-projects-in-firebase-with-angular-and-firebase-hosting-10c335bb9437
https://codinglatte.com/posts/angular/separating-dev-and-prod-environment-on-firebase/
https://dev.to/benzguo/firebase-setup-3320
https://medium.com/@candidosales/ambiente-de-dev-staging-e-production-no-firebase-hosting-e118aa8aaf7

3 - Exercício 3; Retrieve Data from Firebase Using a Service (Read data from database)

Remover os dados da lista de artistas e os detalhes da pagina dos artitas, do código e colocar esses dados dentro do Firestore Database (Não é o realtime database!)

Ou seja resumidamente:
1/ criar uma coleção dos dados dos artistas no Firebase Database
2/ criar serviço Angular que le os dados do Database
3/ passar dados para as variaveis

Bonus: Criar um CRUD de Artistas
/create-artist
/delete-artist
/update-artist

Referencias:

https://blog.fransandi.com/angular-firebase-guide-firestore-database-dcfd8d9dd890

https://www.makeuseof.com/store-update-retrieve-data-from-firebase-database-in-angular/

https://dev.to/coly010/building-a-firebase-crud-service-for-angular-2629
