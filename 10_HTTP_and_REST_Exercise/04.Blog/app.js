function attachEvents() {
    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    buttonLoadPosts.addEventListener('click', viewAllPosts);

    const buttonViewPost = document.getElementById('btnViewPost');
    buttonViewPost.addEventListener('click', viewPost);

    const selector = document.getElementById('posts');
    const BASE_URL_POSTS = 'http://localhost:3030/jsonstore/blog/posts/';
    const BASE_URL_COMMENTS = 'http://localhost:3030/jsonstore/blog/comments/';

    function viewAllPosts(event){
        selector.innerHTML = '';
        fetch(BASE_URL_POSTS)
            .then((res) => res.json())
            .then((posts)=> 
            {
                for (const post in posts){
                    const postId = post;
                    const postInfo = posts[post];
                    const optionField = document.createElement('option');
                    optionField.value = postId;
                    optionField.textContent = postInfo.title.toUpperCase();
                    selector.appendChild(optionField);

                }
            })
            .catch ((err)=> console.log(err))
    }

    function viewPost(event){
        const selectedPostID = selector.value;
        console.log(selectedPostID);
        const postTitle = document.getElementById('post-title');
        const postBody = document.getElementById('post-body');
        const postsContainer = document.getElementById('post-comments');
        postsContainer.innerHTML = '';
        postTitle.textContent='';
        postBody.textContent='';


        fetch(`${BASE_URL_POSTS}${selectedPostID}`)
            .then((res) => res.json())
            .then((post)=> 
            {
                postTitle.textContent = post.title;
                postBody.textContent = post.body;

            })
            .catch ((err)=> console.log(err))


        fetch(BASE_URL_COMMENTS)
            .then((res)=> res.json())
            .then((comments) => {
                for (const id in comments){
                    const currentComment = comments[id];
                    if (currentComment.postId===selectedPostID){
                        const commentLi = document.createElement('li');
                        commentLi.id = currentComment.id;
                        commentLi.textContent = currentComment.text;
                        postsContainer.appendChild(commentLi);
                    }
                }
            })
            .catch((err) => console.log(err))
    }
}

attachEvents();