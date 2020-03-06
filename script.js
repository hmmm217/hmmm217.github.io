alert("Пожалуйста откройте с компьютера")
var h1 = document.getElementsByClassName("1H");
var v1 = document.getElementsByClassName("1V");
var h3 = document.getElementsByClassName("3H");
var v2 = document.getElementsByClassName("2V");
var h4 = document.getElementsByClassName("4H");
var v5 = document.getElementsByClassName("5V");
var v6 = document.getElementsByClassName("6V");
var v7 = document.getElementsByClassName("7V");


var h = [h1,v1,h3,v2,h4,v5,v6,v7];

var word1=["с","у","ф","и","з","м"];
var word2=["с","т","р","е","с","с"];
var word3=["с","у","л","т","а","н"];
var word4=["м","и","к","р","о","н"];
var word5=["к","о","р","о","н","а","в","и","р","у","с"];
var word6=["н","я","н","я"];
var word7=["и","л","ь","я"];
var word8=["у","с","ы"];

var words=[word1,word2,word3,word4,word5,word6,word7,word8];

var false3 = [false,false,false];
var false4 = [false,false,false,false];
var false6 = [false,false,false,false,false,false];
var false11 = [false,false,false,false,false,false,false,false,false,false,false];

var flajok = [false6,false6,false6,false6,false11,false4,false4,false3]


function check1(word,i) {
        word.forEach((symbol,j) => {
            if (h[i][j].getElementsByTagName("input")[0].value.toLowerCase() == symbol) {
                flajok[i][j] = true;
            } else {
                flajok[i][j] = false;
            }
        });
        var ff = true;
        flajok[i].forEach(elem => {
            ff*=elem;
        });
        if(ff) {
            word.forEach((element,j) => {
                h[i][j].getElementsByTagName("input")[0].style.backgroundColor = "goldenrod";
                //h1[i].getElementsByTagName("input")[0].style.color = "goldenrod";
                h[i][j].getElementsByTagName("input")[0].disabled = true;
            })
        }
}
words.forEach((word,i) => {
    setInterval(()=>{
        return check1(word,i)
    },100);
})