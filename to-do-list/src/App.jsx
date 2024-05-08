import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";

function App() {

  return (
    <body>
      <h3>To do app</h3>
      <Header></Header>

      <main className="main">
      <ToDoList></ToDoList>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default App
