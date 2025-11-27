import React from "react";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./Components/Watchpage";
import MainContainer from "./Components/MainContainer";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
    path:"/",
    element:<MainContainer />
   },
   {
     path:"/watch",
    element:<Watchpage/>
   }
]
}])
export default  function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}
