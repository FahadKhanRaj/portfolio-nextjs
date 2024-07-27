"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>  
        <li>Next.js</li>
        <li>CSS</li>
        <li>Bootstrap & Tailwind</li>
        <li>HTML5</li>
        <li>PHP Laravel</li>
        <li>Java</li>
        <li>Photoshop</li>
        <li>After Effects</li>
        <li>Illustrator</li>
        <li>MySQL</li>
        <li>MS Powerpoint</li>
        <li>MS Word</li>
        <li>MS Excel</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>BRAC University</b></li>
        <ul>Jan 2020 - May 2024</ul>
        <ul>BSc in Computer Science</ul>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>


          {/* <p className="text-base lg:text-2xl"> */}
          <p className="text-white-700 text-lg leading-relaxed">
          I am a fresh graduate of BRAC University, where I served as a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 white-space: nowrap;">
            Student Tutor (ST)
          </span>,
          also known as an{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 white-space: nowrap;">
            Undergraduate Teaching Assistant (TA)
          </span>.
          I have a strong interest in software development and am eager to apply my skills and knowledge in a professional setting.
        </p>        
          {/* </p> */}


          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
