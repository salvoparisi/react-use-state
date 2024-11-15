import React, { useState } from "react";
import languages from './assets/languages.js'
export default function App() {
  const [selectedBtn, setSelectedBtn] = useState(0)

  return (
    <>
      <header>
        <h1>Learn Web Development</h1>
      </header>
      <main>
        <div className="container">
          {languages.map(obj => {
            return <button key={obj.id} onClick={() => setSelectedBtn(obj.description)}>{obj.title}</button>
          })}
        </div>
        <div>{selectedBtn ? (selectedBtn) : ("no languages selected")}</div>
      </main>
    </>
  )
}