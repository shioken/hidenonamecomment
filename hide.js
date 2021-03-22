comments = document.getElementsByClassName('comment');
d = 0;
for (i = 0; i < comments.length; i++) {
    const imgs = comments[i].getElementsByTagName('img');
    if (imgs.length == 0) {
        comments[i].hidden = true;
        d++;
    }
}

console.log(`remove comment: ${d}`);
