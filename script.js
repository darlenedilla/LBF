// HERE STARTS GRID JSCRIPT

        //function gridOverlayPull(obj) {
        //  if(pull.style.height="20%") {
        //    document.getElementsByClassName('gridOverlay').style.height="100%";
        //  }
        //  else {
        //    document.getElementsByClassName('gridOverlay').style.height="20%";
        //  }
        // }


        var gridOverlay = document.getElementsByClassName("gridOverlay");
        var gridOverlayPuller = document.getElementByClassName("gridOverlayPuller");
        var pullerArrow = document.getElementByClassName("pullerArrow");


        //function gridOverlayPull(obj) {
          //  gridOverlay.style.height ="100%";

        //}


        //function gridOverlayNoPull(obj) {
        //  gridOverlay.style.height = "20%";

        //}
        // NEED HELP WITH THE ABOVE ^^^^^- Nanna

// HERE ENDS GRID JSCRIPT

// HERE STARTS MINI-MENU JSCRIPT

        function miniMenuClickEvents() {
          document.getElementById('miniMenuEvents').style.backgroundColor="#fcfcfc";
          document.getElementById('miniMenuNews').style.backgroundColor="#5fa8d3";

          document.getElementById('miniMenuEvents').style.color="black";
          document.getElementById('miniMenuNews').style.color="white";

          document.getElementById('gridWrapper').style.left="5%";
          document.getElementById('gridWrapperNews').style.right="+100%";
        }

        function miniMenuClickNews(){
          document.getElementById('miniMenuEvents').style.backgroundColor="#5fa8d3";
          document.getElementById('miniMenuNews').style.backgroundColor="#fcfcfc";

          document.getElementById('miniMenuEvents').style.color="white";
          document.getElementById('miniMenuNews').style.color="black";

          document.getElementById('gridWrapper').style.left="-100%";
          document.getElementById('gridWrapperNews').style.right="5%";
        }
// HERE ENDS MINI-MENU SCRIPT //
