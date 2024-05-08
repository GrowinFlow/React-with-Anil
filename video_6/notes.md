     https://www.youtube.com/watch?v=yPrcIFktnes&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=6

## React js in App structure
* `Understand File use and structure`
* `Understand Folder use and structure`
* `New Quiz`
* `Privious Quiz`

## Start project with npm

     cd project-6
     npm start

## File Struture & Folder Struture

* `project-6 - [app-name]`

    * `package.json`
       * `package.json` `is ma file / project ka name, all cehzon ke version, commands and Hm ny jtny pkg daal rkhy hyan os sb ke detail, app production ky le a ready hy ya nhi, e.t.c.`
       * `package.json` `humry app ke details rkhti hy.`

    * `package-lock.json`
        * `package-lock.json` ` is ma sary packages ke history, version, packages ke detail (kahan ssy install howy, integration -key, dependencies).`
        * `package-lock.json` `hury node modules ke details rkhti hy.`

    * `.gitignore`
        * `.gitignore` `is ka react sy koi taalt nhi hota.`
        * `ya humri git / github ko control krti hy,` ` yani is ma onn files ky name hoty hayn jin ko hum github pr push nhi krna chaty.`
        * `is ma add files and folder ko git ignore krta hy and github pr push nhi krta.`


    * `src` 
    * `src`       _`jo b kaam hum krty ahyn wo src folder ky ander krty hyan`_



        * `App.css`
            * `App.css` `css write krny ky le a.`

        * `App.js`
            * `App.js` ` ya han sy hum apna code write krna start krty hayn.`

        * `App.test.js`
            * `App.test.js` ` is ko testing team command line sy run kr ky test krti hy jis sy on ka load km ho jata hy`
            * `ya advanced topic hy`

        * `index.css`
            * `index.css` `is ma b css hoti hy /styling`
              `styling ke ktni b files bna skty hayn`

        * `index.js`
            * `index.js` ` ya humri react app ka intry point hota hy`
    
        * `logo.svg`
            * `logo.svg` ` ya svg img hy.`

        * `reportWebVitals.js`
            * `reportWebVitals.js` ` ya humy app ke performance ke report nekal kr dyti hy.`
             `is ko ` `index.js` `ky end ma embed ke a hota hy, is ko boht km use ke a jata hy.`
             `more detail 'https://bit.ly/CRA-vitals'`

        * `setupTests.js`
            * `setupTests.js` ` jis trhan (App.test.js) thi is trhan baki files ky b test cases lkhy jaty han kbi kbi, on sb ka start is file sy hota hy`
        * `more`
             * `more` ` src ma hum or b folders and file bnaty hyan. jysy jysy kam zyada hota jata hy hum folder and files bnaty hayn.`


    * `public`
        * `public` _` is ma wo content hota hy ho html file ky le a hota hy , jysy, index.html, fav.icon`_

        * `index.html`
            * `index.html` ` is ma html ke somple code hota hy and 1 root id hoti hy`
            `jis ko (index.js) ma access ke ahota hy, yani hum src ma jo b code write krty hayn  / ya file bnaty hayn wo is id sy link ke ay jaty hyan, jis sy single page application bnti hy`

        * `imges, fav.icon`
            * `imges, fav.icon` `ya simple fav icon and pngs ho skti hayn jinko hum html ky le a use krty hayn`

        * `manifest.json`
            * `manifest.json` ` is  ko meta files khty hayn, is ma themes, fav icon, colors, e.t.c. rkhti hy is ko hum use krty hyan`

        * `rebort.txt`
            * `rebort.txt` `ya search engine / seo ky le ahoti hy, is ka react sy koi lyna dyna nhi hy`

    * `node_modules`
        * `node_modules` `is ma sary modules / packages hoty hyan`
        `is ma koi kam nhi krty qu k jb hum (npm start) krty hyan to node wal folder domara bnta hy`

    * `build`
        * `build` ` is ma 2, ya 3 files hoti hayn jb hum app ko production ky le a ready krty hyan to ya folder bnta hy, is pr phr baat ho ge`






##
## Previous Quiz
## React version find in project?
Ans: 

 * `current version` `18.3.1` `, find in package-lock.json (line:14)`
 * `current version` `18.3.1` `, find in package.json (line:9)`

 >    * `Correct my Ans`


## New Quiz
## most important files
Ans `package.json, package-lock.json`

## Jb hum github pr code push krty hyan to node_modules ko upload/ push qu nhi krty , jb koi or use krna chahy ga to kysy use kry ga?
Ans: `is ma Thousands ky hesaab sy files and filders hoty hayn, jis wajy sy ya boht jga layti hy, github pr push krny sy boht zyada space lgti hy jis ke wja sy github humy bloack b kr skta hy,`

`Jb ksi or ko use krna hota hy to wo `
         
         npm install
ka use kr ky dobara node_modules ka folder bna skta hy.