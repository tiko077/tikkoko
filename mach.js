// В данный момент JavaScript не нужен для статического контента.
// Но можно добавить динамическую функциональность, например, для открытия модального окна или дополнительной информации.
document.addEventListener('DOMContentLoaded', () => {
    const detailsBtns = document.querySelectorAll('.btn-details');
    
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Дополнительная информация...');
        });
    });
});
