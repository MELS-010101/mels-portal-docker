// ============================================
// Translations
// ============================================
const translations = {
    ru: {
        'nav.works': 'Работы',
        'nav.about': 'Обо мне',
        'nav.contact': 'Контакты',
        'header.available': 'Available for projects',
        'hero.label': 'Infrastructure Engineer · DevOps',
        'hero.title1': 'Проектирую',
        'hero.title2': 'надёжную',
        'hero.title3': 'инфраструктуру',
        'hero.description': 'Windows Server, Active Directory, Docker, автоматизация. Превращаю сложные системы в понятные и управляемые решения.',
        'hero.cta1': 'Смотреть проекты',
        'hero.cta2': 'Связаться',
        'hero.stat1': 'модулей пройдено',
        'hero.stat2': 'технологий',
        'hero.stat3': 'год запуска',
        'work.label': '01 — Избранные работы',
        'work.title': 'Проекты',
        'work.tag1': 'Windows Server',
        'work.tag2': 'Docker',
        'work.tag3': 'Linux',
        'work.desc1': 'Полноценная IT-инфраструктура: Active Directory, Group Policy, IIS, Firewall, резервное копирование. Развёрнуто с нуля на Windows Server 2022.',
        'work.project2': 'Docker Lab',
        'work.project3': 'Linux & Nginx Web Server',
        'work.desc2': 'Практика контейнеризации: кастомные образы, Dockerfile, проброс портов, работа с Nginx. Первый шаг в мир DevOps.',
        'work.desc3': 'Настройка веб-сервера Nginx на Ubuntu, UFW firewall, rsync-бэкапы. Базовая административная практика.',
        'work.tag4': 'Kubernetes',
        'work.project4': 'GitOps Monitoring Platform',
        'work.desc4': 'Мониторинг production-уровня: ArgoCD GitOps, SLO с multi-window burn rate, Alertmanager → Telegram с runbook и kubectl-диагностикой, SealedSecrets, CI с promtool. Восстановление кластера — одной командой.',
        'work.link1': 'Открыть на GitHub',
        'work.more': 'Подробнее',
        'about.label': '02 — Обо мне',
        'about.title': 'Подход',
        'about.lead': 'Учуcь на сисадмина, чтобы стать DevOps-инженером.',
        'about.text1': 'Мне интересна инфраструктура как код, автоматизация рутины и построение систем, которые работают без вмешательства человека. Каждый проект — это шаг от теории к реальной практике.',
        'about.text2': 'Верю, что хороший инженер — это не тот, кто знает всё, а тот, кто умеет быстро разбираться и доводить задачи до конца.',
        'about.stack1': 'Операционные системы',
        'about.stack2': 'Инфраструктура',
        'about.stack3': 'DevOps',
        'about.stack4': 'Веб',
        'contact.label': '03 — Связь',
        'contact.title': 'Контакты',
        'contact.lead': 'Открыт к предложениям, коллаборациям и интересным задачам.',
        'contact.telegram': 'Telegram',
        'contact.email': 'Email',
        'footer.text': 'Infrastructure · Automation · DevOps'
    },
    en: {
        'nav.works': 'Works',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'header.available': 'Available for projects',
        'hero.label': 'Infrastructure Engineer · DevOps',
        'hero.title1': 'Building',
        'hero.title2': 'reliable',
        'hero.title3': 'infrastructure',
        'hero.description': 'Windows Server, Active Directory, Docker, automation. Turning complex systems into clear and manageable solutions.',
        'hero.cta1': 'View projects',
        'hero.cta2': 'Get in touch',
        'hero.stat1': 'modules completed',
        'hero.stat2': 'technologies',
        'hero.stat3': 'launch year',
        'work.label': '01 — Selected Works',
        'work.title': 'Projects',
        'work.tag1': 'Windows Server',
        'work.tag2': 'Docker',
        'work.tag3': 'Linux',
        'work.desc1': 'Full-fledged IT infrastructure: Active Directory, Group Policy, IIS, Firewall, backup. Deployed from scratch on Windows Server 2022.',
        'work.project2': 'Docker Lab',
        'work.project3': 'Linux & Nginx Web Server',
        'work.desc2': 'Containerization practice: custom images, Dockerfile, port forwarding, working with Nginx. First step into the DevOps world.',
        'work.desc3': 'Setting up Nginx web server on Ubuntu, UFW firewall, rsync backups. Basic administrative practice.',
        'work.tag4': 'Kubernetes',
        'work.project4': 'GitOps Monitoring Platform',
        'work.desc4': 'Production-grade monitoring: ArgoCD GitOps, SLO with multi-window burn rate, Alertmanager → Telegram with runbooks and kubectl diagnostics, SealedSecrets, CI with promtool. Cluster restore in a single command.',
        'work.link1': 'View on GitHub',
        'work.more': 'Details',
        'about.label': '02 — About Me',
        'about.title': 'Approach',
        'about.lead': 'Studying system administration to become a DevOps engineer.',
        'about.text1': "I'm interested in infrastructure as code, automation of routine tasks, and building systems that work without human intervention. Each project is a step from theory to real practice.",
        'about.text2': 'I believe that a good engineer is not the one who knows everything, but the one who can quickly figure things out and complete tasks.',
        'about.stack1': 'Operating Systems',
        'about.stack2': 'Infrastructure',
        'about.stack3': 'DevOps',
        'about.stack4': 'Web',
        'contact.label': '03 — Contact',
        'contact.title': 'Get in Touch',
        'contact.lead': 'Open to offers, collaborations and interesting tasks.',
        'contact.telegram': 'Telegram',
        'contact.email': 'Email',
        'footer.text': 'Infrastructure · Automation · DevOps'
    }
};

// ============================================
// State
// ============================================
let currentLang = localStorage.getItem('lang') || 'ru';
let currentTheme = localStorage.getItem('theme') || 'light';

// ============================================
// Theme Toggle
// ============================================
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// ============================================
// Language Toggle
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
}

function updateLanguage() {
    // Обновляем переключатель
    const currentEl = document.getElementById('lang-current');
    const otherEl = document.getElementById('lang-other');
    if (currentEl && otherEl) {
        currentEl.textContent = currentLang.toUpperCase();
        otherEl.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    }

    // Обновляем все тексты
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    updateLanguage();
});

// ============================================
// Smooth scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Make functions globally available
// ============================================
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;

// ============================================
// Mobile Menu Toggle
// ============================================
function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    const btn = document.querySelector('.mobile-menu-btn');
    
    if (nav && btn) {
        nav.classList.toggle('active');
        btn.classList.toggle('active');
        
        // Анимация бургера
        const spans = btn.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }
}

// Закрываем меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('main-nav');
        const btn = document.querySelector('.mobile-menu-btn');
        if (nav && nav.classList.contains('active')) {
            nav.classList.remove('active');
            btn.classList.remove('active');
            const spans = btn.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});

// Экспортируем функцию
window.toggleMobileMenu = toggleMobileMenu;