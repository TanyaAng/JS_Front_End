function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let currentBusStop='';
    let nextBusStop = 'depot';

    const departInfo = document.getElementById('depart');

    const arriveInfo = document.getElementById('arrive');

    const infoContainer = document.getElementsByClassName('info')[0];

    function depart() {
        fetch(`${BASE_URL}${nextBusStop}`)
        .then((res)=>res.json())
        .then((stopInfo)=>{
            const {name,next} =stopInfo;
            console.log(name);
            console.log(next);

            currentBusStop = name;
            nextBusStop = next;

            infoContainer.textContent = `Next stop ${currentBusStop}`;
            departInfo.disabled = true;
            arriveInfo.disabled = false;

        }) 
        .catch(()=>
            {
                infoContainer.textContent = 'Error';
                departInfo.disabled = false;
                arriveInfo.disabled = false;
            } 
        )
    }

    function arrive() {
        infoContainer.textContent = `Arriving at ${currentBusStop}`;
        arriveInfo.disabled = true;
        departInfo.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();