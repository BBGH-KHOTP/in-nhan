const API_URL = "https://script.google.com/macros/s/AKfycbzQNlU978Q8PNx7iFqNxxTfO3mvhfG554E2qape07W17zEmvAPC5vzF5vL6c343_br9/exec";

function qrUrl(text) {
  return "https://api.qrserver.com/v1/create-qr-code/?data=" +
         encodeURIComponent(text || "") + "&size=200x200";
}

// Tách chuỗi dòng chi tiết: các dòng cách nhau bởi "|", các cột cách nhau bởi "~"
function parseRows(str) {
  return (str || "").split("|")
    .map(function (r) { return r.replace(/^[\s,]+/, "").trim(); })
    .filter(function (r) { return r; })
    .map(function (r) { return r.split("~").map(function (x) { return x.trim(); }); });
}
