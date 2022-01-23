$(document).ready(function() {
    var hourTimer = null;
    const hourStick = $('.hour');
    function setHour(){
        const now = new Date();
        const hour = now.getHours();
        const degree = ((hour-12)*30 + 90);
        hourStick.css('transform',`rotate(${degree}deg)`);
    }
    
    var minTimer = null;
    const minStick = $('.min');
    function setMin(){
        const now = new Date();
        const min = now.getMinutes();
        const degree = (min*6) + 90;
        minStick.css('transform',`rotate(${degree}deg)`);
    }
    
    var secTimer = null;
    const secStick = $('.sec');
    function setSec(){
        const now = new Date();
        const sec = now.getSeconds();
        const degree = (sec*6) + 90;
        secStick.css('transform',`rotate(${degree}deg)`);
    }
    secTimer = setInterval(setSec,1000);
    
    hourTimer = setInterval(setHour,1000);
    
    minTimer = setInterval(setMin,1000);
})
