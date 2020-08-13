const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

<
script type = "text/javascript" >
    function validasi() {
        var nama = document.getElementById("nama").value;
        var email = document.getElementById("email").value;
        var alamat = document.getElementById("alamat").value;
        if (nama != "" && email != "" && alamat != "") {
            return true;
        } else {
            alert('Anda harus mengisi data dengan lengkap !');
        }
    } <
    /script>