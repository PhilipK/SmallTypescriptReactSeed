import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "../src/components/App";

describe("Simple tests", () => {

    beforeEach(() => {


    });


    describe("Main App", () => {
        it("Renders a message", () => {
            const { getByTestId } = render(<App />);
            const component = getByTestId("HelloMessage");
            expect(component).toBeDefined();
            expect(component.innerHTML).toBe("Hello World"); // defined by data-testid
        });
    });

});

