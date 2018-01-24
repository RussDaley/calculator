# Calculator
Calculator built with React

In the initial commit I learned a few things:
 - componentWillMount() is for when the component is loaded do the following...
 - I was reminded that when your using state or props that you need to be using the React.Component class.
 - I used this article, https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17 to help me pass information from the child component (CustButton) to the parrent component (App).


 ### Here's my plan for the Calculator:
  1. when each number button is pressed accululate a number (firstNumber)
  2. when an operator button is pressed, save firstNumber into the state. and also save the selected operartor as another state item.
  3. repet 1. for secondNumber.
  4. when equals is pressed have it do it's thing.