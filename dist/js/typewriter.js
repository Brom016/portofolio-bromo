document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typewriter');
    const words = ['Hamid Bromo', 'JUNIOR FRONTEND DEV']; // Array kata yang akan ditampilkan
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[currentWordIndex];
      const textToShow = isDeleting
        ? currentWord.substring(0, currentCharIndex--)
        : currentWord.substring(0, currentCharIndex++);
  
      textElement.textContent = textToShow;
  
      if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1200); // Tunggu sebelum mulai menghapus
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length; // Pindah ke kata berikutnya
      }
  
      setTimeout(type, isDeleting ? 50 : 100); // Pengaturan kecepatan mengetik dan menghapus
    }
  
    type();
  });
  