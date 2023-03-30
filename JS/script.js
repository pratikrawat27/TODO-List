$(function(){
    $(".blink").typed({
      strings: ["Enter Your List.", "Enter Your ToDo List."],
      typeSpeed: 2
    });
});



var add = document.getElementById('add');
var remove = document.getElementById('remove'); 
var list = document.getElementById('list'); 
var addList = '';


//remove all button

remove.onclick = function(){
    list.innerHTML = '';
}

// adding a new list element

add.onclick = function(){
    add_List(list);
    document.getElementById('user-input').value = '';
    document.getElementById('user-input').focus();
}

function add_List(targetUl){
    var inputText = document.getElementById('user-input').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeB = document.createElement('button');

    if(inputText !== ''){
        removeB.className = 'btn btn-xs btn-danger';
        removeB.innerHTML = ' &times; ';
        removeB.setAttribute('onclick','removeMe(this)');
        
        li.appendChild(textNode);
        li.appendChild(removeB);
        targetUl.appendChild(li);
    } else {
        alert('Please enter your list');
    }

}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}
