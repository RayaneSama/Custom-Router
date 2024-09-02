/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";
function Route({ children, path }) {
  const { currentURL } = useContext(BrowserContext);
  //   console.log(currentURL, path);
  // am I at the current URL ?
  // yes ? ==> render myself
  // no ? ==> nothing
  const isCurrentPath = currentURL.pathname === path;
  return isCurrentPath ? <>{children} </> : null;
}

export default Route;
