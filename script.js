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
    localStorage.setItem('muntalaq_lang', newLang);
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('muntalaq_lang') || 'ar';
    document.documentElement.setAttribute('lang', savedLang);
    if (savedLang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
    }
});
