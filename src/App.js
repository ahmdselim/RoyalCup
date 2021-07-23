import React from "react";
import Home from "./pages/Home/HomePage";
import Contacts from "./pages/Contacts/ContactsPage";
import About from "./pages/About/AboutPage";
import Product from "./pages/Product/ProductPage";
import Products from "./pages/Products/ProductsPage";
import Category from "./pages/Category/CategoryPage";
import Blog from "./pages/Blog/Home/Index";
import Post from "./pages/Blog/Post/Index";
import Admin from "./pages/Blog/Admin/Index";
import AdminLogin from "./pages/Blog/Admin/Login/Index";
import AdminSignup from "./pages/Blog/Admin/Signup/Index";
import { AuthProvider } from "./Components/Blog/Admin/Auth";
import AddBlog from "./pages/Blog/Admin/AddBlog/Index";
import Account from "./pages/Blog/Admin/EditProfile/Account";
import AddProduct from "./pages/Blog/Admin/AddProduct/Index";
import Logout from "./pages/Blog/Admin/Logout/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path={"/Product/:id"} component={Product} />
            <Route path={"/Products/:id"} component={Products} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/about" component={About} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/category" component={Category} />
            <Route path="/blog" component={Blog} />
            <Route path={"/post/:id"} component={Post} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={AdminLogin} />
            <Route path="/signup" component={AdminSignup} />
            <Route path="/addBlog" component={AddBlog} />
            <Route path="/profile" component={Account} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/logOut" component={Logout} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
