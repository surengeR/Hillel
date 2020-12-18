var height = +prompt("Введите высоту елочки: ");
var str_max = 1 + (height-1)*2;
var row_data = '';
    for(row = 1; row <= height; row++){
        stars_cnt = 1 + (row-1)*2;
        spaces_cnt = (str_max - stars_cnt)/2;
        for(spaces = 0; spaces < spaces_cnt; spaces++){
         row_data += ' ';
        }
        for(stars = 0; stars < stars_cnt; stars++){
          row_data += '*'; 
        }
        row_data += "\n";
    }

alert(row_data);