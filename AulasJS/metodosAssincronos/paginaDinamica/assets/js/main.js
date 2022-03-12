/*
const request = object => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(object.method, object.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};
*/

document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(element);
    }
});

async function loadPage(element) {
    const href = element.getAttribute('href');
    const response = await fetch(href);
    
    try {
        if (response.status !== 200) throw new Error('Page not found!');
        const html = await response.text();
        loadResult(html);
    } catch (error) {
        console.error(error);
    }

}

function loadResult(response) {
    const result = document.querySelector('.resultado');
    result.innerHTML = response;
}