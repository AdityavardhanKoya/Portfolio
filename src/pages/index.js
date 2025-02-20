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
        <Layout className="pt-8">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt=""
                className="w-3/4 h-auto rounded-lg"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Aditya Vardhan"
                className="text-left"
              />
              <p className="my-4 text-base font-medium">
              I am a highly motivated Computer Science student currently studying final year in Vellore Institute of Technology, passionate about software development and emerging technologies. With a strong foundation in Java, Python, and full-stack development. Always eager to learn and create impactful projects that enhance user experiences while exploring new technologies, optimizing systems, and expanding my expertise in the evolving tech landscape.
              </p>
              <p className="my-4 text-base font-medium">Explore my portfolio to see how I combine technical skills and creativity to create impactful solutions. Let's connect and bring innovative ideas to life!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="https://drive.google.com/file/d/1X_mObhvNL9W-CbwP5lgOBkaQfoCtadjO/view?usp=drive_link"
                  target={"_blank"}
                  rel = "noopener noreferrer"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
                >
                  Resume <LinkArrow className={"w-6 m-1"} />
                </Link>
                <Link
                  href="mailto:adityavardhan.koya@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize underline "
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
