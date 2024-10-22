window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-slate-50', 'bg-opacity-100');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-slate-50', 'bg-opacity-100');
        nav.classList.add('bg-transparent');
    }
});
