
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
function toggleDescription() {
    var description = document.getElementById("videoDescription");
    description.classList.toggle("expanded");
}

var likeImage = document.getElementById("likeImage");
var dislikeImage = document.getElementById("dislikeImage");

$(document).ready(function () {
    
    $("a.like1").click(function () {
        
        $("a.dislike1 img").attr("src", "images/dislike1.png");

        
        var currentSrc = $(this).children("img").attr("src");
        if (currentSrc === "images/like1.png") {
            $(this).children("img").attr("src", "images/like2.png");
        } else {
            $(this).children("img").attr("src", "images/like1.png");
        }
    });

    
    $("a.dislike1").click(function () {
        
        $("a.like1 img").attr("src", "images/like1.png");

        
        var currentSrc = $(this).children("img").attr("src");
        if (currentSrc === "images/dislike1.png") {
            $(this).children("img").attr("src", "images/dislike2.png");
        } else {
            $(this).children("img").attr("src", "images/dislike1.png");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ẩn hình ảnh khi trang được tải
    var image = document.getElementById('image');
    image.style.display = 'none';
});

// your-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Ẩn hình ảnh khi trang được tải
    var image = document.getElementById('image');
    image.style.display = 'none';
});

function changeToImage() {
    // Lấy phần tử button và hình ảnh
    var button = document.querySelector('button');
    var image = document.getElementById('image');

    // Ẩn button
    button.style.display = 'none';

    // Hiển thị hình ảnh
    image.style.display = 'inline-block';

    // Thay đổi đường dẫn của hình ảnh (đặt đường dẫn của hình ảnh bạn muốn sử dụng)
    image.src = 'images/dadangky.png';
}

function changeToButton() {
    // Lấy phần tử button và hình ảnh
    var button = document.querySelector('button');
    var image = document.getElementById('image');

    // Hiển thị button
    button.style.display = 'inline-block';

    // Ẩn hình ảnh
    image.style.display = 'none';
}
