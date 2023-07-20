import React from "react";

interface AnswerOptionProps {
  answer: string;
  onAnswerSelected: () => void;
  isSelected: boolean;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  answer,
  onAnswerSelected,
  isSelected,
}) => {
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
