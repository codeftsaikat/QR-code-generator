const formEl = document.getElementById('formId');
const imageContainerEl = document.getElementById('image_container');
const QRImageEl = document.getElementById('QR_image');
const inputEl = document.getElementById('inputId');
const generateButtonEl = document.getElementById('Generate_button');
const errorTextEl = document.getElementById('errorText');

const renderQrCode = (url) => {
        if (!url) return;
        generateButtonEl.innerText = 'Generating QR Code....'
        QRImageEl.src = url;

      

        const onImageLoad = () => {

                const interval = setInterval(() => {
                        imageContainerEl.classList.add('show');
                        generateButtonEl.innerText = 'Generate QR Code';
                        clearInterval(interval)
                }, 100)
        }

        QRImageEl.addEventListener('load', onImageLoad);
}

formEl.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formEl);
        const text = formData.get('input');
        const qrCodeUrl = `https://quickchart.io/chart?cht=qr&chs=150x150&chl=${text}`;

        renderQrCode(qrCodeUrl)
})
inputEl.addEventListener("keyup", () => {
        if (!inputEl.value.trim()) {
                imageContainerEl.classList.remove('show');
        }

});