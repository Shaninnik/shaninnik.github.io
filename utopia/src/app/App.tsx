import * as React from "react";
import { Menu } from "./components/Menu";
import { Index } from "./screens/Index"
import { Header } from "./components/Header";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Index />
        <Header />
        <Menu />
      </>
    );
  }
}
