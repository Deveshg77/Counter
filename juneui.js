
  document.addEventListener('DOMContentLoaded', function() {
    const countDisplay = document.getElementById('countDisplay');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const errorMessage = document.getElementById('errorMessage');

    let count = 0;

    // Function to update count display
    function updateCount() {
      countDisplay.textContent = count;
      if (count === 0) {
        clearBtn.style.display = 'none';
      } else {
        clearBtn.style.display = 'block';
      }
    }

    // Increment button click handler
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCount();
    });

    // Decrement button click handler
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCount();
        errorMessage.style.display = 'none'; 
      } else {
        errorMessage.style.display = 'block'; 
      }
    });

    // Clear button click handler
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCount();
      errorMessage.style.display = 'none'; 
    });

    // Initial update of count display
    updateCount();
  });

