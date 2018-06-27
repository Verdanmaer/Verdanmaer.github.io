function getQuote() {
    
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp", 
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response){
        $("#qte").html(response.quoteText);
        $("#author").html("<br/>&dash; " + response.quoteAuthor + " &dash;");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +' (' + response.quoteAuthor + ')');
      }
    });
  }
  
  $(function() {
    getQuote();  
  });
  
  $('#new-quote').on('click', getQuote);