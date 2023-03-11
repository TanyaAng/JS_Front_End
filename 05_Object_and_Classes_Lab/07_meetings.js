function meetingSchedule (input){
    let meeting = {};
    for (const line of input){
        let [day,name] = line.split(' ');
        if (!meeting.hasOwnProperty(day)){
            meeting[day] = name;
            console.log(`Scheduled for ${day}`)
        }
        else {
            console.log(`Conflict on ${day}!`)
        }
        
    }
    for (const key in meeting){
        console.log(`${key} -> ${meeting[key]}`);
    }
}