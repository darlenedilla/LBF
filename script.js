// HERE STARTS GRID JSCRIPT


        function gridOverlayed1(){
          document.getElementById('gridOverlay1').style.height="100%";
          document.getElementById('gridContent1').style.opacity="1";
        }
        function gridNoOverlay1(){
          document.getElementById('gridOverlay1').style.height="20%";
          document.getElementById('gridContent1').style.opacity="0";
        }


        function gridOverlayed2(){
          document.getElementById('gridOverlay2').style.height="100%";
          document.getElementById('gridContent2').style.opacity="1";
        }
        function gridNoOverlay2(){
          document.getElementById('gridOverlay2').style.height="20%";
          document.getElementById('gridContent2').style.opacity="0";
        }


        function gridOverlayed3(){
          document.getElementById('gridOverlay3').style.height="100%";
          document.getElementById('gridContent3').style.opacity="1";
        }
        function gridNoOverlay3(){
          document.getElementById('gridOverlay3').style.height="20%";
          document.getElementById('gridContent3').style.opacity="0";
        }

        //News grid jscript

        function gridOverlayedNews1(){
          document.getElementById('gridOverlayNews1').style.height="100%";
          document.getElementById('gridContentNews1').style.opacity="1";
        }
        function gridNoOverlayNews1(){
          document.getElementById('gridOverlayNews1').style.height="20%";
          document.getElementById('gridContentNews1').style.opacity="0";
        }


        function gridOverlayedNews2(){
          document.getElementById('gridOverlayNews2').style.height="100%";
          document.getElementById('gridContentNews2').style.opacity="1";
        }
        function gridNoOverlayNews2(){
          document.getElementById('gridOverlayNews2').style.height="20%";
          document.getElementById('gridContentNews2').style.opacity="0";
        }


        function gridOverlayedNews3(){
          document.getElementById('gridOverlayNews3').style.height="100%";
          document.getElementById('gridContentNews3').style.opacity="1";
        }
        function gridNoOverlayNews3(){
          document.getElementById('gridOverlayNews3').style.height="20%";
          document.getElementById('gridContentNews3').style.opacity="0";
        }

// HERE ENDS GRID JSCRIPT

// HERE STARTS MINI-MENU JSCRIPT

        function miniMenuClickEvents() {
          document.getElementById('miniMenuEvents').style.backgroundColor="#fcfcfc";
          document.getElementById('miniMenuNews').style.backgroundColor="#5fa8d3";

          document.getElementById('miniMenuEvents').style.color="black";
          document.getElementById('miniMenuNews').style.color="white";

          document.getElementById('gridWrapper').style.left="5%";
          document.getElementById('gridWrapperNews').style.right="+150%";
        }

        function miniMenuClickNews(){
          document.getElementById('miniMenuEvents').style.backgroundColor="#5fa8d3";
          document.getElementById('miniMenuNews').style.backgroundColor="#fcfcfc";

          document.getElementById('miniMenuEvents').style.color="white";
          document.getElementById('miniMenuNews').style.color="black";

          document.getElementById('gridWrapper').style.left="-150%";
          document.getElementById('gridWrapperNews').style.right="5%";
        }
// HERE ENDS MINI-MENU SCRIPT //


//HERE STARTS FOOTER SCRIPT //

    function followUsFooter(){
      document.getElementById('followUs').style.opacity="1";
    }

    function followUsFooterOut(){
      document.getElementById('followUs').style.opacity="0";
    }
