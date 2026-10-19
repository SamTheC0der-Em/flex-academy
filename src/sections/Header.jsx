import logo from "../assets/logo.svg";
import Button from "../components/Button.jsx";

export default function Header() {
  return (
    <header className="px-4 pt-4 ">
      <nav className="fixed left-4 right-4 top-4 z-50 mx-auto flex min-h-12 max-w-6xl items-center justify-between gap-4 rounded-full bg-white pl-5 pr-1.5 py-2 shadow-[0px_0px_36px_0px_#274E4C40]  text-base font-bold">
        <a href="#" className="shrink-0">
          <img src={logo} />
        </a>

        <div className="hidden items-center text-[#274E4C] gap-6 md:flex">
          <a href="#about" className="hover:text-teal-900">
            About us
          </a>
          <a href="#offerings" className="hover:text-teal-900">
            Offerings
          </a>
          <a href="#programmes" className="hover:text-teal-900">
            Programme
          </a>
          <a href="#partners" className="hover:text-teal-900">
            Partners
          </a>
          <a href="#faq" className="hover:text-teal-900">
            FAQ
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 text-base font-bold">
          <Button className="rounded-2xl border border-[#274E4C] px-3 py-2  text-[#274E4C] transition-colors hover:bg-[#274E4C]/10">
            Book a call
          </Button>
          <Button className="rounded-2xl  border border-[#274E4C] bg-[#274E4C] px-4 py-2  text-white transition-colors hover:bg-[#1e3e3c]">
            Register now
          </Button>
        </div>
      </nav>
    </header>
  );
}
