document.getElementById('submit-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area');
    let userReview = textArea.value;
    
    const review = document.getElementById('review')
    const li = document.createElement('li')
    li.style.color="Orange"
    li.innerText = userReview;
    review.appendChild(li)
    textArea.value='';

})