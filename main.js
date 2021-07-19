let clr = document.getElementById('clr');
clr.addEventListener('input', function(){
    document.getElementById('container').style.background = clr.value;
});
