         https://www.youtube.com/watch?v=e2IUZyuNfgk&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=22


## React Lifecycle Method
* `Mounting`
* `Updating`
* `Unmounting`

`lifecycle boht sary ho skty hayn lykin phase 3 hoty hayn`
* `Birth` =>  `Mounting`
* `Update` =>  `Updating`
* `Expire` =>  `Unmounting`

"./react_lifecycle.png"
## Lifecucle Method
 
 * Product

   * Load Product
     * `Jb product load ho rha hota hy,` `mount` `ya 1st phase`

   * Update Product
     * `Jb hum os ma koi changes krty hayn jysy color change , value change, e.t.c.,` `update` `ya 2nd phase`

   * Remove Product
     * `remove krna yani, ksi component ko DOM sy hide kr dyty hyan, 1 function ko ktm kr dyty hayn,` `ya 3rd phase`


## Example in real world project

` Jb hum ksi website pr jaty hyn, to 1 'pop up' (koi b pop Up) a jata hy, react ko kysy pta clta hy ky ab pop up dekhan ahy, react dekhta hy k page pr HTML load ho gi hyto pop up show krwa o, `

`remove`
`hum ksi btn pr koi Functon call krty ahyn kbi koi element show krwaty hyn to browser pr load pr jata hy, remove (unmount) sy hum sb khali kr dyty hyan, taky page thek sy kam kry`


`IN SB KO HUM COMPONENT MA USE KRTY HAYN `

#### LIFECYCLE METHOD CLTY KB HAYN?
* `When component is load.,`
* `When Compponent is update with state and props.`
* `When Compponent is remove.`