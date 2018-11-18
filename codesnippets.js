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


    /****************READ MORE - READ LESS***************/

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
      



