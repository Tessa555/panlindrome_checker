function checkPalindrome(){

    var word = prompt('input a word')

    if(word != null){

        return word.split('').reverse().join('') === word

    }

}
