        https://www.youtube.com/watch?v=xPiph9AYYRw&list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM&index=27


##  shouldcomponentUpdate(), Life Cycle Method
#### 5W's 
* When shouldComoponentDidUpdate called and use?
* It can stop rendering
* Use with state and props
* New Quiz
* Previous Quiz



## See Lifecycle img

       life-cycle.png

## Why use?
`shouldComponentUpdate() life cycle ma updates ma ata hy`,
`is ka use ksi b step ko STOP krny ky le a hota hy, is pr hum condition lga skty hyan`
`yani hum ksi b state ke rendrering rook skty hyan`


      shouldComponentUpdate(){ 
        console.warn("shouldcomponentUpdate-----------------shouldcomponentUpdate", this.   state.counter)
        if(this.state.counter>5 && this .state.counter<10){
          return true;
        }
      }

`iss trha shouldComponentUpdate ma use kry gy`


## shouldComponentUpdate() kb cly ga ?
* `Jb b k6h update hoga ya cly ga`,
* ` is le a is ko rendering rolny ky le use krty han`` ya TRUE or FALSE return krta hy.`


`is sy app ke speed increase hti hy`





##
## new Quiz
### Kya shouldComponentUpdate() phly clta hy ya componentDidUpdate() phly clta hy?
Ans: `shouldComponentUpdate()  phly clta hy`










