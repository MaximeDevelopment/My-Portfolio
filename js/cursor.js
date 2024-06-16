var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
window.addEventListener("resize", setCursor)
setCursor();
function setCursor() {
    var x = window.matchMedia("(min-width: 1000px)")
    if(x.matches) {
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
    });

    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function(){
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function(){
      cursor.classList.remove('click')
      cursorinner.classList.remove('cursorinnerhover')
    });
  }
}

