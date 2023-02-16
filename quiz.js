


const quizdata =[
    {
        question:"ما هي أطول سورة في القرآن الكريم؟",
        a:"البقرة",
        b:"النساء",
        c:"المائدة",
        d:"ال عمران",
        correct:"a",

    },
    {
        question:"قال تعالى(وزرابي مبثوثة)سورة الغاشية(16) المقصود بـ(زرابي) هي …؟",
        a:"الطنافس",
        b:"الأسرة ",
        c:"الوسائد ",
        d:"الفرش",
        correct:"a",

    },
    {
        question:"ما هي السورة التي بدأت وانتهت بالتسبيح؟",
        a:"البقرة",
        b:"الحشر",
        c:"المائدة",
        d:"ال عمران",
        correct:"b",

    },




]

var qu=document.getElementById("quiz");
var ans=document.querySelectorAll(".answer");
var quel=document.getElementById("question");
var text1=document.getElementById("1-text");
var text2=document.getElementById("2-text");
var text3=document.getElementById("3-text");
var text4=document.getElementById("4-text");
var sub=document.getElementById("submit");


let currentquiz=0;
let score=0;
loadquiz()
function loadquiz(){
    deslectanswer()
    const currentquizdata=quizdata[currentquiz]
    quel.innerText=currentquizdata.question
    text1.innerText=currentquizdata.a
    text2.innerText=currentquizdata.b
    text3.innerText=currentquizdata.c
    text4.innerText=currentquizdata.d


}
function deslectanswer()
{
    ans.forEach(ans1 => ans1.checked = false)
}

function getselected()
{
let answer
ans.forEach(ans1 => {
    if(ans1.checked)
    {
        answer = ans1.id 
    }

})
return answer
}


sub.addEventListener('click',() =>{

    const answer =getselected()
    if(answer)
    {
    if(answer===quizdata[currentquiz].correct)
    {
    score++;
    }
    currentquiz++;
    if(currentquiz<quizdata.length)
    {
        loadquiz()
    }
    else
    {
        qu.innerHTML=`
        <h2>you answered ${score}/${quizdata.length}question correctly</h2>
        <button onclick= "location.reload()">Reload</button>
        `
    }
}
})

