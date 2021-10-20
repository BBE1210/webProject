console.log('Assignment 2');
alert('This program prints your favorite motto.');

function getMotto()
{ let motto = prompt("What is your favorite Motto?");
return motto
};

function getMottocnt()
{ let mottocount = parseFloat(prompt("How many times do you wish to display the motto?"));
return mottocount
};

let motto = getMotto();
let mcount= getMottocnt();

function printMotto(motto, mcount) {

    window.onload = (event) =>
    {
    let display = '';
    let i = 1;
    while (i <= mcount)
    {display += i +  '. ' +motto  + '**parameter'+'<br>'; i++;}
    document.getElementById('phrase1').innerHTML = display;
    };
}
printMotto(motto, mcount)


//// For Loop
//window.onload = (event) =>
//{
//let display = '';
//for (let i =1; i <= mcount; i++)
//display += i + '.' + ' ' +motto +'<br>'; }
//document.getElementById('phrase1').innerHTML = display;
//};



    

 




