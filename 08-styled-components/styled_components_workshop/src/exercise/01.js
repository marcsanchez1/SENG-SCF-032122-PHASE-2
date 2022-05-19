import { useState } from "react";
// ✅ remember to import the styled-components library!
import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from the elements below to create the CSS rules for your components
// 📃 https://styled-components.com/docs/basics#getting-started

export default function App() {
  const [count, setCount] = useState(0);
  
  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <Div>
<<<<<<< HEAD
      <Button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </Button>
      <Button onClick={() => setCount(count + 1)}>
=======
      <Button onClick={() => setCount((count) => count + 1)} >
        Clicks: {count}
      </Button>
      <Button onClick={() => setCount((count) => count + 1)} >
>>>>>>> d111878f7b5252681d59d6638a69fc9995ddf6da
        Clicks: {count}
      </Button>
    </Div>
  );
}

const Div = styled.div`
<<<<<<< HEAD
        width: 300px;
        height: 300px;
        display: grid;
        place-content: center;
        gap: 16px;
        background: skyblue;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`
const Button = styled.button`
          background: dodgerblue;
          padding: 16px;
          font-size: 1rem;
          border: 2px solid black;
          border-radius: 4px;
          cursor: pointer;
          transition: .15s ease-in-out;
`
=======
  width: 300px;
  height: 300px;
  display: grid;
  place-content: center;
  gap: 16px;
  background: lightgreen;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`

const Button = styled.button`
  background: orange;
  padding: 1rem;
  font-size: 1em;
  border: 2px solid black;
  border: 2px solid green;
  border-radius: 4px;
  cursor: pointer;
    &:hover {
      background: blue;
      color: white;
    }
`
>>>>>>> d111878f7b5252681d59d6638a69fc9995ddf6da
