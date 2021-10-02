const DEFAULT_SNIPPETS = [{
    'title': 'Welcome message',
    'text': 'Welcome my dear friend'
},{
    'title': 'Goodbye message',
    'text': 'Goodbye my friend'
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
