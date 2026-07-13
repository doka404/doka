function openKitaPopup(){
    document.getElementById("kitaPopup").style.display="flex";
}

function closeKitaPopup(){
    document.getElementById("kitaPopup").style.display="none";
    localStorage.setItem("kitaPopupSeen","1");
}

window.onload=function(){

    if(!localStorage.getItem("kitaPopupSeen")){
        setTimeout(openKitaPopup,1200);
    }

}
