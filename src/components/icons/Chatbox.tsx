"use client"

import React, { useRef, useEffect } from 'react';

export default function Chatbox() {
    const formWrapperRef = useRef<HTMLDivElement | null>(null);
    const crossIconRef = useRef<HTMLDivElement | null>(null);
    const chatIconRef = useRef<HTMLDivElement | null>(null);

    const chatboxToggleHandler = () => {
        if ( formWrapperRef.current && crossIconRef.current && chatIconRef.current) {
          formWrapperRef.current.classList.toggle('hidden');
          crossIconRef.current.classList.toggle('hidden');
          chatIconRef.current.classList.toggle('hidden');
        }
      };

    // const chatboxToogleHandler = () => {
    //         formWrapperRef.current?.classList.toggle("hidden");
    //         crossIconRef.current?.classList.toggle("hidden");
    //         chatIconRef.current?.classList.toggle("hidden");
    //     }
    // }

    return (
        // component
        <div className="flex items-center justify-center ">
            <div className="w-full">
                <div ref={formWrapperRef} className="formbold-form-wrapper mx-auto hidden w-full max-w-[400px] max-h-[450px] rounded-lg border border-blue-500 bg-gray-600">
                    <div className="flex items-center justify-between rounded-t-lg bg-blue-900 py-2 px-9">
                        <h3 className="text-xl font-bold text-white">Let's chat? - Online</h3>
                        <button onClick={chatboxToggleHandler} className="text-white">
                            <svg width="17" height="17" viewBox="0 0 17 17" className="fill-current">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                                    />
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                                    />
                            </svg>
                        </button>
                    </div>
                    <form action="https://formbold.com/s/FORM_ID" method="POST" className="py-6 px-9" >
                        <div className="mb-2">
                            <label htmlFor="name" className="mb-3 text-base font-medium text-[#07074D]">
                                Your Name
                            </label>
                            <input
                                className="w-full rounded-md border border-[#e0e0e0] bg-gray-400 py-3 px-6 text-base font-medium text-blue-900 outline-none focus:bg-gray-200 focus:border-blue-900 focus:shadow-md"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="mb-3 text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-gray-400 py-3 px-6 text-base font-medium text-blue-900 outline-none focus:bg-gray-200 focus:border-blue-900 focus:shadow-md"
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="message" className="mb-3 text-base font-medium text-[#07074D]">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                id="message"
                                placeholder="Explain your queries"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-gray-400 py-3 px-6 text-base font-medium text-blue-900 outline-none focus:bg-gray-200 focus:border-blue-900 focus:shadow-md">
                            </textarea>
                        </div>
                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-blue-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Start Chat
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mx-auto mt-12 flex max-w-[400px] max-h-[450px] items-center justify-end space-x-5">
                    <button className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-900 text-white" onClick={chatboxToggleHandler}>
                        <span ref={crossIconRef} className="cross-icon hidden">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                                fill="white"
                                />
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                                fill="white"
                                />
                            </svg>
                        </span>
                        <span ref={chatIconRef} className="chat-icon">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                                fill="white"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}