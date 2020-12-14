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