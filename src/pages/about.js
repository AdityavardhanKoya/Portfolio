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
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-4">
          <AnimatedText text="Unveiling the Journey." className="mb-8" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
              Hey there! I&apos;m Aditya Vardhan, currently pursuing B.Tech in Computer Science and Engineering at Vellore Institute of Technology with passion for innovation and continuous learning. With hands-on experience in full-stack development, cloud computing, and software engineering.
              </p>
              <p className="my-4 font-medium">
              I thrive in dynamic environments, leveraging my skills to drive meaningful contributions while continuously exploring new technologies and challenges. My goal is to innovate and make a lasting impact in technology.
              </p>
              <p className="font-medium">
              Join me on a journey of innovation, where creativity meets technology to build impactful solutions and push boundaries together!
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilePic} alt="" className="w-full rounded-2xl" />
            </div>
          </div>
          <Skills />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
};

export default about;
