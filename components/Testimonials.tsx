import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <div id="projects" className="relative py-20">
      <div className="relative ">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <AnimatedTestimonials testimonials={testimonials} />
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>
      </div>
    </div>
  );
}
