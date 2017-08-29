export function parseCode(string){
    return string.split('\n')
    .map(x=> x.replace(/"/g, '\''))
    .map(x=> x.replace(/\s{4}/g, '\\t'))
    .map(x=> `"${x}"`);
}
