const list = document.querySelector('.list-filter'),
    items = document.querySelectorAll('.blocks_item'),
    listItems = document.querySelectorAll('.list_item')
    //containerGallery = document.querySelector('container-gallery')

//document.addEventListener('DOMContentLoaded', function() {
//    items.forEach(function (){
//        if (list.classList.contains('active-category')) {
//            items.target.style.display = 'flex'
//        } else {
//            items.target.style.display = 'none'
//        }
//    })

//})

function filter(){
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('list_item')){
            listItems.forEach(listItem => listItem.classList.remove('active-category'))
            target.classList.add('active-category')
        }

        switch (targetId){
            case 'foto':
                getItems(targetId)
                break
            case 'video':
                getItems(targetId)
                break
        }


    })
}
filter()
function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
    })
}