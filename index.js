document.addEventListener("DOMContentLoaded", function(){
    let button_reload = document.getElementById("reload");
    let button_submit = document.getElementById("submit");
    const apiUrl = "https://api.tinyurl.com";

    if(button_reload){
        button_reload.addEventListener("click", () => {
            location.reload();
        });
    }

    if(button_submit){
        button_submit.addEventListener("click", () => {
            let url = document.getElementById("url").value;
            getShortURL(url);
        })
    }
    
    function getShortURL(url){
        fetch(apiUrl+"/create")
        .then(response => {
            console.log(response);
        });
    }
});

