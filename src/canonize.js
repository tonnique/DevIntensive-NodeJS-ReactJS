export default function canonize(url) {
    //const re = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
    const re = new RegExp('^(?:https?\\:)?\\@*(?:(?://)?.*?/)?\\@*(.*?)(?:(?:\\?|/).*)?$','');
    const username = url.match(re)[1];
    //const username = url.match(re);
    return '@' + username;
}
