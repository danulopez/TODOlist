const input$$ = document.querySelector('input');
const button$$ = document.querySelector('.btn-add')
const list$$ = document.querySelector('ul')
const empty$$ = document.querySelector('.empty')

button$$.addEventListener('click', (event) => {
    event.preventDefault();
    const text = input$$.value;
    if (text !== ""){
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    list$$.appendChild(li);

    input$$.value = "";
    empty$$.style.display = "none";
    }
});

function addDeleteBtn () {
    const deleteBtn$$ = document.createElement('button')
    deleteBtn$$.setAttribute('class','btn-delete')
    deleteBtn$$.textContent = 'X';
    
    deleteBtn$$.addEventListener('click', (event) => {
        const item = event.target.parentElement;
        list$$.removeChild(item);

        const items = document.querySelectorAll('li');
        if (items.length === 0) {
            empty$$.style.display = 'block';
        }
    });
    return deleteBtn$$;
}