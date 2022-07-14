// code for second and third option
function doneTab(no){
    document.querySelector(`.selectedCard_claim_${no}`).style.display='none'
    document.querySelector(`.selectedCard_done_${no}`).style.display='block'
}
function hideAllTabs(no){
    // document.querySelectorAll('.tab')[0].style.display='block'
    // document.querySelectorAll('.tab')[1].style.display='none'
    // document.getElementById("nextBtn").style.display = "none";
  document.querySelector(`.selectedCard_claim_${no}`).style.display='none';
  window.event.target.parentNode.style.display='none';
//   document.querySelector('.firstTab').style.display='block'
}
function showFirstTab(no){
    document.querySelector(`.selectedCard_claim_${no}`).style.display='block';

}





