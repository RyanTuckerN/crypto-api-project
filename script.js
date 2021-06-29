const baseUrl = "http://api.coinlayer.com/";
const apiKey = "6fb2ce76a036ca2c300086e0c822bc37";
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const button = document.querySelector("button");
const coins = document.querySelector("#coins");

async function findValue(e) {
    console.log(e)
  const investment = amount.value;
  const coin = coins.value; 
  const investmentDate = date.value


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

  const thenPrice = pastCryptoInfoObj.rates[coin];
  const nowPrice = liveCryptoInfoObj.rates[coin];
  const modernValue = ((investment / thenPrice) * nowPrice).toLocaleString()
  console.log(toTwoDecimals(modernValue));
}

button.addEventListener("click", findValue);

//function that takes a string of numbers and returns string with only two decimal places
const toTwoDecimals = (numStr) => {
  let arr = numStr.split("");
  for (let i = arr.length; i > arr.indexOf(".") + 3; i--) {
    arr.pop();
  }return arr.join("");
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