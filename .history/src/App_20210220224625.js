import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Register1 = React.lazy(() => import('./components/Register1/Register1'));
const Register2 = React.lazy(() => import("./components/Register2/Register2"));
const Register3 = React.lazy(() => import("./components/Register3/Register3"));
const Register4 = React.lazy(() => import("./components/Register4/Register4"));
const Register5 = React.lazy(() => import("./components/Register5/Register5"));
const Register6 = React.lazy(() => import("./components/Register6/Register6"));
const Register7 = React.lazy(() => import("./components/Register7/Register7"));
const Register8 = React.lazy(() => import("./components/Register8/Register8"));
const Register9 = React.lazy(() => import("./components/Register9/Register9"));
const Register10 = React.lazy(() => import("./components/Register10/Register10"));
const Register11 = React.lazy(() => import("./components/Register11/Register11"));


function App() {

  
  return (
    <>
    <Router>
      <Suspense fallback="loading.....">
        <Switch>
          <Route path="/Register1" exact component={Register1} />
          <Route path="/Register2" exact component={Register2} />
          <Route path="/Register3" exact component={Register3} />
          <Route path="/Register4" exact component={Register4} />
          <Route path="/Register5" exact component={Register5} />
          <Route path="/Register6" exact component={Register6} />
          <Route path="/Register7" exact component={Register7} />
          <Route path="/Register8" exact component={Register8} />
          <Route path="/Register9" exact component={Register9} />
          <Route path="/Register10" exact component={Register10} />
          <Route path="/Register11" exact component={Register11} />
        </Switch>
      </Suspense>   
      </Router>
       </>
  );
}

export default App;
