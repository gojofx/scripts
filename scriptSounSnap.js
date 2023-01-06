let span = document.querySelectorAll('span.ojoo-button');
let download = document.querySelectorAll('a.ss_download');
let links = undefined;

for (let i = 0; i < span.length ; i++) {
    span[i].addEventListener('click', e=>{
        links = (document.querySelectorAll('audio'));
        let link = "https://" + window.location.host + links[i].getAttribute("src");
        download[i].setAttribute("href", link );        
    });
}
