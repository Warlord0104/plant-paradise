import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <h1>GreenLeaf</h1>
      <p>Your trusted store for healthy & beautiful houseplants.
        Plant Paradise is a one-stop destination for beautiful, healthy houseplants that bring nature closer to your home. We offer a wide variety of indoor plants, carefully curated to suit different spaces, lifestyles, and experience levels. Our mission is to make plant care simple, enjoyable, and accessible for everyone. With quality plants, clear information, and an easy shopping experience, Plant Paradise helps you create a greener, calmer, and more refreshing living environment. 🌿
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Landing;
