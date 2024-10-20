var index =  document.querySelectorAll(".drum").length
for (let i = 0; i < index ; i++) {
    var buttonclick = document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttoninnerhtml = this.innerHtml;
        switch (buttoninnerhtml) {
            case "w":
                var audio1 = new Audio("sounds\crash.mp3");
                audio1.play();
                break;
            case "a":
                var audio2 = new Audio('sounds\kick-bass.mp3');
                audio2.play();
                break;
            case "s":
                var audio3 = new Audio("sounds\snare.mp3");
                audio3.play();
                break;
            case "d":
                var audio4 = new Audio("C:\Users\Ananya\Desktop\WebDevelopment\sounds\tom-1.mp3");
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio("C:\Users\Ananya\Desktop\WebDevelopment\sounds\tom-2.mp3");
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio("C:\Users\Ananya\Desktop\WebDevelopment\sounds\tom-3.mp3");
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio("C:\Users\Ananya\Desktop\WebDevelopment\sounds\tom-4.mp3");
                audio7.play();
                break;
        
            default:console.log(buttoninnerhtml);
                break;
        }
    });
    
}
