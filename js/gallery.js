// Hàm cập nhật hình ảnh và nội dung khi hover vào một hình ảnh
function upDate(previewPic) {
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url(' + previewPic.src + ')'; // Cập nhật ảnh nền của div
    imageDiv.innerHTML = previewPic.alt; // Hiển thị alt của ảnh trong div
}

// Hàm reset khi chuột rời khỏi hình ảnh
function undo() {
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url()'; // Xóa ảnh nền
    imageDiv.innerHTML = 'Hover over an image below to display here.'; // Hiển thị lại nội dung mặc định
}
