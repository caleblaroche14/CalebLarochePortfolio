const morearrow = document.getElementById('morearrow');
const more = document.getElementById('more');
const mailButton = document.getElementById('mailButton');

morearrow.addEventListener('click', () => {
    more.classList.toggle('closed');
    morearrow.classList.toggle('up');
});

mailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('caleblaroche14@gmail.com');
    
    // Create and show popup
    const popup = document.createElement('div');
    popup.textContent = 'Email copied!';
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-size: 16px;
        z-index: 1000;
        pointer-events: none;
    `;
    document.body.appendChild(popup);
    
    // Remove popup after 2 seconds
    setTimeout(() => {
        popup.remove();
    }, 2000);
});