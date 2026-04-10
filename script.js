document.addEventListener('DOMContentLoaded', () => {
    const numInput = document.getElementById('num-input');
    const generateBtn = document.getElementById('generate-btn');
    const resultsSection = document.getElementById('results-section');
    const displayNum = document.getElementById('display-num');
    const tableBody = document.getElementById('table-body');

    const generateTable = () => {
        const num = parseInt(numInput.value);

        if (isNaN(num)) {
            alert('Please enter a valid number!');
            return;
        }

        // Show section & update title
        resultsSection.classList.remove('hidden');
        displayNum.textContent = num;
        
        // Clear previous results
        tableBody.innerHTML = '';

        // Generate table based on the Python logic: loop 0 to 10, skip 5
        for (let i = 0; i <= 10; i++) {
            if (i === 5) continue; // skip 5 as per request

            const row = document.createElement('div');
            row.className = 'table-row';
            row.style.animation = `slideUp 0.4s ease-out ${i * 0.05}s both`;
            
            row.innerHTML = `
                <span class="row-num">${num}</span>
                <span class="row-op">×</span>
                <span class="row-val">${i}</span>
                <span class="row-equal">=</span>
                <span class="row-res">${num * i}</span>
            `;

            tableBody.appendChild(row);
        }

        // Scroll into view
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Events
    generateBtn.addEventListener('click', generateTable);
    
    numInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateTable();
        }
    });

    // Default initial animation
    document.body.style.opacity = '1';
});
