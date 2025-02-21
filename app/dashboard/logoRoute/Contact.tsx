export default function Contact() {
    return (
      <section className="relative h-screen w-screen py-10 px-12 md:px-32 xl:px-36 dark:bg-black dark:text-white bg-white text-black">
        <div className="flex flex-col justify-center h-full">
          <span className="text-3xl md:text-6xl xl:text-8xl">
            Got Questions?
          </span>
          
          <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-[32px] mt-4">
            Book a Chat with one of our awesome creatives.
            <br />
            No sales pitch, just the answers you need, so we can match you with the ideal subscription plan and perfect designer.
          </h2>
  
          <div className="flex flex-col justify-evenly h-5/6 mt-10">
            <span className="text-3xl md:text-6xl xl:text-6xl">
              Let&apos;s make something great together
            </span>
  
            <span className="text-3xl md:text-6xl xl:text-8xl text-end mt-4">
              hi@<span className="underline">googenix.com</span>
            </span>
          </div>
        </div>
      </section>
    );
  }
  