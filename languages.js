const select = document.querySelector("#select-lang");

const titles = document.querySelectorAll(".nav-menu li a")
const iam = document.querySelectorAll(".i-am")
const bio = document.querySelectorAll(".bio p")
const cv = document.querySelector(".download-cv a")
const svgcv = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_407_539" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">  <rect width="24" height="24" fill="#ABB2BF"></rect></mask><g mask="url(#mask0_407_539)">   <path       d="M12 15.575C11.8667 15.575 11.7417 15.5542 11.625 15.5125C11.5083 15.4708 11.4 15.4 11.3 15.3L7.7 11.7C7.51667 11.5167 7.425 11.2833 7.425 11C7.425 10.7167 7.51667 10.4833 7.7 10.3C7.88333 10.1167 8.12083 10.0208 8.4125 10.0125C8.70417 10.0042 8.94167 10.0917 9.125 10.275L11 12.15V5C11 4.71667 11.0958 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2833 4 12.5208 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V12.15L14.875 10.275C15.0583 10.0917 15.2958 10.0042 15.5875 10.0125C15.8792 10.0208 16.1167 10.1167 16.3 10.3C16.4833 10.4833 16.575 10.7167 16.575 11C16.575 11.2833 16.4833 11.5167 16.3 11.7L12.7 15.3C12.6 15.4 12.4917 15.4708 12.375 15.5125C12.2583 15.5542 12.1333 15.575 12 15.575ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#ABB2BF"> </path></g> </svg>`
const socials = document.querySelector(".socials h3")
const hoverStack = document.querySelectorAll(".icons p")
const about = document.querySelector("#about")
const aboutP = document.querySelectorAll(".paragraphs-ml p")
const stack = document.querySelector(".stack h2")
const stackTitles = document.querySelectorAll(".web-in h3")
const works= document.querySelector("#works")
const contacto = document.querySelector("#contact")
const contactoH6 = document.querySelector(".contact h6")
const enviarMsj = document.querySelector(".send-msg a")
const svgmsg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_548_667" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">  <rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_548_667)">   <path     d="M20 6H4V18H13V20H4C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V13H20V6ZM19.175 20H16C15.7167 20 15.4792 19.9042 15.2875 19.7125C15.0958 19.5208 15 19.2833 15 19C15 18.7167 15.0958 18.4792 15.2875 18.2875C15.4792 18.0958 15.7167 18 16 18H19.175L18.275 17.1C18.075 16.9 17.9792 16.6667 17.9875 16.4C17.9958 16.1333 18.1 15.9 18.3 15.7C18.5 15.5167 18.7333 15.4208 19 15.4125C19.2667 15.4042 19.5 15.5 19.7 15.7L22.3 18.3C22.5 18.5 22.6 18.7333 22.6 19C22.6 19.2667 22.5 19.5 22.3 19.7L19.7 22.3C19.5167 22.4833 19.2875 22.5792 19.0125 22.5875C18.7375 22.5958 18.5 22.5 18.3 22.3C18.1167 22.1167 18.025 21.8833 18.025 21.6C18.025 21.3167 18.1167 21.0833 18.3 20.9L19.175 20ZM4 6V18V13V13.075V6ZM12 11L20 6V8L12.525 12.675C12.3583 12.775 12.1833 12.825 12 12.825C11.8167 12.825 11.6417 12.775 11.475 12.675L4 8V6L12 11Z"     fill="#ABB2BF"></path></g></svg>`

const get = document.querySelector('[href="images/CV OLESEN FACUNDO.pdf"]');


window.addEventListener('onload', setES())


function obtenerSeleccion() {
    const selectedValue = select.value;
    if (selectedValue == "english") {
       setEN()
    }
    else {
       setES()
    }
    
}

    function setES(){
        titles[0].innerHTML = "Inicio"
        titles[1].innerHTML = "Acerca de"
        titles[2].innerHTML = "Trabajos"
        titles[3].innerHTML = "Contacto"
        iam[0].innerHTML = "Soy Facundo Olesen"
        iam[1].innerHTML = "Soy Facundo Olesen"
        iam[2].innerHTML = "Soy Facundo Olesen"
        bio[0].innerHTML = "Estudiante avanzado de" + `${"<span>"}` + " Tecnicatura en Desarrolo de Aplicaciones Informáticas " + `${"</span>"}` + "en UNICEN, Argentina."
        bio[1].innerHTML = "Entusiasta" + `${"<span>"}` + " desarrollador" + `${"</span>"}` + " enfocado en mejorar día a día sus habilidades."
        bio[2].innerHTML = "Emocionado por seguir evolucionando como profesional y ser parte de proyectos que desafíen e inspiren."
        cv.innerHTML = "Descargar CV" + `${svgcv}`
        socials.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Redes sociales`
        hoverStack[0].innerHTML = "Link a mi LinkedIn"
        hoverStack[1].innerHTML = "Link a mi GitHub"
        hoverStack[2].innerHTML = "Link a mi Gmail"
        hoverStack[3].innerHTML = "Link a mi WhatsApp"
        hoverStack[4].innerHTML = "Link a mi Instagram"
        about.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Acerca de `
        aboutP[0].innerHTML = "En mi carrera académica, he construido una sólida base en programación, estructuras de datos y algoritmos. Por otra parte, también, he trabajado en proyectos de Desarrollo Web con diferentes tecnologías para el Front-End (HTML, CSS y JavaScript) y para el Back-End (PHP y MySQL)."
        aboutP[1].innerHTML = "Cada día, busco nuevas oportunidades para aprender y crecer en el ámbito del desarrollo web. Mi objetivo es no solo aplicar mis habilidades técnicas en proyectos innovadores, sino también contribuir al equipo con un enfoque proactivo y soluciones creativas."
        aboutP[2].innerHTML = "Estoy emocionado por seguir evolucionando como profesional y ser parte de proyectos que desafíen e inspiren. Preparado para aportar mi pasión y habilidades a iniciativas que marquen la diferencia."
        aboutP[3].innerHTML = "Contáctame para crear algo juntos!"
        stack.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Habilidades`
        stackTitles[0].innerHTML = "Lenguajes"
        stackTitles[2].innerHTML = "Herramientas"
        stackTitles[3].innerHTML = "Frameworks & Librerias"
        stackTitles[4].innerHTML = "Otros"
        works.innerHTML=`${"<span>"}`+ "#" +`${"</span>"}Trabajos`
        contacto.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Contacto`
        contactoH6.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Espero tu mensaje!`
        enviarMsj.innerHTML = "Enviar mensaje" + `${svgmsg}`
        get.href="images/CV OLESEN FACUNDO.pdf"
    }
function setEN(){
    titles[0].innerHTML = "Home"
    titles[1].innerHTML = "About"
    titles[2].innerHTML = "Proyects"
    titles[3].innerHTML = "Contact"
    iam[0].innerHTML = "I am Facundo Olesen"
    iam[1].innerHTML = "I am Facundo Olesen"
    iam[2].innerHTML = "I am Facundo Olesen"
    bio[0].innerHTML = "Advanced student of " + `${"<span>"}` + " Software Development " + `${"</span>"}` + "in UNICEN, Buenos Aires, Argentina."
    bio[1].innerHTML = "Enthusiastic" + `${"<span>"}` + " developer" + `${"</span>"}` + " focused on improving his skills day by day."
    bio[2].innerHTML = "Excited to continue evolving as a professional and be part of projects that challenge and inspire."
    cv.innerHTML = "Download CV" + `${svgcv}`
    socials.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Social Links`
    hoverStack[0].innerHTML = "Link to my LinkedIn"
    hoverStack[1].innerHTML = "Link to my GitHub"
    hoverStack[2].innerHTML = "Link to my Gmail"
    hoverStack[3].innerHTML = "Link to my WhatsApp"
    hoverStack[4].innerHTML = "Link to my Instagram"
    about.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}About`
    aboutP[0].innerHTML = "During my career, I have learned the basics of programming, Data Structures and Algorithms. Moreover, I have also worked on projects for Web Development with different technologies for the Front-End (HTML, CSS and JavaScript) and for the Back-End (PHP and MySQL)."
    aboutP[1].innerHTML = "Every day, I seek new opportunities to learn and grow in the field of web development. My goal is not only to apply my technical skills to innovative projects but also to contribute to the team with a proactive approach and creative solutions."
    aboutP[2].innerHTML = "I'm excited to continue evolving as a professional and be part of projects that challenge and inspire. Ready to bring my passion and skills to projects that make a difference."
    aboutP[3].innerHTML = "Contact me to create something amazing together!"
    stack.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Skills`
    stackTitles[0].innerHTML = "Languages"
    stackTitles[2].innerHTML = "Tools"
    stackTitles[3].innerHTML = "Frameworks & Libraries"
    stackTitles[4].innerHTML = "Other"
    works.innerHTML=`${"<span>"}`+ "#" +`${"</span>"}Works`
    contacto.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Contact`
    contactoH6.innerHTML = `${"<span>"}`+ "#" +`${"</span>"}Let's keep in touch!`
    enviarMsj.innerHTML = "Send message" + `${svgmsg}`
    get.href="images/CV OLESEN FACUNDO (EN).pdf"
}




