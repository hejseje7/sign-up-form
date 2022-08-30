const pass = document.querySelector('input[name=password]');
const passConf = document.querySelector('input[name=passConf]');
const errorMsg = document.querySelector('.error-msg');

function match() {
    if (pass.value===passConf.value) {
        pass.classList.remove('error');
        passConf.classList.remove('error')
        errorMsg.classList.add('disNone');
    }
    else {
        pass.classList.add('error');
        passConf.classList.add('error')
        errorMsg.classList.remove('disNone');
    }
    console.log(pass.value);
    console.log(passConf.value);
}

pass.addEventListener('change', match)
passConf.addEventListener('change', match)