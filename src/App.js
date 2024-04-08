import logo from './imajea/dee_load_screen.png';
import spinning_pizza from './imajea/PIZZA.png'
import bunny from './imajea/bunnypic.jpg'
import splat from './imajea/splat.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PIZZA GIRL!!!
        </p>
        <img src={spinning_pizza} className="peza" alt="pizza" />
        <hr width="50%" />
        <p>
          My fave animal 😁
        </p>

        <a href="https://www.google.com/search?q=bunny&tbm=isch">
          <div className="bunnydiv">
            <img src={bunny} className="bunnypic" alt="bunny" />
            <p>
              ⬆ click me ⬆
            </p>
          </div>
        </a>
        <br /><br />
        <hr width="50%" />
        <p>
          My fave colour 😜
        </p>
        <a href='https://fiberglasswarehouse.com/cdn/shop/files/ForestGreen1610_grande.jpg'>
          <img src={splat} className="splat" alt="splat" />
          <p>
            ⬆ click me ⬆
          </p>
        </a>
        <hr width="50%" />

      </header>
    </div>
  );
}

export default App;
