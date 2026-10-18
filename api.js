
async function getPosts() { //creating a function

const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"); //fetching the data

// checking response.ok

if (response.ok === false) { 
    console.log("Error: Failed to get data!");
} else {
    const posts = await response.json(); //reading the data

    console.log(posts);
}

}

getPosts();

