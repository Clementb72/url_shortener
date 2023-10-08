document.addEventListener("DOMContentLoaded", function(){
    let button_reload = document.getElementById("reload");
    let button_submit = document.getElementById("submit");

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
        fetch(`http://tinyurl.com/api-create.php?url=${url}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('resultat').value = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });;
    }
});

