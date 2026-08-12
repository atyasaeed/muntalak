function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    html.setAttribute('lang', newLang);
    if (newLang === 'en') {
        html.setAttribute('dir', 'ltr');
    } else {
        html.setAttribute('dir', 'rtl');
    }
    localStorage.setItem('language', newLang);
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.documentElement.setAttribute('lang', savedLang);
    if (savedLang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
    }
});
