import React from "react";
import { Route } from "react-router-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Routes } from "./App";
import PokemonHome from "./components/PokemonHome/PokemonHome";
import PokemonCatchHome from "./components/PokemonCatchHome/PokemonCatchHome";

let pathMap = {};

describe("Test App", () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  it("should show PokemonHome component for / router", () => {
    expect(pathMap["/"]).toBe(PokemonHome);
  });

  it("should show PokemonHome component for /home router", () => {
    expect(pathMap["/home"]).toBe(PokemonHome);
  });

  it("should show PokemonCatchHome component for /catch router", () => {
    expect(pathMap["/catch"]).toBe(PokemonCatchHome);
  });
});
