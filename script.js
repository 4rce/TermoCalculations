var counter = 0;
var room_params = {
    creat_room:function(){
        counter++
       return '<div id=\"input_room\"><div class=\"input_fields\">' + this.name(counter)+this.area(counter)+this.warm_floor(counter)+'<\/div>'+ this.rembutton + this.add_wind_button + '<\/div>';
    },
    name:function(count){
        return '<div id=\"room_name\"><label for=\"room_name'+ count.toString() +'\">Название комнаты: <\/label><input class="input_text" value="" id=\"input_room_name\" name=\"room_name'+ counter.toString() +'\" type=\"text\"><\/div>'
        },
    area:function(count){
        return '<div id=\"room_area\"><label for=\"room_area'+ count.toString() +'\">Площадь: <\/label><input value="" class="input_text" id=\"input_room_area\" name=\"room_area'+ counter.toString() +'\" type=\"number\"><\/div>'
        },
    warm_floor:function(count){
        return '<div id=\"room_warm_floor\"><label for=\"room_warm_floor'+ count.toString() +'\">Теплый пол: <\/label><input id=\"input_room_floor\" type=\"radio\" name=\"room_warm_floor'+ counter.toString() +'\" value=\"True\">Да<input id=\"input_room_floor\" type=\"radio\" name=\"room_warm_floor'+ counter.toString() +'\" value=\"False\">Нет<Br></div>'
        },
    rembutton:'<button id=\"remove_button\"onclick=\"remRoom(this)\">X</button>',
    add_wind_button:'<button id=\"add_window_button\"onclick=\"addWind(this)\">Добавить окно</button>',
};
window_params ={
    creat_window:function(){
        counter++;
       return '<div id=\"input_window\"><div class=\"input_fields\">' +this.width(counter)+this.floor_height(counter) +'<\/div>'+ this.rem_button+'<\/div>';
    },
   
    width:function(count){
        return '<div id=\"window_width\"><label for=\"window_width'+ count.toString() +'\">Ширина окна: </label><input value="" class="input_text" id=\"input_window_width\" name=\"window_width'+ count.toString() +'\" type=\"number\"><\/div>'
        },
    floor_height:function(count){
        return '<div id=\"window_floor_height\"><label for=\"floor_height'+ count.toString() +'\">Расстояние от пола до окна: </label><input value="" class="input_text" id=\"input_window_floor_height\" name=\"floor_height'+ count.toString() +'\" type=\"number\"><\/div>'
        },
    rem_button:'<button id=\"remove_button_window\"onclick=\"remRoom(this)\">Удалить окно<\/button>',
}
floor={
    creat_floor:function(){
        counter++;
       return '<div id=\"input_floor\"><div class=\"input_fields\">' + this.floor_num(counter)+this.area(counter) +'<\/div>'+ this.rem_button+'<button id=\"addButton\" onclick=\"addRoom(this)\">Добавить комнату<\/button><\/div>';
    },
    area:function(count){
        return '<div id=\"floor_area\"><label for=\"floor_area'+ count.toString() +'\">Площадь этажа: </label><input value="" class="input_text" id=\"input_floor_area\" name=\"floor_area'+ count.toString() +'\" type=\"number\"><\/div>'
        },
    floor_num:function(count){
        return '<div id=\"floor_num\"><label for=\"floor_num'+ count.toString() +'\">Номер этажа: </label><input value="" class="input_text" id=\"input_floor_num\" name=\"floor_num'+ count.toString() +'\" type=\"number\"><\/div>'
        },
    rem_button:'<button id=\"remove_button\"onclick=\"remRoom(this)\">X</button>',
   }
function addRoom(element){
element.insertAdjacentHTML('beforebegin',room_params.creat_room());               
}    
function addFloor(element){
element.insertAdjacentHTML('beforebegin',floor.creat_floor());               
}    
function remRoom(element){
element.parentElement.remove();
}    
function addWind(element){
element.insertAdjacentHTML('beforebegin',window_params.creat_window());               
}    
function constructionFunc(element){
    let json_string = '{ \"floor\": [';
    for(j=0;j<element.parentElement.querySelectorAll('#input_floor').length;j++){
        json_string = json_string + '{ \"num\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelector('#input_floor_num').value.toString() +'\"\,';
        json_string = json_string + '\"area\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelector('#input_floor_area').value.toString() +'\"\,';
        json_string = json_string + '\"room\":[';
            for(i=0;i<element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room').length;i++){
                json_string = json_string + '{\"name\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelector('#input_room_name').value.toString() +'\"\,';
                json_string = json_string + '\"area\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelector('#input_room_area').value.toString() +'\"\,';
                for(let n=0;n<element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_room_floor').length;n++){
                    if(element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_room_floor')[n].checked){
                        json_string = json_string + '\"warm_floor\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_room_floor')[n].value.toString() +'\"\,';
                   }
                }
                json_string = json_string + '\"window\":[';
                for(k=0;k<element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_window').length;k++){
                    json_string = json_string + '\"widht\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_window')[k].querySelector('#input_window_width').value.toString() +'\"\,';
                    json_string = json_string + '\"floor_height\":\"' + element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_window')[k].querySelector('#input_window_floor_height').value.toString() +'\"';
                        if(element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room')[i].querySelectorAll('#input_window').length==k+1){
                        json_string=json_string+'}';
                        }
                        else{
                            json_string=json_string+'}\,';
                        };
                }
                if(element.parentElement.querySelectorAll('#input_floor')[j].querySelectorAll('#input_room').length==i+1){
                json_string=json_string+']}';
                }
                else{
                    json_string=json_string+']}\,';
                };
            }
            if(element.parentElement.querySelectorAll('#input_floor').length==j+1){
                json_string=json_string+']}';
            }
            else{
                 json_string=json_string+']}\,';
            };
        }
    json_string=json_string+']}';
    return json_string
}
function sendFunc(element){
var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/', true);
    xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        alert(0);
    }
    }
    xhr.send(constructionFunc(element)); 
}