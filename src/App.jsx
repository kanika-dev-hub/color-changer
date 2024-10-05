import { useEffect, useState } from "react"

function App() {
  const colorList = ['red','green','blue','olive','gray','yellow','pink','purple','lavendar','white','black']
  const [color,setColor] = useState("white")
  const [textcolor,setTextColor] = useState("black")
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:(color=='lavendar')?'plum':color, color:(color=='lavendar')?'plum':textcolor}}>
      <h1 className="pt-10 font-bolder text-5xl text-center font-sans">This is my sample Text</h1>
    </div>
    <div className="fixed bottom-12 flex flex-col flex-wrap items-center gap-3 justify-center inset-x-0">
      <div className="bg-slate-300 flex flex-wrap gap-5 border p-3 rounded-3xl">
        <p className="text-md font-mono font-bold">BG ColorPicker :</p>
        {colorList.map((color) => (
          <button key={color} className="h-6 w-6 rounded-xl outline-none" style={{backgroundColor : (color=='lavendar')?'plum':color, color :(color=='black')?'white':'black'}}
          onClick={() => setColor(color)}>    
          </button>           
        ))}
      </div>
      <div className="bg-slate-300 flex flex-wrap gap-5 border p-3 rounded-3xl">
      <p className="text-md font-mono font-bold">Text ColorPicker :</p>
      {colorList.map((color) => (
          <button key={color} className="h-6 w-6 rounded-xl outline-none" style={{backgroundColor : (color=='lavendar')?'plum':color, color :(color=='black')?'white':'black'}}
          onClick={() => setTextColor(color)}>  
          </button>           
        ))}
      </div> 
    </div>
  </>   
  )
} 

export default App
