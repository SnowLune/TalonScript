// $.getJSON("https://raw.githubusercontent.com/SnowRoberge/TalonScript/master/workshop_values.json");

let JSONURL = "https://raw.githubusercontent.com/SnowRoberge/TalonScript/master/workshop_values.json";
let request = new XMLHttpRequest();
request.open('GET', JSONURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    const workshopValues_text = request.response;
    const workshopValuesJS = JSON.parse(workshopValues_text);
}

const workshopValues = $.map(workshopValuesJS, function(element, index){
    return index;
});
