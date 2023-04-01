window.addEventListener('load', solve);

function solve() {
    const inputDOMelements={
        genre: document.getElementById('genre'),
        songName: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    }

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongHandler);

    const collectionCtn = document.querySelector('#all-hits > .all-hits-container');

    const savedCtn = document.querySelector('#saved-hits > .saved-container')

    let songs=[];

    let total_likes = 0;
    const totalLikesParagraph = document.querySelector('#total-likes > .likes > p');

    function addSongHandler(event){
        if (event){
            event.preventDefault();
        }

        inputData = Object.values(inputDOMelements);
        const isInvalidInput = inputData.some(el => el.value ==='');
        if (isInvalidInput){
            return;
        }

        let song ={
            genre: inputDOMelements.genre.value,
            name: inputDOMelements.songName.value,
            author: inputDOMelements.author.value,
            date: inputDOMelements.date.value
        }

        songs.push(song);
        let divCtn = createElement('div','','',['hits-info'], '',collectionCtn);
        createElement('img', '', '', '', {'src':"./static/img/img.png"}, divCtn);
        createElement('h2', `Genre: ${song.genre}`, '', '','',divCtn);
        createElement('h2', `Name: ${song.name}`, '', '','',divCtn);
        createElement('h2', `Author: ${song.author}`, '', '','',divCtn);
        createElement('h3', `Date: ${song.date}`, '', '','',divCtn);
        const saveBtn = createElement('button', `Save song`, '', ['save-btn'],'',divCtn);
        const likeBtn = createElement('button', `Like song`, '', ['like-btn'],'',divCtn);
        const deleteBtn = createElement('button', `Delete`, '', ['delete-btn'],'',divCtn);

        saveBtn.addEventListener('click', saveSongHandler);
        likeBtn.addEventListener('click', likeSongHandler);
        deleteBtn.addEventListener('click', deleteSongHandler);

        inputData.forEach(el => el.value='');
    }

    function saveSongHandler(event){
        const parent = event.target.parentElement;
        const nameHeader = parent.querySelector(':nth-child(3)');
        const nameHeaderValue = nameHeader.textContent.split(' ');
        const songName = nameHeaderValue[1];
        console.log(songName);
        parent.remove();

        console.log(songs);

        let currentSong = songs.find(song => song.name === songName);
        console.log(`Current song: ${currentSong}`);

        let divCtn = createElement('div','','',['hits-info'], '',savedCtn);
        createElement('img', '', '', '', {'src':"./static/img/img.png"}, divCtn);
        createElement('h2', `Genre: ${currentSong.genre}`, '', '','',divCtn);
        createElement('h2', `Name: ${currentSong.name}`, '', '','',divCtn);
        createElement('h2', `Author: ${currentSong.author}`, '', '','',divCtn);
        createElement('h3', `Date: ${currentSong.date}`, '', '','',divCtn);
        const deleteBtn = createElement('button', `Delete`, '', ['delete-btn'],'',divCtn);
        deleteBtn.addEventListener('click', deleteSongHandler);
    }

    function likeSongHandler(event){
        total_likes ++;
        totalLikesParagraph.textContent=`Total Likes: ${total_likes}`;
        const button = event.target;
        button.setAttribute('disabled', true);
    }
    function deleteSongHandler(event){
        const parent = event.target.parentElement;
        parent.remove();

    }

    function createElement(type, content,  id, classes, attributes, parentNode){
        const htmlElement = document.createElement(type);
        console.log(...classes);
    
        if (content && type !== 'input'){
          htmlElement.textContent = content;
        }
    
        if (content && type === 'input'){
          htmlElement.value = content;
        }
    
        if (id){
          htmlElement.id=id;
        }
    
        if (classes && classes.length>0) {
          htmlElement.classList.add(...classes);
        }
    
        if (attributes){
          for (const key in attributes){
            htmlElement.setAttribute(key, attributes[key]);
          }
        }
    
        if (parentNode){
          parentNode.appendChild(htmlElement);
        }
        
        return htmlElement;
      }
}