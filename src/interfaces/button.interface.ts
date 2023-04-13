export interface IButton {
  width:
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "six"
    | "seven"
    | "eight"
    | "nine"
    | "ten";
  height: "one" | "two";
  buttonStyled:
    | "black"
    | "grey-black"
    | "grey-white"
    | "blue"
    | "light-blue"
    | "white"
    | "border-black"
    | "border-grey"
    | "border-blue"
    | "feedback-alert"
    | "feedback-sucess"
    | "disable";
}
