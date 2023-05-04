async function fetchPosts() {
    // Write logic here
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataw = await response.json();
    const final_data = dataw.slice(0,10);
    console.log(final_data);
    for(let i of final_data)
        {
            console.log("title: ", i.title);
            console.log("body : ", i.body);
        }
}
  
fetchPosts();