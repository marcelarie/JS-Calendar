
// setInterval(function(){ alert("Hello"); }, 3000);

setInterval(fetchRemainders(), 10000);


function fetchRemainders() {
    eventList.forEach(rem => {
        if (rem.reminder != '') {
            let dayEnd = parseFloat(rem.initialDate.substring(8, 10));
            let monthEnd = parseFloat(rem.initialDate.substring(5, 7));
            let yearEnd = parseFloat(rem.initialDate.substring(0, 4));
            let reminderTime = parseFloat(rem.reminder);
            if (yearEnd == actualYear && monthEnd == actualMonth && dayEnd == actualDay) {
                let endTimeH = parseFloat(rem.endTime.substring(0, 2));
                let endTimeM = parseFloat(rem.endTime.substring(3, 5));
                if (endTimeH >= date.getHours()) {
                    if (rem.reminder >= 60) {
                        console.log('You have an event in one hour')
                    }
                    if (rem.reminder < 60 && endTimeM > date.getMinutes()) {
                        switch (reminderTime) {
                            case 5:
                                if (date.getMinutes() + 5 === endTimeM) {
                                    console.log('You have an event in 5 minutes')
                                }
                                break;
                            case 10:
                                if (date.getMinutes() + 10 === endTimeM) {
                                    console.log('You have an event in 10 minutes')
                                }
                                break;
                            case 15:
                                if (date.getMinutes() + 15 === endTimeM) {
                                    console.log('You have an event in 15 minutes')
                                }
                                break;
                            case 30:
                                if (date.getMinutes() + 30 === endTimeM) {
                                    console.log('You have an event in 15 minutes')
                                }
                                break;
                        }
                    }
                }
            }
        }
    })
}
