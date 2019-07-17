/**
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas except for the last two names, 
 * which should be separated by an ampersand. 
*/

function list(names){
    if (names.length == 0) {
      return '';
    } else if (names.length == 1) {
      return names[0].name;
    }
    else if (names.length == 2) {
      let lastTwo = names.slice(-2);
      let lastTwoString = lastTwo[0].name + ' & ' + lastTwo[1].name;
      return lastTwoString;
    } else {
      let nameString = [];
      let lastTwo = names.slice(-2);
      let lastTwoString = lastTwo[0].name + ' & ' + lastTwo[1].name;
      
      let nameList = names.slice(0, -2);
      for (name of nameList) {
        nameString.push(name.name);
      }
      nameString.push(lastTwoString);
      return nameString.join(', ');
    }
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))


//best code
function listBest(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

// clever code
function listClever(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }