const API_URL = "https://script.google.com/macros/s/AKfycbzQNlU978Q8PNx7iFqNxxTfO3mvhfG554E2qape07W17zEmvAPC5vzF5vL6c343_br9/exec";

function qrUrl(text) {
  return "https://api.qrserver.com/v1/create-qr-code/?data=" +
         encodeURIComponent(text || "") + "&size=200x200";
}

async function callApi(page, id) {
  const res = await fetch(API_URL + "?page=" + page + "&id=" + encodeURIComponent(id));
  return res.json();
}
