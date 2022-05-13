import React from "react";
import SidePanel from "./Components/SidePanel/SidePanel";
import Main from "./Components/Main/Main";
const App = () => {
  return (
    <>
      <div className="row gx-0">
        {" "}
        <div className="col-3">
          <SidePanel />
        </div>
        <div className="col-9">
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
