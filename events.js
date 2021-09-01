PHRASES = [["hello", "ahoy"], ["hi", "yo-ho-ho"], ["pardon me", "avast"], 
               ["excuse me", "arrr"], 
               ["my", "me"], ["friend", "bucko"], ["sir", "matey"], 
               ["madam", "proud beauty"], ["miss", "comely wench"], 
               ["stranger", "scurvy dog"], ["officer", "foul blaggart"], 
               ["where", "whar"], ["is", "be"], ["the", "th'"], ["you", "ye"],
               ["tell", "be tellin'"], ["know", "be knowin'"],
               ["how far", "how many leagues"], ["old", "barnacle-covered"],
               ["attractive", "comely"], ["happy", "grog-filled"], 
               ["nearby", "broadside"], ["restroom", "head"], ["restaurant", "galley"],
               ["hotel", "fleabag inn"], ["pub", "Skull & Scuppers"],
               ["bank", "buried trasure"], ["beer","grog"], ["of", "o'"], ["your", "yer"],
               ["and", "'n"], ["to", "t'"], ["shock", "Shiver me timbers!"], ["ocean", "briney deep"],
               ["trick", "run a rig"], ["leg", "peg leg"], ["cheat", "hornswaggle"]
              ];
    
    

function Capitalize(str)
// Returns: a copy of str with the first letter capitalized
{
  return str.charAt(0).toUpperCase() + str.substring(1);
}
        
function Translate()
// Returns: a copy of text with English phrases replaced by piratey equivalemts 
{
    var text = document.querySelector('#comment').value;

    for (var i = 0; i < PHRASES.length; i++) {
        var toReplace = new RegExp("\\b"+PHRASES[i][0]+"\\b", "i");
            
        var index = text.search(toReplace);
        while (index != -1) {
            if (text.charAt(index) >= "A" && text.charAt(index) <= "Z") {
                text = text.replace(toReplace, Capitalize(PHRASES[i][1]));
            } 
            else {
                text = text.replace(toReplace, PHRASES[i][1]);
            }
            index = text.search(toReplace);
          }
    }
    var outputElem = document.getElementById("output");
    outputElem.innerText = text;
}

document.addEventListener('DOMContentLoaded', () => {  
    document.querySelector('#myBtn').addEventListener('click',Translate);      
});

