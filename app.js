
 function makerRequest(){
 fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,LTC,YFI,BNB,ETH,DASH&tsyms=USD&api_key={your-api-key} ")
   
  .then((res)=>{
   
    if(!res.ok){
      throw Error(res.statusText)
    }

    
    return res.json() 
}).



  

    then((data) => {
   
    
      console.log(data)
    
      console.log(data.USD)
      

 let btcprice = document.getElementById("btcprice");
 
      let btcmarketcap = document.getElementById("btcmarketcap");
      let btcHigh = document.getElementById("btchigh");
    

      let ethprice = document.getElementById("ethprice");
      let ethmarketcap = document.getElementById("ethmarketcap");
      let ethhigh = document.getElementById("ethhigh");


      let ltcprice = document.getElementById("ltcprice");
      let ltcmarketcap = document.getElementById("ltcmarketcap");
      let ltchigh = document.getElementById("ltchigh");


       
      let bnbprice = document.getElementById("bnbprice");
      let bnbmarketcap = document.getElementById("bnbmarketcap");
      let bnbhigh = document.getElementById("bnbhigh");

      btcprice.innerHTML = data.DISPLAY["BTC"].USD.PRICE;

      btcmarketcap.innerHTML = data.DISPLAY["BTC"].USD.MKTCAP;
      btcHigh.innerHTML =data.DISPLAY["BTC"].USD.SUPPLY;

      
      ethprice.innerHTML =data.DISPLAY["ETH"].USD.PRICE;
      ethmarketcap.innerHTML = data.DISPLAY["ETH"].USD.MKTCAP;
      ethhigh.innerHTML =data.DISPLAY["ETH"].USD.SUPPLY;

      ltcprice.innerHTML =  data.DISPLAY["LTC"].USD.PRICE;
      ltcmarketcap.innerHTML = data.DISPLAY["LTC"].USD.MKTCAP;
      ltchigh.innerHTML =data.DISPLAY["LTC"].USD.SUPPLY;


      bnbprice.innerHTML = data.DISPLAY["BNB"].USD.PRICE;
      bnbmarketcap.innerHTML = data.DISPLAY["BNB"].USD.MKTCAP;
      bnbhigh.innerHTML = data.DISPLAY["BNB"].USD.SUPPLY;

      if(data.DISPLAY["BTC"].USD.PRICE > data.DISPLAY["BTC"].USD.HIGH24HOUR ) {

        document.getElementById("btcprice").style.color = "green";
      }else{
        document.getElementById("btcprice").style.color = "red";
      }


      if(data.DISPLAY["BNB"].USD.PRICE > data.DISPLAY["BNB"].USD.HIGH24HOUR ) {

        document.getElementById("bnbprice").style.color = "green";
      }else{
        document.getElementById("bnbprice").style.color = "red";
      }

      if(data.DISPLAY["LTC"].USD.PRICE > data.DISPLAY["LTC"].USD.HIGH24HOUR ) {

        document.getElementById("ltcprice").style.color = "green";
      }else{
        document.getElementById("ltcprice").style.color = "red";
      }

      if(data.DISPLAY["ETH"].USD.PRICE > data.DISPLAY["ETH"].USD.HIGH24HOUR ) {

        document.getElementById("ethprice").style.color = "green";
      }else{
        document.getElementById("ethprice").style.color = "red";
      }

 }).catch((error) => {console.log(error)})
}

setInterval(makerRequest, 4000);


