import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import store from "../../store";

describe("Home Component", () => {
  test("renders the navigation items as expected without authorization", () => {

    const userLog = window.localStorage.getItem("email")
    //Arrange
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: Router }
    );

    //Act
    /*No action testing for this component */
    let navlinks =null;
    if(!userLog){
        navlinks = screen.findAllByRole("li")
    }
    expect(navlinks).not.toBeNull();
  });
});
