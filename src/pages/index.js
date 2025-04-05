import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/Photo.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya | Home</title>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            {/* Profile Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
              <Image
                src={profilePic}
                alt="Aditya Vardhan"
                className="w-3/4 sm:w-2/3 md:w-3/4 h-auto rounded-lg"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start px-0 sm:px-6 md:px-8">
              <AnimatedText
                text="Aditya Vardhan"
                className="text-left text-3xl sm:text-4xl md:text-5xl font-bold"
              />
              <p className="my-4 text-sm sm:text-base font-medium text-justify w-full">
                I am a highly motivated Computer Science student currently studying final year in Vellore Institute of Technology, passionate about software development and emerging technologies. With a strong foundation in Java, Python, and full-stack development. Always eager to learn and create impactful projects that enhance user experiences while exploring new technologies, optimizing systems, and expanding my expertise in the evolving tech landscape.
              </p>
              <p className="my-4 text-sm sm:text-base font-medium text-justify w-full">
                Explore my portfolio to see how I combine technical skills and creativity to create impactful solutions. Let&apos;s connect and bring innovative ideas to life!
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 gap-4">
                <Link
                  href="https://drive.google.com/file/d/1tvaMx0hB-nOGhHplFX2Xtbc16HFoBszn/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-sm sm:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className="w-5 sm:w-6 ml-2" />
                </Link>
                <Link
                  href="mailto:adityavardhan.koya@gmail.com"
                  target="_blank"
                  className="text-sm sm:text-lg font-medium underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
