window.onload = function () {

    document.getElementById("folder1").addEventListener("click", open);

    function open() {
        var isOpened = (document.getElementById('hiddenContent01').style.display == 'none');

        if (isOpened) {
            document.getElementById("folder1").innerText = "Folder#1"
            document.getElementById('hiddenContent01').style.display = 'block';
        }
        else {
            document.getElementById("folder1").innerText = "Folder#1"
            document.getElementById('hiddenContent01').style.display = 'none';

        }
    }


    document.getElementById("add").addEventListener("click", add);

    function add() {
        alert("test");
    }
}