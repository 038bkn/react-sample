import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>カウントしちゃうよ～</h1>
      
      <CountPreview hoge={count} />
      <button onClick={function(){
        setCount(count + 1)
        console.log(count)
      }}>+</button>

      <button onClick={function(){
        setCount(count - 1)
        console.log(count)
      }}>-</button>
    </>
  )
}

const CountPreview = function ({hoge}:{hoge:number}) {
  return <div>count:{hoge}</div>
}

export default App