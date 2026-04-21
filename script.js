// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Animaciones al hacer scroll
const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('h3, #sobre-mi p, .timeline-item, .skill-card, .lang-item, .academic-item, .other-exp-card, .contact-form form').forEach(el => {
    fadeInObserver.observe(el);
});

// Animación barras de idiomas
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.lang-bar-fill');
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const languagesSection = document.querySelector('.languages');
if (languagesSection) skillObserver.observe(languagesSection);

// Efecto Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.nav-logo');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(217, 224, 229, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            if (logo) logo.style.display = 'block';
        } else {
            navbar.style.background = 'var(--bg-header)';
            navbar.style.boxShadow = 'none';
            if (window.innerWidth > 768 && logo) logo.style.display = 'none';
        }
    }
});

// --- SISTEMA MULTI-IDIOMA (SOLO ES / EN) ---
const translations = {
    es: {
        "nav_about": "Sobre Mí",
        "nav_exp": "Experiencia",
        "nav_skills": "Habilidades",
        "nav_edu": "Formación",
        "nav_other": "Otras Experiencias",
        "nav_contact": "Contacto",
        "header_subtitle": "ESTUDIANTE DE INGENIERÍA CIVIL INDUSTRIAL",
        "about_title": "Sobre Mí",
        "about_text": "Profesional en formación de 23 años enfocado en gestión operativa, simulación de procesos y trabajo interdisciplinario. Destaca por su proactividad, análisis y liderazgo en proyectos académicos y emprendimientos.",
        "btn_cv": "Descargar CV en PDF",
        "exp_title": "Experiencia Laboral",
        "exp_role1": "Práctica 2",
        "exp_desc1": "Apoyo en el seguimiento de pedidos, control de inventarios y registro de información.",
        "exp_role2": "Práctica 1",
        "exp_desc2": "Apoyo en la planificación, ejecución, logística y seguimiento de inspecciones de hermeticidad a estanques.",
        "exp_role3": "Digitador",
        "exp_desc3": "Apoyo administrativo y digitalización documental.",
        "skills_title": "Habilidades y Competencias",
        "skill1": "Gestión de Proyectos",
        "skill2": "Simulación (Arena, AnyLogic)",
        "skill3": "Modelamiento de Procesos",
        "skill4": "Coordinación Administrativa",
        "skill5": "Power BI y Excel Avanzado",
        "skill6": "Trabajo en Equipo y Liderazgo",
        "lang_title": "Idiomas",
        "lang_es": "Español",
        "lang_en": "Inglés",
        "lang_level_native": "Nivel Nativo",
        "edu_title": "Datos Académicos y Cursos",
        "edu_degree": "Ingeniería Civil Industrial (6º año)",
        "edu_degree_lic": "Licenciatura en Ciencias de la Ingeniería",
        "status_current": "(En curso)",
        "course_1": "Power BI Intermedio y Avanzado",
        "course_2": "Excel Intermedio y Avanzado",
        "course_3": "Técnicas de Gestión Logística",
        "edu_highschool": "Enseñanza media y básica",
        "other_title": "Congresos y Otras Experiencias",
        "other_desc1": "Expositor: Presentación en sesión paralela.",
        "other_desc2": "Organizador: Miembro de la comisión de programa y operaciones.",
        "other_desc3": "Participante: Congreso de Ingeniería Global 2024.",
        "contact_title": "Contacto",
        "contact_name_ph": "Tu nombre",
        "contact_email_ph": "Tu email",
        "contact_msg_ph": "Tu mensaje",
        "contact_btn": "Enviar Mensaje",
        "footer_rights": "Todos los derechos reservados.",
        "msg_success": "¡Mensaje enviado con éxito!",
        "msg_error": "Hubo un problema. Intenta de nuevo."
    },
    en: {
        "nav_about": "About Me",
        "nav_exp": "Experience",
        "nav_skills": "Skills",
        "nav_edu": "Education",
        "nav_other": "Other Experiences",
        "nav_contact": "Contact",
        "header_subtitle": "INDUSTRIAL CIVIL ENGINEERING STUDENT",
        "about_title": "About Me",
        "about_text": "23-year-old professional in training focused on operational management, process simulation, and interdisciplinary work. Stands out for his proactivity, analysis, and leadership in academic projects and entrepreneurship.",
        "btn_cv": "Download CV in PDF",
        "exp_title": "Work Experience",
        "exp_role1": "Internship 2",
        "exp_desc1": "Support in order tracking, inventory control, and information recording.",
        "exp_role2": "Internship 1",
        "exp_desc2": "Support in the planning, execution, logistics, and tracking of tank leak tightness inspections.",
        "exp_role3": "Data Entry Clerk",
        "exp_desc3": "Administrative support and document digitization.",
        "skills_title": "Skills and Competencies",
        "skill1": "Project Management",
        "skill2": "Simulation (Arena, AnyLogic)",
        "skill3": "Process Modeling",
        "skill4": "Administrative Coordination",
        "skill5": "Advanced Power BI and Excel",
        "skill6": "Teamwork and Leadership",
        "lang_title": "Languages",
        "lang_es": "Spanish",
        "lang_en": "English",
        "lang_level_native": "Native",
        "edu_title": "Education and Courses",
        "edu_degree": "Industrial Civil Engineering (6th year)",
        "edu_degree_lic": "Bachelor of Science in Engineering",
        "status_current": "(In progress)",
        "course_1": "Intermediate and Advanced Power BI",
        "course_2": "Intermediate and Advanced Excel",
        "course_3": "Logistics Management Techniques",
        "edu_highschool": "High School Diploma",
        "other_title": "Congresses and Other Experiences",
        "other_desc1": "Speaker: Presentation in a parallel session.",
        "other_desc2": "Organizer: Member of the program and operations committee.",
        "other_desc3": "Attendee: Global Engineering Congress 2024.",
        "contact_title": "Contact",
        "contact_name_ph": "Your name",
        "contact_email_ph": "Your email",
        "contact_msg_ph": "Your message",
        "contact_btn": "Send Message",
        "footer_rights": "All rights reserved.",
        "msg_success": "Message sent successfully!",
        "msg_error": "There was a problem. Please try again."
    }
};

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const data = new FormData(contactForm);
        const currentLang = localStorage.getItem('preferredLanguage') || 'es';
        
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                formStatus.textContent = translations[currentLang]['msg_success'];
                formStatus.style.display = "block";
                contactForm.reset();
            } else {
                formStatus.textContent = translations[currentLang]['msg_error'];
                formStatus.style.display = "block";
            }
        } catch (error) {
            formStatus.textContent = translations[currentLang]['msg_error'];
            formStatus.style.display = "block";
        }
    });
}

// --- AQUÍ ESTÁ EL CAMBIO PARA LOS ARCHIVOS PDF ---
const cvFiles = {
    es: "curriculums/curriculum_es.pdf",
    en: "curriculums/curriculum_en.pdf"
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if(element.children.length === 0) {
                element.textContent = translations[lang][key];
            } else {
                 element.innerHTML = element.innerHTML.replace(element.textContent.trim(), translations[lang][key]);
            }
        }
    });

    document.querySelectorAll('[data-placeholder-key]').forEach(element => {
        const key = element.getAttribute('data-placeholder-key');
        element.setAttribute('placeholder', translations[lang][key]);
    });

    // Actualiza el enlace del CV
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = cvFiles[lang];
    }

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const currentBtn = document.getElementById('btn-' + lang);
    if(currentBtn) currentBtn.classList.add('active');

    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    changeLanguage(localStorage.getItem('preferredLanguage') || 'es');
});
