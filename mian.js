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
    
        // كود JavaScript مختصر ومحترف لتحسين الأداء
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // العناصر المخزنة في الذاكرة
    const container = document.getElementById('container');
    const images = document.querySelectorAll('.content .image');
    const icons = document.querySelectorAll('.icons img');
    
    // تحميل الصور المهمة مسبقاً
    function preloadImages() {
        const img = new Image();
        img.src = 'imgs/gold.png';
    }
    
    // تغيير الهاتف مع تحسين الأداء
    function changePhone(index, background) {
        requestAnimationFrame(() => {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            container.style.background = background;
        });
    }
    

    // بدء التشغيل
    preloadImages();
    
    // جعل الدالة متاحة globally
    window.changePhone = changePhone;
});