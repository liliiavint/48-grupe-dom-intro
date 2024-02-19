const data = [
    [
        {
        title: 'Ingredientai',
        list:  ['Miltai', 'Druska', 'Vanduo', 'Kiausiniai'],
    },
    {
        title: 'Iranga/irankiai',
        list: ['Mikseris', 'Keptuva', 'Saukstukas',' ', 'Lekste'],
    }
], [
    {
    title: 'Ingredientai',
    list:  ['Miltai', 'Druska', 'Vanduo', 'Kiausiniai'],
},
{
    title: 'Iranga/irankiai',
    list: ['Mikseris', 'Keptuva', 'Saukstukas',' ', 'Lekste'],
}
]

]

/*const contentDOM = document.getElementById('content');

let HTML = '';

                for (const column of data)
                console.log(column);

                HTML +=`<div class="column">
                <h2>Ingredientai</h2>
                <ul class="list">
                    <li>Miltai</li>
                    <li>Druska</li>
                     <li>Vanduo</li>
                    <li>Kiaušiniai</li>
                </ul>
                </div>`*/
const contentDOM = document.getElementById('content');

let HTML = '';
    contentDOM.innerHTML = HTML;

for (const column of data)
console.log(column.list);
let listHTML = '';
    for(const item of column.list){
        if(item.trim().length === 0){
            continue;
        }
        listHTML += <li>${item}</li>

    }

HTML += `<div class="column">
<h2>${column.title}</h2>
<ul class="list">
    ${listHTML}
</ul>
</div>`;

contentDOM.innerHTML = HTML;