window.Highcharts = window.Highcharts || {
  chart(container, options) {
    const node = typeof container === "string" ? document.getElementById(container) : container;
    if (node && options && options.title) {
      node.innerHTML = `<div class="chart-placeholder">${options.title.text || "Chart"}</div>`;
    }
    return { destroy() {} };
  }
};
