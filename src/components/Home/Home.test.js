import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
    test("renders the button as expected without authorization", () => {
        //Arrange
        render(<Home />,{wrapper:Router})
    
        //Act 
        /*No action testing for this component */
    
        const loginElement = screen.getByText("Login");
        expect(loginElement).toBeInTheDocument();
    
    })

})
