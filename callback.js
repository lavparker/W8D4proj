

// class Clock {


//     constructor (hours, minutes, this.seconds) {
//         // 1. Create a Date object.
//         // 2. Store the hours, minutes, and this.seconds.
//         // 3. Call printTime.
//         // 4. Schedule the tick at 1 second intervals.
//         const now = new Date
//         this.hours =  now.getHours()
//         this.minutes  = now.getMinutes()
//         this.seconds = now.getSeconds()
//         setInterval(this.printTime(), 1000)
       
//     }

//     printTime() {
//         // Format the time in HH:MM:SS
//         // Use console.log to print it.
//     //    this.seconds = (this.seconds<10? '0':'') + this.seconds
//     //     this.minutes = (this.minutes < 10 ? '0' : '') + this.minutes
//     //     this.hours = (this.hours < 10 ? '0' : '') + this.hours

//         let timeString = this.hours + ":" + this.minutes +":" + this.seconds 
//         console.log(timeString);
//     }
//     _tick() {
//         // 1. Increment the time by one second.
//         // 2. Call printTime.
//         // myTimeout = setTimeout(this.printTime(), 1000);
//         console.log('This is tick!')
//         if (this.seconds <=58) {
//             this.seconds += 1
//         }   else {
//             this.seconds = 0 
//             if (this.minutes <=58) {
//                 this.minutes += 1
//             } else {
//                 this.minutes =0
//                 if (this.hours <= 22) {
//                 this.hours += 1
//                 } else {
//                 this.hours =0 
//                 }
//             }
//         } 
//     }
// }

// const clock = new Clock();



class Clock {
    constructor() {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and this.seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        const now = new Date
        this.hours = now.getHours()
        this.minutes = now.getMinutes()
        this.seconds = now.getSeconds()
       
        this.printTime()
        setInterval(this._tick.bind(this), 1000)
        
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        let seconds = (this.seconds<10? "0": "")+ this.seconds
        let minutes = (this.minutes < 10 ? "0" : "") + this.minutes
        let hours = (this.hours < 10 ? "0" : "") + this.hours
        const timeString = [this.hours, this.minutes, seconds].join(":")
        console.log(timeString)
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this._incrementSeconds();
        // this.seconds = (this.seconds < 59) ? this.seconds +1 :0
        // this.minutes = (this.minutes < 59) ? this.minutes + 1 : 0
        // this.hours = (this.hours < 23) ? this.hours + 1 : 0
        this.printTime()
        
    }
    _incrementSeconds(){
        if (this.seconds <59) {
            this.seconds +=1
        } else {
            this.seconds = 0
            this._incrementMinutes()
        }
    }

    _incrementMinutes() {
        if (this.minutes < 59) {
            this.minutes += 1
        } else {
            this.minutes = 0
            this._incrementHours()
        }
    }

    _incrementHours() {
        if (this.hours < 23) {
            this.hours += 1
        } else {
            this.hours = 0
            
        }
    }


}

const clock = new Clock();