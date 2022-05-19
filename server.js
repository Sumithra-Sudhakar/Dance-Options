//array to store
// function to add stuff ti the arrY 
// funstion to return a random element 

var the_array =[];

const add_elements = ()=>{
    var ele = document.getElementById("option").value 
    the_array.push(ele)
    console.log(the_array)
    document.getElementById("option").value =""
    sessionStorage.setItem("the_array", the_array);
}
const get_random_element = ()=>{
    let items = sessionStorage.getItem("the_array")
    items = items.split(',')
    //let min =0
    
    var item = Math.floor(Math.random()*items.length);



    document.getElementById("result").innerHTML= items[item]
}