window.L = window.L || {
  map(id) {
    const node = typeof id === "string" ? document.getElementById(id) : id;
    if (node) node.innerHTML = '<div style="padding:18px;color:#607086;font-family:Arial,Helvetica,sans-serif;">Map preview is disabled in this static copy.</div>';
    return {
      setView() { return this; },
      addLayer() { return this; },
      on() { return this; },
      remove() {}
    };
  },
  tileLayer() { return { addTo() {} }; },
  marker() { return { addTo() { return this; }, bindPopup() { return this; } }; },
  polyline() { return { addTo() { return this; } }; }
};
