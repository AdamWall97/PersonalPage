import { Button, Navbar } from "reactstrap";
import React from "react";

function Home() {

  const [title, setTitle] = React.useState(["Developer", "Engineer", "Lucie", "Michael"]);
  
  
  return (
    <div className="jumbotron jumbotron-fluid">   
      <div className="container">
        <p className="lead">Hi I'm Adam and I'm a...</p>
        <div className="container">
        <div className="scroller text-primary">
          <span>
            {title[0]}
            <br />
            {title[1]}
            <br />
            {title[2]}
            <br />
            {title[3]}
          </span>
        </div>
    </div>

      </div>
        <div>Engineer</div>
    </div>
   
  );
}
export default Home;
