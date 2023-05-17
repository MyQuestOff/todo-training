let button = document.querySelector('.btn');
let exercises_list = document.querySelector('.exercises_list');
let id = 0;

const addExercise = () => {
    let input = document.createElement('input');
    let li = document.createElement('li');
    let deleteBtn = document.createElement('input');
    let btnAdd = document.createElement('input');
    id++;

    button.style.visibility = 'hidden';

    input.className = 'exercise_input';
    input.type = 'text';
    input.placeholder = 'Название упражнения';
    exercises_list.append(input);
    input.focus();
    btnAdd.type = 'button';
    btnAdd.className = 'btnAdd';
    btnAdd.value = '+';
    exercises_list.append(btnAdd);

    btnAdd.addEventListener('click', function(){
        let inputInner = input.value;
        input.blur();
        input.remove();
        btnAdd.remove();
        li.className = `exercise_item num${id}`;
        li.innerHTML = inputInner;
        exercises_list.append(li);
        

        deleteBtn.className = 'deleteBtn';
        deleteBtn.type = 'button';
        deleteBtn.value = '-';
        li.append(deleteBtn);

        button.style.visibility = 'visible';
    });
    input.addEventListener('keyup', function(event) {
        if(event.keyCode === 13){
            btnAdd.click();
        }
    });

    deleteBtn.addEventListener('click', function () {
        deleteBtn.remove();
        li.remove();
    })
}

button.addEventListener('click', addExercise);