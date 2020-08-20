// quiz begins, no correst answer yet
var correct = 0;
// ask questions
var question = prompt('what is my name');
if (question.toUpperCase === 'JAY') {
    correct += 1;
}
var anotherquestion = prompt('favorite football club?');
if (anotherquestion.toUpperCase === 'MANCHESTER UNITED') {
    correct += 1;
}
var aquestion = prompt('favorite color?');
if (aquestion.toUpperCase === 'BLACK') {
    correct += 1;
}
var okayquestion = prompt('favorite body part?');
if (okayquestion.toUpperCase === 'BREAST') {
    correct += 1;
}
var nowquestion = prompt('shoe size?');
if (nowquestion.toUpperCase === 'COLOR') {
    correct += 1;
}

//output result
document.write('<p>you have got ' + correct + ' out of 5 questions correct.</p>');

//output rank
if (correct === 5) {
    document.write('<p><strong>you earned a gold medal!!</strong></p>');
}else if (correct >= 3) {
    document.write('<p><strong>you earned a silver medal!!</strong></p>');
}else if (correct >=1) {
    document.write('<p><strong>you earned a bronze medal</strong></p>');
}else {
    document.write('you earned no medal,work hard.');
}
