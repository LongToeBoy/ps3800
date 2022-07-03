// var doc = new jsPDF({ orientation: "l" });

// function saveDiv(divId, title) {
//   doc.fromHTML(
//     `<html><head><title>${title}</title></head><body>` +
//       document.getElementById(divId).innerHTML +
//       `</body></html>`
//   );
//   //doc.output("dataurlnewwindow");
//   doc.output("save", "filename.pdf");
// }
function genPrint() {
  const certifiedFee = document.getElementById("certifiedFee").value;
  const hardcopyfee = document.getElementById("hardcopyfee").value;
  const electronicfee = document.getElementById("electronicfee").value;
  const restrictedfee = document.getElementById("restrictedfee").value;
  const signaturefee = document.getElementById("signaturefee").value;
  const restrictedsignfee = document.getElementById("restrictedsignfee").value;
  const postagefee = document.getElementById("postagefee").value;
  const totalfee = document.getElementById("totalfee").value;
  const receiver = document.getElementById("receiver").value;
  const streetapt = document.getElementById("streetapt").value;
  const cityzip = document.getElementById("cityzip").value;

  const hardcopy = document.getElementById("hardcopy").checked;
  const electronic = document.getElementById("electronic").checked;
  const restricted = document.getElementById("restricted").checked;
  const signature = document.getElementById("signature").checked;
  const restrictedsign = document.getElementById("restrictedsign").checked;

  let canvas = document.createElement("canvas");

  canvas.width = 1097;
  canvas.height = 634;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.font = "18px Arial";
  ctx.fillText(certifiedFee, 440, 235);
  ctx.fillText(postagefee, 440, 415);
  ctx.fillText(totalfee, 440, 465);
  ctx.fillText(receiver, 440, 510);
  ctx.fillText(streetapt, 440, 555);
  ctx.fillText(cityzip, 440, 595);
  ctx.font = "15px Arial";
  if (hardcopy) {
    ctx.rect(435, 268, 15, 15);
    ctx.fillText(hardcopyfee, 695, 275);
  }
  if (electronic) {
    ctx.rect(435, 290, 15, 15);
    ctx.fillText(electronicfee, 695, 295);
  }
  if (restricted) {
    ctx.rect(435, 313, 15, 15);
    ctx.fillText(restrictedfee, 695, 320);
  }
  if (signature) {
    ctx.rect(435, 335, 15, 15);
    ctx.fillText(signaturefee, 695, 340);
  }
  if (restrictedsign) {
    ctx.rect(435, 358, 15, 15);
    ctx.fillText(restrictedsignfee, 695, 365);
  }
  ctx.fill();
  const img = canvas.toDataURL("image/jpeg");
  window.open(img);
}
