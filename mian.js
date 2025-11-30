        function changePhone(phoneIndex, gradient) {
            const allImages = document.querySelectorAll('.content .image');
            allImages.forEach(img => {
                img.classList.remove('active');
            });
            
            allImages[phoneIndex].classList.add('active');
            
            
            document.getElementById('container').style.background = gradient;
        }
        
        window.onload = function() {
            changePhone(0, 'linear-gradient(#000,#0a0a0aef)');
        };
    
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const container = document.getElementById('container');
    const images = document.querySelectorAll('.content .image');
    const icons = document.querySelectorAll('.icons img');
    
    function preloadImages() {
        const img = new Image();
        img.src = 'imgs/gold.png';
    }
    
    function changePhone(index, background) {
        requestAnimationFrame(() => {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            container.style.background = background;
        });
    }
    

    preloadImages();
    
    window.changePhone = changePhone;

});
