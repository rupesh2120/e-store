import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Registration from "./components/Register";

function App() {
	let authenticated = localStorage.getItem("auth-token");
	return (
		<div>
			<Navbar authenticated={authenticated} />
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/products/:id" component={Product} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
		</div>
	);
}

export default App;
