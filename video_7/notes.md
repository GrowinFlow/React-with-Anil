     https://www.youtube.com/watch?v=V53b6SSBICU&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=7

## package.json in Details
* `What is ` `package.json?`
* `How to add new npm package`
* `Remove npm package`
* `Custom commands`

* `New Quiz`
* `Privious Quiz`


## What is `package.json`?
* `package.json`

     * `package.json` `is ma file / project ka name, all cehzon ke version, commands and Hm ny jtny pkg daal rkhy hyan os sb ke detail, app production ky le a ready hy ya nhi, e.t.c.`
     * `package.json` `humry app ke details rkhti hy.`

## How to add / install new npm package?

* ` jo b package use krna hy is ko searc krnyn , 'npmjs.com' sy os ka command ml jay ga os ko termunal ma paste krny sy wo humary app ma install and add ho jay ga . Ex:`

`link`

        https://www.npmjs.com/package/react-validation

`CLI`

      npm install react-validation
      
* `agr hum ksi package ka specific version ko install krna chaty hayn to hum , os module ko searc kr ky os ky version ma ja skty  hayn, k6h is trhan `

`link`

        https://www.npmjs.com/package/react-validation/v/3.0.7?activeTab=versions

`CLI`

       npm i react-validation@1.6.6

* `agr hum ksi aysy pkg ka version change krna chaty hyan jo phly sy install hy to hum is ko k6h is trhan change kr ky istall kr skty hyan`


`before`

`package.json`  .... _`(line:9)`_

          "react": "^18.3.1",


`after`

`package.json`  .... _`(line:9)`_

          "react": "^18.3.0",

`run cmd`

     npm install
`is sy humara version change ho jay ga`, `Qu k npm install sy node humari package.json ko check kr ky os ma mojood packages ky versions ko dekh kr packages ko insatll krta hy`


## How to remove `npm package`?
* `agr humy koi package uninstall / remove krna hy to hum is link ko dekh skty hyan:`

`link`

     https://www.npmjs.com/package/uninstall-package

`CLI`

     npm i uninstall-package
     npm i uninstall [package-name]
     
* `agr hum package .json ma sy ksi package ko remove kr ky , npm start claty hyan to b remove  ho jay ga`



`before`

`package.json`  .... _`(line:9 to line:12)`_

          
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "react-validation": "^3.0.7",


`after`

`package.json`  .... _`(line:9 to line:12)`_ `remove line:12`

          
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",

`run cmd`

     npm install

* `ab jb npm packages install kry ga to dekhy ga ky, (react-validation) nhi hy to wo is ko istall nhi kry ga`


## How to add Custom command?

* `agr humy koi custom command add krna hy, jysy hum chaty hayn k (npm start) ma start nhi koi or keyword/ word ho ex: [hy] to hum is chez ko edit / control kr skty hyan`

`before`

`package.json` ... _`line:15 to line:20`_

     "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
      },

`run cmd`

     npm start

`after`

`package.json` ... _`line:15 to line:20`_

     "scripts": {
          "hy": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
      },

`run cmd`

     npm run  hy


 

##
## Previous Quiz
## most important files
Ans `package.json, package-lock.json`
 >    * `Correct my Ans`


## Jb hum github pr code push krty hyan to node_modules ko upload/ push qu nhi krty , jb koi or use krna chahy ga to kysy use kry ga?
Ans: `is ma Thousands ky hesaab sy files and filders hoty hayn, jis wajy sy ya boht jga layti hy, github pr push krny sy boht zyada space lgti hy jis ke wja sy github humy bloack b kr skta hy,`

`Jb ksi or ko use krna hota hy to wo `
         
         npm install

ka use kr ky dobara node_modules ka folder bna skta hy, package-lock.json ma sb modules ke detail hoti hy jis sy wo in ko install kr lyta hy.

 >    * `Correct my Ans`


## New Quiz
## React ma ketni types ky components hoty hayn?

Ans: 
* `5 types of React Components`
     * `Functional Components`
     * `Class Components`
     * `Pure Components`
     * `Higher-Order Components`
     * `Render Props Componets`

