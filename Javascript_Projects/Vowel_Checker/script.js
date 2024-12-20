function checkVowels(){
    var text = document.getElementById("inputText").value;
    var result = document.getElementById("result");
    var vowelCount = 0;
    // convert text into lowercase
    text = text.toLowerCase();

    for(var i = 0 ;i < text.length; i++){
        if(isVowel(text[i])){
            vowelCount++;
        }
    }
    result.innerHTML = "Number of vowels in the text :"+vowelCount;
}
function isVowel(char){
    var vowel = ['a','e','i','o','u'];
    return vowel.includes(char);
}