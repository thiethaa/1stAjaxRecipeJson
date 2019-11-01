var content = document.getElementById('content');
var btn = document.getElementById('btn').addEventListener('click',loadText)

    function loadText(){
        var xhr = new XMLHttpRequest();
       //open method (GET, url,async'true or false)
        xhr.open('GET','https://api.edamam.com/search?q=chicken&app_id=130a0976&app_key=be1e8fe24f4a5a6305283a7b16dda916',true)
        console.log(xhr.responseText);
        

        xhr.onload = function(){
            var data = JSON.parse(xhr.responseText);
            var output = '';
            for (let index = 0; index < data.hits.length; index++){
            console.log('test',data.hits[index].recipe);  
                content.innerHTML += `
                <h4>${data.hits[index].recipe.label}</h4>
                <p>${data.hits[index].recipe.ingredientLines.join("<br>")}</p>   
                `     
            }
        }
        xhr.send();   
    }
    