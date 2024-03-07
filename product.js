function zoomImage(imageSrc) {
    var modal = document.getElementById("zoomModal");
    var modalImg = document.getElementById("zoomImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("zoomModal");
    modal.style.display = "none";
  }
  
  function addToCart(productName) {
    alert(productName + " added to cart!");
  }
  