const selectLang = document.querySelector("#select-lang");

let jsonLang = ""
function cambiarIdioma(){
const selectedValue = selectLang.value;
if (selectedValue == "english"){
    jsonLang="worksEN.json"
    console.log(jsonLang)

}
else{
    jsonLang="worksES.json"
    console.log(jsonLang)
}
}

selectLang.addEventListener("onChange", cambiarIdioma())


function getData(){
    fetch(jsonLang)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let cont = document.querySelector(".works-cont");
            let out = "";
            for (let info of data) {
                out +=
              info.linkdeploy!=""?
                `
            <div class="work">
            <img src="${info.image}" alt="">
            <div class="info-card">
                <div class="work-info">
                    <h6>${info.title}</h6>
                    <p class="data">${info.text}</p>
                    <p class="tags"><span>#</span>${info.tags}</p>
                   
                    <a style="width:100%" href="${info.linkdeploy}" target="_blank">
                    <div class="work-btn">
                        <div class="btn">
                                Live
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_503_1031" maskUnits="userSpaceOnUse" x="0" y="0"
                                        width="24" height="24">
                                        <rect width="24" height="24" fill="#ABB2BF"></rect>
                                    </mask>
                                    <g mask="url(#mask0_503_1031)">
                                        <path
                                            d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.2833 3 11.5208 3.09583 11.7125 3.2875C11.9042 3.47917 12 3.71667 12 4C12 4.28333 11.9042 4.52083 11.7125 4.7125C11.5208 4.90417 11.2833 5 11 5H5V19H19V13C19 12.7167 19.0958 12.4792 19.2875 12.2875C19.4792 12.0958 19.7167 12 20 12C20.2833 12 20.5208 12.0958 20.7125 12.2875C20.9042 12.4792 21 12.7167 21 13V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM19 6.4L10.4 15C10.2167 15.1833 9.98333 15.275 9.7 15.275C9.41667 15.275 9.18333 15.1833 9 15C8.81667 14.8167 8.725 14.5833 8.725 14.3C8.725 14.0167 8.81667 13.7833 9 13.6L17.6 5H15C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4C14 3.71667 14.0958 3.47917 14.2875 3.2875C14.4792 3.09583 14.7167 3 15 3H21V9C21 9.28333 20.9042 9.52083 20.7125 9.7125C20.5208 9.90417 20.2833 10 20 10C19.7167 10 19.4792 9.90417 19.2875 9.7125C19.0958 9.52083 19 9.28333 19 9V6.4Z"
                                            fill="#ABB2BF"></path>
                                    </g>
                                </svg>
                                </div>
                                </a>
                                <a  style="width:100% "href="${info.linkgh}" target="_blank">
                        <div class="btn">
                                Github
                                <svg  width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5 22.027V19.157C16.5375 18.6802 16.4731 18.2008 16.311 17.7508C16.1489 17.3008 15.8929 16.8905 15.56 16.547C18.7 16.197 22 15.007 22 9.54704C21.9997 8.15086 21.4627 6.80824 20.5 5.79704C20.9559 4.57554 20.9236 3.22539 20.41 2.02704C20.41 2.02704 19.23 1.67704 16.5 3.50704C14.208 2.88586 11.792 2.88586 9.5 3.50704C6.77 1.67704 5.59 2.02704 5.59 2.02704C5.07638 3.22539 5.04414 4.57554 5.5 5.79704C4.53013 6.81574 3.99252 8.1705 4 9.57704C4 14.997 7.3 16.187 10.44 16.577C10.111 16.917 9.85726 17.3224 9.69531 17.767C9.53335 18.2115 9.46681 18.6851 9.5 19.157V22.027"
                                        stroke="#ABB2BF" fill="none" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="svg-gh" d="M9.5 20.0271C6.5 21.0001 4 20.0271 2.5 17.0271"
                                        stroke="#ABB2BF" fill="none" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div>
                                </a>
                    </div>
                </div>
            </div>
        </div>
            `
            :  `
            <div class="work">
            <img src="${info.image}" alt="">
            <div class="info-card">
                <div class="work-info">
                    <h6>${info.title}</h6>
                    <p class="data">${info.text}</p>
                    <p class="tags"><span>#</span>${info.tags}</p>
                    <a  style="width:100% "href="${info.linkgh}" target="_blank">
                        <div class="btn" style="font-size:20px; font-weight:500;width:90.5%">
                                GITHUB
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.5 22.027V19.157C16.5375 18.6802 16.4731 18.2008 16.311 17.7508C16.1489 17.3008 15.8929 16.8905 15.56 16.547C18.7 16.197 22 15.007 22 9.54704C21.9997 8.15086 21.4627 6.80824 20.5 5.79704C20.9559 4.57554 20.9236 3.22539 20.41 2.02704C20.41 2.02704 19.23 1.67704 16.5 3.50704C14.208 2.88586 11.792 2.88586 9.5 3.50704C6.77 1.67704 5.59 2.02704 5.59 2.02704C5.07638 3.22539 5.04414 4.57554 5.5 5.79704C4.53013 6.81574 3.99252 8.1705 4 9.57704C4 14.997 7.3 16.187 10.44 16.577C10.111 16.917 9.85726 17.3224 9.69531 17.767C9.53335 18.2115 9.46681 18.6851 9.5 19.157V22.027"
                                        stroke="#ABB2BF" fill="none" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9.5 20.0271C6.5 21.0001 4 20.0271 2.5 17.0271"
                                        stroke="#ABB2BF" fill="none" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div>
                                </a>
                    </div>
                </div>
            </div>
        </div>
            `
            }
            cont.innerHTML = out + `
       
        `
        })
}

getData()