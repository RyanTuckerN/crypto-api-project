const baseUrl = "http://api.coinlayer.com/";
const apiKey = "6fb2ce76a036ca2c300086e0c822bc37";
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const button = document.querySelector("button");
const coins = document.querySelector("#coins");
const resultsSection = document.querySelector('#results-section')

// *** *** DATE PICKER *** *** //
let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
date.setAttribute("max", today);
date.setAttribute("min", "2011-01-01");
date.setAttribute("value", "2011-01-01");

// console.log(date.value)
// console.log(date.attributes)
// console.log(today)

const setDate = (e) => {
  console.log(e.target.value);
  date.setAttribute("min", "");
  date.setAttribute("value", "");

  if (e.target.value === "BTC") {
    date.setAttribute("min", "2011-01-01");
    date.setAttribute("value", "2011-01-01");
  } else if (e.target.value === "ETH") {
    date.setAttribute("min", "2015-09-01");
    date.setAttribute("value", "2015-09-01");
  } else if (e.target.value === "DOGE") {
    date.setAttribute("min", "2015-01-01");
    date.setAttribute("value", "2015-01-01");
  } else if (e.target.value === "LTC") {
    date.setAttribute("min", "2013-11-01");
    date.setAttribute("value", "2013-11-01");
  } else if (e.target.value === "XMR") {
    date.setAttribute("min", "2015-04-01");
    date.setAttribute("value", "2015-04-01");
  } else if (e.target.value === "XRP") {
    date.setAttribute("min", "2015-02-01");
    date.setAttribute("value", "2015-02-01");
  } else if (e.target.value === "DASH") {
    date.setAttribute("min", "2014-04-01");
    date.setAttribute("value", "2014-04-01");
  }
};

coins.onchange = setDate;

// *** *** FETCH FUNCTION *** *** //

async function displayResults() {
  const investment = amount.value;
  const coin = coins.value;
  const investmentDate = date.value;

  if (date.value > today || date.value < date.attributes[4].value) {
    alert(
      `Please choose a valid date beween ${date.attributes[4].value} and ${today}.`
    );
    return;
  }

  if (investment === '' || investment <= 0){
    alert(
      `Please choose a valid investment value!.`
    );
    return
  }

  //fetch historical data
  const crypto = await fetch(
    baseUrl +
      investmentDate +
      "&target=USD&symbol=" +
      coin +
      "?access_key=" +
      apiKey
  );
  const pastCryptoInfoObj = await crypto.json();

  //fetch live data
  const cryptoLive = await fetch(
    baseUrl + "live&target=USD&symbol=" + coin + "?access_key=" + apiKey
  );
  const liveCryptoInfoObj = await cryptoLive.json();

  // define variables
  const thenPrice = pastCryptoInfoObj.rates[coin];
  const nowPrice = liveCryptoInfoObj.rates[coin];
  const coinAmount = (investment / thenPrice)
  const modernValue = ((coinAmount) * nowPrice)
  console.log(modernValue);

  //display results
  resultsSection.innerHTML = `<div class="container d-flex flex-row align-items-center justify-content-center">If you had invested $${investment} on ${investmentDate}, today you would have </div>
  <div><img src="./assets/${coin.toLowerCase()}.png"> <span>${coinAmount.toFixed(5)}</span></div>
  <p style="font-size: 15px"> which is worth </p>
  <div><img src="./assets/usd.png"> <span>${toTwoDecimals(modernValue.toLocaleString())}</span></div>`
  
}

// RUN THE FUNCTION ON BUTTON CLICK

button.addEventListener("click", displayResults);

//function that takes a string of numbers and returns string with only two decimal places
const toTwoDecimals = (numStr) => {
  let arr = numStr.split("");
  for (let i = arr.length; i > arr.indexOf(".") + 3; i--) {
    arr.pop();
  }
  return arr.join("");
};

/* 
TODO: 
1. integrate date checks!
2. accept numbers with a dollar sign, commas... (regex??)
3. create a response statement that looks good. 
4. Use icons/photo URLs
5. turn submit into a form, make it intuitive
6. Bootstrap styling
*/
