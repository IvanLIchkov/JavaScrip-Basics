function scheduleMeetings(input){
    const meetings = {};
    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
};
scheduleMeetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])