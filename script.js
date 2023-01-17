function displaydata(data){
    result.value += data
}

function allclear(){
    result.value = ''
}

function displayresult(){
    result.value = eval(result.value)
}

function backspace(){
    result.value = result.value.slice(0,-1)}