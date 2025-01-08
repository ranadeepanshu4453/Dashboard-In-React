import React, { useState } from "react";

function handleAdd() {
    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        id: i,
        name: `Item ` + (i + 1),
      });
    }
    return data;
  }
const Content = () => {
    const [data, setData] = useState(handleAdd);
    const [text, setText] = useState("");
  
  return <div>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={() =>{setText(''); setData([{
        id: data.length,
        name: text,
    },...data]) }}>Add</button>
    <ul>
        {data.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
  </div>;
};

export default Content;
