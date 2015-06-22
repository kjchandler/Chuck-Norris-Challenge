// Don't worry about what's going on here!
function getJoke(cb) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if (req.readyState != 4 || (req.status !=200 && req.status != 304)) return;
        cb(req.responseText);
	}
	req.open("GET", "http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]");req.send();
}
// --------------------------------------

getJoke(function(res) {
    var joke = res; 
    
    // your code here
    //var decode = JSON.stringify(joke);
//console.log(decode);
   var input = "{ \"type\": \"success\", \"value\": { \"id\": 350, \"joke\": \"Chuck Norris starts everyday with a protein shake made from Carnation Instant Breakfast, one dozen eggs, pure Colombian cocaine, and rattlesnake venom. He injects it directly into his neck with a syringe.\", \"categories\": [] } }"
   var getJoke = JSON.parse(input);
    console.log(getJoke.type);
    console.log(getJoke.value);
    
   
});

