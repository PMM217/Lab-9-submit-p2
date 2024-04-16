//get the div where you want to print the lyrics
const lyricsDiv = document.getElementById("song");

//Create Loop to print Lyrics on screen

for (let i = 99; i > 0; i--) {

    let printLyrics = i + " bottles of beer on the wall,<br>" +
        i + " bottles of beer.<br>" +
        "Take one down, pass it around,<br>";

    //Here we check if its the last verse of song
    if (i - 1 === 0) {

        //if the above is true the bottom line will be printed in the program stating there are no more bottles on the wall
        printLyrics += "No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall <br><br>";

    } else {

        //otherwise continue to print the normal lyrics
        printLyrics += (i - 1) + "bottles of beer on the wall. <br><br>";
    }

    //Here we use the concatenation operator in JS to add or "Append" to existing content
    lyricsDiv.innerHTML += printLyrics;


}