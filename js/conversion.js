(() => {
  "use strict";

  const categories = {
    Length: [
      ["Meter", 1], ["Kilometer", 1000], ["Centimeter", 0.01], ["Millimeter", 0.001],
      ["Mile", 1609.344], ["Yard", 0.9144], ["Foot", 0.3048], ["Inch", 0.0254]
    ],
    Temperature: [
      ["Celsius", "c"], ["Fahrenheit", "f"], ["Kelvin", "k"]
    ],
    Area: [
      ["Square meter", 1], ["Square kilometer", 1000000], ["Square centimeter", 0.0001],
      ["Square mile", 2589988.110336], ["Acre", 4046.8564224], ["Square yard", 0.83612736],
      ["Square foot", 0.09290304], ["Square inch", 0.00064516]
    ],
    Volume: [
      ["Cubic meter", 1], ["Liter", 0.001], ["Milliliter", 0.000001], ["US gallon", 0.003785411784],
      ["US quart", 0.000946352946], ["US pint", 0.000473176473], ["US cup", 0.0002365882365],
      ["Cubic foot", 0.028316846592], ["Cubic inch", 0.000016387064]
    ],
    Weight: [
      ["Kilogram", 1], ["Gram", 0.001], ["Milligram", 0.000001], ["Metric ton", 1000],
      ["Pound", 0.45359237], ["Ounce", 0.028349523125], ["Stone", 6.35029318]
    ],
    Time: [
      ["Second", 1], ["Minute", 60], ["Hour", 3600], ["Day", 86400],
      ["Week", 604800], ["Month", 2629746], ["Year", 31556952]
    ]
  };

  window.lA = categories.Length;
  window.currentAName = window.lA;

  function optionHtml(units, selectedIndex) {
    return units.map((unit, index) => `<option value="${index}"${index === selectedIndex ? " selected" : ""}>${unit[0]}</option>`).join("");
  }

  function toBaseTemperature(value, unit) {
    if (unit === "f") return (value - 32) * 5 / 9;
    if (unit === "k") return value - 273.15;
    return value;
  }

  function fromBaseTemperature(value, unit) {
    if (unit === "f") return value * 9 / 5 + 32;
    if (unit === "k") return value + 273.15;
    return value;
  }

  function format(value) {
    if (!Number.isFinite(value)) return "";
    if (Math.abs(value) >= 100000000 || (Math.abs(value) > 0 && Math.abs(value) < 0.000001)) {
      return value.toExponential(10).replace(/\.?0+e/, "e");
    }
    return Number(value.toPrecision(12)).toString();
  }

  window.popMenu = function popMenu(category) {
    const names = Object.keys(categories);
    const selected = categories[category] ? category : "Length";
    window.currentAName = categories[selected];

    const menu = document.getElementById("topmenu");
    if (menu) {
      menu.innerHTML = names
        .map((name) => `<a href="#"${name === selected ? ' class="topNavOn"' : ""} onclick="return popMenu('${name}');">${name}</a>`)
        .join(" | ");
    }
    window.showSel(window.currentAName);
    return false;
  };

  window.showSel = function showSel(units) {
    const form = document.forms.calForm;
    if (!form) return false;
    const from = form.calFrom;
    const to = form.calTo;
    if (!from || !to) return false;

    const previousFrom = Math.max(0, from.selectedIndex);
    const previousTo = Math.max(0, to.selectedIndex);
    from.innerHTML = optionHtml(units, Math.min(previousFrom, units.length - 1));
    to.innerHTML = optionHtml(units, Math.min(previousTo > 0 ? previousTo : 1, units.length - 1));
    window.calcul();
    return false;
  };

  window.calcul = function calcul() {
    const form = document.forms.calForm;
    if (!form) return false;
    const value = Number(String(form.fromVal.value || "").replace(/,/g, ""));
    if (!Number.isFinite(value)) {
      form.toVal.value = "";
      return false;
    }

    const units = window.currentAName || window.lA;
    const fromUnit = units[Number(form.calFrom.value) || 0] || units[0];
    const toUnit = units[Number(form.calTo.value) || 0] || units[0];
    let result;
    if (units === categories.Temperature) {
      result = fromBaseTemperature(toBaseTemperature(value, fromUnit[1]), toUnit[1]);
    } else {
      result = value * Number(fromUnit[1]) / Number(toUnit[1]);
    }
    form.toVal.value = format(result);

    const output = document.getElementById("fcresult");
    if (output) output.innerHTML = `${format(value)} ${fromUnit[0]} = <b>${format(result)} ${toUnit[0]}</b>`;
    return false;
  };

  window.convert = window.convert || function convert(value, factor) {
    const number = Number(value);
    const multiplier = Number(factor);
    return Number.isFinite(number * multiplier) ? number * multiplier : "";
  };
})();
