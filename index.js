const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";


// Sorry guyz, I'm not using your text because I could not tell if my solution was working.
// Maybe I'm a bit dislexic?
// So I did a similar solution, but I don't think I did it thee way you wanted
// Did you want me to turn the string into an array? and complete it that way?

let uncensoredText =
  "one two three four five six seven eight nine ten\n \
   one two three four five six seven eight nine ten\n \
   one two three four five six seven eight nine ten\n \
   one two three four five six seven eight nine ten\n \
   one two three four five six seven eight nine ten\n "

function sydsTextCensorer(wordToCensor, replaceWordWith, textToBeCensored){
  let censoredText = ""
  let censoredWordsTally = 0
  keepCensoringText = 1
  while (keepCensoringText){
    censoredText = textToBeCensored.replace(wordToCensor,replaceWordWith)
    //If no text was censord then exit loop
    if (censoredText !== textToBeCensored){ 
      censoredWordsTally++
      textToBeCensored = censoredText}
    else 
      keepCensoringText = 0
  }
  return [censoredWordsTally,censoredText]
}

let textToCensor = prompt(`What word shall I censor?`)  
let replacementText = prompt(`What shall I replace ${textToCensor} with?`)

let result = sydsTextCensorer(textToCensor, replacementText, uncensoredText)
alert(`I replaced the word "${textToCensor}" ${result[0]} times`)
alert('Here is the censored text.\n\n  '+ result[1])