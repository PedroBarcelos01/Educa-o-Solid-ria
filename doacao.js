function mascara(valor) {
	var valorAlterado = valor.value;
        if (valorAlterado === '') {
            valor.value = '';
            return;
        }
        valorAlterado = valorAlterado.replace(/\D/g, "");
        valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2");
        valorAlterado = valorAlterado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        valorAlterado = "R$ " + valorAlterado;
        valor.value = valorAlterado;
}

const wrapper =document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn =wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    const customMessage = "Pagamento efetuado no valor de ";
    const qrData = customMessage + qrValue;
    generateBtn.innerText = "Gerando um Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrData)}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code"
        wrapper.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});
