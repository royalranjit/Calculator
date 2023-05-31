import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState("")
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "%"]
  const [seconddata, setSeconddata] = useState("")

  return (
    <>
      <div className='wrapper'>
      <input  type="text" value={data} onChange={(e)=>setDate(e.target.targe)} ></input>
      <input  type="text" value={seconddata} onChange={(e)=>setSeconddata(e.target.targe)} ></input>
        {
          numbers.map((items) => {
            return (
              <button className='B1' onClick={e =>
                setData(data + e.target.value)} value={items}>{items}</button>
            )
          })
        }


        <div className='modifiers'>
          <button onClick={() => setData(data.substring(0, data.length - 1))}>
            Clear
          </button>
          <button onClick={() => setData("")}>
            AC
          </button>
        </div>

        <div className='operations '>
          <button onClick={e => setData(data + e.target.value)} vlaue='+'>
            +
          </button>
          <button onClick={e => setData(data + e.target.value)} value='-'>
            -
          </button>
          <button onClick={e => setData(data + e.target.value)} value='*'>
            *
          </button>
          <button onClick={e => setData(data + e.target.value)} value='/'>
            /
          </button>

          <button onClick={e => setData(data + e.target.value)} value='='>
            =
          </button>


        </div>

      </div>

    </>
  )
}

export default App
