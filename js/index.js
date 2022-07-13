function doneTab(no){
    document.querySelector(`.selectedCard_claim_${no}`).style.display='none'
    document.querySelector(`.selectedCard_done_${no}`).style.display='block'
}
function hideAllTabs(no){
  document.querySelector(`.selectedCard_claim_${no}`).style.display='block';
  window.event.target.parentNode.style.display='none'
}

function hide_All_Tabs(){
    var x = document.getElementsByClassName("tab_2");
    for(let i=0; i<x.length-1;i++){
        x[i].style.display='none'
    }
    
}