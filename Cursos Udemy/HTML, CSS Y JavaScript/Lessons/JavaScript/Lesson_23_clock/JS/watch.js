const showClock = () => {
    let date = new Date();
    let hr = timeFormat( date.getHours() );
    let min = timeFormat( date.getMinutes() );
    let sec = timeFormat( date.getSeconds() );
    let watch = document.getElementById('hour');
    watch.innerHTML = `${hr}:${min}:${sec}`;

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${weekDay}-${day}-${month}-${year}`
    document.getElementById('date').innerHTML = dateText;
    
    document.getElementById('container').classList.toggle('animate');
}

const timeFormat = ( time ) => {
    if( time < 10 ){
        time = '0' + time;
    }
    return time;
}

setInterval( showClock, 1000 );