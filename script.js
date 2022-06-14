let mostPopularPhotos = ["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg", "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg", "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

let photos = [];

$(".submit").click(function() {
    $(".posts").empty();
    let linkInput = $("input").val();
    photos.push('<img src="' + linkInput + '" img>');

    for (let element of photos) {
        $(".posts").append(element);
    }

    if (photos.length >= 3 && photos.length < 5) {
        $(".message").text("Congrats, you are a Silver Level user!");
    }

    if (photos.length === 5) {
        $(".message").text("Congrats, you are a Gold Level user!");
    }

    if (photos.length > 5) {
        $(".message").text("Congrats, you are a Platinum Level user!");
    }
});

$(".liked-photo").append('<img src="' + mostPopularPhotos[2] + '" img>');