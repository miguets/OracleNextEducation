const key = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

function sndbtn(tipo){//check if the checkbox is empty or if is filled, execute the encriptation or desencriptation :v
    let texts = textbox();
    if(texts.length == 0){
        alert("inserta el mensaje que quieras utilizar en la caja de texto");
    }
    else{
        document.getElementById('suscat').style.display = "none";
        document.getElementById('sustext').style.display = "none";
        if(tipo == 'e'){
            let ft = encriptacion(texts);
            replacetxt(ft);
        }
        else{
            let dt = desencriptacion(texts);
            replacetxt(dt);
        }
    }
    
}

function encriptacion(text){
    let finaltext = '', char = '';
    text.toLowerCase();
    for(let i = 0; i<text.length; i++){
        char = text[i];
        if(('aeiou'.includes(char))){
            char = key[char];
        }
        finaltext += char;
    }
    return finaltext;
}

function desencriptacion(text){
    let finaltext = '', char = '';
    text.toLowerCase();
    for(let i = 0; i<text.length; i++){
        char = text[i];
        if(('aeiou'.includes(char))){
            let testchar = text.slice(i, (key[char].length) + i);
            if(testchar.includes(key[char])) i += (key[char].length - 1);
        }
        finaltext += char;
    }
    return finaltext;
}


//independient functions at the encriptation

function replacetxt(text){ //replace the value from the second text box from the final text obtain in the function of the first box
    document.getElementById('dtext').value = text;
}

function textbox(){//get the text into the chatbox
    return document.getElementById('etext').value;
}

function reset(){ //reset window to delete the text in the textbox
    document.getElementById('etext').value = '';
    document.getElementById('dtext').value = '';
    document.getElementById('suscat').style.display = "block";
    document.getElementById('sustext').style.display = "block";
}

function swapvalue(){//swap the value from the second box to the first box
    document.getElementById('etext').value = document.getElementById('dtext').value;
    document.getElementById('dtext').value = '';
    document.getElementById('suscat').style.display = "block";
    document.getElementById('sustext').style.display = "block";
}

function copy(){ //copy to the clipboard the text into the second box
    let c = document.getElementById('dtext');
    c.disabled = false;
    c.select();
    document.execCommand('copy');
    c.disabled = true;
  }


