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


    object = getParams(window.location.href);

    function fillForm(){
        var oldAddress = object.address;
        var newAddress = oldAddress.replace(/[\+,]/g, " ");

        document.getElementById("firstname").value = object.firstname;
        document.getElementById("lastname").value = object.lastname;
        document.getElementById("email").value = object.email;
        document.getElementById("phone").value = object.phone;
        document.getElementById("address").value = newAddress;
    }

    function thankYou(){
        thankYouName = "Tak for din støtte " + object.firstname + " " + object.lastname + ".";
        thankYouElement = document.getElementById("thankYouName");
        thankYouElement.innerHTML = thankYouName;
    }



