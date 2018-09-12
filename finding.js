$(function(){
	btn = $('button#btn')
	para = $('div#content > p')

	function deletePrepositions(){
		var prepositions = ["aboard", "about", "above", "across", "after", "against", "along", "amid", "among", "around", "as", "at", "before", "behind", "below", "beneath", "beside", "between", "beyond", "but", "by", "concerning", "considering", "despite", "down", "during", "except", "following", "for", "from", "in", "inside", "into", "like", "minus", "near", "next", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "past", "per", "plus", "regarding", "round", "save", "since", "than", "through", "to", "toward", "under", "underneath", "unlike", "until", "up", "upon", "versus", "via", "with", "within", "without"]
		para.each(function(){
			var paraText = $(this).text().replace(/[^a-z0-9\s]/gi, '').toLowerCase()
			console.log("Without Special Characters ==> "+paraText)

			var paraTextArray = paraText.split(" ");
			console.log(paraTextArray)

			for(var i = 0; i < prepositions.length; i++){
				paraTextArray = $.grep(paraTextArray, function(element){
					return element != prepositions[i]
				})
			}
			console.log(paraTextArray)

			listingItems(paraTextArray)
		})
	}

	function listingItems(arr){
		var resultsArray = [], resultsArrayElementFrequency = []
		for(var i=0; i < arr.length; i++){
			if(resultsArray.includes(arr[i])){
				position = $.inArray(arr[i], resultsArray)
				console.log(resultsArray +" ==> "+ arr[i] +" - "+ position)
				if(position >= 0){
					resultsArrayElementFrequency[position] += 1
				}
			}else{
				resultsArray.push(arr[i])
				resultsArrayElementFrequency.push(1)
			}
		}

		ulElement = $('<ul/>', {class: "repeats"})
		ulElement.appendTo('#list')

		if(resultsArray.length > 0){
			for(var i=0; i < resultsArray.length; i++){
				ulElement.append('<li>' + resultsArray[i] + ' - '+ resultsArrayElementFrequency[i] +'</li>')
			}
		}else{
			ulElement.append('<li>No words have left</li>')
		}

	}


	btn.click(function(){
		deletePrepositions()
	})
})