const move = () => {
  console.log('moving')
  let elem = document.getElementById('animation')
  let pos = 0
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 350) {
      clearInterval(id)
    } else {
      pos++
      elem.style.top = `${pos}px`;
      elem.style.left = `${pos}px`;
    }
  }
}

const slide = () => {
  console.log('moving2')
  let elem = document.getElementById('animation2')
  let pos = 350
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 0) {
      clearInterval(id)
    } else {
      pos--
      elem.style.left = `${pos}px`;
      elem.style.top = `${pos}px`;
    }
  }
}

const topright = () => {
  console.log('movingtr')
  let elem = document.getElementById('animationtr')
  let pos = 0
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 350) {
      clearInterval(id)
    } else {
      pos++
      elem.style.right = `${pos}px`;
      elem.style.top = `${pos}px`;
    }
  }
}

const bl = () => {
  console.log('movingbl')
  let elem = document.getElementById('animationbl')
  let pos = 0
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 350) {
      clearInterval(id)
    } else {
      pos++
      elem.style.right = `${pos}px`;
      elem.style.top = `${pos}px`;
    }
  }
}


const btn = document.getElementById('start')
btn.addEventListener('click', move)
btn.addEventListener('click', slide)
btn.addEventListener('click', topright)
btn.addEventListener('click', bl)