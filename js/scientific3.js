(() => {
  "use strict";

  let expression = "";
  let memory = 0;
  let lastAnswer = 0;
  window.cnDegreeRadians = window.cnDegreeRadians || "degree";

  function inputNode() {
    return document.getElementById("sciInPut");
  }

  function outputNode() {
    return document.getElementById("sciOutPut");
  }

  function historyNode() {
    return document.getElementById("scihistory");
  }

  function render(output) {
    const input = inputNode();
    const out = outputNode();
    if (input) input.textContent = expression || "\u00a0";
    if (out) out.textContent = String(output ?? (expression || "0"));
  }

  function normalizedExpression() {
    return expression
      .replace(/\u00d7/g, "*")
      .replace(/\u00f7/g, "/")
      .replace(/\^/g, "**")
      .replace(/pi/g, "Math.PI")
      .replace(/\be\b/g, "Math.E")
      .replace(/Ans/g, String(lastAnswer));
  }

  function degrees(value) {
    return window.cnDegreeRadians === "degree" ? value * Math.PI / 180 : value;
  }

  function evaluate() {
    const source = normalizedExpression();
    if (!/^[0-9+\-*/().,\s*MathPIEAns**]+$/.test(source.replace(/Math\.(PI|E)/g, "Math.PI"))) {
      throw new Error("Invalid expression");
    }
    const fn = Function("Math", `"use strict"; return (${source});`);
    const result = fn(Math);
    if (!Number.isFinite(result)) throw new Error("Invalid result");
    return Math.round(result * 1e12) / 1e12;
  }

  function unary(name) {
    const current = expression || String(lastAnswer || 0);
    const value = Number(evaluateSingle(current));
    let result = value;
    if (name === "sin") result = Math.sin(degrees(value));
    if (name === "cos") result = Math.cos(degrees(value));
    if (name === "tan") result = Math.tan(degrees(value));
    if (name === "asin") result = window.cnDegreeRadians === "degree" ? Math.asin(value) * 180 / Math.PI : Math.asin(value);
    if (name === "acos") result = window.cnDegreeRadians === "degree" ? Math.acos(value) * 180 / Math.PI : Math.acos(value);
    if (name === "atan") result = window.cnDegreeRadians === "degree" ? Math.atan(value) * 180 / Math.PI : Math.atan(value);
    if (name === "sqrt") result = Math.sqrt(value);
    if (name === "3x") result = Math.cbrt(value);
    if (name === "x2") result = value ** 2;
    if (name === "x3") result = value ** 3;
    if (name === "ex") result = Math.exp(value);
    if (name === "10x") result = 10 ** value;
    if (name === "ln") result = Math.log(value);
    if (name === "log") result = Math.log10(value);
    if (name === "1/x") result = 1 / value;
    if (name === "pc") result = value / 100;
    if (name === "n!") result = factorial(value);
    expression = String(Math.round(result * 1e12) / 1e12);
    lastAnswer = Number(expression);
    render(expression);
  }

  function evaluateSingle(value) {
    const old = expression;
    expression = value;
    const result = evaluate();
    expression = old;
    return result;
  }

  function factorial(value) {
    const n = Math.floor(value);
    if (n < 0 || n > 170) return NaN;
    let out = 1;
    for (let i = 2; i <= n; i += 1) out *= i;
    return out;
  }

  window.r = function r(value) {
    try {
      if (value === "C") {
        expression = "";
        render(0);
        return false;
      }
      if (value === "bk") {
        expression = expression.slice(0, -1);
        render(expression || 0);
        return false;
      }
      if (value === "=") {
        const before = expression;
        lastAnswer = evaluate();
        expression = String(lastAnswer);
        const history = historyNode();
        if (history && before) history.innerHTML = `<div>${before} = <b>${expression}</b></div>` + history.innerHTML;
        render(expression);
        return false;
      }
      if (value === "ans") {
        expression += "Ans";
      } else if (value === "M+") {
        memory += Number(evaluateSingle(expression || "0"));
      } else if (value === "M-") {
        memory -= Number(evaluateSingle(expression || "0"));
      } else if (value === "MR") {
        expression += String(memory);
      } else if (value === "RND") {
        expression += String(Math.random());
      } else if (value === "+/-") {
        expression = expression.startsWith("-") ? expression.slice(1) : `-${expression || "0"}`;
      } else if (value === "pi" || value === "e") {
        expression += value;
      } else if (value === "pow") {
        expression += "^";
      } else if (value === "apow") {
        expression += "^(1/";
      } else if (["sin","cos","tan","asin","acos","atan","sqrt","3x","x2","x3","ex","10x","ln","log","1/x","pc","n!"].includes(value)) {
        unary(value);
        return false;
      } else {
        expression += String(value);
      }
      render(expression);
    } catch (_err) {
      render("Error");
    }
    return false;
  };

  render(0);
})();
