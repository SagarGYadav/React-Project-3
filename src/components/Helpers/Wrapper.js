const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// setEnteredAge useState here it's became string not a number.
//  to convert it into number (or we want to be super safe)
// we added '+' before enteredAge . so now it will give positive number.
