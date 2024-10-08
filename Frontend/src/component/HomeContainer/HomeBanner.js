import React, { useEffect, useState } from 'react'
import homeBanner from "../../assets/homeBanner.jpg"
import { AiFillCaretRight } from 'react-icons/ai'
import { LuMessagesSquare } from 'react-icons/lu'
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const HomeBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const slides = [
        "Revolutionizing credit card processing with a team that merchants trust.",
        "Leading the way in secure card processing with a team businesses count on.",
        "Setting the gold standard in card processing, backed by a team businesses endorse."
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 4500)

        return () => clearInterval(interval)
    }, [slides.length])


    return (
        <div className=' md:pl-28 md:h-screen relative flex w-full flex-col-reverse md:flex-row overflow-hidden gap-4 md:gap-0 pb-10'>
            {/* ===============================LeftPortion===============================> */}
            <div className='left md:w-1/2 '>
                <div className='flex flex-col justify-center items-center text-center md:text-start md:items-start gap-4 md:gap-10 h-full px-4'>
                    <h2 className='text-[23px] sm:text-4xl md:text-3xl lg:text-[41px] font-semibold mb-2 bg-gradient-to-t from-black to-yellow-400 bg-clip-text text-transparent' style={{ lineHeight: "1.2" }}>
                        {slides[currentSlide]}
                    </h2>
                    <p className='text-md sm:text-lg md:text-xl font-medium text-justify sm:text-center md:text-start text-gray-600 leading-relaxed'>
                        Capri Payments provides tailored payment solutions for diverse businesses. From retail to online, startups to niche sectors, we design strategies to meet unique merchant demands.
                    </p>
                    <Link to="/contact" className='hover:bg-black rounded-md bg-[#1f1e1e] text-white md:text-md lg:text-lg px-6 py-4 flex flex-row items-center gap-3'>
                        Contact Us
                        <div className='bounce'>
                            <AiFillCaretRight size={20} />
                        </div>
                    </Link>
                </div>
            </div>
            {/* ===============================RightPortion===============================> */}
            <div className=' md:w-1/2 h-full '>
                <div className='h-full w-full py-10 sm:py-0'>
                    <img style={{ transform: "skewX(-3deg)" }} className='object-cover md:h-full w-full ' src={homeBanner} alt='homeImg' />
                </div>
            </div>
            <div className='  cursor-pointer  fixed bottom-8 right-8  '>
                <div className='z-40 w-12 h-12 bg-yellow-500 pulseEffect hover:animate-none rounded-full flex justify-center items-center'>
                    <LuMessagesSquare size={26} onClick={() => setIsOpen(!isOpen)} />

                </div>

                {isOpen &&
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='absolute -top-[300px] -left-[300px] z-50 h-[300px] w-[300px] bg-white rounded-lg'>
                            <div className='flex justify-between flex-col h-full'>
                                <div className='bg-yellow-500 rounded-t-lg flex justify-center items-center h-12 '>
                                    <div className='text-lg w-full flex justify-center items-center h-12'>
                                        Message Us
                                    </div>
                                    <div onClick={() => setIsOpen(false)}>
                                        <RxCross2 size={20} className=' bg-black text-white rounded-lg w-4 h-4 mr-4' />
                                    </div>
                                </div>

                                <div className='text-sm mb-12 border-t-2 border-[#ebe6e6] ' >
                                    <input placeholder="Enter your message" className="text-body-color focus:border-primary w-full rounded border py-2 px-[14px] text-sm outline-none focus-visible:shadow-none"
                                        type="text"
                                        id='message'
                                    // value={initialData?.message}
                                    // onChange={handleInput}
                                    />
                                </div>

                            </div>

                        </div>
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default HomeBanner