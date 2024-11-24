// script.js

// Open Video Modal
const videoItems = document.querySelectorAll('.video-item');
const videoModal = document.getElementById('video-modal');
const videoPlayer = document.getElementById('video-player');
const closeBtn = document.querySelector('.close-btn');

videoItems.forEach(item => {
    item.addEventListener('click', function() {
        videoModal.style.display = 'flex';
        // You can replace the video source based on the clicked item
        videoPlayer.src = ""; // Replace with actual video URL
    });
});

// Close Video Modal
closeBtn.addEventListener('click', function() {
    videoModal.style.display = 'none';
    videoPlayer.pause(); // Stop video when modal is closed
});

// Close modal if clicked outside video
window.addEventListener('click', function(e) {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        videoPlayer.pause();
    }
});
