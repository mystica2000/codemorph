![Codemorph Logo](assets/codemorph-logo-small.png "Codemorph - Extensible Codemod Library") ![Codemorph Logo](assets/razroo-certified-logo.png "Razroo Certified")

Codemorph is an extensible, easy to understand, easy to contribute, easy to use **Codemod** library. Codemorph-dazzle your codebase like you've never before. 

# How to Install Codemorph 

```
npm install @codemorph/core --save
```

# How to Use Codemorph 

Todo 

## Novelty behind Codemorph library 

### Easy To Understand

What the Codemorph library does that is unique, is that it creates a unified interface across different programming languages. It uses a simple object to make modifications. e.g. 

#### Typescript
```
{
  "import": '{ NgModule }',
  "path": '@angular/core'
}
```

#### SCSS
```
{
  "import": '',
  "path": 'libs/common/styles/razroo-styles.scss'
}
```

So your engineers can understand how it works for one programming language and use the same syntax for a different programming language. 

### Easy To Contribute
Codemorph uses a tree of switch case statements to determine type of codemod to use. Simply specify programming language e.g. `angular` and fileType e.g. `.ts` and Codemod will take care of the rest.

### Extensible
If you want to add your own custom codemods, or add your own, you can simply plug and play to the Razroo codemod library. 

## Assumption Made
Codemorph is always used in an editing circumstance. There is no need to speicify that file is being edited. 

## Benefits of such 
1. This will be consumer facing. By allowing a singular object, we can simplify the frontend shown to users in the content management system. 
2. Developers don't have to dig into specifics for each programming language. They can simply keep an eye on the top level interface. 

# Further reading via Razroo blog(soon to be it's own documentation site) 

blog.razroo.com


# APIS Available 

## Typescript 

1. `import`
2. `editImport`
3. `classDeclaration`
4. `classMethod`
5. `addNgModuleImport`
6. `addNgModuleProvider`
7. `addNgModuleImportToSpec`
8. `addToVariableObject`
9. `addConstructorMethod`
```
{
  nodeType: 'addConstructorMethod',
  codeBlock: 'userService',
  type: 'UserService'
}
```
10. addVariableDeclarationStatement
```
{
  nodeType: 'addVariableDeclarationStatement',
  codeBlock: 'gtag',
  type: 'Function'
}
```

## JSON

1. `editJson`
2. `addJsonKeyValue`

## SCSS

1. `addScssBlock`
2. `import`
 

## Angular HTML + HTML

1. `editHtmlTag`
```
{
  "nodeType": "editHtmlTag",
  "codeBlock": "matSort",
  "tagNameToModify": "mat-table"
}
```
2. `addSiblingHtml`
```
{
  "nodeType": "addSiblingHtml",
  "codeBlock": "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-YOUR-GOOGLE-ID\"></script>",
  "tagNameToInsert": "script",
  "siblingTagName": "link"
},
```
3. `insertIntoHtmlTag`
```
{
  "nodeType": "insertIntoHtmlTag",
  "codeBlock": "<div class=\"Toolbar__Icons\"><fa-icon [icon]=\"faBell\" aria-hidden=\"false\" aria-label=\"Notification Icon\"></fa-icon> <fa-icon [icon]=\"faQuestionCircle\" aria-hidden=\"false\" aria-label=\"Question Icon\"></fa-icon> <fa-icon [icon]=\"faUserCircle\" aria-hidden=\"false\" aria-label=\"Account Icon\"></fa-icon></div>",
  "tagNameToInsertInto": "mat-toolbar"
}
```
