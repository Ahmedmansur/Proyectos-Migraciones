var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i,
      x = document.getElementsByClassName("video-slide"),
      y = document.getElementsByTagName("video");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].pause();
  }

  x[slideIndex-1].style.display = "block";

}

<div class="video-container">
  <a class="video-slider, videobox">
    <div class="video-slide">
      <video controls>

        <source src="https://coopersferry.com/storage/app/media/uploaded-files/video-slider/CAMDEN%20OUR%20COMMUNITY%20ON%20THE%20RISE.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video-slide">
      <video controls>
        <source src="https://coopersferry.com/storage/app/media/uploaded-files/video-slider/CAMDEN%20OUR%20COMMUNITY%20ON%20THE%20RISE.mp4" type="video/mp4">
      </video>
    </div>
    <div class="video-slide">
      <video controls>
        <source src="https://coopersferry.com/storage/app/media/uploaded-files/video-slider/CAMDEN%20BUILDING%20AN%20INNOVATION%20ECONOMY.mp4" type="video/mp4">
      </video>
    </div>
  </a>


  <button class="video-slider-btn left-side" onclick="plusDivs(-1)">&#10094;</button>
  <button class="video-slider-btn right-side" onclick="plusDivs(1)">&#10095;</button>
</div>
