document.addEventListener('DOMContentLoaded', function() {

    Caman('#image', function() {
        this.revert(true);
    });

    var textInput = document.getElementById("message");

    function applyText() {
        var canvas = document.getElementById("image");
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgba(0,0,0,0)";
        var boxTop =(canvas.height/2.2)-30;
        ctx.fillRect(0, boxTop, canvas.width, 65);
        ctx.font = "70px Raleway";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"
        ctx.fillText(textInput.value, canvas.width/1.9, boxTop+50);
    };




    
    var submitText = document.getElementById('submit');
    submitText.onclick = applyText;

    var saveBtn = document.querySelector('#save');
    saveBtn.onclick = saveBtnHandler;

    function saveBtnHandler(event) {

        Caman('#image', function() {
            this.render(function() {
                this.save('image.png');
            });
        });
    }

}, false);