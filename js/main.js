function getCookie(name) {
    var arg  = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i    = 0;

    while (i < clen) {
        var j = i + alen;

        if (document.cookie.substring(i,j) == arg) {
            return 1;
        }

        i = document.cookie.indexOf(" ", i) + 1;

        if (i == 0) {
            break;
        }
    }

    return null;
}

function checkCookieConsent() {
    var offset = new Date().getTimezoneOffset();

    if ((offset >= -180) && (offset <= 0)) {
        var visit = getCookie("cookieconsent_status");

        if (visit == null) {
            $(".cookie-consent").fadeIn(400);
        }
    }
}

$(document).ready(function() {
    $(".cookie-consent-ok").click(function(){
        var expire = new Date();
        expire = new Date(expire.getTime()+7776000000);
        document.cookie = "cookieconsent_status=1; expires=" + expire + ";path=/";
        $(".cookie-consent").fadeOut(400);
    });

    $(".menu-button").click(function(){
        console.log("menu button clicked");
        $(".navigation-menu").fadeToggle(100);
    });

    checkCookieConsent();
});
