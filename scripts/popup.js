/**
 * to display the popup to share score
 */
function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  //popup is hidden. display:none. Will switch it at active
  popupBackground.classList.add("active");
}

/**
 * To hide the popup to share the score
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  //default behaviour= display:none. Need to delete active class
  //to have the default behaviour back
  popupBackground.classList.remove("active");
}

/**
 * To initialize the event listeners that are for
 * the display of the popup
 */
function initAddEventListenerPopup() {
  //listen to the click on "share"
  btnShare = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");
  btnShare.addEventListener("click", () => {
    //When we click, display popup
    afficherPopup();
  });

  //listen to the click on the div "popupBackground"
  popupBackground.addEventListener("click", (event) => {
    //if click, specifically, on popupBackground
    // NOT on another element in it
    if (event.target === popupBackground) {
      //need to hide popup
      cacherPopup();
    }
  });
}
