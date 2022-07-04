document.addEventListener('DOMContentLoaded', function() {

    function renderTaskElement(item){
        const listItem = document.createElement('li')
        const itemText = document.createElement('p')
        const actions = `<div class="list__item-actions">
            <button class="list__item-btn is-complete">Complete</button>
            <button class="list__item-btn is-delete ">Delete</button>
        </div>`
        const inputField = document.createElement('input')

        listItem.classList.add('list__item')
        itemText.classList.add('list__item-text')
        itemText.innerText = item
        inputField.style.display = 'none '
        listItem.append(itemText)
        listItem.append(inputField)
        listItem.insertAdjacentHTML('beforeend', actions)

        listItem.querySelector('.is-complete').addEventListener('click', function (){
           listItem.classList.add('completed')
        })

        listItem.querySelector('.is-delete').addEventListener('click', function (){
           this.closest('.list__item').remove()
        })

        itemText.addEventListener('click', function (){
            this.style.display = 'none';
            inputField.style.display = 'block';
            inputField.value = this.innerText;
            itemText.style.display = 'block '
        })

        inputField.addEventListener('change' , function (){
            this.style.display = 'none';
            itemText.innerText = this.value
        })

        return listItem

    }
    renderTaskElement()

    function addNewTask(task){
        const list = document.querySelector('#todolist')
        list.append(task)
    }

    const inputTask = document.querySelector('#input-task')
    const addTaskBtn = document.querySelector('#add-btn')

    function createNewTask(value){
        const newTask = {
            title: value,
            completed: false,
        }
        const task = renderTaskElement(newTask.title)

        addNewTask(task)
    }
                                  //событие
    inputTask.addEventListener('input', function (event){
        /////// получаем текущий элемент
        const value = event.target.value
        if (value.trim()){
            addTaskBtn.removeAttribute('disabled')
        } else {
            addTaskBtn.setAttribute('disabled', true)
        }

    })
    addTaskBtn.addEventListener('click', function (event){
        const btn = this.previousElementSibling.value
        createNewTask(btn)
        console.log(btn)
        //очищаем инпут
        inputTask.value = ''
        addTaskBtn.setAttribute('disabled', true)
    })



});