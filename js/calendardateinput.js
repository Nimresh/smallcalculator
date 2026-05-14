(() => {
  "use strict";

  window.DateInput = function DateInput(prefix, _required, year, month, day) {
    const now = new Date();
    const selectedYear = Number(year) || now.getFullYear();
    const selectedMonth = Number(month) || now.getMonth() + 1;
    const selectedDay = Number(day) || now.getDate();
    const safePrefix = String(prefix || "date").replace(/[^\w-]/g, "");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const monthOptions = months.map((label, index) => {
      const value = index + 1;
      return `<option value="${value}"${value === selectedMonth ? " selected" : ""}>${label}</option>`;
    }).join("");
    const dayOptions = Array.from({ length: 31 }, (_, index) => {
      const value = index + 1;
      return `<option value="${value}"${value === selectedDay ? " selected" : ""}>${value}</option>`;
    }).join("");
    document.write(
      `<select name="${safePrefix}Month">${monthOptions}</select> ` +
      `<select name="${safePrefix}Day">${dayOptions}</select> ` +
      `<input type="text" name="${safePrefix}Year" value="${selectedYear}" class="in4char">`
    );
  };
})();
