"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function OmOss() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const quoteY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const blockY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="om-oss" className="bg-bg py-[clamp(100px,15vw,200px)] overflow-hidden" ref={ref}>
      <div className="w-full max-w-container mx-auto px-[clamp(20px,5vw,80px)] grid grid-cols-2 gap-[clamp(40px,6vw,120px)] items-center max-md:grid-cols-1 max-md:py-[clamp(80px,12vw,120px)] max-md:gap-[100px]">

        {/* Left: Text */}
        <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)] relative z-[5]">
          <motion.p
                    className="font-body text-label font-medium tracking-[0.15em] uppercase text-gold"
                    custom={0}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                  >
                    Om oss
                  </motion.p>

          <motion.h2
            className="font-display text-display-xl uppercase text-navy"
            custom={0.15}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Hantverket<br />är allt vi<br />bryr oss om.
          </motion.h2>

          <motion.div
            className="w-[clamp(48px,6vw,80px)]"
            custom={0.3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <span className="block w-full h-px bg-gold" />
          </motion.div>

          <motion.p
            className="font-body text-body-text font-light text-navy leading-[1.75] max-w-[520px]"
            custom={0.45}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Just Barbers grundades ur en enkel övertygelse: en riktigt bra klippning förändrar hur du känner dig. Vi är inte en snabbklippning — vi är ett hantverk.
          </motion.p>

          <motion.p
            className="font-body text-body-text font-light text-navy leading-[1.75] max-w-[520px]"
            custom={0.6}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            Varje klipp är genomtänkt, varje besök är personligt. Välkommen in till Mölndals mest dedikerade barberstuga.
          </motion.p>
        </div>

        {/* Right: Image with decorative elements */}
        <motion.div
          className="flex items-center justify-end relative z-[1] max-md:justify-center"
          custom={0.2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <div className="relative w-full max-w-[480px] mr-[clamp(20px,4vw,60px)] max-md:mr-0 max-md:max-w-[calc(100%-40px)]">
            {/* Gold border block */}
            <motion.div
              className="absolute -top-10 -right-10 w-[65%] h-[85%] border border-gold z-0 max-md:-right-5 max-md:w-[80%]"
              style={{ y: blockY }}
            />

            {/* Photo */}
            <motion.div
              className="relative z-[1] shadow-image"
              style={{ y: imageY }}
            >
              <Image
                src="/images/about-image.png"
                alt="Hantverk och estetik på Just Barbers"
                width={600}
                height={750}
                quality={90}
                className="w-full h-auto object-cover block grayscale contrast-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Pull quote */}
            <motion.div
              className="absolute -bottom-10 -left-[100px] z-[3] pointer-events-none max-lg:-left-20 max-md:-left-[10px] max-md:-bottom-[30px]"
              style={{ y: quoteY }}
            >
              <p
                className="font-display text-quote-text uppercase leading-[0.9] m-0 [-webkit-text-stroke:1px_#aa9064] text-bg max-md:text-[clamp(40px,10vw,60px)]"
              >
                &ldquo;Vi klipper<br />inte hår.
              </p>
              <p
                className="font-display text-quote-text uppercase leading-[0.9] m-0 text-gold text-outline-subtle ml-[clamp(10px,3vw,30px)] max-md:text-[clamp(40px,10vw,60px)]"
              >
                Vi skapar<br />uttryck.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
