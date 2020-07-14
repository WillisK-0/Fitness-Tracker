import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../style/NeoCalculator.css";

function NeoCalulator(props) {
    
}

const $input = document.querySelector("input");

document.querySelectorAll(".num__key").forEach(
  el => {
    el.onclick = () => $input.value = $input.value !== "0" ? $input.value + el.innerText : el.innerText;
  }
);

const buffer = []

const opCallback = opName => () => {
    let currentVal = parseFloat($input.value);
    if (opName === "percent") {
      currentVal *= 0.01;
      $input.value = currentVal;
    }
    else {
      if (buffer && buffer.length) {
        buffer.push({ value: currentVal });

        const result = evaluate(buffer);

        buffer.push({ value: result });
        buffer.push({ value: opName });

        $input.value = "";
      }
      else {
        buffer.push({ value: currentVal });
        buffer.push({ value: opName });
        $input.value = "";
      }
    }
  }

const evaluate = buffer => {
  const secondOperand = buffer.pop().value;
  const operator = buffer.pop().value;
  const firstOperand = buffer.pop().value;

  switch (operator) {
    case "add":
      return firstOperand + secondOperand;
      break;
    case "subtract":
      return firstOperand - secondOperand;
      break;
    case "multiply":
      return firstOperand * secondOperand;
      break;
    case "divide":
      return firstOperand / secondOperand;
      break;
    default:
      return secondOperand;
  }
}

for (const opName of [ "add", "subtract", "multiply", "divide", "percent" ]) {
  document.querySelector(`.op__key[op=${opName}]`).onclick =
    opCallback(opName);
}

document.querySelector(".eq__key").onclick =
  () => {
    if (buffer && buffer.length) {
      buffer.push({ value: parseFloat($input.value) });
      $input.value = evaluate(buffer);
    }
  }

document.querySelector(".op__key[op=clear]").onclick =
  () => {
    $input.value = 0;
    buffer.length = 0;
  }

document.querySelector(".op__key[op=negate]").onclick =
  () => $input.value = -parseFloat($input.value);

<main>
  <input type="number" value=0>
  <div class='keys'>
    <button class='op__key' op='clear'>C</button>
    <button class='op__key' op='negate'>+/-</button>
    <button class='op__key' op='percent'>%</button>
    <button class='op__key' op='divide'>/</button>
    <button class='num__key'>7</button>
    <button class='num__key'>8</button>
    <button class='num__key'>9</button>
    <button class='op__key' op='multiply'>x</button>
    <button class='num__key'>4</button>
    <button class='num__key'>5</button>
    <button class='num__key'>6</button>
    <button class='op__key' op='subtract'>-</button>
    <button class='num__key'>1</button>
    <button class='num__key'>2</button>
    <button class='num__key'>3</button>
    <button class='op__key' op='add'>+</button>
    <span></span>
    <button class='num__key'>0</button>
    <button class='num__key'>.</button>
    <button class='eq__key'>=</button>
  </div>
</main>
