$(document).ready(function () {
  wordCount();
  uniqueWordCount();
  avgWordLength();
  avgSentenceLength();
});

//word count
  function wordCount(){
    $("button").on("click", function (event) {
        event.preventDefault();
        var textToAnalyze = $("textarea").val();
        textToAnalyze = textToAnalyze.replace(/\s+/g, ' ');
        var textArray = textToAnalyze.split(" ");
        var wordCounter = textArray.length;

        $("dl").removeClass("hidden");
        $(".js-word-count").text("");
        $(".js-word-count").append(wordCounter);

    });
  };

//unique word count
  function uniqueWordCount(){
    $("button").on("click", function (event) {
        event.preventDefault();
        var textToAnalyze = $("textarea").val();
        textToAnalyze = textToAnalyze.replace(/\s+/g, ' ');
        var textArray = textToAnalyze.split(" ");
        var uniqueTextArray = []
        for(var i = 0; i < textArray.length; i+=1){
          if($.inArray(textArray[i],uniqueTextArray) === -1){
            uniqueTextArray.push(textArray[i]);
          };
        };
        console.log(uniqueTextArray);
        var uniqueWordCounter = uniqueTextArray.length;
        console.log(uniqueWordCounter);
        $("dl").removeClass("hidden");
        $(".js-unique-word-count").text("");
        $(".js-unique-word-count").append(uniqueWordCounter);

    });
  };

//avg word length
  function avgWordLength(){
    $("button").on("click", function (event) {
        event.preventDefault();

        //create array to work on
        var textToAnalyze = $("textarea").val();
        textToAnalyze = textToAnalyze.replace(/\s+/g, ' ');
        var textArray = textToAnalyze.split(" ");
        var wordCounter = textArray.length;

        //loop through array adding word lengths to total
        totalWordLength = 0
        for (var i = 0; i < textArray.length; i+=1){
          totalWordLength += textArray[i].length;
        }

        //divide total by number of words
        var avgWordLength = totalWordLength / wordCounter;

        console.log(totalWordLength);
        console.log(wordCounter);
        console.log(avgWordLength);
        $("dl").removeClass("hidden");
        $(".js-average-word-count").text("");
        $(".js-average-word-count").append(avgWordLength);

    });
  };

//avg sentence length
function avgSentenceLength(){
    $("button").on("click", function (event) {
        event.preventDefault();

        //create array of sentences
        var textToAnalyze = $("textarea").val();
        var textArray = textToAnalyze.replace(/\s+/g, ' ').split(" ");
        var sentenceArray = textToAnalyze.split("\n");

        //divide total words of sentences by total number of sentences
        var wordCounter = textArray.length;
        var avgSentenceLengthCount = wordCounter / sentenceArray.length;

        $("dl").removeClass("hidden");
        $(".js-average-sentence-length").text("");
        $(".js-average-sentence-length").append(avgSentenceLengthCount);

    });
  };
  