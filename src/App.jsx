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
              onClick={() => setSelectedBtn(obj.id)}
              style={{
                backgroundColor: selectedBtn === obj.id ? "yellow" : "blue",
                color: selectedBtn === obj.id ? "black" : "white",
              }}
            >
              {obj.title}
            </button>
          ))}
          <div className="content">
            {selectedBtn ? (
              <>
                <h2>{languages.find(lang => lang.id === selectedBtn).title}</h2>
                <div>{languages.find(lang => lang.id === selectedBtn).description}</div>
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
