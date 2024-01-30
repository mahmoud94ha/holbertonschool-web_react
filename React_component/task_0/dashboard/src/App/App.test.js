import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders a <Notifications /> component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("renders a <Header /> component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("renders a <Login /> component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("renders a <Footer /> component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
