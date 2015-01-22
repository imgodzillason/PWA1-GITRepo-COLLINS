/**
 Jacob Collins
 1/16/15
 Week 2 - Analyze Buggy Search
 */



// Create privatized scope using a self-executing function
(function(){ //anonymous function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //results variable
		searchInput = document.forms[0].search, //search input variable
		currentSearch = '' //set current search to blank
	;
	
	// Validates search query
	var validate = function(query){ //set validation variable equal to query function //edit: error fixed, changed == to =; updated var name

		// Trim whitespace from start and end of search query
		while(query.charAt(0) == " "){ //while character query is at 0, create blank space //edit: error fixed, changed = to ==
			query = query.substring(1, query.length); //query equal to length of query as long as it's between 1 and length of query
		}//close while loop //edit: error fixed, removed semi-colon
		while(query.charAt(query.length-1) === "") { //while returning characters equal to length of query characters minus 1
			query = query.substring(0, query.length - 1); //query is equal to length of query between 0 and query length minus 1
		} //edit: error fixed, removed semi-colon

		// Check search length, must have 3 characters
		if(query.length < 3){ //if the query length is less than 3
			//notify user that query is too small and to try to search again
			alert("Your search query is too small, try again."); //edit: error fixed, added end quotation

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //give focus to searchInput variable
			return;
		} //close if loop //edit: fixed error, removed semi-colon

		search(query); //search value of query
	};
	
	// Finds search matches
	var search = function(query){ //set search variable to query function //edit: error fixed, added front curly brace
		
		// split the user's search query string into an array
		var queryArray = query.split(" "); //set variable queryArray equal to the string of elements in the query array //edit: error fixed .join to .split
		
		// array to store matched results from database.js
		var results = []; //results variable equal to empty array

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) { //loop through as long as i is less than j and then add 1 to i variable

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //return position of occurrence in database for variable dbTitleEnd
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); //convert string to lowercase letters for variable dbitem //edit: error fixed camelcase toLowerCase from tolowercase

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { //loop through query array as long as ii is less than the length of the query
				var qitem = queryArray[ii].toLowerCase(); //return query array in lowercase for variable qitem //fixed camelcase toLowerCase from tolowercase

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //set compare variable for the index location of qitem in dbitem variable
				if (compare !== -1) { //if compare does not equal -1
					results.push(db[i]); //push results of db index
				} //close if statement //edit: fixed error, removed semi-colon
			} //close for loop //fixed error, removed semi-colon, added end curly brace
		} //close initial for loop //error fixed, removed semi-colon, added end curly brace
		
		results.sort(); //sort elements of array
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //if the results length is equal to 0
			noMatch(); //run noMatch function
		}else{
			showMatches(results); //otherwise run showMatches function for variable results
		} //close else statement //edit: error fixed, removed semi-colon, fixed end curly brace
	}; //close if statement
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //noMatch variable is equal to anonymous function
		var html = ''+ //html variable is equal to query plus
			'<p>No Results found.</p>'+ //show text
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //show text
		;
		resultsDIV.innerHTML = html; //return html content of element html
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //showMatches variable is equal to results function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //display results text
			title, //display title
			url //display url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //while the length of the results is greater than i, continue loop
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //titleEnd variable equal to the position of the first occurrence within variable results
			title = results[i].subString(0, titleEnd); //title variable equals the characters extracted from the...
			// results array between 0 and the length of titleEnd
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //obtain url from results array
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //provide link for video
		} //edit: error fixed, removed semi-colon, added end curly brace
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	}; //end function process
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { //execute document.form when form is submitted
		var query = searchInput.value; //query variable is equal to the value returned for searchInput
		validate(query); //run validate query function //edit: error fixed, fixed variable name validqte to validate

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false; //return false
	}; //edit: fixed error, added end curly brace

})();//run script