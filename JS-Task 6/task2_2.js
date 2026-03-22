fetch("articles.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error ");
        }
        return response.json(); 
    })
    .then((data) => {
        data.length = 5;
        return data;
    })
    .then((articles) => {
        articles.forEach((article) => {
            let mainDiv = document.createElement("div");
            let titleH3 = document.createElement("h3");
            let descP = document.createElement("p");
            titleH3.textContent = article.title;
            descP.textContent = article.description;
            mainDiv.appendChild(titleH3);
            mainDiv.appendChild(descP);
            document.body.appendChild(mainDiv);
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });