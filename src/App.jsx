import React, { useState } from "react";
import languages from './assets/languages.js';

export default function App() {
  const [selectedBtn, setSelectedBtn] = useState(0);

  return (
    <>
      <header>
        <h1>Learn Web Development</h1>
      </header>
      <main>
        <div className="container">
          {languages.map(obj => (
            <button
              key={obj.id}
              onClick={() => setSelectedBtn(obj)}
              style={{
                backgroundColor: selectedBtn.id === obj.id ? "yellow" : "blue",
                color: selectedBtn.id === obj.id ? "black" : "white",
              }}
            >
              {obj.title}
            </button>
          ))}
          <div className="content">
            {selectedBtn ? (
              <>
                <h2>{selectedBtn.title}</h2>
                <div>{selectedBtn.description}</div>
              </>
            ) : (
              "No languages selected"
            )}
          </div>
        </div>
      </main>
    </>
  );
}
