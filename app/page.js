// testfsdfdsfds

import Navbar from "../app/component/nav.js";

export default function Home() {
  return (
    <>
    <Navbar />
    
    <div class='container'>
      <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="http://it.cmtc.ac.th/web2017/photo/upload/2020/1591928290_6033-org.jpg" class="d-block w-100 img-fluid " alt="..."></img>
            </div>
            <div class="carousel-item">
            <img src="img/slide 1.png" class="d-block w-100 img-fluid " alt="..."></img>
            </div>
            <div class="carousel-item">
            <img src="img/slide 2.png" class="d-block w-100 img-fluid" alt="..."></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </>
  );
}
