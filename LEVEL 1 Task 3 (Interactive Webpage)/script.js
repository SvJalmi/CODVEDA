// Dropdown Toggle
document.getElementById('dropdownBtn').addEventListener('click', () => {
  document.getElementById('dropdownMenu').classList.toggle('hidden');
});

// Modal Functionality
const modal = document.getElementById('modal');
document.getElementById('openModal').addEventListener('click', () => {
  modal.classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Form Validation
document.getElementById('postForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const content = document.getElementById('postContent').value.trim();
  if (content === "") {
    alert("Post content cannot be empty!");
  } else {
    alert("Post submitted successfully!");
    document.getElementById('postForm').reset();
  }
});

// Feed Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Like button functionality
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('liked');
      const likeCount = this.querySelector('.like-count');
      let count = parseInt(likeCount.textContent);
      if (this.classList.contains('liked')) {
        likeCount.textContent = count + 1;
      } else {
        likeCount.textContent = count - 1;
      }
    });
  });

  // Comment button functionality
  const commentButtons = document.querySelectorAll('.comment-btn');
  commentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const feedCard = this.closest('.feed-card');
      const commentsSection = feedCard.querySelector('.comments-section');
      commentsSection.classList.toggle('hidden');
    });
  });

  // Share button functionality
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Post shared successfully!');
    });
  });

  // Comment form submission
  const commentForms = document.querySelectorAll('.comment-form');
  commentForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const commentInput = this.querySelector('.comment-input');
      const commentText = commentInput.value.trim();
      
      if (commentText !== "") {
        const commentsSection = this.closest('.comments-section');
        const commentsContainer = commentsSection.querySelector('.comments-container') || 
                                  commentsSection.querySelector('div:first-child');
        
        // Create new comment element
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `<strong>You:</strong> ${commentText}`;
        
        // Insert before the form
        commentsSection.insertBefore(newComment, this);
        
        // Clear input
        commentInput.value = '';
      }
    });
  });
