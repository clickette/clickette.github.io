function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
    return sParameterName[1];
    }}}
    const q = getUrlParameter('q');
    const qf = q.replaceAll('+', '%20');
    const qfc = decodeURIComponent(qf);
    checkForBangs();
    document.getElementById('searchbox').value = qfc;
    document.title = qfc + " - Clickette Search";
    $(".Post_Description_Text").keydown(function(e){
    if (e.keyCode == 13 && !e.shiftKey) {
    e.preventDefault();
    document.getElementById("searcharea").submit();
    return false;
    }});
    const queryString = window.location.search;
    if (queryString.includes("?raw=true")) {
      document.location.replace("/search/raw?q=" + q);
    }
    if (queryString.includes("&raw=true")) {
      document.location.replace("/search/raw?q=" + q);
    }
    $(window).scroll(function(e){ 
      var $el = $('.fixedElement'); 
      var isPositionFixed = ($el.css('position') == 'fixed');
      if ($(this).scrollTop() > 200 && !isPositionFixed){ 
        $el.css({'position': 'fixed', 'top': '0px'}); 
      }
      if ($(this).scrollTop() < 200 && isPositionFixed){
        $el.css({'position': 'static', 'top': '0px'}); 
      } 
    });