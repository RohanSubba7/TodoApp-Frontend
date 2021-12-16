import styled from "styled-components";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <AppStyled>
      <div className="content-container">
        <TodoForm />
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content-container {
    background-color: #374954;
    width: 80%;
    min-height: 80vh;
    border-radius: 20px;
    box-shadow: 10px 12px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export default App;
