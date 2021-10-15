const localStorageContent = localStorage.getItem('names');

let names;
if (localStorageContent === null) {
    names = [];
} else { 
 names = JSON.parse(localStorageContent);
}
names.push('Juan');
names.push('Walter White');
names.push('JOhn Doe');

localStorage.setItem('names', JSON.stringify(name));
