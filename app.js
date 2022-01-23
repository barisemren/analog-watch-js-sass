function main(){
    var hourTimer = null;
    const hourStick = document.querySelector('.hour');
    function setHour(){
        const now = new Date();
        const hour = now.getHours();
        const degree = ((hour-12)*30 + 90);
        hourStick.style.transform = `rotate(${degree}deg)`;
    }
    
    
    var minTimer = null;
    const minStick = document.querySelector('.min');
    function setMin(){
        const now = new Date();
        const min = now.getMinutes();
        const degree = (min*6) + 90;
        minStick.style.transform = `rotate(${degree}deg)`;
    }
    
    
    var secTimer = null;
    const secStick = document.querySelector('.sec')
    function setSec(){
        const now = new Date();
        const sec = now.getSeconds();
        const degree = (sec*6) + 90;
        secStick.style.transform = `rotate(${degree}deg)`;
    }
    secTimer = setInterval(setSec,1000);
    
    hourTimer = setInterval(setHour,1000);
    
    minTimer = setInterval(setMin,1000);
}
window.addEventListener('DOMContentLoaded',main);
