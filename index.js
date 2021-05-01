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

/*
///////////////////////////////////////////////////////////////////////
// I wanted to make the censor function useable without any global variables
// Also I wanted to keep all the internal workings private so no global variables are used
function sydsTextCensorer(wordToCensor, replaceWordWith, textToBeCensored){
  let censoredText = ""
  let censoredWordsTally = 0
  keepCensoringText = 1
 
  while (keepCensoringText){   

    // Censor the text
    censoredText = textToBeCensored.replace(wordToCensor,replaceWordWith)

    // If the censored text is different to the uncensored text then there is more text to censor
    // Else STOP censoring text
    if (censoredText !== textToBeCensored){ 
      censoredWordsTally++
      textToBeCensored = censoredText}
    else 
      keepCensoringText = 0
  }
  // I dont want to use global variables, so I'll return an array.
  return [censoredWordsTally,censoredText]
}

// Get some input
let textToCensor = prompt(`    ${uncensoredText}\n\nWhich number shall I censor?`)  
let replacementText = prompt(`What shall I replace ${textToCensor} with?`)

// Do the censoring
let result = sydsTextCensorer(textToCensor, replacementText, uncensoredText)

// Show what we replaced and how many times
if (result[0]===0)
  alert(`${textToCensor} was not found in the text`)
else
  alert(`I replaced the word "${textToCensor}" ${result[0]} times with ${replacementText}`)

  // Display the resulting censor
alert(`Here is the censored text.\n\n    ${result[1]}`)

///////////////////////////////////////////////////////////////////////
*/


// Spoke to Nico...He suggests doing it without using .replace() property method
// So... Here we go

function sydsTextCensorer(wordToCensor, replaceWordWith, textToBeCensored){
  let censoredText = ""
  let censoredWordsTally = 0
  let word = ""
 
  // Lets check every charactor and start building words to check censoring
  for (i = 0 ; i < textToBeCensored.length; i++)
  
  // Lets check every charactor so we can build words to be censored
  if (textToBeCensored[i]!==" " )
    word+=textToBeCensored[i]
  // We have seen a space so lets check if our word should be censored  
  else if (word===wordToCensor){
    // The word we have seen matches our censor so we replace it 
    censoredText += replaceWordWith + " "
    censoredWordsTally++ 
    word = "" }
  else {
    // The word we have seen is OK so we add it to censored text
    censoredText += word + " " 
    word = ""}

  // I dont want to use global variables, so I'll return an array.
  return [censoredWordsTally,censoredText]
}

// Get some input
let textToCensor = prompt(`    ${uncensoredText}\n\nWhich number shall I censor?`)  
let replacementText = prompt(`What shall I replace ${textToCensor} with?`)

// Do the censoring
let result = sydsTextCensorer(textToCensor, replacementText, uncensoredText)

// Show what we replaced and how many times
if (result[0]===0)
  alert(`${textToCensor} was not found in the text`)
else
  alert(`I replaced the word "${textToCensor}" ${result[0]} times with ${replacementText}`)

// Display the resulting censored text
alert(`Here is the censored text.\n\n    ${result[1]}`)

// Will try the below but I have to check for new lines to retain paragraph format
// if (textToBeCensored[i]>'a' && textToBeCensored[i]<'z' || textToBeCensored[i]>'A' && textToBeCensored[i]<'Z')
