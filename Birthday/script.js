document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const beginSurpriseBtn = document.getElementById('begin-surprise-btn');
    const nextMessageBtn = document.getElementById('next-message-btn');
    const backToIntroBtn = document.getElementById('back-to-intro-btn');
    const nextCakeBtn = document.getElementById('next-cake-btn');
    const backToMessageBtn = document.getElementById('back-to-message-btn');
    const galleryBox = document.getElementById('gallery-image');
    const nextGalleryBtn = document.getElementById('next-gallery-btn');
    const backToCakeBtn = document.getElementById('back-to-cake-btn');
    const cakeElement = document.getElementById('cake');

    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.remove('hidden');
                page.classList.add('active');
            } else {
                page.classList.add('hidden');
                page.classList.remove('active');
            }
        });
        currentPageIndex = index;
    }

    // Navigation logic
    beginSurpriseBtn.addEventListener('click', () => {
        showPage(1);
    });

    nextMessageBtn.addEventListener('click', () => {
        showPage(2);
    });

    // Back button functionality
    backToIntroBtn.addEventListener('click', () => {
        showPage(0);
    });

    nextCakeBtn.addEventListener('click', () => {
        showPage(3);
    });

    backToMessageBtn.addEventListener('click', () => {
        showPage(1);
    });
    
    // Photo Gallery
    const photos = ['images/IMG20221231164650.jpg', 'images/IMG20221231164710.jpg', 'images/IMG20221231164744.jpg', 'images/IMG_20251223_203530_744.jpg']; // Replace with your image filenames
    let currentPhotoIndex = 0;

    galleryBox.addEventListener('click', () => {
        const galleryText = document.getElementById('gallery-text');
        const currentPhoto = document.getElementById('current-photo');
        const nextPhotoBtn = document.getElementById('next-photo-btn');
        const prevPhotoBtn = document.getElementById('prev-photo-btn');
        
        if (galleryText.classList.contains('hidden')) {
            // Cycle to the next photo
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        } else {
            // First click to reveal the photo
            galleryText.classList.add('hidden');
            currentPhoto.classList.remove('hidden');
            nextPhotoBtn.classList.remove('hidden');
            prevPhotoBtn.classList.remove('hidden');
        }
        currentPhoto.src = photos[currentPhotoIndex];
    });

    document.getElementById('next-photo-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        document.getElementById('current-photo').src = photos[currentPhotoIndex];
    });

    document.getElementById('prev-photo-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        document.getElementById('current-photo').src = photos[currentPhotoIndex];
    });

    nextGalleryBtn.addEventListener('click', () => {
        // You can add a final page here or a custom message
        alert("Hope you liked the surprise!");
    });
    
    backToCakeBtn.addEventListener('click', () => {
        showPage(2);
    });

    // Cake animation logic (remains the same)
    cakeElement.addEventListener('click', () => {
        cakeElement.classList.add('cut-animation');
        
        const sprinklesContainer = document.querySelector('.sprinkles');
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        
        for (let i = 0; i < 50; i++) {
            const sprinkle = document.createElement('div');
            sprinkle.className = 'sprinkle';
            sprinkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sprinkle.style.left = `${Math.random() * 100}%`;
            sprinkle.style.top = `${Math.random() * 100}%`;
            sprinkle.style.animationDelay = `${Math.random() * 1.5}s`;
            sprinklesContainer.appendChild(sprinkle);
        }
    });

});