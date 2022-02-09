var widthScroll;

setInterval(()=>{
    widthScroll = window.innerWidth - document.querySelector('html').offsetWidth;

    document.querySelectorAll('.box_slide').forEach((item)=>{
        item.style.width = `calc(100vw - ${widthScroll}px)`;
    })
}, 100);