  function showDivs(option) {
    if (option === 'first') {
      document.getElementById('container3').style.display = 'flex';
      document.getElementById('container4').style.display = 'none';
    } else {
      document.getElementById('container3').style.display = 'none';
      document.getElementById('container4').style.display = 'flex';
    }
  }

  function selectBox(boxId) {
    let boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove('selected');
    }
    document.getElementById(boxId).classList.add('selected');
  }
  function product(){
    window.location.href = 'http://127.0.0.1:5500/product.html'
  }