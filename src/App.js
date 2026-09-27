
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Payment from './Payment';

function Home() {
  return (
    <div className="App">

      {/* Navigation */}
      <nav>
        <h2>🐾 PawPal</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <span>Pets</span>
          <span>Services</span>
          <span>About</span>
        </div>

        <div className="nav-buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>

          <Link to="/register">
            <button className="nav-button">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <p className="tagline">FIND YOUR NEW BEST FRIEND 🐾</p>

          <h1>
            Every paw
            <br />
            deserves a
            <br />
            <span>loving home.</span>
          </h1>

          <p className="hero-description">
            Meet adorable pets looking for their forever families
            and make a difference in a life today.
          </p>

          <button className="main-button">
            Meet the Pets →
          </button>
        </div>

        <div className="hero-pet">
          <div className="pet-circle">
            🐶
          </div>

          <div className="floating-card">
            ❤️ Loved & Waiting
          </div>
        </div>

      </section>

      {/* Categories */}
      <section className="categories">

        <p className="section-tag">EXPLORE</p>

        <h2>Find your PawPal</h2>

        <div className="category-container">

          <div className="category-card">
            <div className="category-icon">🐶</div>
            <h3>Dogs</h3>
            <p>125 friends</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🐱</div>
            <h3>Cats</h3>
            <p>98 friends</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🐰</div>
            <h3>Rabbits</h3>
            <p>42 friends</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🐹</div>
            <h3>Small Pets</h3>
            <p>31 friends</p>
          </div>

        </div>

      </section>

      {/* Pets Section */}
      <section className="pets">

        <div className="section-heading">
          <div>
            <p className="section-tag">MEET THEM</p>
            <h2>Pets looking for a home</h2>
          </div>

          <button className="view-button">
            View all →
          </button>
        </div>

        <div className="pet-container">

          <div className="pet-card">
            <div className="pet-image">🐶</div>
            <h3>Milo</h3>
            <p>2 years • Mumbai</p>
            <button>Meet Milo</button>
          </div>

          <div className="pet-card">
            <div className="pet-image">🐱</div>
            <h3>Luna</h3>
            <p>1 year • Navi Mumbai</p>
            <button>Meet Luna</button>
          </div>

          <div className="pet-card">
            <div className="pet-image">🐕</div>
            <h3>Coco</h3>
            <p>3 years • Thane</p>
            <button>Meet Coco</button>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="services">

        <p className="section-tag">PAW CARE</p>

        <h2>More than adoption</h2>

        <div className="service-container">

          <div className="service-card">
            <span>🩺</span>
            <h3>Vet Care</h3>
            <p>Keep your furry friend healthy and happy.</p>
          </div>

          <div className="service-card">
            <span>✂️</span>
            <h3>Grooming</h3>
            <p>Because every PawPal deserves to feel fresh.</p>
          </div>

          <div className="service-card">
            <span>🥣</span>
            <h3>Pet Essentials</h3>
            <p>Everything your companion needs.</p>
          </div>

        </div>

      </section>

      {/* Payment Section */}
      <section className="services">

        <p className="section-tag">SUPPORT PAWPAL</p>

        <h2>Help a PawPal 🐾</h2>

        <p>
          Support our pets and help them find a loving home.
        </p>

        <Link to="/payment">
          <button className="main-button">
            Donate ₹500 →
          </button>
        </Link>

      </section>

      {/* Footer */}
      <footer>
        <h2>🐾 PawPal</h2>
        <p>Sometimes, they find you.</p>
      </footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/payment" element={<Payment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

