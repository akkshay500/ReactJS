import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const SearchComponent = () =>{
  return(
    <div>
    <h2> Search </h2>
    </div>
  );
};

// React Functional Component - a function that returns a JSX code.
/* When one component is added to another component, like we added Title in HeadingComponent, this is called as component composition */

const AppLayout = () =>{
    return (
      <div className="AppLayout">
      <Header/>
      <Body/>
      <Footer/>
      </div>
      )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); 
root.render(<AppLayout/>); 