// using selectors inside the element
// traversing the dom
const quesBtn = document.querySelectorAll('.question-btn');

const quesLog = document.querySelectorAll('.question');


/**
 * using option 1 - (@quesBtn)
 * traversing the dom
 * 
 */
/*
quesBtn.forEach(function(btn) {
    

    btn.addEventListener('click', function(e) {

        // pass the parent-element to a variable
        const indQues = e.currentTarget.parentElement.parentElement;

        quesBtn.forEach(function(curClicked) {

            curClicked.addEventListener('click', function() {

                if (curClicked !== btn) {

                    indQues.classList.remove('show-text');
                }
            });

        });


        //indQues.classList.add('show-text');
        indQues.classList.toggle('show-text');
        
    });

});
*/

/**
 * using option 2 - (@quesLog)
 * using selectors inside the element
 * 
 */
quesLog.forEach(function(question) {

    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', function() {

        // using closure
        quesLog.forEach(function(clkedItem) {

            clkedItem.addEventListener('click', function() {

                if (clkedItem !== question) {

                    question.classList.remove('show-text');
                }
            });

        });

        // question.classList.add('show-text');
        question.classList.toggle('show-text');

    });

});