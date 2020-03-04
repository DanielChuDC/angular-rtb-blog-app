# AngularRtbBlogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Getting started with quill 

```js
ng new <your-name> --directory ./

npm install ngx-quill \
            @angular/core \
            @angular/common \
            @angular/forms \
            @angular/platform-browser \
            quill


// Update the angular.json file with the following code:
"styles": [
   "src/styles.scss",
   "./node_modules/quill/dist/quill.core.css",
   "./node_modules/quill/dist/quill.bubble.css",
   "./node_modules/quill/dist/quill.snow.css",
   
],
"scripts": ["./node_modules/quill/dist/quill.min.js"]

// import it in your app.module.ts
import { QuillModule } from 'ngx-quill'

// and in the imports add it like bellow

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    QuillModule.forRoot(),
  ]
 })


// n your component.ts file you can modify the editor style like bellow code:

   editorStyle = {
     height: '200px'
   };

// and in your component.html file you could call it like bellow code:
 <quill-editor  [styles]="editorStyle" format="html" formControlName="html"></quill-editor>
```