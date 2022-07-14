"use strict";

let home = document.querySelector('.home')
let topPopUps = document.querySelectorAll(".top-pop-up");
let maintopPopUps = document.querySelectorAll(" .top-pop-up-with-q");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("header nav a:not(.whitepaper)");
let learnMoreBtns = document.querySelectorAll(".main .swiper-slide button");
let modal = document.querySelector(".modal");
let clsmodalBtn = document.querySelector(".modal .close");
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector("nav");
let closeNavBtn = document.querySelector(".close");
let loader = document.querySelector(".loader");
let preSale = document.querySelector(".pre-sale");
let preSaleContainer = document.querySelector(".pre-sale-container");
let preConnectBtn = document.querySelector(".pre-sale-container .connect-wallet-btn");
let cookieModal = document.querySelector(".cookie-consent-modal");
let cookieContent = document.querySelector(".cookie-consent-modal");
let acceptCookieBtn = document.querySelector(".btnCookie.accept");
let networkCard = document.querySelector(".networkCard");
let connectBtn = document.querySelector(".connect-btn");
let afterConnect = document.querySelector(".afterConnect");
let walletContent = document.querySelector(".wallet-content");
let contactName = document.querySelector(".contactName");
let contactEmail = document.querySelector(".contactEmail");
let contactMessage = document.querySelector(".contactMessage");
let contactSubmit = document.querySelector(".contactSubmit");
const approveBtn = document.getElementById("approve");
const swapBtn = document.getElementById("swap");



const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;


let web3Modal
let provider;
let selectedAccount;

let contractAdd = "0xbcba01f7d6cc0a950464a4b98ba8358c4f6b69a0";
let abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"burnfrom","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"BurnedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedBTCDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"BTCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"BMEamount","type":"uint256"}],"name":"SendBTCAndBMEDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"AMMPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BTC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"BuyTFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"ExlFromD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"ExlFromF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GFProcess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Lwallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxSA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MtotalS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"ProcessDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"STatAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SellTFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"WblDofBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"WblDofBTC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dBTCTracker","outputs":[{"internalType":"contract BBTracking","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountdI","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTlSBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTlSBTC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalNoH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotaldd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalddBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getlastProcidx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExlFFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAMMPairs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBTC","type":"uint256"},{"internalType":"uint256","name":"amountBME","type":"uint256"}],"name":"setMinTtoGetR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGFProcess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

let swapAdd = "0xbcba01f7d6cc0a950464a4b98ba8358c4f6b69a0";
let swapAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"burnfrom","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"BurnedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"oldValue","type":"uint256"}],"name":"GasForProcessingUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"iterations","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claims","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastProcessedIndex","type":"uint256"},{"indexed":true,"internalType":"bool","name":"automatic","type":"bool"},{"indexed":false,"internalType":"uint256","name":"gas","type":"uint256"},{"indexed":true,"internalType":"address","name":"processor","type":"address"}],"name":"ProcessedBTCDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"BTCamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"BMEamount","type":"uint256"}],"name":"SendBTCAndBMEDividends","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pair","type":"address"},{"indexed":true,"internalType":"bool","name":"value","type":"bool"}],"name":"SetAutomatedMarketMakerPair","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateDividendTracker","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"}],"name":"UpdateUniswapV2Router","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"AMMPairs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BTC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"BuyTFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"ExlFromD","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"ExlFromF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GFProcess","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Lwallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxSA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MtotalS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gas","type":"uint256"}],"name":"ProcessDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"STatAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SellTFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"WblDofBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"WblDofBTC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dBTCTracker","outputs":[{"internalType":"contract BBTracking","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountdI","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTlSBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTlSBTC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalNoH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotaldd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalddBME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getlastProcidx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExlFFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAMMPairs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBTC","type":"uint256"},{"internalType":"uint256","name":"amountBME","type":"uint256"}],"name":"setMinTtoGetR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"updateGFProcess","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"updateUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]


function init() {


    const providerOptions = {

      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: { 56: 'https://bsc-dataseed.binance.org/'},
        }
      },
  };

  web3Modal = new Web3Modal({
    network: "binance",
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false,

      });

}



if(contactSubmit){
  contactSubmit.addEventListener("click", deleteContent);
}

window.addEventListener("scroll", scrolled);
window.addEventListener("load", loaded);
// learnMoreBtns.forEach((btn) => btn.addEventListener("click", openModal));
clsmodalBtn.addEventListener("click", closeModal);

hamburger.addEventListener("click", hamburgerClicked);
closeNavBtn.addEventListener("click", closeNav);
links.forEach((link) => link.addEventListener("click", closeNav));
if (preSale) preConnectBtn.addEventListener("click", openModal);

if(networkCard){
networkCard.addEventListener("click", preConnectWallet);
}



function scrolled() {
  PageChangeindicater();
  animatTopPopups();
}
function loaded() {
  animatMain();
  goLoader();
  animatTopPopups();
  cookies();
  
  init();
  document.querySelector(".connect-btn").addEventListener("click", onConnect);

  document.querySelector("#disconnectBtn").addEventListener("click", onDisconnect);
}

function PageChangeindicater() {
  sections.forEach((section, i) => {
    if (scrollY > section.offsetTop - 20) {
      if (i != 0) {
        links[i - 1].classList.remove("active");
      }
      links[i].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  });
}

function animatTopPopups() {
  topPopUps.forEach((popup) => {
    if (scrollY > popup.offsetTop - 800 && scrollY < popup.offsetTop + 3500) {
      popup.classList.add("animat-top-pop-up");
    }else{
      popup.classList.remove("animat-top-pop-up");
    }
  });
}

function animatMain() {
  maintopPopUps.forEach((popup) => popup.classList.add("animat-top-pop-up"));
}

function goLoader() {
  loader.classList.add('go-loader')
  setTimeout(() => {
    document.body.classList.remove('non-scroll')
  }, 3000);
}


function openModal() {
  modal.classList.add("exist-modal");
  modal.classList.add("animat-top-pop-up")
  document.body.classList.toggle("non-scroll");
}

function closeModal() {
  modal.classList.remove("exist-modal");
  modal.classList.remove("animat-top-pop-up")
  document.body.classList.toggle("non-scroll");
  connectBtn.classList.remove("hide-item");
  afterConnect.classList.remove("show-item")
  afterConnect.classList.remove("animat-top-pop-up");
  walletContent.classList.add("hide-item")
  walletContent.classList.remove("show-item")
  walletContent.classList.remove("animat-top-pop-up");
}

function hamburgerClicked() {
  navbar.classList.toggle("nav-open");
  document.body.classList.toggle("non-scroll");
}
function closeNav() {
  navbar.classList.toggle("nav-open");
  document.body.classList.remove('non-scroll')
}
function preConnectWallet() {
  preSaleContainer.classList.add('pre-connect-wallet');
  modal.classList.remove("exist-modal");
  document.body.classList.remove('non-scroll');
  
}

if (home) {
  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}



acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("activeCookie")
    localStorage.setItem("cookieAccepted", "yes")
    document.body.classList.toggle("non-scroll");
})

function cookies(){
  setTimeout( function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("activeCookie")
        cookieContent.classList.add("animat-top-pop-up")
        document.body.classList.toggle("non-scroll");
    }
    }, 3000)
  }

  function deleteContent() {
    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
  }

async function fetchAccountData() {

  const web3 = new Web3(provider);
  const chainId = await web3.eth.getChainId();
  const chainData = evmChains.getChain(chainId);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];


  selectedAccount.split(' ');
    const ShortAccount = selectedAccount[0] + selectedAccount[1] + selectedAccount[2] + selectedAccount[3]  + "..."  + selectedAccount[selectedAccount.length - 4 ] + selectedAccount[selectedAccount.length - 3 ] + selectedAccount[selectedAccount.length - 2 ] + selectedAccount[selectedAccount.length - 1];

  document.querySelector(".walletAdd").value = ShortAccount;

  const rowResolvers = accounts.map(async (address) => {

    
    const contract = new web3.eth.Contract(abi,contractAdd);
//     const swapContact = new web3.eth.Contract(swapAbi,swapAdd);
// 
//     const balances = await contract.methods.checkWalletBalance(selectedAccount).call();
// 
//     const BMEbalance = getNumber(balances[0]);
//     const DEVEbalance = getNumber(balances[1]);
    const allowance = await contract.methods.allowance(selectedAccount , swapAdd).call();
  });
  await Promise.all(rowResolvers);
}



async function refreshAccountData() {

  await fetchAccountData(provider);

}


async function onConnect() {

    provider = await web3Modal.connect();


  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  provider.on("disconnect", (chainId) => {
    onDisconnect();
  });

  await refreshAccountData();

  connectBtn.classList.add("hide-item");
  afterConnect.classList.add("show-item")
  afterConnect.classList.add("animat-top-pop-up");
  walletContent.classList.remove("hide-item")
  walletContent.classList.add("show-item")
  walletContent.classList.add("animat-top-pop-up");


}

async function onDisconnect(){

  await web3Modal.clearCachedProvider();
  provider = null;
  selectedAccount = null;
  connectBtn.classList.remove("hide-item");
  afterConnect.classList.remove("show-item")
  afterConnect.classList.remove("animat-top-pop-up");
  walletContent.classList.remove("show-item");
  walletContent.classList.remove("animat-top-pop-up");
  walletContent.classList.add("hide-item");
}



  approveBtn.addEventListener('click', approve);
    async function approve() {
      const approveBtn = document.getElementById("approve");
        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        const chainData = evmChains.getChain(chainId);
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(abi,contractAdd);
        const gasFee = await contract.methods.approve(contractAdd, 100).estimateGas({from:accounts[0]});
        approveBtn.innerHTML = "Loading...";
        await contract.methods.approve(contractAdd, 100).send({from:accounts[0],  gas: gasFee }).then (function (result) {
          approveBtn.innerHTML = "Approve";
          approveBtn.disabled = true;
          swapBtn.disabled = false;
        }).catch (function (error){
          approveBtn.innerHTML = "Approve";
          approveBtn.disabled = true;
          swapBtn.disabled = false;
    });

    }

  swapBtn.addEventListener('click', swap);
    async function swap() {
        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        const chainData = evmChains.getChain(chainId);
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(CycelAbi,CycelContractaddress);
        const gasFee = await contract.methods.swap().estimateGas({from:accounts[0]});
        await contract.methods.swap().send({from:accounts[0],  gas: 300000 });

    }


function getNumber(_str){
  var arr = _str.split('');
  var out = new Array();
  for(var cnt=0;cnt<arr.length;cnt++){
    if(isNaN(arr[cnt])==false){
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}