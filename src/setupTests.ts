// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "jest-fetch-mock";
// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation
require("jest-fetch-mock").enableMocks();
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
fetchMock.dontMock();
