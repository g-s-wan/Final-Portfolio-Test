import './pages/Home.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav>
      <div id="navbar">
        <li className="navbar-item navbar-home">
          <Link className="navbar-item link" to="/">Grace Wan</Link>
        </li>
        <li className="navbar-item navbar-right">
          <Link className="navbar-item link" to="about">About</Link>
        </li>
        <li className="navbar-item navbar-right">
          <Link className="navbar-item link" to="/">Work</Link>
        </li>
      </div>
    </nav>
  );
}
