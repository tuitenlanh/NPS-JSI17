var stopwatches = [];

function startStopwatch(id) {
    if (stopwatches[id]) {
        return;
    }

    stopwatches[id] = setInterval(function () {
        var time = document.getElementById('time' + id);
        var parts = time.textContent.split(':');
        var seconds = parseInt(parts[1]) + 1;
        if (seconds >= 60) {
            seconds = 0;
            var minutes = parseInt(parts[0]) + 1;
            time.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        } else {
            time.textContent = parts[0] + ':' + seconds.toString().padStart(2, '0');
        }
    }, 1000);
}

function stopStopwatch(id) {
    clearInterval(stopwatches[id]);
    stopwatches[id] = null;
    document.getElementById('time' + id).textContent = '00:00';
}

function stopAllStopwatches() {
    for (var i = 1; i <= 5; i++) {
        stopStopwatch(i.toString());
    }
}

