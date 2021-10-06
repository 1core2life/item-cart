window.onload = function () {

    document.getElementById("folder1").addEventListener("click", open);

    function open() {
        var isOpened = (document.getElementById('hiddenContent01').style.display == 'none');
        console.log(isOpened);
        if (isOpened ) {
            document.getElementById("folder1").innerText = "¡åÆîÄ¡±â"
            document.getElementById('hiddenContent01').style.display = 'block';
        }
        else {
            document.getElementById("folder1").innerText = "¢¹ÆîÄ¡±â"
            document.getElementById('hiddenContent01').style.display = 'none';

        }
    }
}