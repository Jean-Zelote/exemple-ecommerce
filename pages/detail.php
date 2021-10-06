<div class="card">
    <div class="card-header">
        <h5>Detail > <span class="item-name text-primary"></span></h5>
    </div>
    <div class="card-body p-1">
        <div class="w-100 img"></div>
        <div class="w-100 bg-light p-2">
            <h4 class="nom text-uppercase"></h4>
            <h6 class="text-danger font-weight-bold">$<span class="prix"></span></h6>
            <span class="description"></span>
            <button class="btn btn-primary w-100 mt-4">
                <span class="fa fa-shopping-cart px-2"></span>
                <b>Ajouter au panier</b>
            </button>
        </div>
    </div>
</div>
<script>  
    (() => {
        const endpoint = "https://m-auto.herokuapp.com";
        const item = JSON.parse(window.localStorage.getItem("current-item")); //https://m-auto.herokuapp.com/api/ressources/${element['imgcover']}
        $(".item-name").html(item['nom']);
        const img = document.createElement("img");
        $(img).attr({
            src: `${endpoint}/api/ressources/${item['imgcover']}`,
            id: new Date().getMilliseconds(),
            class: "w-100"
        })
        $(".img").append(img);
        $(".nom").html(item['nom']);
        $(".prix").html(item['prix']);
        $(".description").html(item['description']);

        // console.log(item);
    })()
</script>