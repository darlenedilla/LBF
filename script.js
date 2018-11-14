/*UDFYLD FORMULAR AUTOMATISK - DARLENE*/

//Tager værdierne fra formularen, som er gemt i URL'en
var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };

    //Danner objekt ud fra værdier i URL
    object = getParams(window.location.href);

    //Tager værdi fra hvert element i oprettelsesformular og sætter dem ind i fakturaformular
    function fillForm(){
        var oldAddress = object.address;
        var newAddress = oldAddress.replace(/[\+,]/g, " ");

        document.getElementById("firstname").value = object.firstname;
        document.getElementById("lastname").value = object.lastname;
        document.getElementById("email").value = object.email;
        document.getElementById("phone").value = object.phone;
        document.getElementById("address").value = newAddress;
    }

    //Indsætter navn fra formular i "Tak for anmodning"-page
    function thankYou(){
        thankYouName = "Tak, " + object.firstname + "!";
        thankYouElement = document.getElementById("thankYouHeading");
        thankYouElement.innerHTML = thankYouName;
    }



// HERE STARTS GRID JSCRIPT


        function gridOverlayed1(){
          document.getElementById('gridOverlay1').style.height="350px";
          document.getElementById('gridOverlay1').style.borderBottomLeftRadius="5px";
          document.getElementById('gridOverlay1').style.borderBottomRightRadius="5px";
          document.getElementById('gridContent1').style.opacity="1";
        }
        function gridNoOverlay1(){
          document.getElementById('gridOverlay1').style.height="65px";
          document.getElementById('gridContent1').style.opacity="0";
          document.getElementById('gridOverlay1').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlay1').style.borderBottomRightRadius="0px";
        }

        // event grid 2

        function gridOverlayed2(){
          document.getElementById('gridOverlay2').style.height="350px";
          document.getElementById('gridOverlay2').style.borderBottomLeftRadius="5px";
          document.getElementById('gridOverlay2').style.borderBottomRightRadius="5px";
          document.getElementById('gridContent2').style.opacity="1";
        }
        function gridNoOverlay2(){
          document.getElementById('gridOverlay2').style.height="65px";
          document.getElementById('gridContent2').style.opacity="0";
          document.getElementById('gridOverlay2').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlay2').style.borderBottomRightRadius="0px";
        }

        // event grid 3

        function gridOverlayed3(){
          document.getElementById('gridOverlay3').style.height="350px";
          document.getElementById('gridOverlay3').style.borderBottomLeftRadius="5px";
          document.getElementById('gridOverlay3').style.borderBottomRightRadius="5px";
          document.getElementById('gridContent3').style.opacity="1";
        }
        function gridNoOverlay3(){
          document.getElementById('gridOverlay3').style.height="65px";
          document.getElementById('gridContent3').style.opacity="0";
          document.getElementById('gridOverlay3').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlay3').style.borderBottomRightRadius="0px";
        }

        //News grid jscript

        function gridOverlayedNews1(){
          document.getElementById('gridOverlayNews1').style.height="350px";
          document.getElementById('gridContentNews1').style.opacity="1";
          document.getElementById('gridOverlayNews1').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews1').style.borderBottomRightRadius="0px";
        }
        function gridNoOverlayNews1(){
          document.getElementById('gridOverlayNews1').style.height="65px";
          document.getElementById('gridContentNews1').style.opacity="0";
          document.getElementById('gridOverlayNews1').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews1').style.borderBottomRightRadius="0px";
        }

        //News grid 2

        function gridOverlayedNews2(){
          document.getElementById('gridOverlayNews2').style.height="350px";
          document.getElementById('gridContentNews2').style.opacity="1";
          document.getElementById('gridOverlayNews2').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews2').style.borderBottomRightRadius="0px";
        }
        function gridNoOverlayNews2(){
          document.getElementById('gridOverlayNews2').style.height="65px";
          document.getElementById('gridContentNews2').style.opacity="0";
          document.getElementById('gridOverlayNews2').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews2').style.borderBottomRightRadius="0px";
        }

        // News grid 3

        function gridOverlayedNews3(){
          document.getElementById('gridOverlayNews3').style.height="350px";
          document.getElementById('gridContentNews3').style.opacity="1";
          document.getElementById('gridOverlayNews3').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews3').style.borderBottomRightRadius="0px";
        }
        function gridNoOverlayNews3(){
          document.getElementById('gridOverlayNews3').style.height="65px";
          document.getElementById('gridContentNews3').style.opacity="0";
          document.getElementById('gridOverlayNews3').style.borderBottomLeftRadius="0px";
          document.getElementById('gridOverlayNews3').style.borderBottomRightRadius="0px";
        }
// HERE ENDS GRID JSCRIPT

// HERE STARTS MINI-MENU JSCRIPT

        function miniMenuClickNews() {
          document.getElementById('miniMenuNews').style.backgroundColor="#fcfcfc";
          document.getElementById('miniMenuEvents').style.backgroundColor="#5fa8d3";

          document.getElementById('miniMenuNews').style.color="black";
          document.getElementById('miniMenuEvents').style.color="white";

          document.getElementById('bigGridWrapper').style.left="5%";
        }

        function miniMenuClickEvents(){
          document.getElementById('miniMenuNews').style.backgroundColor="#5fa8d3";
          document.getElementById('miniMenuEvents').style.backgroundColor="#fcfcfc";

          document.getElementById('miniMenuNews').style.color="white";
          document.getElementById('miniMenuEvents').style.color="black";

          document.getElementById('bigGridWrapper').style.left="-105%";
        }
// HERE ENDS MINI-MENU SCRIPT //


//HERE STARTS FOOTER SCRIPT //

    function followUsFooter(){
      document.getElementById('followUs').style.opacity="1";
    }

    function followUsFooterOut(){
      document.getElementById('followUs').style.opacity="0";
    }

  // toggle menu SCRIPT //

  function toggleMenu(){
    var menuList = document.getElementById('menuList');
    var searchList = document.getElementById('searchList');

    if (menuList.classList.contains('active')) {
      menuList.classList.remove('active');
    }
    else{
      menuList.classList.add('active');
    }
    searchList.classList.remove('active');
  }

  function toggleSearch(){
    var menuList = document.getElementById('menuList');
    var searchList = document.getElementById('searchList');

    if (searchList.classList.contains('active')) {
      searchList.classList.remove('active');
    }
    else{
      searchList.classList.add('active');
    }
    menuList.classList.remove('active');
  }

  function toggleClass(){
    var toggle = document.getElementById('toggle');
    toggle.classList.toggle('activetoggle');
  }

  function removeClass(){
    var toggle = document.getElementById('toggle');
    toggle.classList.remove('activetoggle');
  }

  

  /*$('.toggle').click(function(){
    $('.toggle').toggleClass('activetoggle')
  });

  $('.fa-search').click(function(){
    $('.toggle').removeClass('activetoggle')
  })*/


  $(document).ready(function(){
    $(".hamburger-btn .fa-times").hide();

    /*$(".toggle").click(function(){
      if($(".menuList").hasClass("active")){
        $(".menuList").removeClass("active");
        console.log("Test")
      }
      else{
        $(".menuList").addClass("active");
      }
      $(".searchList").removeClass("active");
      console.log("Test2");
    });*/

  /*$(".fa-search").click(function(){
    if($(".searchList").hasClass("active")){
      $(".searchList").removeClass("active");
    }
    else{
      $(".searchList").addClass("active");
    }
    $(".menuList").removeClass("active");
    console.log("Hello world!")
  });*/

  // BURGER MENU ANIMATION //
  });
  


  // CINDY BETINGELSER SCRIPT //

  function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("betingelserBtn");


  if(window.innerWidth > 440){
    if (dots.style.display ==="none") {
      dots.style.display = "inline";
      document.getElementById("betingelsesbox").style.height="170px"
      btnText.innerHTML = "Læs mere <i class=\"fa fa-chevron-down\"></i>";
      moreText.style.display = "none";}
      else {
      dots.style.display = "none";
      document.getElementById("betingelsesbox").style.height="300px"
      btnText.innerHTML = "Læs mindre <i class=\"fa fa-chevron-up\"></i>";
      moreText.style.display = "inline";
      }
  }

  else{
    if (dots.style.display ==="none") {
      dots.style.display = "inline";
      document.getElementById("betingelsesbox").style.height="230px"
      btnText.innerHTML = "Læs mere <i class=\"fa fa-chevron-down\"></i>";
      moreText.style.display = "none";
      document.getElementById("footer").style.top="100%";
      }
      else {
      dots.style.display = "none";
      document.getElementById("betingelsesbox").style.height="615px"
      btnText.innerHTML = "Læs mindre <i class=\"fa fa-chevron-up\"></i>";
      moreText.style.display = "inline";
      document.getElementById("footer").style.top="155%";
      }
  }

}

