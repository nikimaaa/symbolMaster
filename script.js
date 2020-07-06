document.querySelector('input').oninput = function(){
    crateMatrixDefinition();
    crateMatrix();
}

document.querySelector('.creator').onclick = function(e){
    if(e.target.className !='led'){
        return;
    }
    if(e.target.style.background == "red"){
        e.target.style.background = 'white'; 
    }
    else{
        e.target.style.background = 'red';
    }  
    crateMatrixDefinition();
    crateMatrix();
}

function crateMatrixDefinition(){
    let tarea = document.querySelector('textarea');
    let name = document.querySelector('input').value;
    tarea.textContent = '';
    tarea.textContent+=`const byte ${name}[8] = {\n   0b`;
}

function crateMatrix(){
    let tarea = document.querySelector('textarea');
    
    let rows = document.querySelectorAll('.row');
    for(let row of rows){
        if(row!=rows[0]){
            tarea.textContent+='   0b';
        }
            

        let leds = row.querySelectorAll('.led');

        for(let led of leds){
            if(led.style.background == "red"){
                tarea.textContent+='1';
            }
            else{
                tarea.textContent+='0';
            }
        }

        if(row!=rows[7]){
            tarea.textContent+=',\n';
        }
        else{
            tarea.textContent+='\n};';
        }

    }
}