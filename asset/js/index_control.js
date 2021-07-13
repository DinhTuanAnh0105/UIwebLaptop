let Dell = document.getElementById('Dell');
let Asus = document.getElementById('Asus');
let HP = document.getElementById('HP');
let MSI = document.getElementById('MSI');
let Lenovo = document.getElementById('Lenovo');

Dell.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
Asus.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  
HP.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
MSI.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Lenovo.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}

//regex email:
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// function isEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// Check email
// email.onblur = email.oninput = function() {
//     if(isEmail(email.value.trim())){
//         setSuccessFor(email);
//     } else {
//         setErrorFor(email,'Trường này phải là email');
//     }
// }

// Check password <6 ký tự
// password.onblur = password.oninput = function() {
//     if(password.value.trim().length < 6) {
//         setErrorFor(password, '');
//         //setErrorFor(password, 'Mật khẩu phải lớn hơn 6 ký tự');
//     } else {
//         setSuccessFor(password);
//     }
// }