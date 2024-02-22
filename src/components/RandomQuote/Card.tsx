"use client"

import { useState } from "react"
import quotes from "./quotes.json"


export default function Card() {
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const [quote, setQuote] = useState(quotes[quoteIndex])
    
    // Generate a random quote
    function generateQuote() {
        const newQuote = setQuote(quotes[Math.floor(Math.random() * quotes.length)])
        return newQuote
    }

    // Tweeting the quote
    function tweetQuote() {
        const tweetText = encodeURIComponent(`Here's a great random Quote: "${quote.quote}" -${quote.author}`);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, '_blank');
    }


    return (
        <div id="quote-box" className="bg-primary rounded-[1em] p-[.5em] w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 m-auto flex flex-col  hover:shadow-lg hover:shadow-blue-700 bg-opacity-50" >
            <div id="text" className="font-bold text-[2rem] p-[1em]" >
                {quote.quote}
            </div>
            <div id="author" className="text-gray-400" >- {quote.author}</div>
            <a id="tweet-quote" onClick={tweetQuote} title="Click to tweet this quote" href="https://twitter.com/intent/tweet" className="max-w-[4em] max-h-[4em] items-start"  >
                <svg viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M282.554 305.916C335.787 349.961 402.104 368.638 470.519 367.04C475.413 367.339 477.111 365.342 478.409 360.947C498.784 272.058 603.253 221.122 670.968 295.529C683.653 291.734 715.113 267.664 725.3 274.356C729.495 277.651 730.594 282.745 726.499 285.941C716.312 295.629 710.319 307.814 704.626 320.398C716.212 318.201 728.696 311.509 740.481 314.006C768.646 333.182 696.237 347.964 700.931 386.715C698.234 514.555 637.011 634.306 506.674 669.561C432.666 690.935 349.171 701.621 276.561 669.661C244.501 650.485 282.354 642.096 299.633 637.502C321.106 629.911 341.68 619.424 360.157 606.341C332.691 584.468 235.013 547.314 313.615 521.047C286.249 502.97 181.98 419.274 265.975 413.382C256.087 380.623 250.294 347.664 242.404 314.505C239.008 284.543 267.872 289.936 282.554 305.916Z" fill="white"></path> 
                        <path d="M627.525 875.005C505.577 876.803 377.637 888.688 257.188 861.921C152.119 837.652 99.7847 752.958 91.7947 649.986C88.7984 509.662 74.6161 362.346 117.762 226.815C176.689 66.4157 317.912 86.7903 458.736 80.598C528.249 83.6941 599.26 73.3071 667.775 90.3858C749.972 102.87 826.576 161.497 851.345 242.196C864.629 275.255 864.629 311.709 867.425 346.566C871.22 429.562 872.918 512.558 870.921 595.554C861.533 763.045 812.594 871.609 627.525 875.005ZM470.521 367.04C402.107 368.638 335.79 349.961 282.556 305.916C267.875 289.936 239.011 284.543 242.406 314.606C250.197 347.764 256.089 380.723 265.977 413.482C181.982 419.375 286.252 502.97 313.617 521.147C235.016 547.415 332.694 584.568 360.159 606.441C341.682 619.624 321.108 630.011 299.635 637.602C282.356 642.096 244.504 650.486 276.564 669.762C349.173 701.722 432.569 691.035 506.676 669.662C636.913 634.306 698.237 514.456 700.933 386.715C696.239 347.964 768.549 333.282 740.484 314.006C728.699 311.509 716.214 318.201 704.629 320.398C710.322 307.914 716.314 295.729 726.501 285.941C730.596 282.745 729.597 277.652 725.303 274.356C715.215 267.664 683.655 291.734 670.971 295.529C603.155 221.122 498.786 272.059 478.411 360.948C477.113 365.342 475.415 367.34 470.521 367.04Z" fill="blue"></path> 
                    </g>
                </svg>
            </a>
            <button id="new-quote" onClick={generateQuote} className="bg-gray-700 px-[.6em] py-[1.2em] text-[1em] font-[500] rounded-[2em] border-2 border-transparent transition-colors duration-250 hover:border-blue-600 hover:bg-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500 hover:font-bold hover:text-blue-200 active:bg-blue-700 " >New Quote</button>      
        </div>
    )
}