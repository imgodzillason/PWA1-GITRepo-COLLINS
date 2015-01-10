// Create privatized scope using a self-executing function
(function(){ //anonymous function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //results variable
		searchInput = document.forms[0].search, //search input variable
		currentSearch = '' //set current search to blank
	;
	
	// Validates search query
	var validqte == function(query){ //set validation variable equal to query function
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //while character query is at 0, create blank space
			query = query.substring(1, query.length); //query equal to length of query as long as it's between 1 and length of query
		};//close while loop
		while(query.charAt(query.length-1) === ""){ //while returning characters equal to length of query characters minus 1
			query = query.substring(0, query.length-1); //query is equal to length of query between 0 and query length minus 1
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //if the query length is less than 3
			//notify user that query is too small and to try to search again
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //give focus to searchInput variable
			return;
		}; //close if loop
		
		search(query); //search value of query
	};
	
	// Finds search matches
	var search = function(query) //set search variable to query function
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //set variable queryArray equal to the string of elements in the query array
		
		// array to store matched results from database.js
		var results = []; //results variable equal to empty array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //loop through as long as i is less than j and then add 1 to i variable
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //return position of occurrence in database for variable dbTitleEnd
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //convert string to lowercase letters for variable dbitem
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //loop through query array as long as ii is less than the length of the query
				var qitem = queryArray[ii].tolowercase(); //return query array in lowercase for variable qitem
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //set compare variable for the index location of qitem in dbitem variable
				if(compare !== -1){ //if compare does not equal -1
					results.push(db[i]); //push results of db index
				}; //close if statement
			; //close for loop
		; //close initial for loop
		
		results.sort(); //sort elements of array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //if the results length is equal to 0
			noMatch(); //run noMatch function
		}else{
			showMatches(results); //otherwise run showMatches function for variable results
		}; //close else statement
	}; //close if statement
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();