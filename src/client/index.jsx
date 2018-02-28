import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import Demo from "./components/demo.jsx";

render(<Demo />, document.getElementsByClassName("demo")[0]);