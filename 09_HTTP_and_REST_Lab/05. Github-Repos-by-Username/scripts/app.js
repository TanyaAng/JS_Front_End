function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/'
	const username = document.getElementById('username').value;
	const ul = document.getElementById('repos');
	fetch(`${BASE_URL}${username}/repos`)
		.then ((res) => res.json())
		.then ((data)=>{
			data
			.forEach((repo)=>{
				const li = document.createElement('li');
				const a = document.createElement('a');

				a.href = repo.html_url
				a.textContent=`${repo.full_name}`;

				li.appendChild(a);				
				ul.appendChild(li);
			})
		})
		.catch((err)=>{
			const li = document.createElement('li');
			li.textContent = err;
			ul.appendChild(li);
		})

}