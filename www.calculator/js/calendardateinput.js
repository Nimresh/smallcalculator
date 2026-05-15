(() => {
  "use strict";

  window.DateInput = function DateInput(prefix, _required, year, month, day) {
    const now = new Date();
    const parsedYear = Number(year);
    const parsedMonth = Number(month);
    const parsedDay = Number(day);
    const selectedYear = Number.isInteger(parsedYear) && parsedYear > 0 ? parsedYear : now.getFullYear();
    const selectedMonth = Number.isInteger(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12 ? parsedMonth : now.getMonth() + 1;
    const selectedDay = Number.isInteger(parsedDay) && parsedDay >= 1 && parsedDay <= 31 ? parsedDay : now.getDate();
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
