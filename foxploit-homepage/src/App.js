import React from 'react';
import Menu from './components/Menu';
import Team from './components/Team';

// <!-- Bootstrap CSS -->
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/themify-icons.css';
import './assets/css/magnific-popup.css';
import './assets/css/style.css';
// import './assets/css/owl.carousel.min.css';
// import './assets/css/flaticon.css';

function App() {
  return (
    <div className="App">
      <header className="main_menu home_menu">
          <Menu />
          <Team />
      </header>
    </div>
  );
}

export default App;
