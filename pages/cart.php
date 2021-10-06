<div class="card">
    <div class="card-header">
        <h5><span class="px-2 fa fa-shopping-cart"></span>Cart</h5>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
        </ul>
    </div>
</div>
<script>
    (() => {
        if(localStorage.getItem("current-client")){
            const mycart = window.localStorage.getItem("mycart");
            if(mycart){

            }else{

            }
        }else window.location.replace("?page=login?cb=cart")
    })()
</script>