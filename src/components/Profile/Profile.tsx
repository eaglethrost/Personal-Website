import Image from "next/image"
import MyFace from "@/assets/my-face.jpg"

export default function Profile() {
    return (
        <section id="profile" className="min-h-screen tall-screen:min-h-[80vh] flex lg:flex-row flex-col bg-[#EDEDED]">
            <div id="face-container" className="basis-2/5 lg:mt-0 mt-28 relative flex lg:items-center lg:justify-end justify-center">
                <Image
                    src={MyFace}
                    alt="My Face"
                    className="lg:w-96 lg:h-80 w-72 h-64 lg:mt-0 mt-auto rounded-full animate-fadeInDown"
                />
            </div>
            <div id="about-container" className="basis-3/5 lg:pl-10 pt-2 relative flex flex-col lg:items-start items-center text-black">
                <div className="lg:h-2/5 flex pb-5 animate-fadeInDown2 anim-fm-back"><span className="lg:mt-auto -ml-1 pl-[-10px] text-center text-7xl font-bold">Hi I'm Dimas!</span></div>
                <span className="profile-about-desc lg:text-start text-center animate-fadeInDown3 anim-fm-back">I’m an aspiring software engineer currently studying my masters at UNSW</span>
                <span className="profile-about-desc lg:text-start text-center animate-fadeInDown3 anim-fm-back">I aim to create high quality code and software which brings value to users</span>
                <span className="profile-about-desc lg:text-start text-center animate-fadeInDown3 anim-fm-back">My main interests lie in <b>full-stack development, backend engineering, and data science</b></span>
            </div>
        </section>
    )
}