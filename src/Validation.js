    let NoOfHours = () => {
        let startTime = document.getElementById("startTime").value.slice(0, 2);
        let endTime = document.getElementById("endTime").value.slice(0, 2);
        return Math.abs(startTime - endTime)
    }
    let isBooked = (bookedEvents, start, end, date, facility) => {
        let result = true;
        if(bookedEvents.length >= 1){
            result = bookedEvents.some((elem
            ) => {
                let fac = elem["facility"]
                let dt = elem['date'];
                let st = DateToInt(elem["startTime"]);
                let et = DateToInt(elem["endTime"]);
                return (fac == facility && date == dt && ((start >= st && end <= et)||(start >= st && start <= et) || (end >= st && end <= et)));
            });
        }
        else{
            result = false;
        }
        return result;
    }
    let DateToInt = (inp) => parseInt(inp.toString().slice(0, 2))
    export let Validate = (bookedEvents) => {
        let facility = document.getElementById("facility").value;
        let date = document.getElementById("date").value;
        let startTime = document.getElementById("startTime").value;
        let endTime = document.getElementById("endTime").value;
        let status = "Not Booked";
        let amount = 0;
        let start = DateToInt(startTime)
        let end = DateToInt(endTime)
        if(!isBooked(bookedEvents, start, end, date, facility)){
            if(facility === "Tennis Court"){
                if(start < end){
                    amount = NoOfHours()*50;
                    status = "Booked"
                }
                else{
                    alert("Invalid Time Slot")
                }
            }
            else if(facility === "Clubhouse"){
                if(start < end){
                    if(start >= 10 && end <= 16){
                        amount = NoOfHours()*100;
                        status = "Booked"
                    }
                    else if(start >= 16 && end <= 22){
                        amount = NoOfHours()*500;
                        status = "Booked"
                    }
                    else{
                        alert("Invalid Time Slot")
                    }
                }
                else{
                    alert("Invalid Time Slot")
                }
            }
        }
        else{
            alert("Booking Failed, Already Booked")
        }
            const bookingDetails = {
                facility,
                date,
                startTime,
                endTime,
                status,
                amount
            };
            return(bookingDetails)
        }
