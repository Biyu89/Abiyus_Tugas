const accentColor = '#00ffff'; 
const defaultColor = '#ffffff'; 

function validateForm(event) {
    event.preventDefault(); 

    const inputNama = document.getElementById('nama').value.trim();
    const inputEmail = document.getElementById('email').value.trim();
    const inputSubjek = document.getElementById('subjek').value.trim();
    const inputPesan = document.getElementById('pesan').value.trim();
    
    let isValid = true;
    let errorMessage = '';

    if (inputNama === '') {
        errorMessage += 'Nama tidak boleh kosong.\n'; 
        isValid = false;
    }
    if (inputEmail === '' || !inputEmail.includes('@')) {
        errorMessage += 'Email tidak valid (wajib ada @).\n'; 
        isValid = false;
    }
    if (inputSubjek === '') {
        errorMessage += 'Subjek tidak boleh kosong.\n'; 
        isValid = false;
    }
    if (inputPesan === '') {
        errorMessage += 'Pesan tidak boleh kosong.\n'; 
        isValid = false;
    }

    if (isValid) {
        alert('Pesan siap dikirim!'); 
    } else {
        alert('Terdapat kesalahan input:\n' + errorMessage); 
    }
}

function changeButtonText(element) {
    element.innerText = "Mantap, siap scroll!"; 
    element.style.backgroundColor = accentColor; 
    
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' }); 
}

function addHoverEffect(element) {
    element.style.transform = 'scale(1.05)'; 
    element.style.boxShadow = '0 0 15px ' + accentColor;
}

function removeHoverEffect(element) {
    element.style.transform = 'scale(1)'; 
    element.style.boxShadow = 'none';
}