/*const data = ['Miltai', 'Druska', 'Vanduo', 'Kiausiniai'];

console.log(data);

const firstULDOM = document.querySelector('.list')[0];

const HTML =    '<li>Miltai</li>'
                '<li>Druska</li>'
                '<li>Vanduo</li>'
                '<li>Kiausiniai</li>';

firstDOM.innetHTML = HTML;

let HTML2 = ' '
for(const item of data){
    HTML2 += <li>${item}</li>;

}
firstULDOM.innerHTML2 = HTML2;*/

const data = ['Miltai', '  ', 'Druska', 'Vanduo', 'Kiausiniai'];
const data2 = ['Mikseris', 'Keptuva', 'Saukstukas',' ', 'Lekste'];
const firstULDOM = document.querySelectorAll('.list');

let HTML1 = ' '
for(const item of data1){
    if(item.length === 0){
        continue;
    }
    HTML1 += <li>${item}</li>;

}
firstULDOM.innerHTML1 = HTML1;


let HTML2 = ' '
for(const item of data2){
    if(item.trim().length === 0){
        continue;
    }
    HTML2 += <li>${item}</li>;

}
firstULDOM.innerHTML2 = HTML2;

//list - DOM elementas kuriame generuosime busima HTML
//items - gaunamas duomenu masivas

function renderList(listDOM, data){
    let HTML = '';
    for(const item of data){
        if(item.trim().length === 0){
            continue;
        }
        HTML += <li>${item}</li>;
    }

    listDOM.innerHTML = HTML;
}
renderList(uiDOM[0], data1)
renderList(uiDOM[1], data2)
