import Navbar from "../../component/nav.js";

export default function Hardware() {
  return (
    <>
    <Navbar />
    <div className="container">
        <div class="d-lg-flex flex-row bg-light rounded-3 mx-2 p-3 my-3" data-aos="zoom-in-left">
            <div class="col">
                <img src="/img/fix4.webp" class="img-thumbnail border-0 rounded-5" alt="..."></img>
            </div>
            <div class="col ms-3" >
                <h1 class="text-start fs-1">Software</h1>
                <p class="text-start fs-5">
                    Our software services focus on developing and providing cutting-edge computer programs that meet the modern demands of businesses and individuals seeking efficient applications. With a team of experts who understand both business and technology, we ensure that your software becomes a tool that enhances work efficiency and reduces redundancy in your business processes. Chatcha Company is dedicated to delivering innovative solutions tailored to your needs.
                </p>
                <p class="text-start fs-2 ">Our Service</p>
                <ul>
                    <li class="text-start"><a>Installation of Windows and Microsoft Office: Chatcha Company specializes in managing the installation of the Windows operating system, ensuring stability and configuring Microsoft Office for optimal use.</a></li>
                    <li class="text-start"><a>Virus Scanning and Removal: Our services include thorough computer scans to detect and eliminate viruses, malware, and harmful software, along with guidance on preventive measures.</a></li>
                    <li class="text-start"><a>System Maintenance and Problem Resolution: Chatcha Company offers ongoing system maintenance to keep your computers running smoothly. We also address and resolve issues related to the Windows operating system and Microsoft Office.</a></li>
                    <li class="text-start" id="about"><a>Data Backup Services: We provide guidance and services for data backup, ensuring the protection of critical data in case of any unforeseen issues.</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}
