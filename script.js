document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content').forEach(content => {
        content.style.maxHeight = '0';
    });

    document.querySelectorAll('.item button').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.parentElement.nextElementSibling;
            const isActive = button.classList.contains('active'); 
            document.querySelectorAll('.item button').forEach(btn => {
                btn.classList.remove('active'); 
                btn.parentElement.nextElementSibling.style.maxHeight = '0'; 
            });
            if (!isActive) {
                button.classList.add('active'); 
                answer.style.maxHeight = answer.scrollHeight + 'px'; 
            }
        });
    });
});
