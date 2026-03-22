const articlesData = [
    { "userId": 10, "title": "Article Title Number 1", "description": "Article Description Number 1" },
    { "userId": 5, "title": "Article Title Number 2", "description": "Article Description Number 2" },
    { "userId": 5, "title": "Article Title Number 3", "description": "Article Description Number 3" },
    { "userId": 5, "title": "Article Title Number 4", "description": "Article Description Number 4" },
    { "userId": 5, "title": "Article Title Number 5", "description": "Article Description Number 5" },
    { "userId": 5, "title": "Article Title Number 6", "description": "Article Description Number 6" }
];

const getArticles = (data) => {
    return new Promise((resolve, reject) => {
        if (data.length > 0) {
            resolve(data); 
        } else {
            reject("No Data Found"); 
        }
    });
};

getArticles(articlesData)
    .then((articles) => {
        articles.length = 5; 
        return articles;
    })
    .then((selectedArticles) => {
        for (let i = 0; i < selectedArticles.length; i++) {
            let mainDiv = document.createElement("div");
            let titleH3 = document.createElement("h3");
            let descP = document.createElement("p");

            titleH3.textContent = selectedArticles[i].title;
            descP.textContent = selectedArticles[i].description;

            mainDiv.appendChild(titleH3);
            mainDiv.appendChild(descP);

            document.body.appendChild(mainDiv);
        }
    })
    .catch((error) => console.log(error));