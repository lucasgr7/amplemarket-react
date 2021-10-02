const DEFAULT_SNIPPETS = [{
    'title': 'Welcome message',
    'text': 'Welcome to our company my friend'
},{
    'title': '😀',
    'text': '😀😀😀'
}]

export const fetch = () => {
    if(!localStorage['snippets']){
        localStorage['snippets'] = JSON.stringify(DEFAULT_SNIPPETS);
    }
    return JSON.parse(localStorage['snippets']);
}

export const add = (item) => {
    if(!item || !item.text) return;
    if(!item.title){
        item.title = 'Untitled new snippet';
    }
    let data = fetch();
    data.push(item);

    // persist
    localStorage['snippets'] = JSON.stringify(data);
}

export const removeSnippet = (item) => {
    if(!item || !item.title) return;
    let data = fetch();
    for(let i = 0; i < data.length; i++){
        if (item.title === data[i].title){
            data.splice(i, 1)
        }
    }
    // persist
    localStorage['snippets'] = JSON.stringify(data);
}
