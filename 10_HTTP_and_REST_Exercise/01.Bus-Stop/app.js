function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopName = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');

    let stopID = document.getElementById('stopId').value;
    busesContainer.innerHTML=''
    fetch (`${BASE_URL}${stopID}`)
        .then((res)=> res.json())
        .then((busInfo) => {
            const {name, buses} = busInfo;
            stopName.textContent = name;
            for (const busID in buses){
                const li = document.createElement('li');
                li.textContent = `Bus ${busID} arrives in ${buses[busID]} minutes`;
                busesContainer.appendChild(li);
            }
        })
        .catch((err)=>
            stopName.textContent='Error'
        )

}