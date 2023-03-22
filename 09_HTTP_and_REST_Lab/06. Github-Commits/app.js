function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/'
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commits = document.getElementById('commits');
    fetch(`${BASE_URL}${username}/${repo}/commits`)
        .then ((res) => res.json())
        .then ((data)=>{
            data
            .forEach(({commit}) => {
                const li =document.createElement('li');
                li.textContent=`${commit.author.name}: ${commit.message}`;
                commits.appendChild(li);
            })
        })

        .catch((err)=>{
            console.error(err);
        })
}