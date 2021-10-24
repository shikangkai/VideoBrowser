function genDurationStr(durationMillis) {
    // hh:mm:ss
    var second = parseInt((durationMillis / 1000) % 60);
    var minute = parseInt((durationMillis / 1000 / 60) % 60);
    var hour = parseInt(durationMillis / 1000 / 60 / 60);

    second = "" + (second < 10 ? "0" + second : second);
    minute = "" + (minute < 10 ? "0" + minute : minute);

    if (hour == 0) {
        return minute + ":" + second;
    } else {
        return (hour < 10 ? "0" + hour : hour) + ":" + minute + ":" + second;
    }
}

function getFileSizeStr(sizeBytes) {

    var k = sizeBytes >> 10;
    var m = k >> 10;
    var g = m >> 10;

    if (g > 0) {
        return (sizeBytes / 1024 / 1024 / 1024).toFixed(2) + " GB";
    }

    if (m > 0) {
        return (sizeBytes / 1024 / 1024).toFixed(2) + " MB";
    }

    if (k > 0) {
        return (sizeBytes / 1024).toFixed(2) + " KB";
    }

    return "Zero Size"
}

function loadImage(id, src) {
    console.log(id);
    console.log(src);
    document.getElementById(id).src = src;
}

function getTimeDistanceString(timestamp) {
    var now = new Date().getTime();
    if (timestamp >= now - 1 * 1000 * 60 * 60) return "just now";

    var distance = now - timestamp;
    if (distance < 24 * 3600 * 1000) return Math.round(distance / (3600 * 1000)) + " hour(s) ago";
    if (distance < 30 * 24 * 3600 * 1000) return Math.round(distance / (24 * 3600 * 1000)) + " day(s) ago";
    if (distance < 12 * 30 * 24 * 3600 * 1000) return Math.round(distance / (30 * 24 * 3600 * 1000)) + " month(s) ago";
    if (distance >= 12 * 30 * 24 * 3600 * 1000) return Math.round(distance / (12 * 30 * 24 * 3600 * 1000)) + " year(s) ago";
}

function getThumbnailFitType(width, height) {
    var fitType = "contain";
    if (width / height > 1 / 1) {
        fitType = "cover";
    }
    return fitType;
}

function getThumbnailBackground(width, height) {
    if (getThumbnailFitType(width, height) == "cover") {
        return "transparent";
    } else {
        return "black";
    }
}

function playVideo(videoId, videoList) {
    window.localStorage.setItem("play_video_id", "" + videoId);
    window.localStorage.setItem("play_video_list", JSON.stringify(videoList));
    window.open("player.html");
}