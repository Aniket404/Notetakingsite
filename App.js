import Header from "./components/Header.jsx"
import NoteInput from "./components/Noteinput.jsx"
import Content from "./components/Content.jsx"
import "./App.css";

;

function App() {
  return (
    <div className="container">
        <Header/>
        <NoteInput/>
        <Content/>
    </div>
  );
}

export default App;
