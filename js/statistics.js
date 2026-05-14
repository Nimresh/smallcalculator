(() => {
  "use strict";

  let entry = "";
  let values = [];

  function number(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function format(value) {
    if (!Number.isFinite(value)) return "Error";
    return Number(value.toPrecision(12)).toString();
  }

  function output(text, label) {
    const out = document.getElementById("staOutPut");
    const msg = document.getElementById("staquickmsg");
    if (out) out.textContent = text;
    if (msg) msg.innerHTML = label || "&nbsp;";
  }

  function renderList() {
    const list = document.getElementById("staInPutList");
    if (!list) return;
    list.innerHTML = values
      .map((value, index) => `<div><span class="staInPutListX" onclick="cs('DEL${index}')">x</span> ${format(value)}</div>`)
      .join("");
  }

  function addEntry() {
    if (entry === "" || entry === "-" || entry === ".") return;
    values.push(number(entry));
    entry = "";
    output("0", "Value added");
    renderList();
  }

  function stats() {
    const count = values.length;
    const sum = values.reduce((total, value) => total + value, 0);
    const mean = count ? sum / count : 0;
    const sumSquares = values.reduce((total, value) => total + value * value, 0);
    const populationVariance = count ? values.reduce((total, value) => total + (value - mean) ** 2, 0) / count : 0;
    const sampleVariance = count > 1 ? values.reduce((total, value) => total + (value - mean) ** 2, 0) / (count - 1) : 0;
    const geometricMean = count && values.every((value) => value > 0)
      ? Math.exp(values.reduce((total, value) => total + Math.log(value), 0) / count)
      : NaN;
    return { count, sum, mean, sumSquares, populationVariance, sampleVariance, geometricMean };
  }

  function calculate(command) {
    if (entry !== "") addEntry();
    const data = stats();
    if (!data.count) {
      output("0", "Add values first");
      return;
    }
    if (command === "x") output(format(data.mean), "Mean");
    if (command === "x2") output(format(data.mean ** 2), "Mean squared");
    if (command === "sum") output(format(data.sum), "Sum");
    if (command === "sum2") output(format(data.sumSquares), "Sum of squares");
    if (command === "psd") output(format(Math.sqrt(data.populationVariance)), "Population standard deviation");
    if (command === "psd2") output(format(data.populationVariance), "Population variance");
    if (command === "s") output(format(Math.sqrt(data.sampleVariance)), "Sample standard deviation");
    if (command === "s2") output(format(data.sampleVariance), "Sample variance");
    if (command === "GM") output(format(data.geometricMean), "Geometric mean");
  }

  window.cs = function cs(input) {
    if (typeof input === "number" || input === ".") {
      if (input === "." && entry.includes(".")) return false;
      entry += String(input);
      output(entry, "&nbsp;");
      return false;
    }

    if (typeof input === "string" && input.startsWith("DEL")) {
      values.splice(Number(input.slice(3)), 1);
      renderList();
      output(entry || "0", "Value removed");
      return false;
    }

    if (input === "EXP") {
      if (!/[eE]/.test(entry || "")) entry = `${entry || "1"}E`;
      output(entry, "&nbsp;");
      return false;
    }
    if (input === "+/-") {
      entry = entry.startsWith("-") ? entry.slice(1) : `-${entry || "0"}`;
      output(entry, "&nbsp;");
      return false;
    }
    if (input === "ADD") {
      addEntry();
      return false;
    }
    if (input === "C") {
      entry = "";
      output("0", "&nbsp;");
      return false;
    }
    if (input === "CAS") {
      entry = "";
      values = [];
      renderList();
      output("0", "Data cleared");
      return false;
    }

    calculate(input);
    return false;
  };

  window.statisticsReady = true;
  renderList();
})();
