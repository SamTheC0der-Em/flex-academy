import Button from "../components/Button.jsx";
import aboutImg1 from "../assets/about-img-1.svg";
import aboutImg2 from "../assets/about-img-2.svg";
import aboutImg3 from "../assets/about-img-3.svg";
import aboutImg4 from "../assets/about-img-4.svg";
export default function About() {
  return (
    <section className="max-w-full flex gap-16 items-center bg-[#E9EDED] pl-[72px]  ">
      <div className="  flex flex-col gap-2 max-w-[573px]">
        <span className="text-[#555A5F]">About us</span>
        <h2 className="text-black font-bold text-[35px]">
          Flex Academy, is all about ...
        </h2>
        <p className="text-[#555A5F]">
          short-term rental programme built by the founders behind The Flex; a
          growing furnished-apartment business operating across multiple
          markets. We’ve built the systems, tested the strategies, made the
          mistakes, and learned what it actually takes to turn individual
          properties into a scalable operation. Now, we’re sharing that playbook
          with people who want to build their own STR business; from finding
          their first opportunity to creating the systems needed to grow. No
          theory for theory’s sake. Just practical knowledge, proven systems,
          and guidance from people who are still in the business.
        </p>
        <div className="flex items-center gap-2">
          <Button className="rounded-2xl border-[1.5px] border-[#274E4C] bg-white px-6 py-3 text-base font-bold text-[#274E4C] transition-colors hover:bg-[#274E4C]/10">
            Book a free call
          </Button>
          <Button className="rounded-2xl bg-[#274E4C] border border-[#274E4C] px-4 py-3 text-base font-bold text-white  hover:bg-[#1e3e3c]">
            Register for free webinar
          </Button>
        </div>
      </div>
      <div className="flex">
        <img src={aboutImg1} />
        <img src={aboutImg2} />
        <img src={aboutImg3} />
        <img src={aboutImg4} className=" lg:rounded-tr-[80px]" />
      </div>
    </section>
  );
}
