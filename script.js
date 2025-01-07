function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    // Deactivate all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected tab and activate button
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function submitFeedback(tabId) {
    const tab = document.getElementById(tabId);
    const stars = tab.querySelectorAll('.star.selected');
    const feedback = tab.querySelector('textarea').value;

    const rating = stars.length;
    alert(`Thank you for your feedback!\nRating: ${rating} Stars\nComments: ${feedback}`);
}

document.addEventListener('DOMContentLoaded', () => {
    // Default tab
    document.getElementById('new-students').classList.add('active');

    // Star rating logic
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            const parent = star.parentNode;

            // Remove existing selection
            parent.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

            // Add selection
            for (let i = 0; i < value; i++) {
                parent.children[i].classList.add('selected');
            }
        });
    });
});
