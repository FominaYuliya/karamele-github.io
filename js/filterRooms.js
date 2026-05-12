const list = document.querySelector('.list-filter'),
    items = document.querySelectorAll('.blocks_item'),
    listItems = document.querySelectorAll('.list_item')

function filter(){
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('list_item')){
            listItems.forEach(listItem => listItem.classList.remove('active-category'))
            target.classList.add('active-category')
        }

        switch (targetId){
            case 'all':
                getItems('blocks_item')
                break
            case 'standart2':
                getItems(targetId)
                break
            case 'standart3':
                getItems(targetId)
                break
            case 'standart4':
                getItems(targetId)
                break
            case 'delux3':
                getItems(targetId)
                break
            case 'delux4':
                getItems(targetId)
                break
            case 'lux':
                getItems(targetId)
                break
            case 'family':
                getItems(targetId)
                break

        }


    })
}
filter()
function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}