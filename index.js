var doc = new jsPDF({ orientation: "l" });

function saveDiv(divId, title) {
  doc.fromHTML(
    `<html><head><title>${title}</title></head><body>` +
      document.getElementById(divId).innerHTML +
      `</body></html>`
  );
  //doc.output("dataurlnewwindow");
  doc.output("save", "filename.pdf");
}
