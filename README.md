# Todolistapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Carácteristicas Técnicas del aplicativo
- Este aplicativo se ha realizado para la universidad de Las Palmas de Gran Canaria(ULPGC).
- Para esta app he utilizado Firebase como base de datos (ng add @angular/fire), node.js (v14.15.5) y  angularcli(v11.2.4)

Todo el código generado se encuentra en la carpeta src/app/todo,dentro de esta carpeta nos encontraremos con 4 archivos y una carpeta.
  - shared(carpeta)
  - todo.component.css ==> Contiene todo el estilo de la página
  - todo.component.html ==> Contiene todo lo que se muestra en la página
  - todo.component.spect.ts
  - todo.component.ts ==> Contiene todo los métodos que hacen llamadas a realizar la extracción o inyección de datos a la bd y también tiene métodos para cambiar los estados

Dentro de la carpeta shared nos encontramos con:
  - todo.service.spect.ts
  - todo.service.ts ==> Fichero que hace la conexión a la Base de datos y realiza todas las operaciones CRUD
 
 El unico archivo que se ha modificado de los que angular nos proporciona de base (ng new "Nombre del proyecto") se encuentran src/app
  - app.module.ts ==> Fichero donde realizamos las importaciones de Firebase y AngularMatirials


 
