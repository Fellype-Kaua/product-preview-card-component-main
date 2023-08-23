window.onload = function() {
    const img = document.getElementById('perfurmIMG');
    
    function changeImg() {
        const width = window.innerWidth;
        if (width > 1024) {
            img.src = './src/images/image-product-desktop.jpg'; 
        }
        console.log(img.src)
    }

    changeImg();
    window.onresize = changeImg;
};

