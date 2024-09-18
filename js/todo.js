let sum = 0;
const contentContainer = document.getElementById('content-container');


document.getElementById('task-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('input-value');
    const task = inputValue.value;
    if(task === ""){
        alert('Write Something')
    }else{
        const tr = document.createElement('tr');
    contentContainer.appendChild(tr);

    // 1
    const th1 = document.createElement('th');
    tr.appendChild(th1);
    sum++;
    th1.innerText = sum;

    // 2
    const th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.innerText = task;
    inputValue.value="";

    // 3
    const th3 = document.createElement('th');
    tr.appendChild(th3);
    const removeButton = document.createElement('button');
    removeButton.className = "p-2  rounded-full bg-red-300  text-red-500"
    removeButton.innerText = "Remove"
    removeButton.addEventListener('click', function() {
        tr.remove();
    });
    th3.appendChild(removeButton);
    }
    

})

document.getElementById('clear-btn').addEventListener('click',function(){
    contentContainer.remove();
})
