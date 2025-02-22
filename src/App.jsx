//task import components
import Header from "./components/Header"
import Main from "./components/Main"

//task import languages
import languages from "./data/languages"

function App() {

  return (
    <>
      <Header titles={languages} />
      <Main dev={languages} />
    </>
  )
}

export default App
