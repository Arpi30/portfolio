export const Title = (props) => {
  let path = props.path.slice(1);
  const firstLetter = path.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = path.slice(1);
  path = firstLetterCap + remainingLetters;
  document.title = path + " page";
};
