import { useState, useEffect } from "react";
import Aos from "aos";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}

export default App;
