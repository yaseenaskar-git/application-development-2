const loadingMessage = document.querySelector("#loading-message");

const errorMessage = document.querySelector("#error-message");

const postsContainer = document.querySelector("#posts-container");


async function getPosts() { //creating a function

    loadingMessage.textContent = "Loading posts...";
    errorMessage.textContent = "";

    try {
    // Fetch the data
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    // Check response.ok
    if (response.ok === false) {
        throw new Error("Failed to get data!");
        } else {

        // Parse the JSON response
        const posts = await response.json();

        // Display the success message
        loadingMessage.textContent = "Posts loaded successfully!";

        // Display each post on the webpage
        posts.forEach(function(post) {
            const postElement = document.createElement("article");

            const postTitle = document.createElement("h3");
            postTitle.textContent = post.title;

            const postBody = document.createElement("p");
            postBody.textContent = post.body;

            postElement.appendChild(postTitle);
            postElement.appendChild(postBody);

            postsContainer.appendChild(postElement);
        });
    }

    } catch (error) {
        // Display an error message on the webpage
        loadingMessage.textContent = "";
        errorMessage.textContent = "Failed to load data. Please try again!";

        // Display the technical error in the console
        console.error(error);
    }

}

getPosts();




