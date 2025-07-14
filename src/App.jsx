import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/navbar"
import Model from "./components/Model"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
