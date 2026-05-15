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
    const raw = String(value ?? "").replace(/[$,%\s,]/g, "");
    if (raw === "") return NaN;
    const number = Number(raw);
    return Number.isFinite(number) ? number : NaN;
  }

  function money(value) {
    const number = toNumber(value);
    return Number.isFinite(number) ? number.toLocaleString("en-US", { style: "currency", currency: "USD" }) : "Invalid";
  }

  function decimal(value, digits = 2) {
    const number = toNumber(value);
    return Number.isFinite(number) ? number.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits }) : "Invalid";
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
    if (!Number.isFinite(balance) || !Number.isFinite(rate) || !Number.isFinite(pay) || !Number.isFinite(totalMonths)) {
      target.innerHTML = '<div class="calc-error" role="alert">Please enter valid amortization values.</div>';
      return false;
    }
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
    const factor = toNumber(growthFactor);
    const count = Math.max(1, Math.round(toNumber(periods)));
    if (!Number.isFinite(balance) || !Number.isFinite(factor) || !Number.isFinite(count)) {
      target.innerHTML = '<div class="calc-error" role="alert">Please enter valid schedule values.</div>';
      return false;
    }
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

  function fieldValue(form, name, fallback = NaN) {
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
    attachResultActions(container);
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
    box.setAttribute("role", "status");
    box.setAttribute("aria-live", "polite");
    attachResultActions(box);
  }

  function markLiveForm(form) {
    if (form) form.dataset.dynamicCalculator = "true";
  }

  function compactNumber(value, digits = 2) {
    return decimal(value, digits).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showValidationError(form, message) {
    inlineResult(form, `<div class="calc-error" role="alert">${escapeHtml(message)}</div>`);
    showToast(message);
    return false;
  }

  function requireNumber(form, name, label, options = {}) {
    const raw = rawField(form, name);
    const value = fieldValue(form, name);
    if (raw === "" || !Number.isFinite(value)) {
      throw new Error(`${label} must be a valid number.`);
    }
    if (options.min != null && value < options.min) {
      throw new Error(`${label} must be ${options.min === 0 ? "0 or greater" : `at least ${options.min}`}.`);
    }
    if (options.positive && value <= 0) {
      throw new Error(`${label} must be greater than 0.`);
    }
    return value;
  }

  function cleanResultText(container) {
    return String(container?.innerText || "")
      .replace(/\bCopy result\b/g, "")
      .replace(/\bShare result\b/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  function attachResultActions(container) {
    if (!container || container.querySelector(".calc-result-actions")) return;
    const actions = document.createElement("div");
    actions.className = "calc-result-actions";
    actions.innerHTML = '<button type="button" data-calc-action="copy">Copy result</button><button type="button" data-calc-action="share">Share result</button>';
    container.appendChild(actions);
  }

  function enhanceResultActionButtons() {
    document.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-calc-action]");
      if (!button) return;
      const container = button.closest(".dynamic-result, .inline-calc-result");
      const text = cleanResultText(container);
      if (!text) return;
      if (button.dataset.calcAction === "share" && navigator.share) {
        try {
          await navigator.share({ title: document.title, text, url: location.href });
          return;
        } catch (_err) {}
      }
      try {
        await navigator.clipboard.writeText(button.dataset.calcAction === "share" ? `${text}\n${location.href}` : text);
        showToast(button.dataset.calcAction === "share" ? "Result link copied." : "Result copied.");
      } catch (_err) {
        showToast("Copy is not available in this browser.");
      }
    });
  }

  function checkedValue(form, name, fallback = "") {
    const field = form?.elements?.[name];
    if (!field) return fallback;
    if (field instanceof RadioNodeList || typeof field.length === "number") {
      const checked = Array.from(field).find((item) => item.checked);
      return checked?.value ?? field.value ?? fallback;
    }
    if (field.type === "checkbox") return field.checked ? field.value : fallback;
    return field.value ?? fallback;
  }

  function firstNumber(form, names, fallback = 0) {
    for (const name of names) {
      if (hasFieldValue(form, name)) return fieldValue(form, name);
    }
    return fallback;
  }

  function parseNumberList(text) {
    return String(text || "")
      .match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/gi)
      ?.map(Number)
      .filter(Number.isFinite) || [];
  }

  function collectFormNumbers(form) {
    const values = [];
    Array.from(form.elements || []).forEach((field) => {
      if (!field.name || /^(hidden|submit|button|reset|image|file)$/i.test(field.type || "")) return;
      if ((field.type === "radio" || field.type === "checkbox") && !field.checked) return;
      const nums = parseNumberList(field.value);
      nums.forEach((number) => values.push({ name: field.name, number }));
    });
    return values;
  }

  const lengthToMeter = {
    inches: 0.0254,
    inch: 0.0254,
    feet: 0.3048,
    foot: 0.3048,
    ft: 0.3048,
    yards: 0.9144,
    yard: 0.9144,
    miles: 1609.344,
    mile: 1609.344,
    meters: 1,
    meter: 1,
    m: 1,
    centimeters: 0.01,
    centimeter: 0.01,
    cm: 0.01,
    kilometers: 1000,
    kilometer: 1000,
    km: 1000
  };

  function lengthMeters(form, valueName, unitName) {
    return fieldValue(form, valueName) * (lengthToMeter[checkedValue(form, unitName, "meters")] || 1);
  }

  function areaRows(squareMeters) {
    return [
      ["Area", `${compactNumber(squareMeters, 6)} m²`],
      ["Area", `${compactNumber(squareMeters * 10.7639104167, 6)} ft²`]
    ];
  }

  function makeResult(title, rows, note = "Calculated instantly in your browser.") {
    return { title, rows, note };
  }

  function renderRows(rows) {
    return rows.map(([label, value]) => `<tr><td>${escapeHtml(label)}</td><td align="right"><b>${escapeHtml(value)}</b></td></tr>`).join("");
  }

  function renderStaticCalculation(form, result) {
    inlineResult(form, `
      <div class="static-calc-result">
        <h2 class="h2result">${escapeHtml(result.title || "Result")}</h2>
        <table class="cinfoT" width="100%">${renderRows(result.rows || [])}</table>
        <div class="dynamic-result-note">${escapeHtml(result.note || "Calculated instantly in your browser.")}</div>
      </div>
    `);
    rememberCalculator();
  }

  function staticError(form, message) {
    inlineResult(form, `<div class="calc-error" role="alert">${escapeHtml(message)}</div>`);
    showToast(message);
  }

  function calculateAreaForm(form) {
    if (currentPage() !== "area-calculator.html") return null;
    const type = checkedValue(form, "calctype", "");
    if (type === "rectangle") {
      return makeResult("Rectangle Area", areaRows(lengthMeters(form, "reclength", "reclengthunit") * lengthMeters(form, "recheight", "recheightunit")));
    }
    if (type === "triangle") {
      const a = lengthMeters(form, "triedge1", "triedge1unit");
      const b = lengthMeters(form, "triedge2", "triedge2unit");
      const c = lengthMeters(form, "triedge3", "triedge3unit");
      if (a + b <= c || a + c <= b || b + c <= a) return makeResult("Triangle Area", [["Error", "The three sides do not form a valid triangle."]], "Check the side lengths and try again.");
      const s = (a + b + c) / 2;
      return makeResult("Triangle Area", areaRows(Math.sqrt(s * (s - a) * (s - b) * (s - c))));
    }
    if (type === "trapezoid") {
      const top = lengthMeters(form, "tratop", "tratopunit");
      const bottom = lengthMeters(form, "trabottom", "trabottomunit");
      const height = lengthMeters(form, "traheight", "traheightunit");
      return makeResult("Trapezoid Area", areaRows((top + bottom) * height / 2));
    }
    if (type === "circle") {
      const r = lengthMeters(form, "circleradius", "circleradiusunit");
      return makeResult("Circle Area", areaRows(Math.PI * r * r));
    }
    if (type === "sector") {
      const r = lengthMeters(form, "sectorradius", "sectorradiusunit");
      const rawAngle = fieldValue(form, "sectorangle");
      const angle = checkedValue(form, "sectorangleunit", "degrees") === "radians" ? rawAngle * 180 / Math.PI : rawAngle;
      return makeResult("Sector Area", areaRows(Math.PI * r * r * angle / 360));
    }
    if (type === "ellipse") {
      return makeResult("Ellipse Area", areaRows(Math.PI * lengthMeters(form, "majoraxes", "majoraxesunit") * lengthMeters(form, "minoraxes", "minoraxesunit")));
    }
    if (type === "parallelogram") {
      return makeResult("Parallelogram Area", areaRows(lengthMeters(form, "parbase", "parbaseunit") * lengthMeters(form, "parheight", "parheightunit")));
    }
    return null;
  }

  function calculateCircleForm(form) {
    if (currentPage() !== "circle-calculator.html") return null;
    let radius = 0;
    if (hasFieldValue(form, "radius")) radius = fieldValue(form, "radius");
    else if (hasFieldValue(form, "diameter")) radius = fieldValue(form, "diameter") / 2;
    else if (hasFieldValue(form, "circumference")) radius = fieldValue(form, "circumference") / (2 * Math.PI);
    else if (hasFieldValue(form, "area")) radius = Math.sqrt(fieldValue(form, "area") / Math.PI);
    if (!(radius > 0)) return makeResult("Circle Result", [["Error", "Enter one positive circle value."]], "Radius, diameter, circumference, or area can be used.");
    setFieldValue(form, "radius", radius);
    setFieldValue(form, "diameter", radius * 2);
    setFieldValue(form, "circumference", 2 * Math.PI * radius);
    setFieldValue(form, "area", Math.PI * radius * radius);
    return makeResult("Circle Result", [
      ["Radius", compactNumber(radius, 6)],
      ["Diameter", compactNumber(radius * 2, 6)],
      ["Circumference", compactNumber(2 * Math.PI * radius, 6)],
      ["Area", compactNumber(Math.PI * radius * radius, 6)]
    ]);
  }

  function calculateNumberListForm(form) {
    const page = currentPage();
    const text = form.elements.numberinputs?.value;
    if (text == null) return null;
    const values = parseNumberList(text);
    if (!values.length) return makeResult("Result", [["Error", "Enter at least one number."]], "Numbers can be separated by commas, spaces, or line breaks.");
    const sum = values.reduce((a, b) => a + b, 0);
    const sorted = [...values].sort((a, b) => a - b);
    const median = sorted.length % 2 ? sorted[(sorted.length - 1) / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
    if (/gcf|common-factor/i.test(page)) {
      const ints = values.map((value) => Math.abs(Math.round(value))).filter(Boolean);
      if (!ints.length) return makeResult("Greatest Common Factor", [["Error", "Enter at least one non-zero integer."]]);
      const g = ints.reduce((a, b) => gcd(a, b));
      return makeResult("Greatest Common Factor", [["GCF", String(g)], ["Numbers used", ints.join(", ")]]);
    }
    if (/lcm/i.test(page)) {
      const ints = values.map((value) => Math.abs(Math.round(value))).filter(Boolean);
      if (!ints.length) return makeResult("Least Common Multiple", [["Error", "Enter at least one non-zero integer."]]);
      const l = ints.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
      return makeResult("Least Common Multiple", [["LCM", String(l)], ["Numbers used", ints.join(", ")]]);
    }
    return makeResult("Average Result", [
      ["Count", String(values.length)],
      ["Sum", compactNumber(sum, 6)],
      ["Average", compactNumber(sum / values.length, 6)],
      ["Median", compactNumber(median, 6)],
      ["Minimum", compactNumber(Math.min(...values), 6)],
      ["Maximum", compactNumber(Math.max(...values), 6)]
    ]);
  }

  function gcd(a, b) {
    let x = Math.abs(Math.round(a));
    let y = Math.abs(Math.round(b));
    while (y) [x, y] = [y, x % y];
    return Number.isFinite(x) ? x : NaN;
  }

  function calculateBinaryForm(form) {
    if (currentPage() !== "binary-calculator.html") return null;
    if (form.elements.b2dnumber1) {
      const raw = String(form.elements.b2dnumber1.value || "").trim();
      if (!/^[01]+$/.test(raw)) return makeResult("Binary to Decimal", [["Error", "Enter a valid binary number."]]);
      return makeResult("Binary to Decimal", [["Decimal", String(parseInt(raw, 2))]]);
    }
    if (form.elements.d2bnumber1) {
      const value = Math.trunc(fieldValue(form, "d2bnumber1"));
      return makeResult("Decimal to Binary", [["Binary", value.toString(2)]]);
    }
    if (form.elements.number1 && form.elements.number2) {
      const a = parseInt(String(form.elements.number1.value || "0"), 2);
      const b = parseInt(String(form.elements.number2.value || "0"), 2);
      const op = checkedValue(form, "c2op", "+");
      let result = op === "-" ? a - b : op === "*" ? a * b : op === "/" ? a / b : a + b;
      if (!Number.isFinite(result)) return makeResult("Binary Result", [["Error", "Division by zero is not allowed."]]);
      result = Math.trunc(result);
      return makeResult("Binary Result", [["Binary", result.toString(2)], ["Decimal", String(result)]]);
    }
    return null;
  }

  function calculateRandomForm(form) {
    if (currentPage() !== "random-number-generator.html") return null;
    const cryptoRandom = () => {
      if (!window.crypto?.getRandomValues) return Math.random();
      const buffer = new Uint32Array(1);
      window.crypto.getRandomValues(buffer);
      return buffer[0] / 4294967296;
    };
    const lower = firstNumber(form, ["slower", "clower"], 0);
    const upper = firstNumber(form, ["supper", "cupper"], 100);
    const count = Math.max(1, Math.min(100, Math.round(firstNumber(form, ["cnums"], 1))));
    const isInteger = !form.elements.cnumt || checkedValue(form, "cnumt", "i") === "i";
    const lo = Math.min(lower, upper);
    const hi = Math.max(lower, upper);
    const values = Array.from({ length: count }, () => {
      const raw = lo + cryptoRandom() * (hi - lo);
      return isInteger ? String(Math.floor(lo + cryptoRandom() * (hi - lo + 1))) : compactNumber(raw, Math.min(12, Math.max(2, fieldValue(form, "cprec", 4))));
    });
    return makeResult("Random Result", [["Generated", values.join(", ")]], "Generated locally in this browser.");
  }

  function calculateDiscountForm(form) {
    if (currentPage() !== "discount-calculator.html") return null;
    const before = fieldValue(form, "pricebefore");
    const discount = fieldValue(form, "discount");
    const after = fieldValue(form, "priceafter");
    const saved = fieldValue(form, "savedamount");
    const percentMode = checkedValue(form, "format", "p") === "p";
    let finalPrice = after;
    let savedAmount = saved;
    if (before && discount && !after) {
      savedAmount = percentMode ? before * discount / 100 : discount;
      finalPrice = before - savedAmount;
    } else if (before && after) {
      savedAmount = before - after;
    } else if (after && discount) {
      savedAmount = percentMode ? after * discount / (100 - discount) : discount;
      finalPrice = after;
    }
    if (!Number.isFinite(finalPrice) || !Number.isFinite(savedAmount)) return null;
    setFieldValue(form, "priceafter", finalPrice);
    setFieldValue(form, "savedamount", savedAmount);
    return makeResult("Discount Result", [["Final price", money(finalPrice)], ["You save", money(savedAmount)], ["Savings rate", before ? `${compactNumber(savedAmount / before * 100, 4)}%` : "N/A"]]);
  }

  function calculateCommissionForm(form) {
    if (currentPage() !== "commission-calculator.html" || form.name !== "calc") return null;
    const price = fieldValue(form, "price");
    const rate = fieldValue(form, "rate");
    const commission = fieldValue(form, "commission");
    let outPrice = price;
    let outRate = rate;
    let outCommission = commission;
    if (price && rate && !commission) outCommission = price * rate / 100;
    else if (price && commission && !rate) outRate = commission / price * 100;
    else if (rate && commission && !price) outPrice = commission / (rate / 100);
    setFieldValue(form, "price", outPrice);
    setFieldValue(form, "rate", outRate);
    setFieldValue(form, "commission", outCommission);
    return makeResult("Commission Result", [["Sales price", money(outPrice)], ["Commission rate", `${compactNumber(outRate, 4)}%`], ["Commission", money(outCommission)]]);
  }

  function calculateSimpleInterestForm(form) {
    if (currentPage() !== "simple-interest-calculator.html") return null;
    const principal = fieldValue(form, "principal");
    const rate = fieldValue(form, "rate") / 100 * (checkedValue(form, "ratebase", "y") === "m" ? 12 : 1);
    const years = fieldValue(form, "term") / (checkedValue(form, "termbase", "y") === "m" ? 12 : 1);
    const interest = principal * rate * years;
    return makeResult("Simple Interest Result", [["Principal", money(principal)], ["Total interest", money(interest)], ["End balance", money(principal + interest)]]);
  }

  function calculateFutureValueForm(form) {
    if (!/future-value|annuity|savings|cd-calculator|investment/i.test(currentPage())) return null;
    const periods = Math.max(1, Math.round(firstNumber(form, ["cyearsv", "cyears", "cyearstopayout", "cyears"])));
    const principal = firstNumber(form, ["cstartingprinciplev", "cstartingprinciple", "cstartingamount", "cinitialdeposit", "cprincipal", "cstarting"], 0);
    const rate = firstNumber(form, ["cinterestratev", "cinterestrate", "crate", "returnrate"], 0) / 100;
    const deposit = firstNumber(form, ["ccontributeamountv", "cannualaddition", "cmonthlyaddition", "cadditionaldeposit"], 0);
    if (!principal && !deposit) return null;
    let balance = principal;
    let totalDeposits = 0;
    for (let i = 0; i < periods; i += 1) {
      if (checkedValue(form, "ciadditionat1", "end") === "beginning") {
        balance += deposit;
        totalDeposits += deposit;
      }
      balance *= (1 + rate);
      if (checkedValue(form, "ciadditionat1", "end") !== "beginning") {
        balance += deposit;
        totalDeposits += deposit;
      }
    }
    return makeResult("Growth Result", [["Starting amount", money(principal)], ["Total deposits", money(totalDeposits)], ["Interest/return", money(balance - principal - totalDeposits)], ["End balance", money(balance)]]);
  }

  function calculateLoanLikeForm(form) {
    const page = currentPage();
    if (!/(loan|mortgage|payment|lease|apr|debt|credit-card|repayment|refinance|amortization)/i.test(page)) return null;
    if (/(lease|apr|debt|credit-card|repayment|refinance)/i.test(page)) {
      return needsFormulaReviewResult(form, "This calculator needs a verified domain-specific debt, APR, lease, credit-card, repayment, or refinance formula before production use.");
    }
    const principal = firstNumber(form, ["cloanamount", "c2loanamount", "cprincipal", "csaleprice", "chouseprice", "c2housevalue", "balance", "cbal1"], 0);
    if (!(principal > 0)) return null;
    const rate = firstNumber(form, ["cinterestrate", "c2interestrate", "rate", "cint1", "cyield"], 0);
    let months = firstNumber(form, ["cmonths", "cloantermmonth", "c2loantermmonth", "month"], 0);
    const term = firstNumber(form, ["cloanterm", "c2loanterm", "cyears", "year"], 0);
    if (term) {
      const unit = checkedValue(form, "cloantermunit", "");
      const termLooksMonthly = /auto|lease|boat|card/i.test(page) || unit === "m" || term > 60;
      months += termLooksMonthly ? term : term * 12;
    }
    months = Math.max(1, Math.round(months || 12));
    const payment = amortizedPayment(principal, rate, months);
    const total = payment * months;
    return makeResult("Payment Estimate", [["Principal", money(principal)], ["Payment", money(payment)], ["Total payments", money(total)], ["Total interest", money(total - principal)]], "Estimated from the available static form fields.");
  }

  function calculateHealthForm(form) {
    const page = currentPage();
    if (!/(bmr|calorie|tdee|ideal-weight|healthy-weight|protein|carbohydrate|fat-intake|overweight|anorexic-bmi)/i.test(page)) return null;
    if (/(ideal-weight|healthy-weight|protein|carbohydrate|fat-intake|overweight|anorexic-bmi)/i.test(page)) {
      return needsFormulaReviewResult(form, "This health calculator needs its own verified formula; a generic BMI/BMR estimate was not used.");
    }
    let heightM = 0;
    let weightKg = 0;
    if (hasFieldValue(form, "cheightmeter")) heightM = fieldValue(form, "cheightmeter") / 100;
    else heightM = (fieldValue(form, "cheightfeet") * 12 + fieldValue(form, "cheightinch")) * 0.0254;
    if (hasFieldValue(form, "ckg")) weightKg = fieldValue(form, "ckg");
    else weightKg = firstNumber(form, ["cpound", "cweightlbs", "cweight", "bodyweight"], 0) * 0.45359237;
    if (!(heightM > 0) || !(weightKg > 0)) return null;
    const age = firstNumber(form, ["cage", "age"], 30);
    const sex = checkedValue(form, "csex", "m");
    const bmi = weightKg / (heightM * heightM);
    const bmr = (sex === "f" ? 10 * weightKg + 6.25 * heightM * 100 - 5 * age - 161 : 10 * weightKg + 6.25 * heightM * 100 - 5 * age + 5);
    return makeResult("Health Result", [["BMI", compactNumber(bmi, 2)], ["BMR", `${compactNumber(bmr, 0)} Calories/day`], ["Maintenance estimate", `${compactNumber(bmr * 1.2, 0)}-${compactNumber(bmr * 1.725, 0)} Calories/day`]]);
  }

  function calculateDateForm(form) {
    if (!/(date-calculator|day-counter|day-of-the-week)/i.test(currentPage())) return null;
    const start = validDate(getDatePart(form, "today", "Year"), getDatePart(form, "today", "Month"), getDatePart(form, "today", "Day"));
    const end = validDate(getDatePart(form, "ageat", "Year") || getDatePart(form, "end", "Year"), getDatePart(form, "ageat", "Month") || getDatePart(form, "end", "Month"), getDatePart(form, "ageat", "Day") || getDatePart(form, "end", "Day"));
    if (start && end) {
      const days = Math.round((end - start) / 86400000);
      return makeResult("Date Result", [["Days", String(days)], ["Weeks", compactNumber(days / 7, 2)], ["Absolute days", String(Math.abs(days))]]);
    }
    if (start) {
      return makeResult("Day of Week", [["Date", start.toLocaleDateString("en-US")], ["Day", start.toLocaleDateString("en-US", { weekday: "long" })]]);
    }
    return null;
  }

  function gradePointFromLetter(letter) {
    return {
      "a+": 4.3,
      a: 4,
      "a-": 3.7,
      "b+": 3.3,
      b: 3,
      "b-": 2.7,
      "c+": 2.3,
      c: 2,
      "c-": 1.7,
      "d+": 1.3,
      d: 1,
      "d-": 0.7,
      f: 0
    }[String(letter || "").toLowerCase()];
  }

  function calculateGpaForm(form) {
    if (currentPage() !== "gpa-calculator.html") return null;
    if (form.name === "gparaiseform") {
      try {
        const currentGpa = requireNumber(form, "grcCurrentGPA", "Current GPA", { min: 0 });
        const targetGpa = requireNumber(form, "grcTargetGPA", "Target GPA", { min: 0 });
        const currentCredits = requireNumber(form, "grcCurrentCredit", "Current credits", { min: 0 });
        const additionalCredits = requireNumber(form, "grcAdditionalCredit", "Additional credits", { positive: true });
        const needed = (targetGpa * (currentCredits + additionalCredits) - currentGpa * currentCredits) / additionalCredits;
        return makeResult("Required Future GPA", [["Required GPA", compactNumber(needed, 3)], ["Status", needed > 4.3 ? "Above the A+ scale shown on this page" : "Within the shown letter-grade scale"]]);
      } catch (error) {
        return makeResult("GPA Error", [["Error", error.message]]);
      }
    }
    if (form.name !== "gpaform") return null;
    if (checkedValue(form, "format", "l") === "p") {
      return needsFormulaReviewResult(form, "Percentage GPA scales vary by school and no verified percentage-to-point table is defined in this static page.");
    }
    const format = checkedValue(form, "format", "l");
    const semesters = Math.max(1, Math.min(26, Math.round(fieldValue(form, "sc", 1))));
    let totalCredits = 0;
    let totalPoints = 0;
    const rows = [];

    for (let s = 1; s <= semesters; s += 1) {
      const prefix = String.fromCharCode(96 + s);
      const count = Math.max(0, Math.round(fieldValue(form, `n${prefix}`, s === 1 ? 5 : 0)));
      for (let i = 1; i <= count; i += 1) {
        const creditName = `c${prefix}${i}`;
        const letterName = `l${prefix}${i}`;
        const scoreName = `s${prefix}${i}`;
        const hasCredit = hasFieldValue(form, creditName);
        const hasGrade = format === "l" ? checkedValue(form, letterName, "") !== "" : hasFieldValue(form, scoreName);
        if (!hasCredit && !hasGrade) continue;
        if (!hasCredit || !hasGrade) return makeResult("GPA Error", [["Error", "Each GPA row needs both credits and a grade."]]);
        const credits = fieldValue(form, creditName);
        if (!(credits > 0)) return makeResult("GPA Error", [["Error", "Credits must be valid numbers greater than 0."]]);
        const letter = checkedValue(form, letterName, "");
        if (format === "l" && /^(p|np)$/i.test(letter)) continue;
        const points = format === "l" ? gradePointFromLetter(letter) : fieldValue(form, scoreName);
        if (!Number.isFinite(points)) return makeResult("GPA Error", [["Error", "Grade values must be valid numbers or supported letter grades."]]);
        totalCredits += credits;
        totalPoints += credits * points;
        rows.push([`Course ${rows.length + 1}`, `${compactNumber(credits, 2)} credits x ${compactNumber(points, 3)}`]);
      }
    }

    if (form.elements.prior?.checked) {
      try {
        const priorGpa = requireNumber(form, "pgpa", "Prior GPA", { min: 0 });
        const priorCredits = requireNumber(form, "pcredit", "Prior credits", { positive: true });
        totalCredits += priorCredits;
        totalPoints += priorGpa * priorCredits;
      } catch (error) {
        return makeResult("GPA Error", [["Error", error.message]]);
      }
    }

    if (!(totalCredits > 0)) return makeResult("GPA Error", [["Error", "Enter at least one course with credits and grade."]]);
    rows.unshift(["GPA", compactNumber(totalPoints / totalCredits, 3)], ["Credits counted", compactNumber(totalCredits, 2)]);
    return makeResult("GPA Result", rows);
  }

  function currencyRate(code) {
    const data = Array.isArray(window.listsArrayData) ? window.listsArrayData : [];
    const row = data.find((item) => item[0] === code);
    return row ? Number(row[1]) : NaN;
  }

  function calculateCurrencyForm(form) {
    if (currentPage() !== "currency-calculator.html") return null;
    const type = String(form.elements.type?.value || "1");
    try {
      if (type === "2") {
        const rate = requireNumber(form, "erate", "Exchange rate", { positive: true });
        const amount = requireNumber(form, "eamount2", "Amount", { min: 0 });
        return makeResult("Currency Result", [["Converted amount", compactNumber(amount * rate, 6)]], "Uses the custom exchange rate entered on this page.");
      }
      const amount = requireNumber(form, "eamount", "Amount", { min: 0 });
      const from = form.elements.efrom?.value;
      const to = form.elements.eto?.value;
      const fromRate = currencyRate(from);
      const toRate = currencyRate(to);
      if (!Number.isFinite(fromRate) || !Number.isFinite(toRate)) return needsFormulaReviewResult(form, "Currency rate data is missing for the selected currencies.");
      const converted = amount / fromRate * toRate;
      return makeResult("Currency Result", [[`${amount} ${from}`, `${compactNumber(converted, 6)} ${to}`], ["Rate used", `1 ${from} = ${compactNumber(toRate / fromRate, 8)} ${to}`]], "Uses the static exchange-rate table shipped with this page.");
    } catch (error) {
      return makeResult("Currency Error", [["Error", error.message]]);
    }
  }

  function financePeriodRate(form) {
    const annualRate = requireNumber(form, "cinterestratev", "Interest rate") / 100;
    const paymentsPerYear = requireNumber(form, "cpy", "Periods per year", { positive: true });
    const compoundsPerYear = requireNumber(form, "ccy", "Compounds per year", { positive: true });
    return Math.pow(1 + annualRate / compoundsPerYear, compoundsPerYear / paymentsPerYear) - 1;
  }

  function annuityFactor(rate, periods, due) {
    if (!rate) return periods;
    const factor = (Math.pow(1 + rate, periods) - 1) / rate;
    return due ? factor * (1 + rate) : factor;
  }

  function calculateFinanceForm(form) {
    if (currentPage() !== "finance-calculator.html" || form.name !== "calform") return null;
    const mode = String(form.elements.ctype?.value || "endamount");
    if (mode === "returnrate" || mode === "investlength") {
      return needsFormulaReviewResult(form, "Solving finance calculator I/Y or N needs a verified iterative formula before production use.");
    }
    try {
      const periods = requireNumber(form, "cyearsv", "Number of periods", { positive: true });
      const rate = financePeriodRate(form);
      const due = checkedValue(form, "ciadditionat1", "end") === "beginning";
      const growth = Math.pow(1 + rate, periods);
      const annuity = annuityFactor(rate, periods, due);
      if (!Number.isFinite(growth) || !Number.isFinite(annuity)) return makeResult("Finance Error", [["Error", "Finance inputs are outside the supported range."]]);
      if (mode === "endamount") {
        const pv = requireNumber(form, "cstartingprinciplev", "Present value");
        const pmt = requireNumber(form, "ccontributeamountv", "Payment");
        return makeResult("Finance Result", [["FV", money(-(pv * growth + pmt * annuity))], ["Periodic rate", `${compactNumber(rate * 100, 6)}%`]]);
      }
      if (mode === "contributeamount") {
        const pv = requireNumber(form, "cstartingprinciplev", "Present value");
        const fv = requireNumber(form, "ctargetamountv", "Future value");
        return makeResult("Finance Result", [["PMT", money(-(fv + pv * growth) / annuity)], ["Periodic rate", `${compactNumber(rate * 100, 6)}%`]]);
      }
      if (mode === "startingamount") {
        const pmt = requireNumber(form, "ccontributeamountv", "Payment");
        const fv = requireNumber(form, "ctargetamountv", "Future value");
        return makeResult("Finance Result", [["PV", money(-(fv + pmt * annuity) / growth)], ["Periodic rate", `${compactNumber(rate * 100, 6)}%`]]);
      }
      return needsFormulaReviewResult(form, "This finance mode is not wired to a verified static formula.");
    } catch (error) {
      return makeResult("Finance Error", [["Error", error.message]]);
    }
  }

  function genericCalculatorResult(form) {
    return needsFormulaReviewResult(form);
  }

  function needsFormulaReviewResult(form, reason = "No verified domain-specific formula is wired for this static calculator form.") {
    const title = document.querySelector("h1")?.textContent?.trim() || document.title || currentPage();
    return makeResult("NEEDS FORMULA REVIEW", [
      ["Calculator", title],
      ["Status", "NEEDS FORMULA REVIEW"],
      ["Reason", reason]
    ], "Calculation stopped. No generic summary or fabricated formula was generated.");
  }

  function staticCalculatorResult(form) {
    const calculators = [
      calculateAreaForm,
      calculateCircleForm,
      calculateNumberListForm,
      calculateBinaryForm,
      calculateRandomForm,
      calculateDiscountForm,
      calculateCommissionForm,
      calculateSimpleInterestForm,
      calculateFutureValueForm,
      calculateDateForm,
      calculateGpaForm,
      calculateCurrencyForm,
      calculateFinanceForm,
      calculateHealthForm,
      calculateLoanLikeForm,
      genericCalculatorResult
    ];
    for (const calculator of calculators) {
      const result = calculator(form);
      if (result) return result;
    }
    return null;
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
      try {
        if (type === "metric") {
          heightM = requireNumber(form, "cheightmeter", "Height", { positive: true }) / 100;
          weightKg = requireNumber(form, "ckg", "Weight", { positive: true });
        } else {
          const feet = requireNumber(form, "cheightfeet", "Height feet", { min: 0 });
          const inchesPart = requireNumber(form, "cheightinch", "Height inches", { min: 0 });
          const inches = feet * 12 + inchesPart;
          heightM = inches * 0.0254;
          weightKg = requireNumber(form, "cpound", "Weight", { positive: true }) * 0.45359237;
        }
      } catch (error) {
        showValidationError(form, error.message);
        return;
      }
      if (!(heightM > 0) || !(weightKg > 0)) {
        showValidationError(form, "Please enter height and weight.");
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
    const amount = toNumber(principal);
    const rate = toNumber(ratePercent);
    const term = toNumber(months);
    if (!Number.isFinite(amount) || !Number.isFinite(rate) || !Number.isFinite(term) || term <= 0) return NaN;
    const monthlyRate = rate / 100 / 12;
    const count = Math.max(1, Math.round(term));
    if (!monthlyRate) return principal / count;
    return amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -count));
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
        let principal;
        let months;
        let rate;
        try {
          principal = requireNumber(form1, "cloanamount", "Loan amount", { positive: true });
          months = requireNumber(form1, "cloanterm", "Loan term years", { min: 0 }) * 12 + requireNumber(form1, "cloantermmonth", "Loan term months", { min: 0 });
          rate = requireNumber(form1, "cinterestrate", "Interest rate");
        } catch (error) {
          showValidationError(form1, error.message);
          return;
        }
        if (!(months > 0)) {
          showValidationError(form1, "Loan term must be greater than 0.");
          return;
        }
        const payment = amortizedPayment(principal, rate, months);
        if (!Number.isFinite(payment)) {
          showValidationError(form1, "Please enter valid loan values.");
          return;
        }
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
        let principal;
        let years;
        let rate;
        try {
          principal = requireNumber(form2, "c2loanamount", "Loan amount", { positive: true });
          years = requireNumber(form2, "c2loanterm", "Loan term years", { min: 0 }) + requireNumber(form2, "c2loantermmonth", "Loan term months", { min: 0 }) / 12;
          rate = requireNumber(form2, "c2interestrate", "Interest rate");
        } catch (error) {
          showValidationError(form2, error.message);
          return;
        }
        if (!(years > 0)) {
          showValidationError(form2, "Loan term must be greater than 0.");
          return;
        }
        const factor = compoundFactor(rate, years, form2.elements.c2compound?.value);
        const due = principal * factor;
        if (!Number.isFinite(due)) {
          showValidationError(form2, "Please enter valid loan values.");
          return;
        }
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
        let due;
        let years;
        let rate;
        try {
          due = requireNumber(form3, "c3loanamount", "Amount due", { positive: true });
          years = requireNumber(form3, "c3loanterm", "Loan term years", { min: 0 }) + requireNumber(form3, "c3loantermmonth", "Loan term months", { min: 0 }) / 12;
          rate = requireNumber(form3, "c3interestrate", "Interest rate");
        } catch (error) {
          showValidationError(form3, error.message);
          return;
        }
        if (!(years > 0)) {
          showValidationError(form3, "Loan term must be greater than 0.");
          return;
        }
        const factor = compoundFactor(rate, years, form3.elements.c3compound?.value);
        const present = factor ? due / factor : due;
        if (!Number.isFinite(present)) {
          showValidationError(form3, "Please enter valid loan values.");
          return;
        }
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
          inlineResult(form, `<div class="calc-error" role="alert">Please enter any two valid values.</div>`);
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
      let price;
      let downPaymentInput;
      let years;
      let rate;
      let yearlyTax = 0;
      let yearlyInsurance = 0;
      let pmiInput = 0;
      let yearlyPmi = 0;
      let yearlyHoa = 0;
      let yearlyOther = 0;
      const includeCosts = form.elements.caddoptional?.checked !== false;
      try {
        price = requireNumber(form, "chouseprice", "Home price", { positive: true });
        downPaymentInput = requireNumber(form, "cdownpayment", "Down payment", { min: 0 });
        years = requireNumber(form, "cloanterm", "Loan term", { positive: true });
        rate = requireNumber(form, "cinterestrate", "Interest rate");
        if (includeCosts) {
          yearlyTax = unitAmount(requireNumber(form, "cpropertytaxes", "Property taxes", { min: 0 }), form.elements.cpropertytaxesunit?.value, price);
          yearlyInsurance = unitAmount(requireNumber(form, "chomeins", "Home insurance", { min: 0 }), form.elements.chomeinsunit?.value, price);
          pmiInput = requireNumber(form, "cpmi", "PMI", { min: 0 });
          yearlyHoa = unitAmount(requireNumber(form, "choa", "HOA", { min: 0 }), form.elements.choaunit?.value, price);
          yearlyOther = unitAmount(requireNumber(form, "cothercost", "Other costs", { min: 0 }), form.elements.cothercostunit?.value, price);
        }
      } catch (error) {
        showValidationError(form, error.message);
        return;
      }
      const downPayment = unitAmount(downPaymentInput, form.elements.cdownpaymentunit?.value, price);
      const principal = Math.max(0, price - downPayment);
      if (includeCosts) yearlyPmi = unitAmount(pmiInput, form.elements.cpmiunit?.value, principal);
      const months = Math.round(years * 12);
      const principalAndInterest = amortizedPayment(principal, rate, months);
      if (!Number.isFinite(principalAndInterest)) {
        showValidationError(form, "Please enter valid mortgage values.");
        return;
      }
      const totalPayments = principalAndInterest * months;
      const totalInterest = totalPayments - principal;
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
      let months;
      let rate;
      let price;
      let incentive;
      let downPayment;
      let tradeIn;
      let tradeOwed;
      let salesTaxRate;
      let fees;
      try {
        months = Math.round(requireNumber(form, "cloanterm", "Loan term", { positive: true }));
        rate = requireNumber(form, "cinterestrate", "Interest rate");
        price = requireNumber(form, "csaleprice", "Auto price", { positive: true });
        incentive = requireNumber(form, "cincentive", "Cash incentives", { min: 0 });
        downPayment = requireNumber(form, "cdownpayment", "Down payment", { min: 0 });
        tradeIn = requireNumber(form, "ctradeinvalue", "Trade-in value", { min: 0 });
        tradeOwed = requireNumber(form, "ctradeinowned", "Amount owed on trade-in", { min: 0 });
        salesTaxRate = requireNumber(form, "csaletax", "Sales tax", { min: 0 });
        fees = requireNumber(form, "ctitlereg", "Title and fees", { min: 0 });
      } catch (error) {
        showValidationError(form, error.message);
        return;
      }
      const monthlyRate = rate / 100 / 12;
      const salesTax = Math.max(0, price * salesTaxRate / 100);
      const financeFees = form.elements.cttrinloan?.checked;
      let loanAmount = Math.max(0, price - incentive - downPayment - tradeIn + tradeOwed);
      let upfront = Math.max(0, downPayment + salesTax + fees - tradeIn + tradeOwed);
      if (financeFees) {
        loanAmount += salesTax + fees;
        upfront = Math.max(0, downPayment - tradeIn + tradeOwed);
      }

      let payment = amortizedPayment(loanAmount, rate, months);
      let reverseNote = "";
      if (type === "reverse" && hasFieldValue(form, "cmonthlypay")) {
        try {
          payment = requireNumber(form, "cmonthlypay", "Monthly payment", { positive: true });
        } catch (error) {
          showValidationError(form, error.message);
          return;
        }
        loanAmount = monthlyRate ? payment * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate : payment * months;
        reverseNote = "<div class=\"dynamic-result-note\">Reverse mode estimates the financeable loan amount from the monthly payment.</div>";
      }
      if (!Number.isFinite(payment) || !Number.isFinite(loanAmount)) {
        showValidationError(form, "Please enter valid auto loan values.");
        return;
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
    const value = toNumber(form.elements[`${prefix}${part}`]?.value);
    return Number.isInteger(value) ? value : NaN;
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
      let rate;
      try {
        rate = requireNumber(form, "cinterestrate", "Interest rate");
      } catch (error) {
        showValidationError(form, error.message);
        return;
      }
      const effective = effectiveAnnualRate(rate, form.elements.cincompound?.value);
      const output = nominalFromEffective(effective, form.elements.coutcompound?.value);
      if (!Number.isFinite(output)) {
        showValidationError(form, "Please enter a valid interest rate.");
        return;
      }
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
    const isToolPage = /calculator|converter|generator|counter|roller|encode|decode/i.test(currentPage());
    if (livePages.has(currentPage())) return;

    document.querySelectorAll("form").forEach((form) => {
      if (form.dataset.dynamicCalculator === "true") return;
      if (form.name === "calcSearchForm") return;
      if (!form.querySelector('input[type="submit"], input[type="image"], button[type="submit"]')) return;
      form.dataset.staticCalculatorGuard = isToolPage ? "calculator" : "form";
      form.addEventListener("submit", (event) => {
        if (event.defaultPrevented) return;
        event.preventDefault();
        if (isToolPage) {
          const result = staticCalculatorResult(form);
          if (result) {
            renderStaticCalculation(form, result);
          } else {
            staticError(form, "Please enter at least one valid value.");
          }
          return;
        }
        inlineResult(form, `
          <div class="legacy-form-warning">
            <b>This static form cannot be sent from a browser-only deployment.</b>
            <span>Please use a hosted contact or account backend before enabling this form in production.</span>
          </div>
        `);
        showToast("This form needs a backend before production use.");
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
    navigator.serviceWorker.register(getRelativeUrl("sw.js?v=20260515-final")).catch(() => undefined);
  }

  onReady(() => {
    enhanceNavigation();
    enhanceResultActionButtons();
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
  window.formatDate = window.formatDate || function formatDate(date, pattern) {
    const value = date instanceof Date ? date : new Date(date);
    if (Number.isNaN(value.getTime())) return "";
    const pad = (number) => String(number).padStart(2, "0");
    const tokens = {
      YYYY: String(value.getFullYear()),
      MM: pad(value.getMonth() + 1),
      DD: pad(value.getDate()),
      HH: pad(value.getHours()),
      mm: pad(value.getMinutes()),
      ss: pad(value.getSeconds())
    };
    return String(pattern || "YYYY-MM-DD").replace(/YYYY|MM|DD|HH|mm|ss/g, (token) => tokens[token]);
  };

  window.ttline2HideTT = window.ttline2HideTT || function ttline2HideTT() {};
})();
