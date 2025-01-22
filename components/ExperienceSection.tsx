import React from "react";

const experiences = [
  {
    period: "Jul 2024 - Dec 2024",
    role: "Full Stack Developer Intern",
    company: "Coursfy",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHkNgCUe7wdbQ/company-logo_200_200/company-logo_200_200/0/1735210231647/coursfy_logo?e=1745452800&v=beta&t=Yvb_Lb8geygpCF9-GIAtLuqZSgdQx6X7D0fXVmpmALk",
  },
  {
    period: "Jan 2024 - Mar 2024",
    role: "Full Stack Developer and Designer Intern",
    company: "Rotoy ApS",
    logo: "https://rotoy.dk/fav.png",
  },
  {
    period: "May 2023 - Jul 2023",
    role: "Full Stack Developer Tutor",
    company: "DCI Digital Career Institute",
    logo: "https://digitalcareerinstitute.org/wp-content/uploads/2022/04/DCI_COLORS_June24_logo_wordmark_blue.svg",
  },
  {
    period: "Nov 2019 - Dec 2020",
    role: "Online Marketing Assistant / Social Media",
    company: "Bengar GmbH",
    logo: "https://cdn02.plentymarkets.com/zlrq6w0vcvw9/frontend/logo/bengar_logo.png",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="relative">
        <div className="absolute -top-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15"></div>
        <div id="projects" className="relative  mx-auto max-w-4xl">
          <h3 className="text-lg font-light tracking-widest text-gray-400 mb-2">
            WHERE I HAVE PUT IN VALUE
          </h3>
          <h2 className="text-4xl font-light mb-6">My experience so far</h2>
        </div>
        <div className="absolute -bottom-4 w-full h-[2px] bg-[linear-gradient(to_right,_gray_60%,_transparent_50%)] bg-[length:30px_24px] opacity-15 "></div>
      </div>
      <div className="grid gap-4 py-5  mx-auto max-w-4xl">
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-between items-start">
            <p className="text-sm text-gray-400 min-w-[150px]">{exp.period}</p>

            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{exp.role}</p>
              <p className="text-md text-gray-400">at</p>
              {exp.logo && (
                <img src={exp.logo} alt={exp.company} className="h-4" />
              )}
              <p className="text-sm ">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
