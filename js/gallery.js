// Hàm cập nhật ảnh khi hover
function upDate(previewPic) {
  var image = document.getElementById("image");
  image.style.backgroundImage = "url('" + previewPic.src + "')";
  image.innerHTML = previewPic.alt;
}

// Hàm khôi phục khi mouseout
function undo() {
  var image = document.getElementById("image");
  image.style.backgroundImage = "url('')";
  image.innerHTML = "Hover over an image below to display here.";
}

// Hàm xử lý sự kiện focus
function focusImage(image) {
  image.style.border = "5px solid blue"; // Chèn viền khi hình ảnh được focus
}

// Hàm xử lý sự kiện blur
function blurImage(image) {
  image.style.border = "none"; // Loại bỏ viền khi focus mất
}

// Thêm tabindex cho các hình ảnh khi trang được tải
function addTabIndex() {
  var images = document.querySelectorAll('.grid img'); // Lấy tất cả các hình ảnh
  images.forEach(function(image) {
    image.setAttribute('tabindex', 0); // Thêm tabindex vào từng hình ảnh
  });
}

// Gọi hàm addTabIndex khi trang được tải
window.onload = addTabIndex;
