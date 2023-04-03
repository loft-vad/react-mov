describe("SearchForm component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    const initialSearchString = "search string";

    const inputSearch = cy.get('input[type="text"]').type(initialSearchString);
    inputSearch.should("have.value", initialSearchString);

    const submitButton = cy.get('button[class^="Button"]');
    submitButton.click();

    cy.window()
      .its("console")
      .then((console) => {
        cy.stub(console, "log").callsFake((...args) => {
          args.forEach((arg) => {
            expect(arg).contain(initialSearchString);
          });
        });
      });
    cy.wait(1000);
  });

  it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    const initialSearchString = "search string then enter";

    cy.get('input[type="text"]').type(initialSearchString + "{enter}");

    cy.window()
      .its("console")
      .then((console) => {
        cy.stub(console, "log").callsFake((...args) => {
          args.forEach((arg) => {
            expect(arg).contain(initialSearchString);
          });
        });
      });
  });
});
