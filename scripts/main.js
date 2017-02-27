$(document).ready(function(){
  $('ul li').hover(
    function(){
     $(this).addClass('active');
    },
    function(){
     $(this).removeClass('active');    
    }
  );

});

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-style','solid');
        $(this).css('outline-color','#FF0000');
        });
    });
 /* sliding panel*/
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/contactiv.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/contactiv.jpg');
    }
}

/* quoting */
    var quotePara = document.querySelector('section p');
    var quoteJson;
    getQuotes("https://github.com/dancozianu/codecademy.github.io/blob/master/quotes.json", populateJson);
    var intervalID = window.setInterval(showQuote, 10000);
    function getQuotes("https://github.com/dancozianu/codecademy.github.io/blob/master/quotes.json", callback) {
      var request = new XMLHttpRequest();
      request.open('GET', "https://github.com/dancozianu/codecademy.github.io/blob/master/quotes.json");
      request.responseType = 'json';
      request.send();
      request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
          callback(request.response);
        }
      };
    }
    function populateJson(response) {
      quoteJson = response;
    }
    function showQuote() {
      var random = Math.floor((Math.random()*25));
      quotePara.textContent = quoteJson[random].quote + ' -- ' + quoteJson[random].author;
    }
