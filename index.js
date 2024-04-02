const loopItems = ( className, callback) => {
    const listItems = document.getElementsByClassName(className);
    for (let index = 0; index < listItems.length; index++) {
        callback(listItems[index]);
    }
};

const changeActive = (element) => {
    if(element.classList[2] === "active") {
        loopItems('contQ', (el) => el.classList.remove('active'));
        loopItems('question-tittle', (el) => el.classList.remove('active'));
        loopItems('arrow-down', (el) => el.classList.remove('active'));
        loopItems('question-answer', (el) => el.classList.remove('active'));
    } else {
        loopItems('contQ', (el) => el.classList.remove('active'));
        element.classList.add('active');
   
        loopItems('question-tittle', (el) => el.classList.remove('active'));
        loopItems('arrow-down', (el) => el.classList.remove('active'));
        loopItems('question-answer', (el) => el.classList.remove('active'));
    
        const titulo = element.getElementsByClassName('question-tittle');
        const arrow = element.getElementsByClassName('arrow-down');
        const answer = element.getElementsByClassName('question-answer');
        titulo[0].classList.add('active');
        arrow[0].classList.add('active');
        answer[0].classList.add('active');
    }
}

const init = () => {
    loopItems('contQ', (el) => 
    el.addEventListener('click', () => changeActive(el))
    );
};

init();