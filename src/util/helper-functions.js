export function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}

export function shuffle_avoid_original(array) {
	const original = array.slice(0);
	var shuffled = shuffle(array);

    if (!arraysEqual(shuffled, original)) {
    	return shuffled;
    } else {
    	while (arraysEqual(shuffled, original)) {
        shuffled = shuffle(shuffled);
      }
      return shuffled;
    }
  }


export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}