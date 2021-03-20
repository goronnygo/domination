const lineThru = document.querySelector("ul li");

function first(){
    lineThru.style.textDecoration = 'line-through'
}

first()


function addingImg(str){
    const img = document.querySelector('image');

}


function addImg(idS, urlS){
    const idItem = document.querySelector(`${idS}`);
    idItem.src = `${urlS}`

}

addImg ("#image-1", "orange111.jpeg")
addImg ("#image-2", "orange222.jpeg")
addImg ("#image-3", "orange333.jpeg")

function removeLast(){
    const remove = document.querySelector('#arguments')
    remove.removeChild(remove.lastElementChild);

}

removeLast()
removeLast()


function fonts(fs){
    const changeIt = document.querySelector('h1');
    changeIt.style.fontSize = '40px';
}

fonts()

