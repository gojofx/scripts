let span = document.querySelectorAll('span.ojoo-button');
for (let i = 0; i < span.length ; i++) {
    span[i].addEventListener('mouseover', e=>{
        let links = document.querySelectorAll('audio');
        console.log(links[0]);
    });
}