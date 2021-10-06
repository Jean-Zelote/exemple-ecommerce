(() => {
    const endpoint = "https://m-auto.herokuapp.com";
    const timeout = 25000;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET");
    headers.append("Accept", "application/json");
    // headers.append('Content-Type', 'multipart/form-data');

    axios.interceptors.request.use(
        config => {
            config.headers.app = "Admin";
            config.headers.key = "WKRHJGDJAHFhkjhead676a75f65a6d5f78z5f78ajaf7s6786FUGJBF";
            return config;
        },
        rejected => {
            return new Promise.reject(rejected)
        }
    );
    axios.interceptors.response.use(
        (resposne) => {
            return resposne;
        }, error => {
            const er = error.response ? error.response : undefined;
            return er ? er : new Promise.reject(error)
        });
    const loaddata = async(cb) => {
        try {
            axios({
                    method: "GET",
                    url: `${endpoint}/api/products`,
                    headers
                })
                .then(data => {
                    const status = data['data']['status'];
                    if (!isNaN(parseInt(status)) && parseInt(status)) {
                        const dt = data['data']['data'];
                        if (dt.length > 0) {
                            $('.products-content').html("");
                            dt.forEach(element => {
                                const divitem = document.createElement('div');
                                $(divitem).attr({
                                    class: "col-6 bg-info- px-0 col-lg-2"
                                }).html(
                                    `
                                <div class="recommendation-column recommendation-column-first" style="cursor: pointer">
                                    <div class="product-container border rounded">
                                        <div class="product-image-container" style="padding-bottom: 100%;">
                                            <img class="product-image" src="https://m-auto.herokuapp.com/api/ressources/${element['imgcover']}" alt="dav.me">
                                        </div>
                                        <div class="product-dscr-container">
                                            <div class="product-title">${element.nom}</div>
                                            <div class="product-price">US $${element.prix}</div>
                                            <div class="oriArea">US $${element.prix - 120}
                                                <div class="discount-block">-20%</div>
                                            </div>
                                            <div class="sold-area">
                                                <div class="star-icon">
                                                </div>4.4 |
                                                <div class="product-sold-count">236 Sold</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                                ).on("click", () => {
                                    alert(1)
                                })
                                $('.products-content').append(divitem)
                            });
                        }
                    } else {
                        $('.products-content').html(`<div class="col-lg-12 d-flex justify-content-center"><h1><span class="fa fa-warning text-danger"></span></h1></div>`);
                        alert("une erreur inconnue vient de se produire")
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert("une erreur inconnue vient de se produire")

                })
        } catch (error) {
            alert("une erreur inconnue vient de se produire")
        }
    }
    const sendform = async() => {

    }
    $(".connexion-form").on("submit", () => {
        alert(1)
    })
    loaddata(null)
})()