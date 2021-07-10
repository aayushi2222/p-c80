var name_of_the_guest_array = [];
function Submit() {
    var guest_name = document.getElementById("Enter_name").value;
    name_of_the_guest_array.push(guest_name);
    document.getElementById("Display_names").innerHTML = name_of_the_guest_array;
    console.log(name_of_the_guest_array);
    var lengh_of_the_array = name_of_the_guest_array.length;
    console.log(lengh_of_the_array);
}
function Show_list() {
var i = name_of_the_guest_array.join("<br>");
console.log(name_of_the_guest_array);
document.getElementById("Show_names").innerHTML = i.toString();

}
function Sorting() {
    name_of_the_guest_array.sort();
    var i = name_of_the_guest_array.join("<br>");

    console.log(name_of_the_guest_array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
    
    }
     function Search() {
        var s = document.getElementById("Search_name").value;
        var found = 0;
        var j;
        for(j=0;j<name_of_the_guest_array.length; j++) {
            if(s==name_of_the_guest_array[j]) {
                found = found+1;
            }
        }
        document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
        console.log("found Name"+found+" Time/s");
        
    }