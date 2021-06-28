const baseUrl = "http://api.coinlayer.com/";
const apiKey = "6fb2ce76a036ca2c300086e0c822bc37";

async function cryptoInfoFetch() {
  const crypto = await fetch(baseUrl + "list" + "?access_key=" + apiKey);
  console.log(baseUrl + "live" + "?access_key=" + apiKey);
  const cryptoInfoObj = await crypto.json();

  console.log(`Big list of Crypto Info: ${cryptoInfoObj}`);
}

async function liveCryptoFetch() {
  const crypto = await fetch(baseUrl + "live" + "?access_key=" + apiKey);
  const cryptoInfoObj = await crypto.json();

  console.log(`Live Crypto Info : ${cryptoInfoObj}`);
}

async function historicalCryptoFetch() {
  const crypto = await fetch(baseUrl + /*INSERT DATE HERE*/ + "?access_key=" + apiKey);
  const cryptoInfoObj = await crypto.json();

  console.log(`Historical Info: ${cryptoInfoObj}`);
}   //need to add date functionality



const bigCryptoObj =
{
  "success": true,
  "crypto": {
      "611": {
          "symbol": "611",
          "name": "SixEleven",
          "name_full": "SixEleven (611)",
          "max_supply": 611000,
          "icon_url": "https://assets.coinlayer.com/icons/611.png"
      },
      "ABC": {
          "symbol": "ABC",
          "name": "AB-Chain",
          "name_full": "AB-Chain (ABC)",
          "max_supply": 210000000,
          "icon_url": "https://assets.coinlayer.com/icons/ABC.png"
      },
      "ACP": {
          "symbol": "ACP",
          "name": "Anarchists Prime",
          "name_full": "Anarchists Prime (ACP)",
          "max_supply": 53760000,
          "icon_url": "https://assets.coinlayer.com/icons/ACP.png"
      },
      "ACT": {
          "symbol": "ACT",
          "name": "ACT",
          "name_full": "ACT (ACT)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ACT.png"
      },
      "ACT*": {
          "symbol": "ACT*",
          "name": "Achain",
          "name_full": "Achain (ACT*)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ACT*.png"
      },
      "ADA": {
          "symbol": "ADA",
          "name": "Cardano",
          "name_full": "Cardano (ADA)",
          "max_supply": 45000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ADA.png"
      },
      "ADCN": {
          "symbol": "ADCN",
          "name": "Asiadigicoin",
          "name_full": "Asiadigicoin (ADCN)",
          "max_supply": 42000000,
          "icon_url": "https://assets.coinlayer.com/icons/ADCN.png"
      },
      "ADL": {
          "symbol": "ADL",
          "name": "Adelphoi",
          "name_full": "Adelphoi (ADL)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ADL.png"
      },
      "ADX": {
          "symbol": "ADX",
          "name": "AdEx",
          "name_full": "AdEx (ADX)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ADX.png"
      },
      "ADZ": {
          "symbol": "ADZ",
          "name": "Adzcoin",
          "name_full": "Adzcoin (ADZ)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/ADZ.png"
      },
      "AE": {
          "symbol": "AE",
          "name": "Aeternity",
          "name_full": "Aeternity (AE)",
          "max_supply": 273685831,
          "icon_url": "https://assets.coinlayer.com/icons/AE.png"
      },
      "AGI": {
          "symbol": "AGI",
          "name": "SingularityNET",
          "name_full": "SingularityNET (AGI)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/AGI.png"
      },
      "AIB": {
          "symbol": "AIB",
          "name": "AdvancedInternetBlock",
          "name_full": "AdvancedInternetBlock (AIB)",
          "max_supply": 314159265359,
          "icon_url": "https://assets.coinlayer.com/icons/AIB.png"
      },
      "AIDOC": {
          "symbol": "AIDOC",
          "name": "AI Doctor",
          "name_full": "AI Doctor (AIDOC)",
          "max_supply": 777775241,
          "icon_url": "https://assets.coinlayer.com/icons/AIDOC.png"
      },
      "AION": {
          "symbol": "AION",
          "name": "Aion",
          "name_full": "Aion (AION)",
          "max_supply": 465934586.66,
          "icon_url": "https://assets.coinlayer.com/icons/AION.png"
      },
      "AIR": {
          "symbol": "AIR",
          "name": "AirToken",
          "name_full": "AirToken (AIR)",
          "max_supply": 1491492558,
          "icon_url": "https://assets.coinlayer.com/icons/AIR.png"
      },
      "ALT": {
          "symbol": "ALT",
          "name": "ALTcoin",
          "name_full": "ALTcoin (ALT)",
          "max_supply": 134063,
          "icon_url": "https://assets.coinlayer.com/icons/ALT.png"
      },
      "AMB": {
          "symbol": "AMB",
          "name": "Ambrosus",
          "name_full": "Ambrosus (AMB)",
          "max_supply": 361477438,
          "icon_url": "https://assets.coinlayer.com/icons/AMB.png"
      },
      "AMM": {
          "symbol": "AMM",
          "name": "MicroMoney",
          "name_full": "MicroMoney (AMM)",
          "max_supply": 17532943.47918,
          "icon_url": "https://assets.coinlayer.com/icons/AMM.png"
      },
      "ANT": {
          "symbol": "ANT",
          "name": "Aragon",
          "name_full": "Aragon (ANT)",
          "max_supply": 39609524,
          "icon_url": "https://assets.coinlayer.com/icons/ANT.png"
      },
      "APC": {
          "symbol": "APC",
          "name": "AlpaCoin",
          "name_full": "AlpaCoin (APC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/APC.png"
      },
      "APPC": {
          "symbol": "APPC",
          "name": "AppCoins",
          "name_full": "AppCoins (APPC)",
          "max_supply": 246203093,
          "icon_url": "https://assets.coinlayer.com/icons/APPC.png"
      },
      "ARC": {
          "symbol": "ARC",
          "name": "ArcticCoin",
          "name_full": "ArcticCoin (ARC)",
          "max_supply": 60000000,
          "icon_url": "https://assets.coinlayer.com/icons/ARC.png"
      },
      "ARCT": {
          "symbol": "ARCT",
          "name": "ArbitrageCT",
          "name_full": "ArbitrageCT (ARCT)",
          "max_supply": 152029112,
          "icon_url": "https://assets.coinlayer.com/icons/ARCT.png"
      },
      "ARDR": {
          "symbol": "ARDR",
          "name": "Ardor",
          "name_full": "Ardor (ARDR)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ARDR.png"
      },
      "ARK": {
          "symbol": "ARK",
          "name": "ARK",
          "name_full": "ARK (ARK)",
          "max_supply": 125000000,
          "icon_url": "https://assets.coinlayer.com/icons/ARK.png"
      },
      "ARN": {
          "symbol": "ARN",
          "name": "Aeron",
          "name_full": "Aeron (ARN)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ARN.png"
      },
      "ASAFE2": {
          "symbol": "ASAFE2",
          "name": "Allsafe",
          "name_full": "Allsafe (ASAFE2)",
          "max_supply": 15000000,
          "icon_url": "https://assets.coinlayer.com/icons/ASAFE2.png"
      },
      "AST": {
          "symbol": "AST",
          "name": "AirSwap",
          "name_full": "AirSwap (AST)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/AST.png"
      },
      "ATB": {
          "symbol": "ATB",
          "name": "ATB coin",
          "name_full": "ATB coin (ATB)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/ATB.png"
      },
      "ATM": {
          "symbol": "ATM",
          "name": "ATMChain",
          "name_full": "ATMChain (ATM)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ATM.png"
      },
      "AURS": {
          "symbol": "AURS",
          "name": "Aureus",
          "name_full": "Aureus (AURS)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/AURS.png"
      },
      "AVT": {
          "symbol": "AVT",
          "name": "AventCoin",
          "name_full": "AventCoin (AVT)",
          "max_supply": 10000000,
          "icon_url": "https://assets.coinlayer.com/icons/AVT.png"
      },
      "BAR": {
          "symbol": "BAR",
          "name": "TBIS token",
          "name_full": "TBIS token (BAR)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/BAR.png"
      },
      "BASH": {
          "symbol": "BASH",
          "name": "LuckChain",
          "name_full": "LuckChain (BASH)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BASH.png"
      },
      "BAT": {
          "symbol": "BAT",
          "name": "Basic Attention Token",
          "name_full": "Basic Attention Token (BAT)",
          "max_supply": 1500000000,
          "icon_url": "https://assets.coinlayer.com/icons/BAT.png"
      },
      "BAY": {
          "symbol": "BAY",
          "name": "BitBay",
          "name_full": "BitBay (BAY)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/BAY.png"
      },
      "BBP": {
          "symbol": "BBP",
          "name": "BiblePay",
          "name_full": "BiblePay (BBP)",
          "max_supply": 5200000000,
          "icon_url": "https://assets.coinlayer.com/icons/BBP.png"
      },
      "BCD": {
          "symbol": "BCD",
          "name": "Bitcoin Diamond",
          "name_full": "Bitcoin Diamond (BCD)",
          "max_supply": 210000000,
          "icon_url": "https://assets.coinlayer.com/icons/BCD.png"
      },
      "BCH": {
          "symbol": "BCH",
          "name": "Bitcoin Cash / BCC",
          "name_full": "Bitcoin Cash / BCC (BCH)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/BCH.png"
      },
      "BCN": {
          "symbol": "BCN",
          "name": "ByteCoin",
          "name_full": "ByteCoin (BCN)",
          "max_supply": 184467440735,
          "icon_url": "https://assets.coinlayer.com/icons/BCN.png"
      },
      "BCPT": {
          "symbol": "BCPT",
          "name": "BlockMason Credit Protocol",
          "name_full": "BlockMason Credit Protocol (BCPT)",
          "max_supply": 116158667,
          "icon_url": "https://assets.coinlayer.com/icons/BCPT.png"
      },
      "BEE": {
          "symbol": "BEE",
          "name": "Bee Token",
          "name_full": "Bee Token (BEE)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/BEE.png"
      },
      "BIO": {
          "symbol": "BIO",
          "name": "Biocoin",
          "name_full": "Biocoin (BIO)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BIO.png"
      },
      "BLC": {
          "symbol": "BLC",
          "name": "BlakeCoin",
          "name_full": "BlakeCoin (BLC)",
          "max_supply": 7000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BLC.png"
      },
      "BLOCK": {
          "symbol": "BLOCK",
          "name": "BlockNet",
          "name_full": "BlockNet (BLOCK)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/BLOCK.png"
      },
      "BLU": {
          "symbol": "BLU",
          "name": "BlueCoin",
          "name_full": "BlueCoin (BLU)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/BLU.png"
      },
      "BLZ": {
          "symbol": "BLZ",
          "name": "Bluzelle",
          "name_full": "Bluzelle (BLZ)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/BLZ.png"
      },
      "BMC": {
          "symbol": "BMC",
          "name": "Blackmoon Crypto",
          "name_full": "Blackmoon Crypto (BMC)",
          "max_supply": 60000000,
          "icon_url": "https://assets.coinlayer.com/icons/BMC.png"
      },
      "BNB": {
          "symbol": "BNB",
          "name": "Binance Coin",
          "name_full": "Binance Coin (BNB)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/BNB.png"
      },
      "BNT": {
          "symbol": "BNT",
          "name": "Bancor Network Token",
          "name_full": "Bancor Network Token (BNT)",
          "max_supply": 79323978,
          "icon_url": "https://assets.coinlayer.com/icons/BNT.png"
      },
      "BOST": {
          "symbol": "BOST",
          "name": "BoostCoin",
          "name_full": "BoostCoin (BOST)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/BOST.png"
      },
      "BQ": {
          "symbol": "BQ",
          "name": "Bitqy",
          "name_full": "Bitqy (BQ)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BQ.png"
      },
      "BQX": {
          "symbol": "BQX",
          "name": "Ethos",
          "name_full": "Ethos (ETHOS)",
          "max_supply": 222295208.2384,
          "icon_url": "https://assets.coinlayer.com/icons/BQX.png"
      },
      "BRD": {
          "symbol": "BRD",
          "name": "Bread token",
          "name_full": "Bread token (BRD)",
          "max_supply": 88862718,
          "icon_url": "https://assets.coinlayer.com/icons/BRD.png"
      },
      "BRIT": {
          "symbol": "BRIT",
          "name": "BritCoin",
          "name_full": "BritCoin (BRIT)",
          "max_supply": 30000000,
          "icon_url": "https://assets.coinlayer.com/icons/BRIT.png"
      },
      "BT1": {
          "symbol": "BT1",
          "name": "Bitfinex Bitcoin Future",
          "name_full": "Bitfinex Bitcoin Future (BT1)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/BT1.png"
      },
      "BT2": {
          "symbol": "BT2",
          "name": "Bitcoin SegWit2X",
          "name_full": "Bitcoin SegWit2X (BT2)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/BT2.png"
      },
      "BTC": {
          "symbol": "BTC",
          "name": "Bitcoin",
          "name_full": "Bitcoin (BTC)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTC.png"
      },
      "BTCA": {
          "symbol": "BTCA",
          "name": "Bitair",
          "name_full": "Bitair (BTCA)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTCA.png"
      },
      "BTCS": {
          "symbol": "BTCS",
          "name": "Bitcoin Scrypt",
          "name_full": "Bitcoin Scrypt (BTCS)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTCS.png"
      },
      "BTCZ": {
          "symbol": "BTCZ",
          "name": "BitcoinZ",
          "name_full": "BitcoinZ (BTCZ)",
          "max_supply": 21000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTCZ.png"
      },
      "BTG": {
          "symbol": "BTG",
          "name": "Bitcoin Gold",
          "name_full": "Bitcoin Gold (BTG)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTG.png"
      },
      "BTLC": {
          "symbol": "BTLC",
          "name": "BitLuckCoin",
          "name_full": "BitLuckCoin (BTLC)",
          "max_supply": 5000000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTLC.png"
      },
      "BTM": {
          "symbol": "BTM",
          "name": "BitMark",
          "name_full": "BitMark (BTM)",
          "max_supply": 27580000,
          "icon_url": "https://assets.coinlayer.com/icons/BTM.png"
      },
      "BTM*": {
          "symbol": "BTM*",
          "name": "Bytom",
          "name_full": "Bytom (BTM*)",
          "max_supply": 1407000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTM*.png"
      },
      "BTQ": {
          "symbol": "BTQ",
          "name": "BitQuark",
          "name_full": "BitQuark (BTQ)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/BTQ.png"
      },
      "BTS": {
          "symbol": "BTS",
          "name": "Bitshares",
          "name_full": "Bitshares (BTS)",
          "max_supply": 2511953117,
          "icon_url": "https://assets.coinlayer.com/icons/BTS.png"
      },
      "BTX": {
          "symbol": "BTX",
          "name": "Bitcore",
          "name_full": "Bitcore (BTX)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/BTX.png"
      },
      "BURST": {
          "symbol": "BURST",
          "name": "BurstCoin",
          "name_full": "BurstCoin (BURST)",
          "max_supply": 2158812800,
          "icon_url": "https://assets.coinlayer.com/icons/BURST.png"
      },
      "CALC": {
          "symbol": "CALC",
          "name": "CaliphCoin",
          "name_full": "CaliphCoin (CALC)",
          "max_supply": 135000000,
          "icon_url": "https://assets.coinlayer.com/icons/CALC.png"
      },
      "CAS": {
          "symbol": "CAS",
          "name": "Cashaa",
          "name_full": "Cashaa (CAS)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/CAS.png"
      },
      "CAT": {
          "symbol": "CAT",
          "name": "BlockCAT",
          "name_full": "BlockCAT (CAT*)",
          "max_supply": 9200151.389807673,
          "icon_url": "https://assets.coinlayer.com/icons/CAT.png"
      },
      "CCRB": {
          "symbol": "CCRB",
          "name": "CryptoCarbon",
          "name_full": "CryptoCarbon (CCRB)",
          "max_supply": 70000000,
          "icon_url": "https://assets.coinlayer.com/icons/CCRB.png"
      },
      "CDT": {
          "symbol": "CDT",
          "name": "CoinDash",
          "name_full": "CoinDash (CDT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/CDT.png"
      },
      "CESC": {
          "symbol": "CESC",
          "name": "Crypto Escudo",
          "name_full": "Crypto Escudo (CESC)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/CESC.png"
      },
      "CHAT": {
          "symbol": "CHAT",
          "name": "ChatCoin",
          "name_full": "ChatCoin (CHAT)",
          "max_supply": 52500000,
          "icon_url": "https://assets.coinlayer.com/icons/CHAT.png"
      },
      "CJ": {
          "symbol": "CJ",
          "name": "CryptoJacks",
          "name_full": "CryptoJacks (CJ)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/CJ.png"
      },
      "CL": {
          "symbol": "CL",
          "name": "CoinLancer",
          "name_full": "CoinLancer (CL)",
          "max_supply": 300000000,
          "icon_url": "https://assets.coinlayer.com/icons/CL.png"
      },
      "CLD": {
          "symbol": "CLD",
          "name": "Cloud",
          "name_full": "Cloud (CLD)",
          "max_supply": 60000000,
          "icon_url": "https://assets.coinlayer.com/icons/CLD.png"
      },
      "CLOAK": {
          "symbol": "CLOAK",
          "name": "CloakCoin",
          "name_full": "CloakCoin (CLOAK)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/CLOAK.png"
      },
      "CMT*": {
          "symbol": "CMT*",
          "name": "CyberMiles",
          "name_full": "CyberMiles (CMT*)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/CMT*.png"
      },
      "CND": {
          "symbol": "CND",
          "name": "Cindicator",
          "name_full": "Cindicator (CND)",
          "max_supply": 2000000005,
          "icon_url": "https://assets.coinlayer.com/icons/CND.png"
      },
      "CNX": {
          "symbol": "CNX",
          "name": "Cryptonex",
          "name_full": "Cryptonex (CNX)",
          "max_supply": 210000000,
          "icon_url": "https://assets.coinlayer.com/icons/CNX.png"
      },
      "CPC": {
          "symbol": "CPC",
          "name": "CapriCoin",
          "name_full": "CapriCoin (CPC)",
          "max_supply": 208000000,
          "icon_url": "https://assets.coinlayer.com/icons/CPC.png"
      },
      "CRAVE": {
          "symbol": "CRAVE",
          "name": "CraveCoin",
          "name_full": "CraveCoin (CRAVE)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/CRAVE.png"
      },
      "CRC": {
          "symbol": "CRC",
          "name": "CrowdCoin",
          "name_full": "CrowdCoin (CRC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/CRC.png"
      },
      "CRE": {
          "symbol": "CRE",
          "name": "Credits",
          "name_full": "Credits (CRE)",
          "max_supply": 30000000,
          "icon_url": "https://assets.coinlayer.com/icons/CRE.png"
      },
      "CRW": {
          "symbol": "CRW",
          "name": "Crown Coin",
          "name_full": "Crown Coin (CRW)",
          "max_supply": 42000000,
          "icon_url": "https://assets.coinlayer.com/icons/CRW.png"
      },
      "CTO": {
          "symbol": "CTO",
          "name": "Crypto",
          "name_full": "Crypto (CTO)",
          "max_supply": 65789100,
          "icon_url": "https://assets.coinlayer.com/icons/CTO.png"
      },
      "CTR": {
          "symbol": "CTR",
          "name": "Centra",
          "name_full": "Centra (CTR)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/CTR.png"
      },
      "CVC": {
          "symbol": "CVC",
          "name": "Civic",
          "name_full": "Civic (CVC)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/CVC.png"
      },
      "DAS": {
          "symbol": "DAS",
          "name": "DAS",
          "name_full": "DAS (DAS)",
          "max_supply": 18900000,
          "icon_url": "https://assets.coinlayer.com/icons/DAS.png"
      },
      "DASH": {
          "symbol": "DASH",
          "name": "DigitalCash",
          "name_full": "DigitalCash (DASH)",
          "max_supply": 22000000,
          "icon_url": "https://assets.coinlayer.com/icons/DASH.png"
      },
      "DAT": {
          "symbol": "DAT",
          "name": "Datum",
          "name_full": "Datum (DAT)",
          "max_supply": 2653841597.973272,
          "icon_url": "https://assets.coinlayer.com/icons/DAT.png"
      },
      "DATA": {
          "symbol": "DATA",
          "name": "Streamr DATAcoin",
          "name_full": "Streamr DATAcoin (DATA)",
          "max_supply": 987154514,
          "icon_url": "https://assets.coinlayer.com/icons/DATA.png"
      },
      "DBC": {
          "symbol": "DBC",
          "name": "DeepBrain Chain",
          "name_full": "DeepBrain Chain (DBC)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DBC.png"
      },
      "DBET": {
          "symbol": "DBET",
          "name": "Decent.bet",
          "name_full": "Decent.bet (DBET)",
          "max_supply": 133039762.4203,
          "icon_url": "https://assets.coinlayer.com/icons/DBET.png"
      },
      "DCN": {
          "symbol": "DCN",
          "name": "Dentacoin",
          "name_full": "Dentacoin (DCN)",
          "max_supply": 8000000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DCN.png"
      },
      "DCR": {
          "symbol": "DCR",
          "name": "Decred",
          "name_full": "Decred (DCR)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/DCR.png"
      },
      "DCT": {
          "symbol": "DCT",
          "name": "Decent",
          "name_full": "Decent (DCT)",
          "max_supply": 73197775,
          "icon_url": "https://assets.coinlayer.com/icons/DCT.png"
      },
      "DEEP": {
          "symbol": "DEEP",
          "name": "Deep Gold",
          "name_full": "Deep Gold (DEEP)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/DEEP.png"
      },
      "DENT": {
          "symbol": "DENT",
          "name": "Dent",
          "name_full": "Dent (DENT)",
          "max_supply": 100000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DENT.png"
      },
      "DGB": {
          "symbol": "DGB",
          "name": "DigiByte",
          "name_full": "DigiByte (DGB)",
          "max_supply": 21000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DGB.png"
      },
      "DGD": {
          "symbol": "DGD",
          "name": "Digix DAO",
          "name_full": "Digix DAO (DGD)",
          "max_supply": 1999421,
          "icon_url": "https://assets.coinlayer.com/icons/DGD.png"
      },
      "DIM": {
          "symbol": "DIM",
          "name": "DIMCOIN",
          "name_full": "DIMCOIN (DIM)",
          "max_supply": 9000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DIM.png"
      },
      "DIME": {
          "symbol": "DIME",
          "name": "DimeCoin",
          "name_full": "DimeCoin (DIME)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/DIME.png"
      },
      "DMD": {
          "symbol": "DMD",
          "name": "Diamond",
          "name_full": "Diamond (DMD)",
          "max_supply": 4380000,
          "icon_url": "https://assets.coinlayer.com/icons/DMD.png"
      },
      "DNT": {
          "symbol": "DNT",
          "name": "district0x",
          "name_full": "district0x (DNT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/DNT.png"
      },
      "DOGE": {
          "symbol": "DOGE",
          "name": "Dogecoin",
          "name_full": "Dogecoin (DOGE)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/DOGE.png"
      },
      "DRGN": {
          "symbol": "DRGN",
          "name": "Dragonchain",
          "name_full": "Dragonchain (DRGN)",
          "max_supply": 433494437,
          "icon_url": "https://assets.coinlayer.com/icons/DRGN.png"
      },
      "DRZ": {
          "symbol": "DRZ",
          "name": "Droidz",
          "name_full": "Droidz (DRZ)",
          "max_supply": 5060000,
          "icon_url": "https://assets.coinlayer.com/icons/DRZ.png"
      },
      "DSH": {
          "symbol": "DSH",
          "name": "Dashcoin",
          "name_full": "Dashcoin (DSH)",
          "max_supply": 18446744,
          "icon_url": "https://assets.coinlayer.com/icons/DSH.png"
      },
      "DTA": {
          "symbol": "DTA",
          "name": "Data",
          "name_full": "Data (DTA)",
          "max_supply": 11500000000,
          "icon_url": "https://assets.coinlayer.com/icons/DTA.png"
      },
      "EC": {
          "symbol": "EC",
          "name": "Eclipse",
          "name_full": "Eclipse (EC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/EC.png"
      },
      "EDG": {
          "symbol": "EDG",
          "name": "Edgeless",
          "name_full": "Edgeless (EDG)",
          "max_supply": 132046997,
          "icon_url": "https://assets.coinlayer.com/icons/EDG.png"
      },
      "EDO": {
          "symbol": "EDO",
          "name": "Eidoo",
          "name_full": "Eidoo (EDO)",
          "max_supply": 90708327,
          "icon_url": "https://assets.coinlayer.com/icons/EDO.png"
      },
      "EDR": {
          "symbol": "EDR",
          "name": "E-Dinar Coin",
          "name_full": "E-Dinar Coin (EDR)",
          "max_supply": 999000000000000,
          "icon_url": "https://assets.coinlayer.com/icons/EDR.png"
      },
      "EKO": {
          "symbol": "EKO",
          "name": "EchoLink",
          "name_full": "EchoLink (EKO)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/EKO.png"
      },
      "ELA": {
          "symbol": "ELA",
          "name": "Elastos",
          "name_full": "Elastos (ELA)",
          "max_supply": 33000000,
          "icon_url": "https://assets.coinlayer.com/icons/ELA.png"
      },
      "ELF": {
          "symbol": "ELF",
          "name": "aelf",
          "name_full": "aelf (ELF)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ELF.png"
      },
      "EMC": {
          "symbol": "EMC",
          "name": "Emercoin",
          "name_full": "Emercoin (EMC)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/EMC.png"
      },
      "EMGO": {
          "symbol": "EMGO",
          "name": "MobileGo",
          "name_full": "MobileGo (EMGO)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/EMGO.png"
      },
      "ENG": {
          "symbol": "ENG",
          "name": "Enigma",
          "name_full": "Enigma (ENG)",
          "max_supply": 150000000,
          "icon_url": "https://assets.coinlayer.com/icons/ENG.png"
      },
      "ENJ": {
          "symbol": "ENJ",
          "name": "Enjin Coin",
          "name_full": "Enjin Coin (ENJ)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ENJ.png"
      },
      "EOS": {
          "symbol": "EOS",
          "name": "EOS",
          "name_full": "EOS (EOS)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/EOS.png"
      },
      "ERT": {
          "symbol": "ERT",
          "name": "Esports.com",
          "name_full": "Esports.com (ERT)",
          "max_supply": 60000000,
          "icon_url": "https://assets.coinlayer.com/icons/ERT.png"
      },
      "ETC": {
          "symbol": "ETC",
          "name": "Ethereum Classic",
          "name_full": "Ethereum Classic (ETC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/ETC.png"
      },
      "ETH": {
          "symbol": "ETH",
          "name": "Ethereum",
          "name_full": "Ethereum (ETH)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/ETH.png"
      },
      "ETN": {
          "symbol": "ETN",
          "name": "Electroneum",
          "name_full": "Electroneum (ETN)",
          "max_supply": 21000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ETN.png"
      },
      "ETP": {
          "symbol": "ETP",
          "name": "Metaverse",
          "name_full": "Metaverse (ETP)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ETP.png"
      },
      "ETT": {
          "symbol": "ETT",
          "name": "EncryptoTel",
          "name_full": "EncryptoTel (ETT)",
          "max_supply": 77663987,
          "icon_url": "https://assets.coinlayer.com/icons/ETT.png"
      },
      "EVR": {
          "symbol": "EVR",
          "name": "Everus",
          "name_full": "Everus (EVR)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/EVR.png"
      },
      "EVX": {
          "symbol": "EVX",
          "name": "Everex",
          "name_full": "Everex (EVX)",
          "max_supply": 25000000,
          "icon_url": "https://assets.coinlayer.com/icons/EVX.png"
      },
      "FCT": {
          "symbol": "FCT",
          "name": "Factoids",
          "name_full": "Factoids (FCT)",
          "max_supply": 8753873,
          "icon_url": "https://assets.coinlayer.com/icons/FCT.png"
      },
      "FLP": {
          "symbol": "FLP",
          "name": "Gameflip",
          "name_full": "Gameflip (FLP)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/FLP.png"
      },
      "FOTA": {
          "symbol": "FOTA",
          "name": "Fortuna",
          "name_full": "Fortuna (FOTA)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/FOTA.png"
      },
      "FRST": {
          "symbol": "FRST",
          "name": "FirstCoin",
          "name_full": "FirstCoin (FRST)",
          "max_supply": 110000000,
          "icon_url": "https://assets.coinlayer.com/icons/FRST.png"
      },
      "FUEL": {
          "symbol": "FUEL",
          "name": "Etherparty",
          "name_full": "Etherparty (FUEL)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/FUEL.png"
      },
      "FUN": {
          "symbol": "FUN",
          "name": "FunFair",
          "name_full": "FunFair (FUN)",
          "max_supply": 17173696076,
          "icon_url": "https://assets.coinlayer.com/icons/FUN.png"
      },
      "FUNC": {
          "symbol": "FUNC",
          "name": "FunCoin",
          "name_full": "FunCoin (FUNC)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/FUNC.png"
      },
      "FUTC": {
          "symbol": "FUTC",
          "name": "FutCoin",
          "name_full": "FutCoin (FUTC)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/FUTC.png"
      },
      "GAME": {
          "symbol": "GAME",
          "name": "Gamecredits",
          "name_full": "Gamecredits (GAME)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/GAME.png"
      },
      "GAS": {
          "symbol": "GAS",
          "name": "Gas",
          "name_full": "Gas (GAS)",
          "max_supply": 9677664,
          "icon_url": "https://assets.coinlayer.com/icons/GAS.png"
      },
      "GBYTE": {
          "symbol": "GBYTE",
          "name": "Byteball",
          "name_full": "Byteball (GBYTE)",
          "max_supply": 1000000,
          "icon_url": "https://assets.coinlayer.com/icons/GBYTE.png"
      },
      "GMX": {
          "symbol": "GMX",
          "name": "Goldmaxcoin",
          "name_full": "Goldmaxcoin (GMX)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/GMX.png"
      },
      "GNO": {
          "symbol": "GNO",
          "name": "Gnosis",
          "name_full": "Gnosis (GNO)",
          "max_supply": 10000000,
          "icon_url": "https://assets.coinlayer.com/icons/GNO.png"
      },
      "GNT": {
          "symbol": "GNT",
          "name": "Golem Network Token",
          "name_full": "Golem Network Token (GNT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/GNT.png"
      },
      "GNX": {
          "symbol": "GNX",
          "name": "Genaro Network",
          "name_full": "Genaro Network (GNX)",
          "max_supply": 675000000,
          "icon_url": "https://assets.coinlayer.com/icons/GNX.png"
      },
      "GRC": {
          "symbol": "GRC",
          "name": "GridCoin",
          "name_full": "GridCoin (GRC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/GRC.png"
      },
      "GRS": {
          "symbol": "GRS",
          "name": "Groestlcoin ",
          "name_full": "Groestlcoin  (GRS)",
          "max_supply": 105000000,
          "icon_url": "https://assets.coinlayer.com/icons/GRS.png"
      },
      "GRWI": {
          "symbol": "GRWI",
          "name": "Growers International",
          "name_full": "Growers International (GRWI)",
          "max_supply": 1000420,
          "icon_url": "https://assets.coinlayer.com/icons/GRWI.png"
      },
      "GTC": {
          "symbol": "GTC",
          "name": "Game",
          "name_full": "Game (GTC)",
          "max_supply": 2000000000,
          "icon_url": "https://assets.coinlayer.com/icons/GTC.png"
      },
      "GTO": {
          "symbol": "GTO",
          "name": "GIFTO",
          "name_full": "GIFTO (GTO)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/GTO.png"
      },
      "GUP": {
          "symbol": "GUP",
          "name": "Guppy",
          "name_full": "Guppy (GUP)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/GUP.png"
      },
      "GVT": {
          "symbol": "GVT",
          "name": "Genesis Vision",
          "name_full": "Genesis Vision (GVT)",
          "max_supply": 4436644,
          "icon_url": "https://assets.coinlayer.com/icons/GVT.png"
      },
      "GXS": {
          "symbol": "GXS",
          "name": "GXShares",
          "name_full": "GXShares (GXS)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/GXS.png"
      },
      "HAC": {
          "symbol": "HAC",
          "name": "Hackspace Capital",
          "name_full": "Hackspace Capital (HAC)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/HAC.png"
      },
      "HNC": {
          "symbol": "HNC",
          "name": "Hellenic Coin",
          "name_full": "Hellenic Coin (HNC)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/HNC.png"
      },
      "HSR": {
          "symbol": "HSR",
          "name": "Hshare",
          "name_full": "Hshare (HSR)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/HSR.png"
      },
      "HST": {
          "symbol": "HST",
          "name": "Decision Token",
          "name_full": "Decision Token (HST)",
          "max_supply": 48240069.5496,
          "icon_url": "https://assets.coinlayer.com/icons/HST.png"
      },
      "HVN": {
          "symbol": "HVN",
          "name": "Hive Project",
          "name_full": "Hive Project (HVN)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/HVN.png"
      },
      "ICN": {
          "symbol": "ICN",
          "name": "Iconomi",
          "name_full": "Iconomi (ICN)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ICN.png"
      },
      "ICOS": {
          "symbol": "ICOS",
          "name": "ICOBox",
          "name_full": "ICOBox (ICOS)",
          "max_supply": 591617,
          "icon_url": "https://assets.coinlayer.com/icons/ICOS.png"
      },
      "ICX": {
          "symbol": "ICX",
          "name": "ICON Project",
          "name_full": "ICON Project (ICX)",
          "max_supply": 400230000,
          "icon_url": "https://assets.coinlayer.com/icons/ICX.png"
      },
      "IGNIS": {
          "symbol": "IGNIS",
          "name": "Ignis",
          "name_full": "Ignis (IGNIS)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/IGNIS.png"
      },
      "ILC": {
          "symbol": "ILC",
          "name": "ILCoin",
          "name_full": "ILCoin (ILC)",
          "max_supply": 2500000000,
          "icon_url": "https://assets.coinlayer.com/icons/ILC.png"
      },
      "INK": {
          "symbol": "INK",
          "name": "Ink",
          "name_full": "Ink (INK)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/INK.png"
      },
      "INS": {
          "symbol": "INS",
          "name": "INS Ecosystem",
          "name_full": "INS Ecosystem (INS)",
          "max_supply": 50000000,
          "icon_url": "https://assets.coinlayer.com/icons/INS.png"
      },
      "INSN": {
          "symbol": "INSN",
          "name": "Insane Coin",
          "name_full": "Insane Coin (INSN)",
          "max_supply": 30000000,
          "icon_url": "https://assets.coinlayer.com/icons/INSN.png"
      },
      "INT": {
          "symbol": "INT",
          "name": "Internet Node Token",
          "name_full": "Internet Node Token (INT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/INT.png"
      },
      "IOP": {
          "symbol": "IOP",
          "name": "Internet of People",
          "name_full": "Internet of People (IOP)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/IOP.png"
      },
      "IOST": {
          "symbol": "IOST",
          "name": "IOS token",
          "name_full": "IOS token (IOST)",
          "max_supply": 21000000000,
          "icon_url": "https://assets.coinlayer.com/icons/IOST.png"
      },
      "ITC": {
          "symbol": "ITC",
          "name": "IoT Chain",
          "name_full": "IoT Chain (ITC)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/ITC.png"
      },
      "KCS": {
          "symbol": "KCS",
          "name": "Kucoin",
          "name_full": "Kucoin (KCS)",
          "max_supply": 181043076,
          "icon_url": "https://assets.coinlayer.com/icons/KCS.png"
      },
      "KICK": {
          "symbol": "KICK",
          "name": "KickCoin",
          "name_full": "KickCoin (KICK)",
          "max_supply": 476222009,
          "icon_url": "https://assets.coinlayer.com/icons/KICK.png"
      },
      "KIN": {
          "symbol": "KIN",
          "name": "Kin",
          "name_full": "Kin (KIN)",
          "max_supply": 10000000000000,
          "icon_url": "https://assets.coinlayer.com/icons/KIN.png"
      },
      "KLC": {
          "symbol": "KLC",
          "name": "KiloCoin",
          "name_full": "KiloCoin (KLC)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/KLC.png"
      },
      "KMD": {
          "symbol": "KMD",
          "name": "Komodo",
          "name_full": "Komodo (KMD)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/KMD.png"
      },
      "KNC": {
          "symbol": "KNC",
          "name": "Kyber Network",
          "name_full": "Kyber Network (KNC)",
          "max_supply": 226000000,
          "icon_url": "https://assets.coinlayer.com/icons/KNC.png"
      },
      "KRB": {
          "symbol": "KRB",
          "name": "Karbo",
          "name_full": "Karbo (KRB)",
          "max_supply": 10000000,
          "icon_url": "https://assets.coinlayer.com/icons/KRB.png"
      },
      "LA": {
          "symbol": "LA",
          "name": "LATOKEN",
          "name_full": "LATOKEN (LA)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/LA.png"
      },
      "LEND": {
          "symbol": "LEND",
          "name": "EthLend",
          "name_full": "EthLend (LEND)",
          "max_supply": 1299999942,
          "icon_url": "https://assets.coinlayer.com/icons/LEND.png"
      },
      "LEO": {
          "symbol": "LEO",
          "name": "LEOcoin",
          "name_full": "LEOcoin (LEO)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/LEO.png"
      },
      "LINDA": {
          "symbol": "LINDA",
          "name": "Linda",
          "name_full": "Linda (LINDA)",
          "max_supply": 50000000000,
          "icon_url": "https://assets.coinlayer.com/icons/LINDA.png"
      },
      "LINK": {
          "symbol": "LINK",
          "name": "ChainLink",
          "name_full": "ChainLink (LINK)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/LINK.png"
      },
      "LOC": {
          "symbol": "LOC",
          "name": "Loco",
          "name_full": "Loco (LOC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/LOC.png"
      },
      "LOG": {
          "symbol": "LOG",
          "name": "Wood Coin",
          "name_full": "Wood Coin (LOG)",
          "max_supply": 27625814,
          "icon_url": "https://assets.coinlayer.com/icons/LOG.png"
      },
      "LRC": {
          "symbol": "LRC",
          "name": "Loopring",
          "name_full": "Loopring (LRC)",
          "max_supply": 1395076055,
          "icon_url": "https://assets.coinlayer.com/icons/LRC.png"
      },
      "LSK": {
          "symbol": "LSK",
          "name": "Lisk",
          "name_full": "Lisk (LSK)",
          "max_supply": 159918400,
          "icon_url": "https://assets.coinlayer.com/icons/LSK.png"
      },
      "LTC": {
          "symbol": "LTC",
          "name": "Litecoin",
          "name_full": "Litecoin (LTC)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/LTC.png"
      },
      "LUN": {
          "symbol": "LUN",
          "name": "Lunyr",
          "name_full": "Lunyr (LUN)",
          "max_supply": 2703356.0785,
          "icon_url": "https://assets.coinlayer.com/icons/LUN.png"
      },
      "LUX": {
          "symbol": "LUX",
          "name": "LUXCoin",
          "name_full": "LUXCoin (LUX)",
          "max_supply": 60000000,
          "icon_url": "https://assets.coinlayer.com/icons/LUX.png"
      },
      "MAID": {
          "symbol": "MAID",
          "name": "MaidSafe Coin",
          "name_full": "MaidSafe Coin (MAID)",
          "max_supply": 452552412,
          "icon_url": "https://assets.coinlayer.com/icons/MAID.png"
      },
      "MANA": {
          "symbol": "MANA",
          "name": "Decentraland",
          "name_full": "Decentraland (MANA)",
          "max_supply": 2805886393.1583,
          "icon_url": "https://assets.coinlayer.com/icons/MANA.png"
      },
      "MCAP": {
          "symbol": "MCAP",
          "name": "MCAP",
          "name_full": "MCAP (MCAP)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/MCAP.png"
      },
      "MCO": {
          "symbol": "MCO",
          "name": "Monaco",
          "name_full": "Monaco (MCO)",
          "max_supply": 31587682.3632061,
          "icon_url": "https://assets.coinlayer.com/icons/MCO.png"
      },
      "MDA": {
          "symbol": "MDA",
          "name": "Moeda",
          "name_full": "Moeda (MDA)",
          "max_supply": 19628888,
          "icon_url": "https://assets.coinlayer.com/icons/MDA.png"
      },
      "MDS": {
          "symbol": "MDS",
          "name": "MediShares",
          "name_full": "MediShares (MDS)",
          "max_supply": 2000000000,
          "icon_url": "https://assets.coinlayer.com/icons/MDS.png"
      },
      "MIOTA": {
          "symbol": "MIOTA",
          "name": "IOTA",
          "name_full": "IOTA (MIOTA)",
          "max_supply": 2779530283,
          "icon_url": "https://assets.coinlayer.com/icons/MIOTA.png"
      },
      "MKR": {
          "symbol": "MKR",
          "name": "Maker",
          "name_full": "Maker (MKR)",
          "max_supply": 1000000,
          "icon_url": "https://assets.coinlayer.com/icons/MKR.png"
      },
      "MLN": {
          "symbol": "MLN",
          "name": "Melon",
          "name_full": "Melon (MLN)",
          "max_supply": 749400,
          "icon_url": "https://assets.coinlayer.com/icons/MLN.png"
      },
      "MNX": {
          "symbol": "MNX",
          "name": "MinexCoin",
          "name_full": "MinexCoin (MNX)",
          "max_supply": 19000000,
          "icon_url": "https://assets.coinlayer.com/icons/MNX.png"
      },
      "MOD": {
          "symbol": "MOD",
          "name": "Modum",
          "name_full": "Modum (MOD)",
          "max_supply": 18266200,
          "icon_url": "https://assets.coinlayer.com/icons/MOD.png"
      },
      "MOIN": {
          "symbol": "MOIN",
          "name": "MoinCoin",
          "name_full": "MoinCoin (MOIN)",
          "max_supply": 184000000,
          "icon_url": "https://assets.coinlayer.com/icons/MOIN.png"
      },
      "MONA": {
          "symbol": "MONA",
          "name": "MonaCoin",
          "name_full": "MonaCoin (MONA)",
          "max_supply": 105120000,
          "icon_url": "https://assets.coinlayer.com/icons/MONA.png"
      },
      "MTL": {
          "symbol": "MTL",
          "name": "Metal",
          "name_full": "Metal (MTL)",
          "max_supply": 66588888,
          "icon_url": "https://assets.coinlayer.com/icons/MTL.png"
      },
      "MTN*": {
          "symbol": "MTN*",
          "name": "Medicalchain",
          "name_full": "Medicalchain (MTN*)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/MTN*.png"
      },
      "MTX": {
          "symbol": "MTX",
          "name": "Matryx",
          "name_full": "Matryx (MTX)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/MTX.png"
      },
      "NAS": {
          "symbol": "NAS",
          "name": "Nebulas",
          "name_full": "Nebulas (NAS)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/NAS.png"
      },
      "NAV": {
          "symbol": "NAV",
          "name": "NavCoin",
          "name_full": "NavCoin (NAV)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/NAV.png"
      },
      "NBT": {
          "symbol": "NBT",
          "name": "NuBits",
          "name_full": "NuBits (NBT)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/NBT.png"
      },
      "NDC": {
          "symbol": "NDC",
          "name": "NeverDie",
          "name_full": "NeverDie (NDC)",
          "max_supply": 400000000,
          "icon_url": "https://assets.coinlayer.com/icons/NDC.png"
      },
      "NEBL": {
          "symbol": "NEBL",
          "name": "Neblio",
          "name_full": "Neblio (NEBL)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/NEBL.png"
      },
      "NEO": {
          "symbol": "NEO",
          "name": "NEO",
          "name_full": "NEO (NEO)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/NEO.png"
      },
      "NEU": {
          "symbol": "NEU",
          "name": "Neumark",
          "name_full": "Neumark (NEU)",
          "max_supply": 1500000000,
          "icon_url": "https://assets.coinlayer.com/icons/NEU.png"
      },
      "NEWB": {
          "symbol": "NEWB",
          "name": "Newbium",
          "name_full": "Newbium (NEWB)",
          "max_supply": 49000000,
          "icon_url": "https://assets.coinlayer.com/icons/NEWB.png"
      },
      "NGC": {
          "symbol": "NGC",
          "name": "NagaCoin",
          "name_full": "NagaCoin (NGC)",
          "max_supply": 77910266.15769063,
          "icon_url": "https://assets.coinlayer.com/icons/NGC.png"
      },
      "NKC": {
          "symbol": "NKC",
          "name": "Nukecoinz",
          "name_full": "Nukecoinz (NKC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/NKC.png"
      },
      "NLC2": {
          "symbol": "NLC2",
          "name": "NoLimitCoin",
          "name_full": "NoLimitCoin (NLC2)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/NLC2.png"
      },
      "NMC": {
          "symbol": "NMC",
          "name": "NameCoin",
          "name_full": "NameCoin (NMC)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/NMC.png"
      },
      "NMR": {
          "symbol": "NMR",
          "name": "Numerai",
          "name_full": "Numerai (NMR)",
          "max_supply": 2297106,
          "icon_url": "https://assets.coinlayer.com/icons/NMR.png"
      },
      "NULS": {
          "symbol": "NULS",
          "name": "Nuls",
          "name_full": "Nuls (NULS)",
          "max_supply": 40000000,
          "icon_url": "https://assets.coinlayer.com/icons/NULS.png"
      },
      "NVC": {
          "symbol": "NVC",
          "name": "NovaCoin",
          "name_full": "NovaCoin (NVC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/NVC.png"
      },
      "NXT": {
          "symbol": "NXT",
          "name": "Nxt",
          "name_full": "Nxt (NXT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/NXT.png"
      },
      "OAX": {
          "symbol": "OAX",
          "name": "OpenANX",
          "name_full": "OpenANX (OAX)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/OAX.png"
      },
      "OBITS": {
          "symbol": "OBITS",
          "name": "Obits Coin",
          "name_full": "Obits Coin (OBITS)",
          "max_supply": 18276898,
          "icon_url": "https://assets.coinlayer.com/icons/OBITS.png"
      },
      "OC": {
          "symbol": "OC",
          "name": "OrangeCoin",
          "name_full": "OrangeCoin (OC)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/OC.png"
      },
      "OCN": {
          "symbol": "OCN",
          "name": "Odyssey",
          "name_full": "Odyssey (OCN)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/OCN.png"
      },
      "ODN": {
          "symbol": "ODN",
          "name": "Obsidian",
          "name_full": "Obsidian (ODN)",
          "max_supply": 91388946,
          "icon_url": "https://assets.coinlayer.com/icons/ODN.png"
      },
      "OK": {
          "symbol": "OK",
          "name": "OKCash",
          "name_full": "OKCash (OK)",
          "max_supply": 105000000,
          "icon_url": "https://assets.coinlayer.com/icons/OK.png"
      },
      "OMG": {
          "symbol": "OMG",
          "name": "OmiseGo",
          "name_full": "OmiseGo (OMG)",
          "max_supply": 140245398,
          "icon_url": "https://assets.coinlayer.com/icons/OMG.png"
      },
      "OMNI": {
          "symbol": "OMNI",
          "name": "Omni",
          "name_full": "Omni (OMNI)",
          "max_supply": 616448,
          "icon_url": "https://assets.coinlayer.com/icons/OMNI.png"
      },
      "ORE": {
          "symbol": "ORE",
          "name": "Galactrum",
          "name_full": "Galactrum (ORE)",
          "max_supply": 26280000,
          "icon_url": "https://assets.coinlayer.com/icons/ORE.png"
      },
      "ORME": {
          "symbol": "ORME",
          "name": "Ormeus Coin",
          "name_full": "Ormeus Coin (ORME)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/ORME.png"
      },
      "OST": {
          "symbol": "OST",
          "name": "Simple Token",
          "name_full": "Simple Token (OST)",
          "max_supply": 800000000,
          "icon_url": "https://assets.coinlayer.com/icons/OST.png"
      },
      "OTN": {
          "symbol": "OTN",
          "name": "Open Trading Network",
          "name_full": "Open Trading Network (OTN)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/OTN.png"
      },
      "OTX": {
          "symbol": "OTX",
          "name": "Octanox",
          "name_full": "Octanox (OTX)",
          "max_supply": 7905634,
          "icon_url": "https://assets.coinlayer.com/icons/OTX.png"
      },
      "OXY": {
          "symbol": "OXY",
          "name": "Oxycoin",
          "name_full": "Oxycoin (OXY)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/OXY.png"
      },
      "PART": {
          "symbol": "PART",
          "name": "Particl",
          "name_full": "Particl (PART)",
          "max_supply": 8634140,
          "icon_url": "https://assets.coinlayer.com/icons/PART.png"
      },
      "PAY": {
          "symbol": "PAY",
          "name": "TenX",
          "name_full": "TenX (PAY)",
          "max_supply": 205218255.9485,
          "icon_url": "https://assets.coinlayer.com/icons/PAY.png"
      },
      "PBT": {
          "symbol": "PBT",
          "name": "Primalbase",
          "name_full": "Primalbase (PBT)",
          "max_supply": 1250,
          "icon_url": "https://assets.coinlayer.com/icons/PBT.png"
      },
      "PCS": {
          "symbol": "PCS",
          "name": "Pabyosi Coin",
          "name_full": "Pabyosi Coin (PCS)",
          "max_supply": 31500000000,
          "icon_url": "https://assets.coinlayer.com/icons/PCS.png"
      },
      "PIVX": {
          "symbol": "PIVX",
          "name": "Private Instant Verified Transaction",
          "name_full": "Private Instant Verified Transaction (PIVX)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/PIVX.png"
      },
      "PIZZA": {
          "symbol": "PIZZA",
          "name": "PizzaCoin",
          "name_full": "PizzaCoin (PIZZA)",
          "max_supply": 25000000,
          "icon_url": "https://assets.coinlayer.com/icons/PIZZA.png"
      },
      "PLBT": {
          "symbol": "PLBT",
          "name": "Polybius",
          "name_full": "Polybius (PLBT)",
          "max_supply": 20000000,
          "icon_url": "https://assets.coinlayer.com/icons/PLBT.png"
      },
      "PLR": {
          "symbol": "PLR",
          "name": "Pillar",
          "name_full": "Pillar (PLR)",
          "max_supply": 800000000,
          "icon_url": "https://assets.coinlayer.com/icons/PLR.png"
      },
      "POE": {
          "symbol": "POE",
          "name": "Po.et",
          "name_full": "Po.et (POE)",
          "max_supply": 3141592653,
          "icon_url": "https://assets.coinlayer.com/icons/POE.png"
      },
      "POLY": {
          "symbol": "POLY",
          "name": "PolyBit",
          "name_full": "PolyBit (POLY)",
          "max_supply": 150000000,
          "icon_url": "https://assets.coinlayer.com/icons/POLY.png"
      },
      "POSW": {
          "symbol": "POSW",
          "name": "PoSWallet",
          "name_full": "PoSWallet (POSW)",
          "max_supply": 41000000,
          "icon_url": "https://assets.coinlayer.com/icons/POSW.png"
      },
      "POWR": {
          "symbol": "POWR",
          "name": "Power Ledger",
          "name_full": "Power Ledger (POWR)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/POWR.png"
      },
      "PPC": {
          "symbol": "PPC",
          "name": "PeerCoin",
          "name_full": "PeerCoin (PPC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/PPC.png"
      },
      "PPT": {
          "symbol": "PPT",
          "name": "Populous",
          "name_full": "Populous (PPT)",
          "max_supply": 53252246,
          "icon_url": "https://assets.coinlayer.com/icons/PPT.png"
      },
      "PPY": {
          "symbol": "PPY",
          "name": "Peerplays",
          "name_full": "Peerplays (PPY)",
          "max_supply": 5916684,
          "icon_url": "https://assets.coinlayer.com/icons/PPY.png"
      },
      "PRC": {
          "symbol": "PRC",
          "name": "ProsperCoin",
          "name_full": "ProsperCoin (PRC)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/PRC.png"
      },
      "PRES": {
          "symbol": "PRES",
          "name": "President Trump",
          "name_full": "President Trump (PRES)",
          "max_supply": 57968072167,
          "icon_url": "https://assets.coinlayer.com/icons/PRES.png"
      },
      "PRG": {
          "symbol": "PRG",
          "name": "Paragon",
          "name_full": "Paragon (PRG)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/PRG.png"
      },
      "PRL": {
          "symbol": "PRL",
          "name": "Oyster Pearl",
          "name_full": "Oyster Pearl (PRL)",
          "max_supply": 108592693,
          "icon_url": "https://assets.coinlayer.com/icons/PRL.png"
      },
      "PRO": {
          "symbol": "PRO",
          "name": "Propy",
          "name_full": "Propy (PRO)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/PRO.png"
      },
      "PURA": {
          "symbol": "PURA",
          "name": "Pura",
          "name_full": "Pura (PURA)",
          "max_supply": 350000000,
          "icon_url": "https://assets.coinlayer.com/icons/PURA.png"
      },
      "PUT": {
          "symbol": "PUT",
          "name": "PutinCoin",
          "name_full": "PutinCoin (PUT)",
          "max_supply": 2000000000,
          "icon_url": "https://assets.coinlayer.com/icons/PUT.png"
      },
      "QASH": {
          "symbol": "QASH",
          "name": "Quoine Liquid",
          "name_full": "Quoine Liquid (QASH)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/QASH.png"
      },
      "QAU": {
          "symbol": "QAU",
          "name": "Quantum",
          "name_full": "Quantum (QAU)",
          "max_supply": 246855127,
          "icon_url": "https://assets.coinlayer.com/icons/QAU.png"
      },
      "QSP": {
          "symbol": "QSP",
          "name": "Quantstamp",
          "name_full": "Quantstamp (QSP)",
          "max_supply": 976442388.3211,
          "icon_url": "https://assets.coinlayer.com/icons/QSP.png"
      },
      "QTUM": {
          "symbol": "QTUM",
          "name": "QTUM",
          "name_full": "QTUM (QTUM)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/QTUM.png"
      },
      "QUN": {
          "symbol": "QUN",
          "name": "QunQun",
          "name_full": "QunQun (QUN)",
          "max_supply": 1500000000,
          "icon_url": "https://assets.coinlayer.com/icons/QUN.png"
      },
      "R": {
          "symbol": "R",
          "name": "Revain",
          "name_full": "Revain (R)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/R.png"
      },
      "RBIES": {
          "symbol": "RBIES",
          "name": "Rubies",
          "name_full": "Rubies (RBIES)",
          "max_supply": 10000000,
          "icon_url": "https://assets.coinlayer.com/icons/RBIES.png"
      },
      "RCN": {
          "symbol": "RCN",
          "name": "Ripio",
          "name_full": "Ripio (RCN)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/RCN.png"
      },
      "RDD": {
          "symbol": "RDD",
          "name": "ReddCoin",
          "name_full": "ReddCoin (RDD)",
          "max_supply": 27500000000,
          "icon_url": "https://assets.coinlayer.com/icons/RDD.png"
      },
      "RDN": {
          "symbol": "RDN",
          "name": "RadonPay",
          "name_full": "RadonPay (RDN)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/RDN.png"
      },
      "RDN*": {
          "symbol": "RDN*",
          "name": "Raiden Network",
          "name_full": "Raiden Network (RDN*)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/RDN*.png"
      },
      "REBL": {
          "symbol": "REBL",
          "name": "Rebellious",
          "name_full": "Rebellious (REBL)",
          "max_supply": 396044986.80908334,
          "icon_url": "https://assets.coinlayer.com/icons/REBL.png"
      },
      "REE": {
          "symbol": "REE",
          "name": "ReeCoin",
          "name_full": "ReeCoin (REE)",
          "max_supply": 350000000,
          "icon_url": "https://assets.coinlayer.com/icons/REE.png"
      },
      "REP": {
          "symbol": "REP",
          "name": "Augur",
          "name_full": "Augur (REP)",
          "max_supply": 11000000,
          "icon_url": "https://assets.coinlayer.com/icons/REP.png"
      },
      "REQ": {
          "symbol": "REQ",
          "name": "Request Network",
          "name_full": "Request Network (REQ)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/REQ.png"
      },
      "REV": {
          "symbol": "REV",
          "name": "Revenu",
          "name_full": "Revenu (REV)",
          "max_supply": 222725000,
          "icon_url": "https://assets.coinlayer.com/icons/REV.png"
      },
      "RGC": {
          "symbol": "RGC",
          "name": "RG Coin",
          "name_full": "RG Coin (RGC)",
          "max_supply": 300000000,
          "icon_url": "https://assets.coinlayer.com/icons/RGC.png"
      },
      "RHOC": {
          "symbol": "RHOC",
          "name": "RChain",
          "name_full": "RChain (RHOC)",
          "max_supply": 870663574,
          "icon_url": "https://assets.coinlayer.com/icons/RHOC.png"
      },
      "RIYA": {
          "symbol": "RIYA",
          "name": "Etheriya",
          "name_full": "Etheriya (RIYA)",
          "max_supply": 1861532,
          "icon_url": "https://assets.coinlayer.com/icons/RIYA.png"
      },
      "RKC": {
          "symbol": "RKC",
          "name": "Royal Kingdom Coin",
          "name_full": "Royal Kingdom Coin (RKC)",
          "max_supply": 15000000,
          "icon_url": "https://assets.coinlayer.com/icons/RKC.png"
      },
      "RLC": {
          "symbol": "RLC",
          "name": "iEx.ec",
          "name_full": "iEx.ec (RLC)",
          "max_supply": 87000000,
          "icon_url": "https://assets.coinlayer.com/icons/RLC.png"
      },
      "RPX": {
          "symbol": "RPX",
          "name": "Red Pulse",
          "name_full": "Red Pulse (RPX)",
          "max_supply": 1358371250,
          "icon_url": "https://assets.coinlayer.com/icons/RPX.png"
      },
      "RUFF": {
          "symbol": "RUFF",
          "name": "Ruff",
          "name_full": "Ruff (RUFF)",
          "max_supply": 1790300000,
          "icon_url": "https://assets.coinlayer.com/icons/RUFF.png"
      },
      "SALT": {
          "symbol": "SALT",
          "name": "Salt Lending",
          "name_full": "Salt Lending (SALT)",
          "max_supply": 120000000,
          "icon_url": "https://assets.coinlayer.com/icons/SALT.png"
      },
      "SAN": {
          "symbol": "SAN",
          "name": "Santiment",
          "name_full": "Santiment (SAN)",
          "max_supply": 83337000,
          "icon_url": "https://assets.coinlayer.com/icons/SAN.png"
      },
      "SBC": {
          "symbol": "SBC",
          "name": "StableCoin",
          "name_full": "StableCoin (SBC)",
          "max_supply": 250000000,
          "icon_url": "https://assets.coinlayer.com/icons/SBC.png"
      },
      "SC": {
          "symbol": "SC",
          "name": "Siacoin",
          "name_full": "Siacoin (SC)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/SC.png"
      },
      "SENT": {
          "symbol": "SENT",
          "name": "Sentinel",
          "name_full": "Sentinel (SENT)",
          "max_supply": 2000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SENT.png"
      },
      "SHIFT": {
          "symbol": "SHIFT",
          "name": "Shift",
          "name_full": "Shift (SHIFT)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/SHIFT.png"
      },
      "SIB": {
          "symbol": "SIB",
          "name": "SibCoin",
          "name_full": "SibCoin (SIB)",
          "max_supply": 24000000,
          "icon_url": "https://assets.coinlayer.com/icons/SIB.png"
      },
      "SMART": {
          "symbol": "SMART",
          "name": "SmartCash",
          "name_full": "SmartCash (SMART)",
          "max_supply": 5000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SMART.png"
      },
      "SMLY": {
          "symbol": "SMLY",
          "name": "SmileyCoin",
          "name_full": "SmileyCoin (SMLY)",
          "max_supply": 50000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SMLY.png"
      },
      "SMT*": {
          "symbol": "SMT*",
          "name": "SmartMesh",
          "name_full": "SmartMesh (SMT*)",
          "max_supply": 3141592653,
          "icon_url": "https://assets.coinlayer.com/icons/SMT*.png"
      },
      "SNC": {
          "symbol": "SNC",
          "name": "SunContract",
          "name_full": "SunContract (SNC)",
          "max_supply": 7994751.31,
          "icon_url": "https://assets.coinlayer.com/icons/SNC.png"
      },
      "SNGLS": {
          "symbol": "SNGLS",
          "name": "SingularDTV",
          "name_full": "SingularDTV (SNGLS)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SNGLS.png"
      },
      "SNM": {
          "symbol": "SNM",
          "name": "SONM",
          "name_full": "SONM (SNM)",
          "max_supply": 444000000,
          "icon_url": "https://assets.coinlayer.com/icons/SNM.png"
      },
      "SNT": {
          "symbol": "SNT",
          "name": "Status Network Token",
          "name_full": "Status Network Token (SNT)",
          "max_supply": 6804870175,
          "icon_url": "https://assets.coinlayer.com/icons/SNT.png"
      },
      "SPK": {
          "symbol": "SPK",
          "name": "Sparks",
          "name_full": "Sparks (SPK)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/SPK.png"
      },
      "SRN": {
          "symbol": "SRN",
          "name": "SirinLabs",
          "name_full": "SirinLabs (SRN)",
          "max_supply": 572916627.0785626,
          "icon_url": "https://assets.coinlayer.com/icons/SRN.png"
      },
      "STEEM": {
          "symbol": "STEEM",
          "name": "Steem",
          "name_full": "Steem (STEEM)",
          "max_supply": 99692126,
          "icon_url": "https://assets.coinlayer.com/icons/STEEM.png"
      },
      "STK": {
          "symbol": "STK",
          "name": "STK Token",
          "name_full": "STK Token (STK)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/STK.png"
      },
      "STORJ": {
          "symbol": "STORJ",
          "name": "Storj",
          "name_full": "Storj (STORJ)",
          "max_supply": 424999998,
          "icon_url": "https://assets.coinlayer.com/icons/STORJ.png"
      },
      "STRAT": {
          "symbol": "STRAT",
          "name": "Stratis",
          "name_full": "Stratis (STRAT)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/STRAT.png"
      },
      "STU": {
          "symbol": "STU",
          "name": "BitJob",
          "name_full": "BitJob (STU)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/STU.png"
      },
      "STX": {
          "symbol": "STX",
          "name": "Stox",
          "name_full": "Stox (STX)",
          "max_supply": 58850550.4633,
          "icon_url": "https://assets.coinlayer.com/icons/STX.png"
      },
      "SUB": {
          "symbol": "SUB",
          "name": "Substratum Network",
          "name_full": "Substratum Network (SUB)",
          "max_supply": 600000000,
          "icon_url": "https://assets.coinlayer.com/icons/SUB.png"
      },
      "SUR": {
          "symbol": "SUR",
          "name": "Suretly",
          "name_full": "Suretly (SUR)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/SUR.png"
      },
      "SWFTC": {
          "symbol": "SWFTC",
          "name": "SwftCoin",
          "name_full": "SwftCoin (SWFTC)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SWFTC.png"
      },
      "SYS": {
          "symbol": "SYS",
          "name": "SysCoin",
          "name_full": "SysCoin (SYS)",
          "max_supply": 2000000000,
          "icon_url": "https://assets.coinlayer.com/icons/SYS.png"
      },
      "TAAS": {
          "symbol": "TAAS",
          "name": "Token as a Service",
          "name_full": "Token as a Service (TAAS)",
          "max_supply": 8146001,
          "icon_url": "https://assets.coinlayer.com/icons/TAAS.png"
      },
      "TESLA": {
          "symbol": "TESLA",
          "name": "TeslaCoilCoin",
          "name_full": "TeslaCoilCoin (TESLA)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/TESLA.png"
      },
      "THC": {
          "symbol": "THC",
          "name": "The Hempcoin",
          "name_full": "The Hempcoin (THC)",
          "max_supply": 250000000,
          "icon_url": "https://assets.coinlayer.com/icons/THC.png"
      },
      "THETA": {
          "symbol": "THETA",
          "name": "Theta",
          "name_full": "Theta (THETA)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/THETA.png"
      },
      "THS": {
          "symbol": "THS",
          "name": "TechShares",
          "name_full": "TechShares (THS)",
          "max_supply": 600000000,
          "icon_url": "https://assets.coinlayer.com/icons/THS.png"
      },
      "TIO": {
          "symbol": "TIO",
          "name": "Trade.io",
          "name_full": "Trade.io (TIO)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/TIO.png"
      },
      "TKN": {
          "symbol": "TKN",
          "name": "TokenCard  ",
          "name_full": "TokenCard   (TKN)",
          "max_supply": 39406760,
          "icon_url": "https://assets.coinlayer.com/icons/TKN.png"
      },
      "TKY": {
          "symbol": "TKY",
          "name": "THEKEY Token",
          "name_full": "THEKEY Token (TKY)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/TKY.png"
      },
      "TNB": {
          "symbol": "TNB",
          "name": "Time New Bank",
          "name_full": "Time New Bank (TNB)",
          "max_supply": 5541877892.218591,
          "icon_url": "https://assets.coinlayer.com/icons/TNB.png"
      },
      "TNT": {
          "symbol": "TNT",
          "name": "Tierion",
          "name_full": "Tierion (TNT)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/TNT.png"
      },
      "TOA": {
          "symbol": "TOA",
          "name": "TOA Coin",
          "name_full": "TOA Coin (TOA)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/TOA.png"
      },
      "TRC": {
          "symbol": "TRC",
          "name": "TerraCoin",
          "name_full": "TerraCoin (TRC)",
          "max_supply": 42000000,
          "icon_url": "https://assets.coinlayer.com/icons/TRC.png"
      },
      "TRIG": {
          "symbol": "TRIG",
          "name": "Trigger",
          "name_full": "Trigger (TRIG)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/TRIG.png"
      },
      "TRST": {
          "symbol": "TRST",
          "name": "TrustCoin",
          "name_full": "TrustCoin (TRST)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/TRST.png"
      },
      "TRUMP": {
          "symbol": "TRUMP",
          "name": "TrumpCoin",
          "name_full": "TrumpCoin (TRUMP)",
          "max_supply": 12000000,
          "icon_url": "https://assets.coinlayer.com/icons/TRUMP.png"
      },
      "TRX": {
          "symbol": "TRX",
          "name": "Tronix",
          "name_full": "Tronix (TRX)",
          "max_supply": 100000000000,
          "icon_url": "https://assets.coinlayer.com/icons/TRX.png"
      },
      "UBQ": {
          "symbol": "UBQ",
          "name": "Ubiq",
          "name_full": "Ubiq (UBQ)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/UBQ.png"
      },
      "UNO": {
          "symbol": "UNO",
          "name": "Unobtanium",
          "name_full": "Unobtanium (UNO)",
          "max_supply": 250000,
          "icon_url": "https://assets.coinlayer.com/icons/UNO.png"
      },
      "UNRC": {
          "symbol": "UNRC",
          "name": "UniversalRoyalCoin",
          "name_full": "UniversalRoyalCoin (UNRC)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/UNRC.png"
      },
      "UQC": {
          "symbol": "UQC",
          "name": "Uquid Coin",
          "name_full": "Uquid Coin (UQC)",
          "max_supply": 40000000,
          "icon_url": "https://assets.coinlayer.com/icons/UQC.png"
      },
      "USDT": {
          "symbol": "USDT",
          "name": "Tether",
          "name_full": "Tether (USDT)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/USDT.png"
      },
      "UTK": {
          "symbol": "UTK",
          "name": "Utrust",
          "name_full": "Utrust (UTK)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/UTK.png"
      },
      "UTT": {
          "symbol": "UTT",
          "name": "United Traders Token",
          "name_full": "United Traders Token (UTT)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/UTT.png"
      },
      "VEE": {
          "symbol": "VEE",
          "name": "BLOCKv",
          "name_full": "BLOCKv (VEE)",
          "max_supply": 6428571429,
          "icon_url": "https://assets.coinlayer.com/icons/VEE.png"
      },
      "VEN": {
          "symbol": "VEN",
          "name": "Vechain",
          "name_full": "Vechain (VEN)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/VEN.png"
      },
      "VERI": {
          "symbol": "VERI",
          "name": "Veritaseum",
          "name_full": "Veritaseum (VERI)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/VERI.png"
      },
      "VIA": {
          "symbol": "VIA",
          "name": "ViaCoin",
          "name_full": "ViaCoin (VIA)",
          "max_supply": 23000000,
          "icon_url": "https://assets.coinlayer.com/icons/VIA.png"
      },
      "VIB": {
          "symbol": "VIB",
          "name": "Viberate",
          "name_full": "Viberate (VIB)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/VIB.png"
      },
      "VIBE": {
          "symbol": "VIBE",
          "name": "VIBEHub",
          "name_full": "VIBEHub (VIBE)",
          "max_supply": 267000000,
          "icon_url": "https://assets.coinlayer.com/icons/VIBE.png"
      },
      "VOISE": {
          "symbol": "VOISE",
          "name": "Voise",
          "name_full": "Voise (VOISE)",
          "max_supply": 825578000,
          "icon_url": "https://assets.coinlayer.com/icons/VOISE.png"
      },
      "VOX": {
          "symbol": "VOX",
          "name": "Voxels",
          "name_full": "Voxels (VOX)",
          "max_supply": 210000000,
          "icon_url": "https://assets.coinlayer.com/icons/VOX.png"
      },
      "VRS": {
          "symbol": "VRS",
          "name": "Veros",
          "name_full": "Veros (VRS)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/VRS.png"
      },
      "VTC": {
          "symbol": "VTC",
          "name": "VertCoin",
          "name_full": "VertCoin (VTC)",
          "max_supply": 84000000,
          "icon_url": "https://assets.coinlayer.com/icons/VTC.png"
      },
      "VUC": {
          "symbol": "VUC",
          "name": "Virta Unique Coin",
          "name_full": "Virta Unique Coin (VUC)",
          "max_supply": 120000000,
          "icon_url": "https://assets.coinlayer.com/icons/VUC.png"
      },
      "WABI": {
          "symbol": "WABI",
          "name": "WaBi",
          "name_full": "WaBi (WABI)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/WABI.png"
      },
      "WAVES": {
          "symbol": "WAVES",
          "name": "Waves",
          "name_full": "Waves (WAVES)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/WAVES.png"
      },
      "WAX": {
          "symbol": "WAX",
          "name": "Worldwide Asset eXchange",
          "name_full": "Worldwide Asset eXchange (WAX)",
          "max_supply": 185000000,
          "icon_url": "https://assets.coinlayer.com/icons/WAX.png"
      },
      "WC": {
          "symbol": "WC",
          "name": "WhiteCoin",
          "name_full": "WhiteCoin (WC)",
          "max_supply": 300000000,
          "icon_url": "https://assets.coinlayer.com/icons/WC.png"
      },
      "WGR": {
          "symbol": "WGR",
          "name": "Wagerr",
          "name_full": "Wagerr (WGR)",
          "max_supply": 200000000,
          "icon_url": "https://assets.coinlayer.com/icons/WGR.png"
      },
      "WINGS": {
          "symbol": "WINGS",
          "name": "Wings DAO",
          "name_full": "Wings DAO (WINGS)",
          "max_supply": 100000000,
          "icon_url": "https://assets.coinlayer.com/icons/WINGS.png"
      },
      "WLK": {
          "symbol": "WLK",
          "name": "Wolk",
          "name_full": "Wolk (WLK)",
          "max_supply": 500000000,
          "icon_url": "https://assets.coinlayer.com/icons/WLK.png"
      },
      "WOP": {
          "symbol": "WOP",
          "name": "WorldPay",
          "name_full": "WorldPay (WOP)",
          "max_supply": 10000000,
          "icon_url": "https://assets.coinlayer.com/icons/WOP.png"
      },
      "WPR": {
          "symbol": "WPR",
          "name": "WePower",
          "name_full": "WePower (WPR)",
          "max_supply": 746403007.29,
          "icon_url": "https://assets.coinlayer.com/icons/WPR.png"
      },
      "WRC": {
          "symbol": "WRC",
          "name": "Worldcore",
          "name_full": "Worldcore (WRC)",
          "max_supply": 245209299,
          "icon_url": "https://assets.coinlayer.com/icons/WRC.png"
      },
      "WTC": {
          "symbol": "WTC",
          "name": "Waltonchain",
          "name_full": "Waltonchain (WTC)",
          "max_supply": 70000000,
          "icon_url": "https://assets.coinlayer.com/icons/WTC.png"
      },
      "XAUR": {
          "symbol": "XAUR",
          "name": "Xaurum",
          "name_full": "Xaurum (XAUR)",
          "max_supply": 127108472.4829,
          "icon_url": "https://assets.coinlayer.com/icons/XAUR.png"
      },
      "XBP": {
          "symbol": "XBP",
          "name": "Black Pearl Coin",
          "name_full": "Black Pearl Coin (XBP)",
          "max_supply": 50000000,
          "icon_url": "https://assets.coinlayer.com/icons/XBP.png"
      },
      "XBY": {
          "symbol": "XBY",
          "name": "XtraBYtes",
          "name_full": "XtraBYtes (XBY)",
          "max_supply": 650000000,
          "icon_url": "https://assets.coinlayer.com/icons/XBY.png"
      },
      "XCP": {
          "symbol": "XCP",
          "name": "CounterParty",
          "name_full": "CounterParty (XCP)",
          "max_supply": 2600000,
          "icon_url": "https://assets.coinlayer.com/icons/XCP.png"
      },
      "XCXT": {
          "symbol": "XCXT",
          "name": "CoinonatX",
          "name_full": "CoinonatX (XCXT)",
          "max_supply": 48252000,
          "icon_url": "https://assets.coinlayer.com/icons/XCXT.png"
      },
      "XDN": {
          "symbol": "XDN",
          "name": "DigitalNote ",
          "name_full": "DigitalNote  (XDN)",
          "max_supply": 8589869056,
          "icon_url": "https://assets.coinlayer.com/icons/XDN.png"
      },
      "XEM": {
          "symbol": "XEM",
          "name": "NEM",
          "name_full": "NEM (XEM)",
          "max_supply": 8999999999,
          "icon_url": "https://assets.coinlayer.com/icons/XEM.png"
      },
      "XGB": {
          "symbol": "XGB",
          "name": "GoldenBird",
          "name_full": "GoldenBird (XGB)",
          "max_supply": 450000000,
          "icon_url": "https://assets.coinlayer.com/icons/XGB.png"
      },
      "XHI": {
          "symbol": "XHI",
          "name": "HiCoin",
          "name_full": "HiCoin (XHI)",
          "max_supply": 10008835635,
          "icon_url": "https://assets.coinlayer.com/icons/XHI.png"
      },
      "XID": {
          "symbol": "XID",
          "name": "Sphre AIR",
          "name_full": "Sphre AIR (XID)",
          "max_supply": 30820620.1838,
          "icon_url": "https://assets.coinlayer.com/icons/XID.png"
      },
      "XLM": {
          "symbol": "XLM",
          "name": "Stellar",
          "name_full": "Stellar (XLM)",
          "max_supply": 100804167793,
          "icon_url": "https://assets.coinlayer.com/icons/XLM.png"
      },
      "XMR": {
          "symbol": "XMR",
          "name": "Monero",
          "name_full": "Monero (XMR)",
          "max_supply": 0,
          "icon_url": "https://assets.coinlayer.com/icons/XMR.png"
      },
      "XNC": {
          "symbol": "XNC",
          "name": "XenCoin",
          "name_full": "XenCoin (XNC)",
          "max_supply": 2100000000,
          "icon_url": "https://assets.coinlayer.com/icons/XNC.png"
      },
      "XRB": {
          "symbol": "XRB",
          "name": "Nano",
          "name_full": "Nano (XRB)",
          "max_supply": 340282367,
          "icon_url": "https://assets.coinlayer.com/icons/XRB.png"
      },
      "XRP": {
          "symbol": "XRP",
          "name": "Ripple",
          "name_full": "Ripple (XRP)",
          "max_supply": 38305873865,
          "icon_url": "https://assets.coinlayer.com/icons/XRP.png"
      },
      "XTO": {
          "symbol": "XTO",
          "name": "Tao",
          "name_full": "Tao (XTO)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/XTO.png"
      },
      "XTZ": {
          "symbol": "XTZ",
          "name": "Tezos",
          "name_full": "Tezos (XTZ)",
          "max_supply": "N/A",
          "icon_url": "https://assets.coinlayer.com/icons/XTZ.png"
      },
      "XUC": {
          "symbol": "XUC",
          "name": "Exchange Union",
          "name_full": "Exchange Union (XUC)",
          "max_supply": 3000000000,
          "icon_url": "https://assets.coinlayer.com/icons/XUC.png"
      },
      "XVG": {
          "symbol": "XVG",
          "name": "Verge",
          "name_full": "Verge (XVG)",
          "max_supply": 16555000000,
          "icon_url": "https://assets.coinlayer.com/icons/XVG.png"
      },
      "XZC": {
          "symbol": "XZC",
          "name": "ZCoin",
          "name_full": "ZCoin (XZC)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/XZC.png"
      },
      "YEE": {
          "symbol": "YEE",
          "name": "Yee",
          "name_full": "Yee (YEE)",
          "max_supply": 10000000000,
          "icon_url": "https://assets.coinlayer.com/icons/YEE.png"
      },
      "YOC": {
          "symbol": "YOC",
          "name": "YoCoin",
          "name_full": "YoCoin (YOC)",
          "max_supply": 168351300,
          "icon_url": "https://assets.coinlayer.com/icons/YOC.png"
      },
      "YOYOW": {
          "symbol": "YOYOW",
          "name": "Yoyow",
          "name_full": "Yoyow (YOYOW)",
          "max_supply": 62000000,
          "icon_url": "https://assets.coinlayer.com/icons/YOYOW.png"
      },
      "ZBC": {
          "symbol": "ZBC",
          "name": "Zilbercoin",
          "name_full": "Zilbercoin (ZBC)",
          "max_supply": 55000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZBC.png"
      },
      "ZCL": {
          "symbol": "ZCL",
          "name": "ZClassic",
          "name_full": "ZClassic (ZCL)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZCL.png"
      },
      "ZEC": {
          "symbol": "ZEC",
          "name": "ZCash",
          "name_full": "ZCash (ZEC)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZEC.png"
      },
      "ZEN": {
          "symbol": "ZEN",
          "name": "ZenCash",
          "name_full": "ZenCash (ZEN)",
          "max_supply": 21000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZEN.png"
      },
      "ZIL": {
          "symbol": "ZIL",
          "name": "Zilliqa",
          "name_full": "Zilliqa (ZIL)",
          "max_supply": 12600000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZIL.png"
      },
      "ZNY": {
          "symbol": "ZNY",
          "name": "BitZeny",
          "name_full": "BitZeny (ZNY)",
          "max_supply": 250000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZNY.png"
      },
      "ZRX": {
          "symbol": "ZRX",
          "name": "0x",
          "name_full": "0x (ZRX)",
          "max_supply": 1000000000,
          "icon_url": "https://assets.coinlayer.com/icons/ZRX.png"
      },
      "ZSC": {
          "symbol": "ZSC",
          "name": "Zeusshield",
          "name_full": "Zeusshield (ZSC)",
          "max_supply": 5642500000,
          "icon_url": "https://assets.coinlayer.com/icons/ZSC.png"
      }
  },
  "fiat": {
      "AED": "United Arab Emirates Dirham",
      "AFN": "Afghan Afghani",
      "ALL": "Albanian Lek",
      "AMD": "Armenian Dram",
      "ANG": "Netherlands Antillean Guilder",
      "AOA": "Angolan Kwanza",
      "ARS": "Argentine Peso",
      "AUD": "Australian Dollar",
      "AWG": "Aruban Florin",
      "AZN": "Azerbaijani Manat",
      "BAM": "Bosnia-Herzegovina Convertible Mark",
      "BBD": "Barbadian Dollar",
      "BDT": "Bangladeshi Taka",
      "BGN": "Bulgarian Lev",
      "BHD": "Bahraini Dinar",
      "BIF": "Burundian Franc",
      "BMD": "Bermudan Dollar",
      "BND": "Brunei Dollar",
      "BOB": "Bolivian Boliviano",
      "BRL": "Brazilian Real",
      "BSD": "Bahamian Dollar",
      "BTN": "Bhutanese Ngultrum",
      "BWP": "Botswanan Pula",
      "BYN": "New Belarusian Ruble",
      "BYR": "Belarusian Ruble",
      "BZD": "Belize Dollar",
      "CAD": "Canadian Dollar",
      "CDF": "Congolese Franc",
      "CHF": "Swiss Franc",
      "CLF": "Chilean Unit of Account (UF)",
      "CLP": "Chilean Peso",
      "CNY": "Chinese Yuan",
      "COP": "Colombian Peso",
      "CRC": "Costa Rican Colón",
      "CUC": "Cuban Convertible Peso",
      "CUP": "Cuban Peso",
      "CVE": "Cape Verdean Escudo",
      "CZK": "Czech Republic Koruna",
      "DJF": "Djiboutian Franc",
      "DKK": "Danish Krone",
      "DOP": "Dominican Peso",
      "DZD": "Algerian Dinar",
      "EGP": "Egyptian Pound",
      "ERN": "Eritrean Nakfa",
      "ETB": "Ethiopian Birr",
      "EUR": "Euro",
      "FJD": "Fijian Dollar",
      "FKP": "Falkland Islands Pound",
      "GBP": "British Pound Sterling",
      "GEL": "Georgian Lari",
      "GGP": "Guernsey Pound",
      "GHS": "Ghanaian Cedi",
      "GIP": "Gibraltar Pound",
      "GMD": "Gambian Dalasi",
      "GNF": "Guinean Franc",
      "GTQ": "Guatemalan Quetzal",
      "GYD": "Guyanaese Dollar",
      "HKD": "Hong Kong Dollar",
      "HNL": "Honduran Lempira",
      "HRK": "Croatian Kuna",
      "HTG": "Haitian Gourde",
      "HUF": "Hungarian Forint",
      "IDR": "Indonesian Rupiah",
      "ILS": "Israeli New Sheqel",
      "IMP": "Manx pound",
      "INR": "Indian Rupee",
      "IQD": "Iraqi Dinar",
      "IRR": "Iranian Rial",
      "ISK": "Icelandic Króna",
      "JEP": "Jersey Pound",
      "JMD": "Jamaican Dollar",
      "JOD": "Jordanian Dinar",
      "JPY": "Japanese Yen",
      "KES": "Kenyan Shilling",
      "KGS": "Kyrgystani Som",
      "KHR": "Cambodian Riel",
      "KMF": "Comorian Franc",
      "KPW": "North Korean Won",
      "KRW": "South Korean Won",
      "KWD": "Kuwaiti Dinar",
      "KYD": "Cayman Islands Dollar",
      "KZT": "Kazakhstani Tenge",
      "LAK": "Laotian Kip",
      "LBP": "Lebanese Pound",
      "LKR": "Sri Lankan Rupee",
      "LRD": "Liberian Dollar",
      "LSL": "Lesotho Loti",
      "LTL": "Lithuanian Litas",
      "LVL": "Latvian Lats",
      "LYD": "Libyan Dinar",
      "MAD": "Moroccan Dirham",
      "MDL": "Moldovan Leu",
      "MGA": "Malagasy Ariary",
      "MKD": "Macedonian Denar",
      "MMK": "Myanma Kyat",
      "MNT": "Mongolian Tugrik",
      "MOP": "Macanese Pataca",
      "MRO": "Mauritanian Ouguiya",
      "MUR": "Mauritian Rupee",
      "MVR": "Maldivian Rufiyaa",
      "MWK": "Malawian Kwacha",
      "MXN": "Mexican Peso",
      "MYR": "Malaysian Ringgit",
      "MZN": "Mozambican Metical",
      "NAD": "Namibian Dollar",
      "NGN": "Nigerian Naira",
      "NIO": "Nicaraguan Córdoba",
      "NOK": "Norwegian Krone",
      "NPR": "Nepalese Rupee",
      "NZD": "New Zealand Dollar",
      "OMR": "Omani Rial",
      "PAB": "Panamanian Balboa",
      "PEN": "Peruvian Nuevo Sol",
      "PGK": "Papua New Guinean Kina",
      "PHP": "Philippine Peso",
      "PKR": "Pakistani Rupee",
      "PLN": "Polish Zloty",
      "PYG": "Paraguayan Guarani",
      "QAR": "Qatari Rial",
      "RON": "Romanian Leu",
      "RSD": "Serbian Dinar",
      "RUB": "Russian Ruble",
      "RWF": "Rwandan Franc",
      "SAR": "Saudi Riyal",
      "SBD": "Solomon Islands Dollar",
      "SCR": "Seychellois Rupee",
      "SDG": "Sudanese Pound",
      "SEK": "Swedish Krona",
      "SGD": "Singapore Dollar",
      "SHP": "Saint Helena Pound",
      "SLL": "Sierra Leonean Leone",
      "SOS": "Somali Shilling",
      "SRD": "Surinamese Dollar",
      "STD": "São Tomé and Príncipe Dobra",
      "SVC": "Salvadoran Colón",
      "SYP": "Syrian Pound",
      "SZL": "Swazi Lilangeni",
      "THB": "Thai Baht",
      "TJS": "Tajikistani Somoni",
      "TMT": "Turkmenistani Manat",
      "TND": "Tunisian Dinar",
      "TOP": "Tongan Paʻanga",
      "TRY": "Turkish Lira",
      "TTD": "Trinidad and Tobago Dollar",
      "TWD": "New Taiwan Dollar",
      "TZS": "Tanzanian Shilling",
      "UAH": "Ukrainian Hryvnia",
      "UGX": "Ugandan Shilling",
      "USD": "United States Dollar",
      "UYU": "Uruguayan Peso",
      "UZS": "Uzbekistan Som",
      "VEF": "Venezuelan Bolívar Fuerte",
      "VND": "Vietnamese Dong",
      "VUV": "Vanuatu Vatu",
      "WST": "Samoan Tala",
      "XAF": "CFA Franc BEAC",
      "XAG": "Silver (troy ounce)",
      "XAU": "Gold (troy ounce)",
      "XCD": "East Caribbean Dollar",
      "XDR": "Special Drawing Rights",
      "XOF": "CFA Franc BCEAO",
      "XPF": "CFP Franc",
      "YER": "Yemeni Rial",
      "ZAR": "South African Rand",
      "ZMK": "Zambian Kwacha (pre-2013)",
      "ZMW": "Zambian Kwacha",
      "ZWL": "Zimbabwean Dollar"
  }
}