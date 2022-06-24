const sonic = document.querySelector('.sonic');
const Robotnik = document.querySelector('.Robotnik');

const jump = () => {
   
   sonic.classList.add('jump');
  
   setTimeout(() => {
    
    
    sonic.classList.remove('jump');
    

   }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const RobotnikPosition = Robotnik.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(sonicPosition);
   
    if (RobotnikPosition < 120 && RobotnikPosition > 0 && sonicPosition < 80) {

    
    Robotnik.style.animation = 'none';
    Robotnik.style.left = `${RobotnikPosition}px`
    Robotnik.src="img/Robotnik-funny.gif";
    Robotnik.style.width = '150px'


    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`
   

    sonic.src="img/game-over.png";
    sonic.style.width = '150px'
    sonic.style.marginLeft = '20px'

    clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
