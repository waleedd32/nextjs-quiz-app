import React from "react";

const AnswerOption = ({ answer, onAnswerSelected, isSelected }) => {
  return (
    <li
      key={answer}
      onClick={onAnswerSelected}
      className={isSelected ? "li-selected" : "li-hover"}
    >
      <span>{answer}</span>
    </li>
  );
};

export default AnswerOption;
