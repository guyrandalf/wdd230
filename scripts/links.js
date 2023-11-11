const baseURL = "https://guyrandalf.github.io/wdd230/";
const linksURL = "https://guyrandalf.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);        
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

function displayLinks(lessons) {
    const list = document.getElementById('linksList');
  
    lessons.forEach((lesson) => {
      lesson.links.forEach((link) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${lesson.lesson}: `;
        const anchor = document.createElement('a');
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        listItem.appendChild(anchor);
        list.appendChild(listItem);
      });
    });
  }
  

  window.onload = function () {
    getLinks();
  };
