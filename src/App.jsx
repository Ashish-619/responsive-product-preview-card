import "./App.css";
import desktopImg from "./images/image-product-desktop.jpg";

const App = () => {
  return (
    <div className="main">
      <img src={desktopImg} alt="" />
      <div className="inner">
        <p id="letter">PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <h1 id="price">$149.99</h1>
        <p id="discount">$169.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default App;
