'use sctrict';
(function(){
const request = new XMLHttpRequest();

request.open("GET", "js/bd.json", true);
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

request.addEventListener('readystatechange', () => {
    if (request.readyState == 4 && request.status === 200) {
        console.log(request.response);
    const data = JSON.parse(request.response);
    }
});
})();
