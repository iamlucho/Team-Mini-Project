$('#search-btn').on('click', function(e){
    e.preventDefault();

    var userinput = $('#search-text').val();
    
    var mediaFormat = $('#format').val();
    
    var querystring = '?q=' + userinput + '&format=' + mediaFormat;

    document.location.replace('search-results.html'+querystring);
   
});