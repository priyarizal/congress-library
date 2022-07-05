$(document).on("click", "#search-btn", function(){
    var searchVal = $("#search-val").val()
    var searchType = $("#search-type").val()
    if(searchVal != "" && searchType!= "Choose..."){
        var callUrl = "https://www.loc.gov/" + searchType + "/?q=" +  searchVal + "&fo=json&c=1&sp=1"
        $.ajax({
            url: callUrl,
            method: "GET"
        })
            .then(function(response){
                console.log(response)
            })
    }
})

function createContentCards(){
    
}