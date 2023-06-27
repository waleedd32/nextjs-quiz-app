"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="container">
      <h1>Quiz Page</h1>
      <div>
        <h2>
          Question: 1<span></span>
        </h2>
      </div>
    </div>
  );
};

export default page;
