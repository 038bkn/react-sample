import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')

  console.log(count)

  return (
    <>
      <h1>カウントしちゃうよ～</h1>

      <CountPreview hoge={count} />
      <button onClick={function () {
        setCount(count + 1)
        setError('') // エラーメッセージをクリア
        console.log(count)
      }}>+</button>

      <button onClick={function () {
        if (count > 0) {
          setCount(count - 1)
          setError('') // エラーメッセージをクリア
          console.log(count)
        } else {
          setError(prevError => prevError === '押せないよ～ん' ? 'ムリだって' : '押せないよ～ん')
        }
      }}>-</button>

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  )
}

const CountPreview = function ({ hoge }: { hoge: number }) {
  return <div>count: {hoge}</div>
}

export default App