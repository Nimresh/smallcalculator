(() => {
  "use strict";

  const pageLinks = [
      {
          "url": "401k-calculator.html",
          "title": "401K Calculator"
      },
      {
          "url": "about-us.html",
          "title": "About Us"
      },
      {
          "url": "age-calculator.html",
          "title": "Age Calculator"
      },
      {
          "url": "amortization-calculator.html",
          "title": "Amortization Calculator"
      },
      {
          "url": "annuity-calculator.html",
          "title": "Annuity Calculator"
      },
      {
          "url": "annuity-payout-calculator.html",
          "title": "Annuity Payout Calculator"
      },
      {
          "url": "anorexic-bmi-calculator.html",
          "title": "Anorexic BMI Calculator"
      },
      {
          "url": "apr-calculator.html",
          "title": "APR Calculator"
      },
      {
          "url": "area-calculator.html",
          "title": "Area Calculator"
      },
      {
          "url": "army-body-fat-calculator.html",
          "title": "Army Body Fat Calculator"
      },
      {
          "url": "auto-lease-calculator.html",
          "title": "Auto Lease Calculator"
      },
      {
          "url": "auto-loan-calculator.html",
          "title": "Auto Loan Calculator"
      },
      {
          "url": "average-calculator.html",
          "title": "Average Calculator"
      },
      {
          "url": "average-return-calculator.html",
          "title": "Average Return Calculator"
      },
      {
          "url": "bac-calculator.html",
          "title": "BAC Calculator"
      },
      {
          "url": "bandwidth-calculator.html",
          "title": "Bandwidth Calculator"
      },
      {
          "url": "base64-encode-decode.html",
          "title": "Base64 Encode / Decode"
      },
      {
          "url": "basic-calculator.html",
          "title": "Basic Calculator"
      },
      {
          "url": "big-number-calculator.html",
          "title": "Big Number Calculator"
      },
      {
          "url": "binary-calculator.html",
          "title": "Binary Calculator"
      },
      {
          "url": "bmi-calculator.html",
          "title": "BMI Calculator"
      },
      {
          "url": "bmr-calculator.html",
          "title": "BMR Calculator"
      },
      {
          "url": "boat-loan-calculator.html",
          "title": "Boat Loan Calculator"
      },
      {
          "url": "body-fat-calculator.html",
          "title": "Body Fat Calculator"
      },
      {
          "url": "body-surface-area-calculator.html",
          "title": "Body Surface Area Calculator"
      },
      {
          "url": "body-type-calculator.html",
          "title": "Body Type Calculator"
      },
      {
          "url": "bond-calculator.html",
          "title": "Bond Calculator"
      },
      {
          "url": "bra-size-calculator.html",
          "title": "Bra Size Calculator"
      },
      {
          "url": "btu-calculator.html",
          "title": "BTU Calculator"
      },
      {
          "url": "budget-calculator.html",
          "title": "Budget Calculator"
      },
      {
          "url": "business-loan-calculator.html",
          "title": "Business Loan Calculator"
      },
      {
          "url": "calculators-for-your-site.html",
          "title": "Calculators for Your Site"
      },
      {
          "url": "calorie-calculator.html",
          "title": "Calorie Calculator"
      },
      {
          "url": "calories-burned-calculator.html",
          "title": "Calories Burned Calculator"
      },
      {
          "url": "canadian-mortgage-calculator.html",
          "title": "Canadian Mortgage Calculator"
      },
      {
          "url": "carbohydrate-calculator.html",
          "title": "Carbohydrate Calculator"
      },
      {
          "url": "cash-back-or-low-interest-calculator.html",
          "title": "Cash Back or Low Interest Calculator"
      },
      {
          "url": "cd-calculator.html",
          "title": "CD Calculator"
      },
      {
          "url": "circle-calculator.html",
          "title": "Circle Calculator"
      },
      {
          "url": "college-cost-calculator.html",
          "title": "College Cost Calculator"
      },
      {
          "url": "commission-calculator.html",
          "title": "Commission Calculator"
      },
      {
          "url": "common-factor-calculator.html",
          "title": "Common Factor Calculator"
      },
      {
          "url": "compound-interest-calculator.html",
          "title": "Compound Interest Calculator"
      },
      {
          "url": "conception-calculator.html",
          "title": "Conception Calculator"
      },
      {
          "url": "concrete-calculator-for-your-site.html",
          "title": "Concrete Calculator for Your Site"
      },
      {
          "url": "concrete-calculator.html",
          "title": "Concrete Calculator"
      },
      {
          "url": "confidence-interval-calculator.html",
          "title": "Confidence Interval Calculator"
      },
      {
          "url": "conversion-calculator.html",
          "title": "Conversion Calculator"
      },
      {
          "url": "credit-card-calculator.html",
          "title": "Credit Card Calculator"
      },
      {
          "url": "credit-card-payoff-calculator.html",
          "title": "Credit Cards Payoff Calculator"
      },
      {
          "url": "currency-calculator.html",
          "title": "Currency Calculator"
      },
      {
          "url": "date-calculator.html",
          "title": "Date Calculator"
      },
      {
          "url": "day-counter.html",
          "title": "Day Counter"
      },
      {
          "url": "day-of-the-week-calculator.html",
          "title": "Day of the Week Calculator"
      },
      {
          "url": "debt-consolidation-calculator.html",
          "title": "Debt Consolidation Calculator"
      },
      {
          "url": "debt-payoff-calculator.html",
          "title": "Debt Payoff Calculator"
      },
      {
          "url": "debt-ratio-calculator.html",
          "title": "Debt-to-Income (DTI) Ratio Calculator"
      },
      {
          "url": "density-calculator.html",
          "title": "Density Calculator"
      },
      {
          "url": "depreciation-calculator.html",
          "title": "Depreciation Calculator"
      },
      {
          "url": "dew-point-calculator.html",
          "title": "Dew Point Calculator"
      },
      {
          "url": "dice-roller.html",
          "title": "Dice Roller"
      },
      {
          "url": "discount-calculator.html",
          "title": "Discount Calculator"
      },
      {
          "url": "distance-calculator.html",
          "title": "Distance Calculator"
      },
      {
          "url": "down-payment-calculator.html",
          "title": "Down Payment Calculator"
      },
      {
          "url": "due-date-calculator.html",
          "title": "Due Date Calculator"
      },
      {
          "url": "electricity-calculator.html",
          "title": "Electricity Calculator"
      },
      {
          "url": "engine-horsepower-calculator.html",
          "title": "Engine Horsepower Calculator"
      },
      {
          "url": "estate-tax-calculator.html",
          "title": "Estate Tax Calculator"
      },
      {
          "url": "exponent-calculator.html",
          "title": "Exponent Calculator"
      },
      {
          "url": "factor-calculator.html",
          "title": "Factor Calculator"
      },
      {
          "url": "fat-intake-calculator.html",
          "title": "Fat Intake Calculator"
      },
      {
          "url": "fha-loan-calculator.html",
          "title": "FHA Loan Calculator"
      },
      {
          "url": "finance-calculator.html",
          "title": "Finance Calculator"
      },
      {
          "url": "financial-calculator.html",
          "title": "Financial Calculators"
      },
      {
          "url": "fitness-and-health-calculator.html",
          "title": "Fitness and Health Calculators"
      },
      {
          "url": "fraction-calculator.html",
          "title": "Fraction Calculator"
      },
      {
          "url": "fuel-cost-calculator.html",
          "title": "Fuel Cost Calculator"
      },
      {
          "url": "future-value-calculator.html",
          "title": "Future Value Calculator"
      },
      {
          "url": "gas-mileage-calculator.html",
          "title": "Gas Mileage Calculator"
      },
      {
          "url": "gcf-calculator.html",
          "title": "Greatest Common Factor Calculator"
      },
      {
          "url": "gdp-calculator.html",
          "title": "GDP Calculator"
      },
      {
          "url": "gfr-calculator.html",
          "title": "GFR Calculator"
      },
      {
          "url": "golf-handicap-calculator.html",
          "title": "Golf Handicap Calculator"
      },
      {
          "url": "gpa-calculator.html",
          "title": "GPA Calculator"
      },
      {
          "url": "grade-calculator.html",
          "title": "Grade Calculator"
      },
      {
          "url": "gravel-calculator.html",
          "title": "Gravel Calculator"
      },
      {
          "url": "half-life-calculator.html",
          "title": "Half-Life Calculator"
      },
      {
          "url": "healthy-weight-calculator.html",
          "title": "Healthy Weight Calculator"
      },
      {
          "url": "heat-index-calculator.html",
          "title": "Heat Index Calculator"
      },
      {
          "url": "height-calculator.html",
          "title": "Height Calculator"
      },
      {
          "url": "heloc-calculator.html",
          "title": "HELOC Calculator"
      },
      {
          "url": "hex-calculator.html",
          "title": "Hex Calculator"
      },
      {
          "url": "home-equity-loan-calculator.html",
          "title": "Home Equity Loan Calculator"
      },
      {
          "url": "horsepower-calculator.html",
          "title": "Horsepower Calculator"
      },
      {
          "url": "hours-calculator.html",
          "title": "Hours Calculator"
      },
      {
          "url": "house-affordability-calculator.html",
          "title": "How Much House Can I Afford? - House Affordability Calculator"
      },
      {
          "url": "ideal-weight-calculator.html",
          "title": "Ideal Weight Calculator"
      },
      {
          "url": "index.html",
          "title": "SmallCalculator.net: Free Online Calculators - Math, Fitness, Finance, Science"
      },
      {
          "url": "inflation-calculator.html",
          "title": "Inflation Calculator"
      },
      {
          "url": "interest-calculator.html",
          "title": "Interest Calculator"
      },
      {
          "url": "interest-rate-calculator.html",
          "title": "Interest Rate Calculator"
      },
      {
          "url": "investment-calculator.html",
          "title": "Investment Calculator"
      },
      {
          "url": "ip-subnet-calculator.html",
          "title": "IP Subnet Calculator"
      },
      {
          "url": "ira-calculator.html",
          "title": "IRA Calculator"
      },
      {
          "url": "irr-calculator.html",
          "title": "Internal Rate of Return (IRR) Calculator"
      },
      {
          "url": "lcm-calculator.html",
          "title": "Least Common Multiple Calculator"
      },
      {
          "url": "lean-body-mass-calculator.html",
          "title": "Lean Body Mass Calculator"
      },
      {
          "url": "lease-calculator.html",
          "title": "Lease Calculator"
      },
      {
          "url": "loan-calculator.html",
          "title": "Loan Calculator"
      },
      {
          "url": "log-calculator.html",
          "title": "Log Calculator"
      },
      {
          "url": "long-division-calculator.html",
          "title": "Long Division Calculator"
      },
      {
          "url": "love-calculator-for-your-site.html",
          "title": "Love Calculator for Your Site"
      },
      {
          "url": "love-calculator.html",
          "title": "Love Calculator"
      },
      {
          "url": "macro-calculator.html",
          "title": "Macro Calculator"
      },
      {
          "url": "margin-calculator.html",
          "title": "Margin Calculator"
      },
      {
          "url": "marriage-calculator.html",
          "title": "Marriage Tax Calculator"
      },
      {
          "url": "mass-calculator.html",
          "title": "Mass Calculator"
      },
      {
          "url": "math-calculator-for-your-site.html",
          "title": "Math Calculator for Your Site"
      },
      {
          "url": "math-calculator.html",
          "title": "Math Calculators"
      },
      {
          "url": "matrix-calculator.html",
          "title": "Matrix Calculator"
      },
      {
          "url": "mean-median-mode-range-calculator.html",
          "title": "Mean, Median, Mode, Range Calculator"
      },
      {
          "url": "mileage-calculator.html",
          "title": "Mileage Calculator"
      },
      {
          "url": "molarity-calculator.html",
          "title": "Molarity Calculator"
      },
      {
          "url": "molecular-weight-calculator.html",
          "title": "Molecular Weight Calculator (Molar Mass)"
      },
      {
          "url": "mortgage-amortization-calculator.html",
          "title": "Mortgage Amortization Calculator"
      },
      {
          "url": "mortgage-calculator-for-your-site.html",
          "title": "Mortgage Calculator for Your Site"
      },
      {
          "url": "mortgage-calculator-uk.html",
          "title": "Mortgage Calculator UK"
      },
      {
          "url": "mortgage-calculator.html",
          "title": "Mortgage Calculator"
      },
      {
          "url": "mortgage-payoff-calculator.html",
          "title": "Mortgage Payoff Calculator"
      },
      {
          "url": "mulch-calculator.html",
          "title": "Mulch Calculator"
      },
      {
          "url": "mutual-fund-calculator.html",
          "title": "Mutual Fund Calculator"
      },
      {
          "url": "number-sequence-calculator.html",
          "title": "Number Sequence Calculator"
      },
      {
          "url": "ohms-law-calculator.html",
          "title": "Ohms Law Calculator"
      },
      {
          "url": "one-rep-max-calculator.html",
          "title": "One Rep Max Calculator"
      },
      {
          "url": "other-calculator.html",
          "title": "Other Calculators"
      },
      {
          "url": "overweight-calculator.html",
          "title": "Overweight Calculator"
      },
      {
          "url": "ovulation-calculator.html",
          "title": "Ovulation Calculator"
      },
      {
          "url": "p-value-calculator.html",
          "title": "P-value Calculator"
      },
      {
          "url": "pace-calculator.html",
          "title": "Pace Calculator"
      },
      {
          "url": "password-generator.html",
          "title": "Password Generator"
      },
      {
          "url": "payback-period-calculator.html",
          "title": "Payback Period Calculator"
      },
      {
          "url": "payment-calculator.html",
          "title": "Payment Calculator"
      },
      {
          "url": "pension-calculator.html",
          "title": "Pension Calculator"
      },
      {
          "url": "percent-calculator.html",
          "title": "Percentage Calculator"
      },
      {
          "url": "percent-error-calculator.html",
          "title": "Percent Error Calculator"
      },
      {
          "url": "percent-off-calculator.html",
          "title": "Percent Off Calculator"
      },
      {
          "url": "period-calculator.html",
          "title": "Period Calculator"
      },
      {
          "url": "permutation-and-combination-calculator.html",
          "title": "Permutation and Combination Calculator"
      },
      {
          "url": "personal-loan-calculator.html",
          "title": "Personal Loan Calculator"
      },
      {
          "url": "pregnancy-calculator.html",
          "title": "Pregnancy Calculator"
      },
      {
          "url": "pregnancy-conception-calculator.html",
          "title": "Pregnancy Conception Calculator"
      },
      {
          "url": "pregnancy-weight-gain-calculator.html",
          "title": "Pregnancy Weight Gain Calculator"
      },
      {
          "url": "present-value-calculator.html",
          "title": "Present Value Calculator"
      },
      {
          "url": "prime-factorization-calculator.html",
          "title": "Prime Factorization Calculator"
      },
      {
          "url": "probability-calculator.html",
          "title": "Probability Calculator"
      },
      {
          "url": "protein-calculator.html",
          "title": "Protein Calculator"
      },
      {
          "url": "pythagorean-theorem-calculator.html",
          "title": "Pythagorean Theorem Calculator"
      },
      {
          "url": "quadratic-formula-calculator.html",
          "title": "Quadratic Formula Calculator"
      },
      {
          "url": "random-number-generator.html",
          "title": "Random Number Generator"
      },
      {
          "url": "ratio-calculator.html",
          "title": "Ratio Calculator"
      },
      {
          "url": "real-estate-calculator.html",
          "title": "Real Estate Calculator"
      },
      {
          "url": "refinance-calculator.html",
          "title": "Refinance Calculator"
      },
      {
          "url": "rent-calculator.html",
          "title": "Rent Calculator - How Much Rent Can I Afford?"
      },
      {
          "url": "rent-vs-buy-calculator.html",
          "title": "Rent vs. Buy Calculator"
      },
      {
          "url": "rental-property-calculator.html",
          "title": "Rental Property Calculator"
      },
      {
          "url": "repayment-calculator.html",
          "title": "Repayment Calculator"
      },
      {
          "url": "resistor-calculator.html",
          "title": "Resistor Calculator"
      },
      {
          "url": "retirement-calculator.html",
          "title": "Retirement Calculator"
      },
      {
          "url": "right-triangle-calculator.html",
          "title": "Right Triangle Calculator"
      },
      {
          "url": "rmd-calculator.html",
          "title": "RMD Calculator"
      },
      {
          "url": "roi-calculator.html",
          "title": "Return on Investment (ROI) Calculator"
      },
      {
          "url": "roman-numeral-converter.html",
          "title": "Roman Numeral Converter"
      },
      {
          "url": "roofing-calculator.html",
          "title": "Roofing Calculator"
      },
      {
          "url": "root-calculator.html",
          "title": "Root Calculator"
      },
      {
          "url": "roth-ira-calculator.html",
          "title": "Roth IRA Calculator"
      },
      {
          "url": "rounding-calculator.html",
          "title": "Rounding Calculator"
      },
      {
          "url": "salary-calculator.html",
          "title": "Salary Calculator"
      },
      {
          "url": "sales-tax-calculator.html",
          "title": "Sales Tax Calculator"
      },
      {
          "url": "sample-size-calculator.html",
          "title": "Sample Size Calculator"
      },
      {
          "url": "savings-calculator.html",
          "title": "Savings Calculator"
      },
      {
          "url": "scientific-calculator-for-your-site.html",
          "title": "Scientific Calculator for Your Site"
      },
      {
          "url": "scientific-calculator.html",
          "title": "Scientific Calculator"
      },
      {
          "url": "scientific-notation-calculator.html",
          "title": "Scientific Notation Calculator"
      },
      {
          "url": "shoe-size-conversion.html",
          "title": "Shoe Size Conversion"
      },
      {
          "url": "simple-interest-calculator.html",
          "title": "Simple Interest Calculator"
      },
      {
          "url": "sitemap.html",
          "title": "Sitemap"
      },
      {
          "url": "sleep-calculator.html",
          "title": "Sleep Calculator"
      },
      {
          "url": "slope-calculator.html",
          "title": "Slope Calculator"
      },
      {
          "url": "social-security-calculator.html",
          "title": "Social Security Calculator"
      },
      {
          "url": "speed-calculator.html",
          "title": "Speed Calculator"
      },
      {
          "url": "square-footage-calculator.html",
          "title": "Square Footage Calculator"
      },
      {
          "url": "stair-calculator.html",
          "title": "Stair Calculator"
      },
      {
          "url": "standard-deviation-calculator.html",
          "title": "Standard Deviation Calculator"
      },
      {
          "url": "statistics-calculator.html",
          "title": "Statistics Calculator"
      },
      {
          "url": "student-loan-calculator.html",
          "title": "Student Loan Calculator"
      },
      {
          "url": "surface-area-calculator.html",
          "title": "Surface Area Calculator"
      },
      {
          "url": "take-home-pay-calculator.html",
          "title": "Take-Home-Paycheck Calculator"
      },
      {
          "url": "target-heart-rate-calculator.html",
          "title": "Target Heart Rate Calculator"
      },
      {
          "url": "tax-calculator.html",
          "title": "Income Tax Calculator"
      },
      {
          "url": "tdee-calculator.html",
          "title": "TDEE Calculator"
      },
      {
          "url": "tile-calculator.html",
          "title": "Tile Calculator"
      },
      {
          "url": "time-calculator.html",
          "title": "Time Calculator"
      },
      {
          "url": "time-card-calculator.html",
          "title": "Time Card Calculator"
      },
      {
          "url": "time-duration-calculator.html",
          "title": "Time Duration Calculator"
      },
      {
          "url": "time-zone-calculator.html",
          "title": "Time Zone Calculator"
      },
      {
          "url": "tip-calculator.html",
          "title": "Tip Calculator"
      },
      {
          "url": "tire-size-calculator.html",
          "title": "Tire Size Calculator"
      },
      {
          "url": "triangle-calculator.html",
          "title": "Triangle Calculator"
      },
      {
          "url": "url-encode-decode.html",
          "title": "URL Encode / Decode"
      },
      {
          "url": "va-mortgage-calculator.html",
          "title": "VA Mortgage Calculator"
      },
      {
          "url": "vat-calculator.html",
          "title": "VAT Calculator"
      },
      {
          "url": "voltage-drop-calculator.html",
          "title": "Voltage Drop Calculator"
      },
      {
          "url": "volume-calculator.html",
          "title": "Volume Calculator"
      },
      {
          "url": "weight-calculator.html",
          "title": "Weight Calculator"
      },
      {
          "url": "weight-watchers-points-calculator.html",
          "title": "Weight Watcher Points Calculator"
      },
      {
          "url": "wind-chill-calculator.html",
          "title": "Wind Chill Calculator"
      },
      {
          "url": "z-score-calculator.html",
          "title": "Z-score Calculator"
      }
  ];

  function toTitle(url) {
    if (url === "index.html") return "Home";
    return url
      .replace(/\.html$/i, "")
      .replace(/-\s*copy$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (m) => m.toUpperCase());
  }

  function getRelativeUrl(url) {
    const depth = Math.max(0, location.pathname.split("/").length - 2);
    return "../".repeat(depth) + url;
  }

  window.calcSearch = function calcSearch() {
    const input = document.getElementById("calcSearchTerm");
    const output = document.getElementById("calcSearchOut");
    if (!input || !output) return false;

    const term = input.value.trim().toLowerCase();
    output.innerHTML = "";
    if (!term) return false;

    const matches = pageLinks
      .filter((item) => item.title.toLowerCase().includes(term) || item.url.toLowerCase().includes(term))
      .slice(0, 12);

    if (!matches.length) {
      output.innerHTML = '<div class="search-empty">No matching calculator found.</div>';
      return false;
    }

    output.innerHTML = matches
      .map((item) => `<div><a href="${getRelativeUrl(item.url)}">${item.title}</a></div>`)
      .join("");
    return false;
  };

  function bindCalculatorSearch() {
    document.querySelectorAll("#calcSearchTerm, input[name='calcSearchTerm']").forEach((input) => {
      input.addEventListener("input", window.calcSearch);
      const query = new URLSearchParams(location.search).get("q");
      if (query && !input.value) {
        input.value = query;
        window.calcSearch();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindCalculatorSearch);
  } else {
    bindCalculatorSearch();
  }

  window.clearForm = function clearForm(form) {
    if (!form) return false;
    Array.from(form.elements || []).forEach((field) => {
      if (!field.name || field.type === "hidden" || field.type === "submit" || field.type === "button") return;
      if (field.type === "checkbox" || field.type === "radio") {
        field.checked = field.defaultChecked;
      } else if (field.tagName === "SELECT") {
        field.selectedIndex = 0;
      } else {
        field.value = "";
      }
    });
    return false;
  };

  window.isNumber = function isNumber(value) {
    if (value === null || value === "") return false;
    return !Number.isNaN(Number(String(value).replace(/,/g, "").trim()));
  };

  window.insertComma2 = window.insertComma2 || function insertComma2(field, mode) {
    if (!field) return;
    let value = String(field.value || "").replace(/,/g, "").replace(/[^\d.-]/g, "");
    if (!value) return;
    if (mode === "i") value = value.split(".")[0];
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    field.value = parts.join(".");
  };

  window.proComma2 = window.proComma2 || function proComma2(id) {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener("blur", () => window.insertComma2(field, "d"));
    window.insertComma2(field, "d");
  };

  window.saveCalResult = function saveCalResult(title, _type, _fullTitle, label, value) {
    try {
      const saved = JSON.parse(localStorage.getItem("calculatorSavedResults") || "[]");
      saved.unshift({ title: atobSafe(title), label: atobSafe(label), value: atobSafe(value), savedAt: new Date().toISOString() });
      localStorage.setItem("calculatorSavedResults", JSON.stringify(saved.slice(0, 25)));
      showToast("Calculation saved in this browser.");
    } catch (_err) {
      showToast("Calculation saved.");
    }
    return false;
  };

  function atobSafe(value) {
    try {
      return window.atob(value);
    } catch (_err) {
      return value || "";
    }
  }

  function showToast(message) {
    let toast = document.getElementById("localToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "localToast";
      toast.style.cssText = "position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:9999;background:#102033;color:#fff;padding:10px 14px;border-radius:8px;box-shadow:0 10px 28px rgba(0,0,0,.18);font:14px Arial,Helvetica,sans-serif;";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = "block";
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => { toast.style.display = "none"; }, 2200);
  }

  const tooltip = {
    node: null,
    ensure() {
      if (this.node) return this.node;
      const node = document.createElement("div");
      node.id = "tt";
      node.style.display = "none";
      document.body.appendChild(node);
      this.node = node;
      return node;
    },
    show(text) {
      const node = this.ensure();
      node.innerHTML = text || "";
      node.style.display = "block";
    },
    hide() {
      if (this.node) this.node.style.display = "none";
    }
  };
  window.tooltip = window.tooltip || tooltip;
  document.addEventListener("mousemove", (event) => {
    if (!tooltip.node || tooltip.node.style.display === "none") return;
    tooltip.node.style.left = `${event.pageX + 14}px`;
    tooltip.node.style.top = `${event.pageY + 14}px`;
  });

  function toNumber(value) {
    const number = Number(String(value ?? "").replace(/[$,%\s,]/g, ""));
    return Number.isFinite(number) ? number : 0;
  }

  function money(value) {
    return toNumber(value).toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function decimal(value, digits = 2) {
    const number = toNumber(value);
    return number.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });
  }

  function findField(names) {
    for (const name of names) {
      const field = document.getElementById(name) || document.querySelector(`[name="${name}"]`);
      if (field) return field;
    }
    return null;
  }

  window.iptfieldCheck = window.iptfieldCheck || function iptfieldCheck(field, _required, rule) {
    if (!field) return true;
    const allowNegative = !String(rule || "").includes("p");
    const raw = String(field.value || "").replace(/,/g, "");
    let cleaned = "";
    let hasDot = false;
    for (let i = 0; i < raw.length; i += 1) {
      const ch = raw.charAt(i);
      if (/\d/.test(ch)) {
        cleaned += ch;
      } else if (ch === "." && !hasDot) {
        cleaned += ch;
        hasDot = true;
      } else if (ch === "-" && allowNegative && cleaned.length === 0) {
        cleaned += ch;
      }
    }
    if (field.value !== cleaned) field.value = cleaned;
    return true;
  };

  window.setYearRate = window.setYearRate || function setYearRate(rate, year) {
    const rateFields = document.querySelectorAll(
      'input[name="cinterestrate"],input[name="c2interestrate"],input[name="cinterest1"],input[name="c2interest"],input[name="c3interest"],input[id="cinterestrate"],input[id="cinterest1"],input[id="c2interest"],input[id="c3interest"]'
    );
    rateFields.forEach((field) => { field.value = rate; });

    const yearFields = document.querySelectorAll(
      'input[name="cloanterm"],input[name="c2loanterm"],input[name="c3loanterm"],input[id="cloanterm"],input[id="cloanterm1"],input[id="c2loanterm"],input[id="c3loanterm"]'
    );
    yearFields.forEach((field) => { field.value = year; });

    showToast(`Rate set to ${rate}% for ${year} years.`);
    return false;
  };

  window.showAmo = window.showAmo || function showAmo(principal, monthlyRate, months, payment, periodName, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return false;
    if (target.innerHTML.trim()) {
      target.innerHTML = "";
      return false;
    }

    let balance = toNumber(principal);
    const rate = toNumber(monthlyRate);
    const pay = toNumber(payment);
    const totalMonths = Math.max(1, Math.round(toNumber(months)));
    const rows = [];
    let totalInterest = 0;

    for (let i = 1; i <= totalMonths && balance > 0.005; i += 1) {
      const interest = balance * rate;
      let principalPaid = pay - interest;
      if (principalPaid <= 0) principalPaid = Math.min(balance, pay);
      if (principalPaid > balance || i === totalMonths) principalPaid = balance;
      balance = Math.max(0, balance - principalPaid);
      totalInterest += interest;
      rows.push(`<tr align="right"><td>${i}</td><td>${money(pay)}</td><td>${money(interest)}</td><td>${money(principalPaid)}</td><td>${money(balance)}</td></tr>`);
    }

    target.innerHTML = `<h3>Amortization Table</h3><p>Total interest: <b>${money(totalInterest)}</b></p><table class="cinfoT"><tr align="center"><th>${periodName || "Period"}</th><th>Payment</th><th>Interest</th><th>Principal</th><th>Balance</th></tr>${rows.join("")}</table>`;
    return false;
  };

  window.showSch = window.showSch || function showSch(startAmount, growthFactor, periods, periodName, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return false;
    if (target.innerHTML.trim()) {
      target.innerHTML = "";
      return false;
    }

    let balance = toNumber(startAmount);
    const factor = toNumber(growthFactor) || 1;
    const count = Math.max(1, Math.round(toNumber(periods)));
    const rows = [];
    for (let i = 1; i <= count; i += 1) {
      const previous = balance;
      balance *= factor;
      rows.push(`<tr align="right"><td>${i}</td><td>${money(previous)}</td><td>${money(balance - previous)}</td><td>${money(balance)}</td></tr>`);
    }

    target.innerHTML = `<h3>Schedule Table</h3><table class="cinfoT"><tr align="center"><th>${periodName || "Period"}</th><th>Beginning</th><th>Interest</th><th>Ending</th></tr>${rows.join("")}</table>`;
    return false;
  };

  window.vTerm = window.vTerm || function vTerm() {
    const form = document.forms.rF;
    if (!form) return true;
    const name = String(form.name?.value || "").trim();
    const email = String(form.email?.value || "").trim();
    const password = String(form.password?.value || "");
    const password2 = String(form.password2?.value || "");
    if (!name) {
      alert("Please enter your name.");
      form.name.focus();
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      form.email.focus();
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      form.password.focus();
      return false;
    }
    if (password !== password2) {
      alert("Passwords do not match.");
      form.password2.focus();
      return false;
    }
    if (!form.agreeterm?.checked) {
      alert("Please agree to the Terms of Use.");
      form.agreeterm.focus();
      return false;
    }
    return true;
  };

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function currentPage() {
    return location.pathname.split("/").pop() || "index.html";
  }

  function fieldValue(form, name, fallback = 0) {
    const field = form?.elements?.[name] || document.getElementById(name);
    const value = toNumber(field?.value);
    return Number.isFinite(value) ? value : fallback;
  }

  function compoundFactor(ratePercent, years, compound) {
    const rate = toNumber(ratePercent) / 100;
    const duration = Math.max(0, toNumber(years));
    const frequencies = {
      annually: 1,
      semiannually: 2,
      quarterly: 4,
      monthly: 12,
      semimonthly: 24,
      biweekly: 26,
      weekly: 52,
      daily: 365
    };
    if (compound === "continuously") return Math.exp(rate * duration);
    const frequency = frequencies[compound] || 12;
    return Math.pow(1 + rate / frequency, frequency * duration);
  }

  function compoundFrequency(compound) {
    const frequencies = {
      annually: 1,
      semiannually: 2,
      quarterly: 4,
      monthly: 12,
      semimonthly: 24,
      biweekly: 26,
      weekly: 52,
      daily: 365
    };
    return frequencies[compound] || 12;
  }

  function effectiveAnnualRate(ratePercent, compound) {
    const rate = toNumber(ratePercent) / 100;
    if (compound === "continuously") return Math.exp(rate) - 1;
    const frequency = compoundFrequency(compound);
    return Math.pow(1 + rate / frequency, frequency) - 1;
  }

  function nominalFromEffective(effectiveRate, compound) {
    if (compound === "continuously") return Math.log(1 + effectiveRate) * 100;
    const frequency = compoundFrequency(compound);
    return frequency * (Math.pow(1 + effectiveRate, 1 / frequency) - 1) * 100;
  }

  function setResultHtml(container, html) {
    if (!container) return;
    container.innerHTML = html;
    container.classList.add("dynamic-result");
  }

  function rawField(form, name) {
    const field = form?.elements?.[name];
    return String(field?.value ?? "").replace(/[$,%\s,]/g, "");
  }

  function hasFieldValue(form, name) {
    return rawField(form, name) !== "";
  }

  function setFieldValue(form, name, value, digits = 6) {
    const field = form?.elements?.[name];
    if (!field || !Number.isFinite(value)) return;
    field.value = Number.isInteger(value) ? String(value) : String(Number(value.toFixed(digits))).replace(/\.?0+$/, "");
  }

  function inlineResult(form, html) {
    let box = form.nextElementSibling;
    if (!box || !box.classList?.contains("inline-calc-result")) {
      box = document.createElement("div");
      box.className = "inline-calc-result";
      form.insertAdjacentElement("afterend", box);
    }
    box.innerHTML = html;
  }

  function markLiveForm(form) {
    if (form) form.dataset.dynamicCalculator = "true";
  }

  function compactNumber(value, digits = 2) {
    return decimal(value, digits).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  }

  function enhanceBmiCalculator() {
    if (currentPage() !== "bmi-calculator.html") return;
    const form = document.forms.calform;
    const result = document.querySelector(".rightresult, .crighthalf");
    if (!form || !result) return;
    markLiveForm(form);

    if (typeof window.popMenu === "function") {
      const originalPopMenu = window.popMenu;
      window.popMenu = function patchedPopMenu(mode, submit) {
        if (mode === "other") {
          location.href = getRelativeUrl("conversion-calculator.html");
          return false;
        }
        return originalPopMenu(mode, submit);
      };
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const type = String(form.elements.ctype?.value || "standard");
      let heightM = 0;
      let weightKg = 0;
      if (type === "metric") {
        heightM = fieldValue(form, "cheightmeter") / 100;
        weightKg = fieldValue(form, "ckg");
      } else {
        const inches = fieldValue(form, "cheightfeet") * 12 + fieldValue(form, "cheightinch");
        heightM = inches * 0.0254;
        weightKg = fieldValue(form, "cpound") * 0.45359237;
      }
      if (!heightM || !weightKg) {
        showToast("Please enter height and weight.");
        return;
      }
      const bmi = weightKg / (heightM * heightM);
      const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obesity";
      const healthyLowLb = 18.5 * heightM * heightM / 0.45359237;
      const healthyHighLb = 25 * heightM * heightM / 0.45359237;
      setResultHtml(result, `
        <h2 class="h2result">Result</h2>
        <div class="metric-summary">
          <div><span>BMI</span><strong>${decimal(bmi, 1)}</strong></div>
          <div><span>Status</span><strong>${category}</strong></div>
          <div><span>Healthy range</span><strong>${decimal(healthyLowLb, 1)}-${decimal(healthyHighLb, 1)} lb</strong></div>
        </div>
        <table class="cinfoT" width="100%">
          <tr><td class="cinfoHd">BMI range</td><td class="cinfoHdL">Category</td></tr>
          <tr><td>&lt; 18.5</td><td>Underweight</td></tr>
          <tr><td>18.5 - 24.9</td><td>Normal</td></tr>
          <tr><td>25 - 29.9</td><td>Overweight</td></tr>
          <tr><td>30+</td><td>Obesity</td></tr>
        </table>
        <div class="dynamic-result-note">Calculated instantly in your browser. No data leaves this page.</div>
      `);
      rememberCalculator();
      location.hash = "bmiresult";
    });
  }

  function amortizedPayment(principal, ratePercent, months) {
    const monthlyRate = toNumber(ratePercent) / 100 / 12;
    const count = Math.max(1, Math.round(toNumber(months)));
    if (!monthlyRate) return principal / count;
    return principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -count));
  }

  function enhanceLoanCalculator() {
    if (currentPage() !== "loan-calculator.html") return;
    const form1 = document.forms.calform;
    const form2 = document.forms.calform2;
    const form3 = document.forms.calform3;

    if (form1) {
      markLiveForm(form1);
      form1.addEventListener("submit", (event) => {
        event.preventDefault();
        const principal = fieldValue(form1, "cloanamount");
        const months = Math.max(1, fieldValue(form1, "cloanterm") * 12 + fieldValue(form1, "cloantermmonth"));
        const rate = fieldValue(form1, "cinterestrate");
        const payment = amortizedPayment(principal, rate, months);
        const total = payment * months;
        const interest = total - principal;
        const target = document.getElementById("lcamotable1");
        if (target) target.innerHTML = "";
        setResultHtml(form1.closest(".leftinput")?.nextElementSibling, `
          <a name="monthlyfixedr"></a>
          <h2 class="h2result">Results</h2>
          <table width="100%">
            <tr><td>Payment Every Month</td><td align="right"><b>${money(payment)}</b></td></tr>
            <tr><td>Total of ${months} Payments</td><td align="right"><b>${money(total)}</b></td></tr>
            <tr><td>Total Interest</td><td align="right"><b>${money(interest)}</b></td></tr>
            <tr><td colspan="2" align="center"><a href="#" onClick="return showAmo(${principal}, ${rate / 100 / 12}, ${months}, ${payment}, 'month', 'lcamotable1');">View Amortization Table</a></td></tr>
          </table>
          <div class="dynamic-result-note">Updated instantly from your inputs.</div>
        `);
        rememberCalculator();
        location.hash = "monthlyfixedr";
      });
    }

    if (form2) {
      markLiveForm(form2);
      form2.addEventListener("submit", (event) => {
        event.preventDefault();
        const principal = fieldValue(form2, "c2loanamount");
        const years = fieldValue(form2, "c2loanterm") + fieldValue(form2, "c2loantermmonth") / 12;
        const factor = compoundFactor(fieldValue(form2, "c2interestrate"), years, form2.elements.c2compound?.value);
        const due = principal * factor;
        const interest = due - principal;
        const target = document.getElementById("lcamotable2");
        if (target) target.innerHTML = "";
        setResultHtml(form2.closest(".leftinput")?.nextElementSibling, `
          <a name="intheendr"></a>
          <h2 class="h2result">Results</h2>
          <table width="100%">
            <tr><td>Amount Due at Loan Maturity</td><td align="right"><b>${money(due)}</b></td></tr>
            <tr><td>Total Interest</td><td align="right"><b>${money(interest)}</b></td></tr>
            <tr><td colspan="2" align="center"><a href="#" onClick="return showSch(${principal}, ${factor}, ${Math.max(1, Math.round(years))}, 'year', 'lcamotable2');">View Schedule Table</a></td></tr>
          </table>
          <div class="dynamic-result-note">Updated instantly from your inputs.</div>
        `);
        rememberCalculator();
        location.hash = "intheendr";
      });
    }

    if (form3) {
      markLiveForm(form3);
      form3.addEventListener("submit", (event) => {
        event.preventDefault();
        const due = fieldValue(form3, "c3loanamount");
        const years = fieldValue(form3, "c3loanterm") + fieldValue(form3, "c3loantermmonth") / 12;
        const factor = compoundFactor(fieldValue(form3, "c3interestrate"), years, form3.elements.c3compound?.value);
        const present = factor ? due / factor : due;
        const interest = due - present;
        const target = document.getElementById("lcamotable3");
        if (target) target.innerHTML = "";
        setResultHtml(form3.closest(".leftinput")?.nextElementSibling, `
          <a name="fixedendr"></a>
          <h2 class="h2result">Results</h2>
          <table width="100%">
            <tr><td>Amount Received When the Loan Starts</td><td align="right"><b>${money(present)}</b></td></tr>
            <tr><td>Total Interest</td><td align="right"><b>${money(interest)}</b></td></tr>
            <tr><td colspan="2" align="center"><a href="#" onClick="return showSch(${present}, ${factor}, ${Math.max(1, Math.round(years))}, 'year', 'lcamotable3');">View Schedule Table</a></td></tr>
          </table>
          <div class="dynamic-result-note">Updated instantly from your inputs.</div>
        `);
        rememberCalculator();
        location.hash = "fixedendr";
      });
    }
  }

  function enhancePercentCalculator() {
    if (currentPage() !== "percent-calculator.html") return;
    document.querySelectorAll('form[action^="percent-calculator.html"]').forEach((form) => {
      markLiveForm(form);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const type = String(form.elements.ctype?.value || "1");
        let label = "Result";
        let value = NaN;

        if (type === "1") {
          const hasP = hasFieldValue(form, "cpar1");
          const hasV = hasFieldValue(form, "cpar2");
          const hasR = hasFieldValue(form, "cpar3");
          const p = fieldValue(form, "cpar1");
          const v = fieldValue(form, "cpar2");
          const r = fieldValue(form, "cpar3");
          if (!hasP && hasV && hasR && v) {
            value = (r / v) * 100;
            setFieldValue(form, "cpar1", value);
            label = "Percentage";
          } else if (hasP && !hasV && hasR && p) {
            value = r / (p / 100);
            setFieldValue(form, "cpar2", value);
            label = "Base value";
          } else if (hasP && hasV && !hasR) {
            value = (p / 100) * v;
            setFieldValue(form, "cpar3", value);
            label = "Answer";
          }
        } else if (type === "21") {
          value = fieldValue(form, "c21par1") / 100 * fieldValue(form, "c21par2");
          label = "Answer";
        } else if (type === "22") {
          const base = fieldValue(form, "c22par2");
          value = base ? fieldValue(form, "c22par1") / base * 100 : NaN;
          label = "Percentage";
        } else if (type === "23") {
          const percent = fieldValue(form, "c23par2");
          value = percent ? fieldValue(form, "c23par1") / (percent / 100) : NaN;
          label = "Base value";
        } else if (type === "3") {
          const a = fieldValue(form, "c3par1");
          const b = fieldValue(form, "c3par2");
          value = (a + b) ? Math.abs(a - b) / ((a + b) / 2) * 100 : NaN;
          label = "Percentage difference";
        } else if (type === "2") {
          const mode = form.elements.c2type?.value || "increase";
          const hasBase = hasFieldValue(form, "c2par1");
          const hasPct = hasFieldValue(form, "c2par2");
          const hasEnd = hasFieldValue(form, "c2par3");
          const base = fieldValue(form, "c2par1");
          const pct = fieldValue(form, "c2par2");
          const end = fieldValue(form, "c2par3");
          const factor = mode === "increase" ? 1 + pct / 100 : 1 - pct / 100;
          if (hasBase && hasPct && !hasEnd) {
            value = base * factor;
            setFieldValue(form, "c2par3", value);
            label = "Final value";
          } else if (!hasBase && hasPct && hasEnd && factor) {
            value = end / factor;
            setFieldValue(form, "c2par1", value);
            label = "Starting value";
          } else if (hasBase && !hasPct && hasEnd && base) {
            value = mode === "increase" ? (end / base - 1) * 100 : (1 - end / base) * 100;
            setFieldValue(form, "c2par2", value);
            label = "Percentage";
          }
        }

        if (!Number.isFinite(value)) {
          showToast("Please enter any two valid values.");
          return;
        }
        const suffix = /percentage/i.test(label) ? "%" : "";
        const prettyValue = compactNumber(value, 4);
        inlineResult(form, `<div class="h2result">${label}: ${prettyValue}${suffix}</div><div class="dynamic-result-note">Calculated instantly in your browser.</div>`);
        rememberCalculator();
      });
    });
  }

  function unitAmount(value, unit, base) {
    const amount = toNumber(value);
    return unit === "p" ? base * amount / 100 : amount;
  }

  function enhanceMortgageCalculator() {
    if (currentPage() !== "mortgage-calculator.html") return;
    const form = document.forms.calform;
    const result = document.querySelector(".rightresult, .crighthalf");
    if (!form || !result) return;
    markLiveForm(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const price = fieldValue(form, "chouseprice");
      const downPayment = unitAmount(fieldValue(form, "cdownpayment"), form.elements.cdownpaymentunit?.value, price);
      const principal = Math.max(0, price - downPayment);
      const years = Math.max(1, fieldValue(form, "cloanterm"));
      const months = Math.round(years * 12);
      const rate = fieldValue(form, "cinterestrate");
      const principalAndInterest = amortizedPayment(principal, rate, months);
      const totalPayments = principalAndInterest * months;
      const totalInterest = totalPayments - principal;
      const includeCosts = form.elements.caddoptional?.checked !== false;
      const yearlyTax = includeCosts ? unitAmount(fieldValue(form, "cpropertytaxes"), form.elements.cpropertytaxesunit?.value, price) : 0;
      const yearlyInsurance = includeCosts ? unitAmount(fieldValue(form, "chomeins"), form.elements.chomeinsunit?.value, price) : 0;
      const yearlyPmi = includeCosts ? unitAmount(fieldValue(form, "cpmi"), form.elements.cpmiunit?.value, principal) : 0;
      const yearlyHoa = includeCosts ? unitAmount(fieldValue(form, "choa"), form.elements.choaunit?.value, price) : 0;
      const yearlyOther = includeCosts ? unitAmount(fieldValue(form, "cothercost"), form.elements.cothercostunit?.value, price) : 0;
      const monthlyTax = yearlyTax / 12;
      const monthlyInsurance = yearlyInsurance / 12;
      const monthlyPmi = yearlyPmi / 12;
      const monthlyHoa = yearlyHoa / 12;
      const monthlyOther = yearlyOther / 12;
      const monthlyTotal = principalAndInterest + monthlyTax + monthlyInsurance + monthlyPmi + monthlyHoa + monthlyOther;

      setResultHtml(result, `
        <a name="results"></a>
        <h2 class="h2result">Monthly Pay: &nbsp; ${money(principalAndInterest)}</h2>
        <div class="metric-summary">
          <div><span>Loan amount</span><strong>${money(principal)}</strong></div>
          <div><span>Total interest</span><strong>${money(totalInterest)}</strong></div>
          <div><span>Total out-of-pocket</span><strong>${money(monthlyTotal)}/mo</strong></div>
        </div>
        <table width="100%">
          <tr><td>Principal &amp; Interest</td><td align="right"><b>${money(principalAndInterest)}</b></td></tr>
          <tr><td>Property Tax</td><td align="right">${money(monthlyTax)}</td></tr>
          <tr><td>Home Insurance</td><td align="right">${money(monthlyInsurance)}</td></tr>
          <tr><td>PMI</td><td align="right">${money(monthlyPmi)}</td></tr>
          <tr><td>HOA</td><td align="right">${money(monthlyHoa)}</td></tr>
          <tr><td>Other Costs</td><td align="right">${money(monthlyOther)}</td></tr>
          <tr><td><b>Total monthly cost</b></td><td align="right"><b>${money(monthlyTotal)}</b></td></tr>
          <tr><td>Total of ${months} payments</td><td align="right">${money(totalPayments)}</td></tr>
        </table>
        <p align="center"><a href="#" onClick="return showAmo(${principal}, ${rate / 100 / 12}, ${months}, ${principalAndInterest}, 'month', 'mortgageDynamicAmo');">View Amortization Table</a></p>
        <div id="mortgageDynamicAmo"></div>
        <div class="dynamic-result-note">Calculated instantly in your browser from the values on this page.</div>
      `);
      rememberCalculator();
      location.hash = "results";
    });
  }

  function enhanceAutoLoanCalculator() {
    if (currentPage() !== "auto-loan-calculator.html") return;
    const form = document.forms.calform;
    const result = document.querySelector(".rightresult");
    if (!form || !result) return;
    markLiveForm(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const type = form.elements.ctype?.value || "standard";
      const months = Math.max(1, Math.round(fieldValue(form, "cloanterm")));
      const rate = fieldValue(form, "cinterestrate");
      const monthlyRate = rate / 100 / 12;
      const price = fieldValue(form, "csaleprice");
      const incentive = fieldValue(form, "cincentive");
      const downPayment = fieldValue(form, "cdownpayment");
      const tradeIn = fieldValue(form, "ctradeinvalue");
      const tradeOwed = fieldValue(form, "ctradeinowned");
      const salesTax = Math.max(0, price * fieldValue(form, "csaletax") / 100);
      const fees = fieldValue(form, "ctitlereg");
      const financeFees = form.elements.cttrinloan?.checked;
      let loanAmount = Math.max(0, price - incentive - downPayment - tradeIn + tradeOwed);
      let upfront = Math.max(0, downPayment + salesTax + fees - tradeIn + tradeOwed);
      if (financeFees) {
        loanAmount += salesTax + fees;
        upfront = Math.max(0, downPayment - tradeIn + tradeOwed);
      }

      let payment = amortizedPayment(loanAmount, rate, months);
      let reverseNote = "";
      if (type === "reverse" && fieldValue(form, "cmonthlypay")) {
        payment = fieldValue(form, "cmonthlypay");
        loanAmount = monthlyRate ? payment * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate : payment * months;
        reverseNote = "<div class=\"dynamic-result-note\">Reverse mode estimates the financeable loan amount from the monthly payment.</div>";
      }
      const totalPayments = payment * months;
      const totalInterest = Math.max(0, totalPayments - loanAmount);
      const totalCost = price - incentive + salesTax + fees + totalInterest;

      setResultHtml(result, `
        <a name="autoloanresult"></a>
        <h2 class="h2result">Monthly Pay: &nbsp; ${money(payment)}</h2>
        <div class="metric-summary">
          <div><span>Total loan</span><strong>${money(loanAmount)}</strong></div>
          <div><span>Total interest</span><strong>${money(totalInterest)}</strong></div>
          <div><span>Total cost</span><strong>${money(totalCost)}</strong></div>
        </div>
        <table width="100%">
          <tr><td>Total Loan Amount</td><td align="right">${money(loanAmount)}</td></tr>
          <tr><td>Sales Tax</td><td align="right">${money(salesTax)}</td></tr>
          <tr><td>Upfront Payment</td><td align="right">${money(upfront)}</td></tr>
          <tr><td>Total of ${months} Loan Payments</td><td align="right">${money(totalPayments)}</td></tr>
          <tr><td>Total Loan Interest</td><td align="right">${money(totalInterest)}</td></tr>
          <tr><td>Total Cost</td><td align="right"><b>${money(totalCost)}</b></td></tr>
        </table>
        <p align="center"><a href="#" onClick="return showAmo(${loanAmount}, ${monthlyRate}, ${months}, ${payment}, 'month', 'autoLoanDynamicAmo');">View Amortization Table</a></p>
        <div id="autoLoanDynamicAmo"></div>
        ${reverseNote}
        <div class="dynamic-result-note">Calculated instantly in your browser.</div>
      `);
      rememberCalculator();
      location.hash = "autoloanresult";
    });
  }

  function getDatePart(form, prefix, part) {
    return Number(form.elements[`${prefix}${part}`]?.value || 0);
  }

  function validDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
  }

  function enhanceAgeCalculator() {
    if (currentPage() !== "age-calculator.html") return;
    const form = document.forms.calcf;
    if (!form) return;
    markLiveForm(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const start = validDate(getDatePart(form, "today", "Year"), getDatePart(form, "today", "Month"), getDatePart(form, "today", "Day"));
      const end = validDate(getDatePart(form, "ageat", "Year"), getDatePart(form, "ageat", "Month"), getDatePart(form, "ageat", "Day"));
      if (!start || !end) {
        showToast("Please enter a valid date.");
        return;
      }
      if (end < start) {
        showToast("The target date must be after the birth date.");
        return;
      }

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();
      if (days < 0) {
        months -= 1;
        days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      const totalDays = Math.floor((end - start) / 86400000);
      inlineResult(form, `
        <div class="h2result">Result: ${years} years, ${months} months, ${days} days</div>
        <div class="metric-summary">
          <div><span>Total days</span><strong>${totalDays.toLocaleString("en-US")}</strong></div>
          <div><span>Total weeks</span><strong>${compactNumber(totalDays / 7, 2)}</strong></div>
          <div><span>Total hours</span><strong>${(totalDays * 24).toLocaleString("en-US")}</strong></div>
        </div>
        <div class="dynamic-result-note">Calculated instantly in your browser.</div>
      `);
      rememberCalculator();
    });
  }

  function enhanceCompoundInterestCalculator() {
    if (currentPage() !== "compound-interest-calculator.html") return;
    const form = document.forms.calform;
    if (!form) return;
    markLiveForm(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const effective = effectiveAnnualRate(fieldValue(form, "cinterestrate"), form.elements.cincompound?.value);
      const output = nominalFromEffective(effective, form.elements.coutcompound?.value);
      inlineResult(form, `
        <div class="h2result">Equivalent Rate: ${compactNumber(output, 5)}%</div>
        <div class="dynamic-result-note">Effective annual rate: ${compactNumber(effective * 100, 5)}%.</div>
      `);
      rememberCalculator();
    });
  }

  function enhanceLegacyFormSafety() {
    const livePages = new Set([
      "bmi-calculator.html",
      "loan-calculator.html",
      "percent-calculator.html",
      "mortgage-calculator.html",
      "auto-loan-calculator.html",
      "age-calculator.html",
      "compound-interest-calculator.html"
    ]);
    if (livePages.has(currentPage())) return;
    const isToolPage = /calculator|converter|generator|counter|roller|encode|decode/i.test(currentPage());
    const title = isToolPage
      ? "This calculator is being upgraded for instant results."
      : "This form is temporarily unavailable.";
    const message = isToolPage
      ? "This page is temporarily preventing old static submissions so it does not show stale example answers. The reference content remains available while its formula module is added."
      : "This static page is preventing old form submissions so it does not send you to a stale or unavailable response. The page content remains available.";
    const toast = isToolPage
      ? "This tool is being upgraded for instant custom results."
      : "This form is temporarily unavailable.";

    document.querySelectorAll("form").forEach((form) => {
      if (form.dataset.dynamicCalculator === "true") return;
      if (form.name === "calcSearchForm") return;
      if (!form.querySelector('input[type="submit"], input[type="image"], button[type="submit"]')) return;
      form.addEventListener("submit", (event) => {
        if (event.defaultPrevented) return;
        event.preventDefault();
        inlineResult(form, `
          <div class="legacy-form-warning">
            <b>${title}</b>
            <span>${message}</span>
          </div>
        `);
        showToast(toast);
      });
    });
  }

  function enhanceImages() {
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
      if (!img.closest("#logo") && !img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
      if (!img.hasAttribute("alt")) img.setAttribute("alt", "");
    });
  }

  function enhanceAdSlots() {
    document.querySelectorAll('[id^="div-gpt-ad"]').forEach((slot) => {
      slot.innerHTML = `
        <div class="native-card">
          <h3>Popular calculators</h3>
          <a href="${getRelativeUrl("mortgage-calculator.html")}">Mortgage Calculator</a>
          <a href="${getRelativeUrl("loan-calculator.html")}">Loan Calculator</a>
          <a href="${getRelativeUrl("bmi-calculator.html")}">BMI Calculator</a>
          <a href="${getRelativeUrl("percent-calculator.html")}">Percentage Calculator</a>
        </div>
      `;
    });
  }

  function rememberCalculator() {
    try {
      const title = document.querySelector("h1")?.textContent?.trim() || document.title;
      const url = currentPage();
      if (!title || url === "index.html") return;
      const saved = JSON.parse(localStorage.getItem("recentCalculators") || "[]").filter((item) => item.url !== url);
      saved.unshift({ title, url });
      localStorage.setItem("recentCalculators", JSON.stringify(saved.slice(0, 6)));
    } catch (_err) {}
  }

  function renderRecentCalculators() {
    const right = document.getElementById("right");
    if (!right) return;
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem("recentCalculators") || "[]");
    } catch (_err) {}
    if (!saved.length) return;
    const card = document.createElement("div");
    card.className = "recent-calculators";
    card.innerHTML = `<h3>Recent calculators</h3>${saved.map((item) => `<a href="${getRelativeUrl(item.url)}">${item.title}</a>`).join("")}`;
    right.appendChild(card);
  }

  function enhanceNavigation() {
    if (!document.querySelector(".skip-link")) {
      const skip = document.createElement("a");
      skip.className = "skip-link";
      skip.href = "#contentout";
      skip.textContent = "Skip to content";
      document.body.insertBefore(skip, document.body.firstChild);
    }
    const top = document.createElement("button");
    top.type = "button";
    top.className = "back-to-top";
    top.setAttribute("aria-label", "Back to top");
    top.textContent = "^";
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(top);
    window.addEventListener("scroll", () => {
      top.classList.toggle("is-visible", window.scrollY > 500);
    }, { passive: true });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
    navigator.serviceWorker.register(getRelativeUrl("sw.js")).catch(() => undefined);
  }

  onReady(() => {
    enhanceNavigation();
    enhanceImages();
    enhanceAdSlots();
    enhanceBmiCalculator();
    enhanceLoanCalculator();
    enhancePercentCalculator();
    enhanceMortgageCalculator();
    enhanceAutoLoanCalculator();
    enhanceAgeCalculator();
    enhanceCompoundInterestCalculator();
    enhanceLegacyFormSafety();
    rememberCalculator();
    renderRecentCalculators();
    registerServiceWorker();
  });

  window.formatAsMoney = window.formatAsMoney || money;
  window.formatNum = window.formatNum || function formatNum(value) {
    const number = toNumber(value);
    return Number.isInteger(number) ? String(number) : decimal(number).replace(/\.?0+$/, "");
  };

  window.ttline2HideTT = window.ttline2HideTT || function ttline2HideTT() {};
})();
