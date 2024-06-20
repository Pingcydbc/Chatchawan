import Link from "next/link";

export default function Home() {
  return (
    <>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="/img/logo.png" alt="Logo" width="100" class="d-inline-block align-text-center"></img>
          </Link>
          <ul class="nav nav-pills">
            <li class="nav-item text-uppercase"><Link href='/' class="nav-link active me-3">Home</Link></li>
            <li class="nav-item text-uppercase"><Link href='/about' class="nav-link active me-3">About</Link></li>
            <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-list-ul"></i>OUR Service
                </a>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="/OurService/Hardware">Hardware</Link></li>
                    <li><Link class="dropdown-item" href="/OurService/Software">software</Link></li>
                </ul>
              </li>
            <li class="nav-item text-uppercase"><Link href='/contact' class="nav-link active me-3">Contact</Link></li>
          </ul>
        </header>
      </div>
    </>
  );
}
