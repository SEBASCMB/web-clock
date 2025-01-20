(() => {
    const hrs = document.getElementById('hrs')
    const min = document.getElementById('min')
    const sec = document.getElementById('sec')

    setInterval(() => {
        const currentTime = new Date();

        hrs.innerHTML = currentTime.getHours();
        min.innerHTML = currentTime.getMinutes();
        sec.innerHTML = currentTime.getSeconds();

    }, 1000)
})();