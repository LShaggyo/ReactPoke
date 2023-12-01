import {Header} from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home";
import {Container} from "react-bootstrap";
import {PokemonList} from "./views/PokemonList";
import {PokemonDetails} from "./views/PokemonDetails";
import {PokemonProvider} from "./context/PokemonProvider";
import {Footer} from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
      <BrowserRouter basename="/">
        <PokemonProvider>
          <Header/>
          <Container className="my-4 bg-light rounded shadow-sm p-4">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/pokemons" element={<PokemonList/>}/>
              <Route path="/pokemons/:pokemonName" element={<PokemonDetails/>}/>
            </Routes>
          </Container>
          <Footer />
        </PokemonProvider>
      </BrowserRouter>
    </>
  )
}

export default App;