const data = [
    [
        {
        title: 'Ingredientai',
        list:  ['Miltai', 'Druska', 'Vanduo', 'Kiausiniai'],
    },
    {
        title: 'Iranga/irankiai',
        list: ['Mikseris', 'Keptuva', 'Saukstukas', 'Lekste'],
    }
], [
    {
    title: 'Ingredientai',
    list:  ['Kiausiniai', 'Miltai', 'Druska', 'Vanduo', ],
},
{
    title: 'Iranga/irankiai',
    list: ['Lekste', 'Mikseris', 'Keptuva', 'Saukstukas'],
}
]

]

/*onst contentDOM = document.getElementById('content');

let HTML = '';
c
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
const contentDOM = document.getElementById('container');

let HTML = '';

for (const column of data) {
    console.log(column[0].list);
    console.log(column[1].list);

    let listHTML = '';
    for (const item of column[0].list) {
        listHTML += `<li>${item}</li>`;
    }

    let listHTML1 = '';
    for (const item1 of column[1].list) {
        listHTML1 += `<li>${item1}</li>`;
    }

    HTML += `<div class="column">
    <div><h2>${column[0].title}</h2></div>
    <div class="list">
        ${listHTML}
    </div>
    </div>
    <div class="column">
    <div><h2>${column[1].title}</h2></div>
    <div class="list">
        ${listHTML1} 
    </div>
    </div>`;
}


/*const contentDOM = document.getElementById('container');

let HTML = '';

data.forEach(column => {
    column.forEach(column1 => {
        let listHTML = '';
       column1.list.forEach(item => {
            listHTML += `<li>${item}</li>`;
        });
    HTML += `<div class="column">
    <div><h2>${column1.title}</h2></div>
    <div class="list">
        ${listHTML}
    </div>
    </div>`
   
});
});*/