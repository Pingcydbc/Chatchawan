import Navbar from "../../component/nav.js";

export default function Hardware() {
  return (
    <>
    <Navbar />
    <div className="container">
        <div class="d-lg-flex flex-row bg-light rounded-3 mx-2 p-3 my-3" data-aos="zoom-in-left">
            <div class="col">
                <h1 class="text-start fs-1">Hardware</h1>
                <p class="text-start fs-5">
                    Chatcha Company is your go-to destination specializing in the retail and service of computer hardware equipment related to computers and information technology. Our expertise extends to a wide range of hardware components, catering to those looking to upgrade, enhance, or build their own computers. Here is an overview of what you can expect from Chatcha Company
                </p>
                <p class="text-start fs-2 ">Product Range</p>
                <ul>
                    <li class="text-start"><a>Upgrades and Repairs: Chatcha Company excels in providing upgrade and repair services for your computer systems, either in-store or on-site for your convenience.</a></li>
                    <li class="text-start"><a>Technical Guidance: Our team of experts is ready to provide valuable advice on product selection and usage, helping you make informed decisions based on your specific needs.</a></li>
                    <li class="text-start" id="software"><a>Computer Assembly Workshops: For those interested in building their own computers, Chatcha Company may offer workshops to enhance knowledge and skills in computer assembly.</a></li>
                </ul>
            </div>
            <div class="col" >
                <img src="/img/fix1.jpg" class="img-thumbnail border-0 rounded-5" alt="..."></img>
            </div>
        </div>
    </div>
    </>
  );
}
