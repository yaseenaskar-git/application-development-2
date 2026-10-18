const loadingMessage = document.querySelector("#loading-message");

const errorMessage = document.querySelector("#error-message");

const postsContainer = document.querySelector("#posts-container");

const postForm = document.querySelector("#post-form");

const postTitle = document.querySelector("#post-title");

const postBody = document.querySelector("#post-body");

const postMessage = document.querySelector("#post-message");

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

// Listen for the form submission
postForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get the values entered by the user
    const newPost = {
        title: postTitle.value,
        body: postBody.value,
        userId: 1
    };

    // Display a message while submitting
    postMessage.textContent = "Submitting post...";

    try {
        // Send the POST request
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        // Check whether the request succeeded
        if (response.ok === false) {
            throw new Error("Failed to create post!");
        }

        // Parse the response
        const createdPost = await response.json();

        // Display the result
        postMessage.textContent =
            `Post created successfully! ID: ${createdPost.id}`;

        // Create an article for the new post
        const postElement = document.createElement("article");

        const titleElement = document.createElement("h3");
        titleElement.textContent = createdPost.title;

        const bodyElement = document.createElement("p");
        bodyElement.textContent = createdPost.body;

        // Add the title and body to the article
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);

        // Add the article to the posts section
        postsContainer.appendChild(postElement);

        // Clear the form
        postForm.reset();

        console.log("Created post:", createdPost);

    } catch (error) {
        postMessage.textContent =
            "Sorry, we couldn't create your post. Please try again.";

        console.error(error);
    }
});
