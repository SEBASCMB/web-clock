(() => {
    const hrs         = document.getElementById('hrs')
    const min         = document.getElementById('min')
    const sec         = document.getElementById('sec')
    const ampmElement = document.getElementById('ampm');

    setInterval(() => {
        const currentTime = new Date();

        let hour     = currentTime.getHours();
        const minute = currentTime.getMinutes();
        const second = currentTime.getSeconds();

        let ampm = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12;
        hour = hour ? hour: 12;

        const formattedMinute = minute < 10 ? '0' + minute : minute;
        const formattedSecond = second < 10 ? '0' + second : second;



        // hrs.innerHTML = currentTime.getHours();
        // min.innerHTML = currentTime.getMinutes();
        // sec.innerHTML = currentTime.getSeconds();

        hrs.innerHTML = hour;
        min.innerHTML = formattedMinute;
        sec.innerHTML = formattedSecond;

        const ampmElement = document.getElementById('ampm');
        if ( !ampmElement ){
            const ampmSpan = document.createElement('span');
            ampmSpan.id = 'ampm';
            document.querySelector('clock').appendChild(ampmSpan);
        }
        document.getElementById('ampm').innerText = ampm;

    }, 1000)
})();