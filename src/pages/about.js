import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/Photo22.jpg";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Aditya | About</title>
        <meta name="description" content="About Aditya Vardhan - Computer Science Engineer" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-2">
          {/* Main Heading */}
          <AnimatedText
            text="Unveiling the Journey."
            className="mb-4 text-left text-3xl sm:text-4xl md:text-5xl font-bold"
          />

          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-8 w-full items-start">
            {/* Profile Image */}
            <div className="md:col-span-3 md:col-start-6 md:row-start-1 mb-2 md:mb-0">
              <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-3 mx-auto md:mx-0 w-3/4 sm:w-2/3 md:w-full">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image
                  src={profilePic}
                  alt="Aditya Vardhan"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-4 flex flex-col items-start justify-start px-3 md:px-0">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium text-sm sm:text-base text-justify">
                Hey there! I'm Aditya Vardhan, currently pursuing B.Tech in Computer Science and Engineering at Vellore Institute of Technology with passion for innovation and continuous learning. With hands-on experience in full-stack development, cloud computing, and software engineering.
              </p>
              <p className="my-2 font-medium text-sm sm:text-base text-justify">
                I thrive in dynamic environments, leveraging my skills to drive meaningful contributions while continuously exploring new technologies and challenges. My goal is to innovate and make a lasting impact in technology.
              </p>
              <p className="font-medium text-sm sm:text-base text-justify">
                Join me on a journey of innovation, where creativity meets technology to build impactful solutions and push boundaries together!
              </p>
            </div>
          </div>

          {/* Skills Section with increased top margin */}
          <div className="mt-8 w-full"> s
            <Skills />
          </div>

          {/* Education & Certifications */}
          <div className="w-full flex flex-col items-center justify-center space-y-3">
            <div className="w-full">
              <Education />
            </div>
            <div className="w-full">
              <Certifications />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;