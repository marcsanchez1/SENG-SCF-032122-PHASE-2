// ✅ uncomment the line below ⬇️
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

// ✅ create a StyledButton component by styling the Button from react-bootstrap
/*
✅ here are the new button styles:
padding: 8px 16px;
box-shadow:
  0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
background-color: #6772e5;
border: 1px solid #6772e5;

✅ here is the hover style:
background-color: #5469d4;
*/

export default function App() {
  // ✅ replace the Button with your StyledButton
  return <Btn>I'm a Button</Btn>;
}

const Btn = styled(Button)`
<<<<<<< HEAD
        padding: 8px 16px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
        background-color: #6772e5;
        border: 1px solid #6772e5;
        &:hover {
          background-color: red;
        }
`
=======
  padding: 8px 16px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #6772e5;
  border: 1px solid #6772e5;
  &:hover {
    background-color: #5469d4;
  }
`;
>>>>>>> d111878f7b5252681d59d6638a69fc9995ddf6da
