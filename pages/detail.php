<div class="card">
    <div class="card-header">
        <h5>Detail > <span class="item-name"></span></h5>
    </div>
    <div class="card-body">
        <div class="w-100 img"></div>
    </div>
</div>
<script>  
    (() => {
        const endpoint = "https://m-auto.herokuapp.com";
        const item = JSON.parse(window.localStorage.getItem("current-item"));https://m-auto.herokuapp.com/api/ressources/${element['imgcover']}
        $(".item-name").html(item['nom']);
        const img = document.createElement("img");
        $(img).attr({
            src: `${endpoint}/api/ressources/${item['imgcover']}`,
            id: new Date().getMilliseconds()
        })
        $(".img").append(img);
        // console.log(item);
    })()
</script>