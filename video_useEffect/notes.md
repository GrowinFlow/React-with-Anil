      https://www.youtube.com/watch?v=bio2eP5YXyw


##  useEffect in React JS
* Why use useEffect
* What is useEffect
* Example useEffect
* useEffect with state and props
* Quiz



## case 1

       useEffect(() => {
         alert("hy I'm alert, call on counter triger "+ count)
         setColor(color + 3)
       }
* `hr bar / hr render pr cly ga`
* `hr page reload pr b cly ga`

## case 2

      useEffect(() => { 
        alert("hy I'm alert, call on counter triger "+ count)
        setColor(color + 3)
      }, [])

* `srif page reload pr cly ga`
* `component re-render / render pr nhi cly ga`

## case 3

      
      const [count, setCount] = useState(0)
      useEffect(() => { 
        alert("hy I'm alert, call on counter triger "+ count)
        setColor(color + 3)
      }, [count])

* `Jb page load ho ga to cly ga, `
* `hr re-render pr nhi cly ga , srif is render pr cly ga jb 'count'  ke value update ho rhi hy, ya phr propske value [dependce arry] ma ho ge` 

## case 4

`ex`

      useEffect(() => { 
          first

        return () => {
          second
       }
      }, [[third]])

`real`

      useEffect(() => {
       return () => {
         alert("Navbar removed | Component unmounted")
       }
      }, [])

`is ka use boht km ho ta hy, `
`lykin hun chthy hayn k jb humara component unmount ho to kyh ho, to hum return funtion ma k6h b pass kr skty hayan`

` a ny ya useEffect <Navbar /> ma use ke a nambar ko App ma import ke a tha agr ksi condition ke wja sy hum is navbar ko remove krt hayn to is ka return functin calll ho jay ga`