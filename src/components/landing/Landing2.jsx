import React from "react";
import card1 from "../../assets/Images/card-Package-1.png"; 
import card2 from "../../assets/Images/card-Package-2.png"; 
import card3 from "../../assets/Images/card-Package-3.png"; 
const Landing2 = () => {
  // Array of card data
  const cardData = [
    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Paris Hill Tour",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card1,
    },
    // You can duplicate or change the content for the remaining cards
    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Lake Garda, Italy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card2,
    },

    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Lake Geneva, France",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card3,
    },


    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Paris Hill Tour",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card1,
    },


    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Lake Garda, Italy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card2,
    },

    {
      price: "$200/Per Person",
      duration: "5 Days/6 Night",
      title: "Lake Geneva, France",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "8k + Rating",
      img: card3,
    },
  ];

  return (
    <section className="Package">
      <div className="container">
        <div className="main-Package">
          <div className="Package-tital">
            <h2>Select Your Best Package <br /> For Your Travel</h2>
          </div>
          <div className="Package-box">
            {/* Loop through cardData to generate 6 cards */}
            {cardData.map((card, index) => (
              <div className="Package-card" key={index}>
                <div className="Package-card-img">
                  <img src={card.img} alt={`Package ${index + 1}`} />
                </div>
                <div className="Package-tital-box">
                  <div className="Person-Package">
                    <p>{card.price}</p>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M0.0161345 5.91162C5.34159 5.91162 10.656 5.91162 15.999 5.91162C15.999 5.97814 15.999 6.0422 15.999 6.10675C15.999 9.01989 15.9995 11.9335 15.9985 14.8467C15.998 15.8721 15.3299 16.5265 14.2868 16.5265C10.0821 16.5269 5.87794 16.5269 1.67327 16.526C0.840443 16.526 0.199425 16.0303 0.0381695 15.2601C0.0106258 15.129 0.00812178 14.9915 0.00812178 14.857C0.0066194 11.9375 0.0066194 9.01792 0.00712019 6.09887C0.00762099 6.03924 0.0131297 5.97962 0.0161345 5.91162ZM2.40993 13.3714C2.40893 13.3714 2.40793 13.3714 2.40693 13.3714C2.40693 13.5005 2.40443 13.6296 2.40743 13.7582C2.41745 14.2145 2.72544 14.5367 3.18817 14.5584C3.46211 14.5712 3.73804 14.5707 4.01198 14.5589C4.4667 14.5392 4.7822 14.2293 4.80223 13.7823C4.81475 13.5128 4.81475 13.2413 4.80173 12.9718C4.7797 12.516 4.45368 12.2105 3.98994 12.2026C3.709 12.1976 3.42755 12.1947 3.14711 12.206C2.74797 12.2223 2.43197 12.5367 2.41044 12.9289C2.40342 13.0762 2.40993 13.2235 2.40993 13.3714ZM8.01233 12.2016C8.01233 12.2021 8.01233 12.2026 8.01233 12.2026C7.8686 12.2026 7.72487 12.1981 7.58165 12.2036C7.13744 12.2193 6.81192 12.5465 6.80441 12.987C6.7999 13.2388 6.80141 13.4906 6.80391 13.7424C6.80842 14.2046 7.12392 14.5377 7.59116 14.5584C7.8651 14.5707 8.14103 14.5707 8.41497 14.5584C8.88371 14.5372 9.19771 14.2061 9.20272 13.7429C9.20522 13.497 9.20572 13.2516 9.20272 13.0058C9.19671 12.5357 8.86769 12.2124 8.38742 12.2021C8.26223 12.1996 8.13753 12.2016 8.01233 12.2016ZM12.3903 10.2276C12.3903 10.2271 12.3903 10.2271 12.3903 10.2266C12.534 10.2266 12.6777 10.2311 12.821 10.2257C13.2617 10.2099 13.5832 9.896 13.5962 9.46238C13.6042 9.19827 13.6027 8.93415 13.5977 8.67004C13.5892 8.21326 13.2787 7.89149 12.8165 7.8708C12.5425 7.85848 12.2666 7.85897 11.9926 7.8703C11.5399 7.88903 11.2219 8.20193 11.2029 8.64688C11.1914 8.91641 11.1909 9.18792 11.2034 9.45745C11.2244 9.91226 11.5514 10.2158 12.0157 10.2271C12.1409 10.2301 12.2656 10.2276 12.3903 10.2276ZM8.00081 10.2247C8.00081 10.2252 8.00081 10.2257 8.00081 10.2266C8.13803 10.2266 8.27575 10.2306 8.41297 10.2261C8.86919 10.2114 9.19471 9.88565 9.20222 9.43479C9.20622 9.18299 9.20572 8.9312 9.20272 8.6794C9.19721 8.22607 8.88572 7.89494 8.42699 7.87178C8.14654 7.85749 7.86459 7.85848 7.58415 7.87129C7.14746 7.89149 6.82094 8.20735 6.80692 8.61978C6.7969 8.90804 6.7964 9.19728 6.80692 9.48603C6.82194 9.88565 7.14696 10.2035 7.5516 10.2242C7.70083 10.2311 7.85107 10.2247 8.00081 10.2247ZM2.40693 9.0465H2.40743C2.40743 9.18151 2.40393 9.31702 2.40793 9.45203C2.42195 9.896 2.74146 10.2138 3.19218 10.2257C3.45409 10.2326 3.71651 10.2311 3.97893 10.2271C4.46169 10.2197 4.78821 9.90635 4.80374 9.43183C4.81225 9.17412 4.81325 8.91543 4.80323 8.65821C4.78571 8.20242 4.4667 7.88755 4.00447 7.8703C3.73654 7.86045 3.46711 7.85996 3.19919 7.8703C2.72844 7.88854 2.41594 8.21227 2.40643 8.67842C2.40493 8.80062 2.40693 8.92331 2.40693 9.0465ZM13.5992 13.3773C13.5987 13.3773 13.5987 13.3773 13.5982 13.3773C13.5982 13.2423 13.6022 13.1068 13.5977 12.9718C13.5822 12.5288 13.2607 12.2139 12.8079 12.2036C12.546 12.1971 12.2836 12.1981 12.0212 12.2026C11.5474 12.2105 11.2199 12.5204 11.2024 12.9846C11.1924 13.2482 11.1924 13.5133 11.2024 13.7769C11.2199 14.2159 11.5254 14.5308 11.9691 14.5564C12.2551 14.5732 12.544 14.5727 12.8305 14.5574C13.2852 14.5328 13.5872 14.212 13.5987 13.7641C13.6017 13.635 13.5992 13.5059 13.5992 13.3773Z" fill="#C0B0B0"/>
  <path d="M0.00712335 5.10598C0.00712335 5.03009 0.00712335 4.96406 0.00712335 4.89804C0.00712335 4.22839 0.0301599 3.55726 0.0016146 2.8886C-0.040953 1.87156 0.763824 1.12012 1.74638 1.18023C1.82601 1.18516 1.90564 1.18073 2.0093 1.18073C1.95722 1.79814 2.0689 2.34953 2.55968 2.76344C2.86516 3.02115 3.22123 3.15123 3.62637 3.14335C4.14018 3.133 4.55184 2.92309 4.87084 2.52988C5.18785 2.13912 5.22741 1.6789 5.19386 1.19304C7.07284 1.19304 8.92929 1.19304 10.8108 1.19304C10.7572 1.80947 10.8729 2.36628 11.3767 2.77872C11.6802 3.02755 12.0322 3.15271 12.4303 3.14335C12.9442 3.13103 13.3553 2.92063 13.6728 2.52643C13.9878 2.13518 14.0269 1.67495 14.0003 1.20487C15.0961 1.01319 15.9905 1.73655 15.9975 2.80976C16.0025 3.52277 15.9985 4.23578 15.998 4.9483C15.998 4.99659 15.9925 5.04487 15.989 5.10598C10.6645 5.10598 5.3461 5.10598 0.00712335 5.10598Z" fill="#C0B0B0"/>
  <path d="M4.4016 1.1935C4.4016 1.33492 4.40811 1.47634 4.4006 1.61727C4.38007 2.0159 4.05605 2.33521 3.65592 2.35935C3.24927 2.38399 2.86967 2.11593 2.8286 1.71779C2.79155 1.36055 2.79155 0.992954 2.83011 0.63571C2.87267 0.239539 3.25678 -0.026054 3.66343 0.00203281C4.05605 0.0291341 4.37606 0.343016 4.4001 0.733275C4.40961 0.886027 4.4016 1.04026 4.4016 1.1935Z" fill="#C0B0B0"/>
  <path d="M13.2151 1.19254C13.2051 1.36796 13.2106 1.54782 13.1815 1.72225C13.1149 2.11793 12.7539 2.38599 12.3462 2.35987C11.9536 2.33474 11.6251 2.02086 11.6075 1.63208C11.594 1.33199 11.594 1.02994 11.6075 0.729851C11.6251 0.341563 11.9546 0.0271884 12.3467 0.00255083C12.7554 -0.0230722 13.1159 0.243999 13.1815 0.639677C13.2111 0.819531 13.2051 1.00579 13.2151 1.19254Z" fill="#C0B0B0"/>
</svg>
                      <p>{card.duration}</p>
                    </span>
                  </div>
                  <h2>{card.title}</h2>
                  <h3>{card.description}</h3>
                  <span className="rate-rank"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z" fill="#FF7F47"/>
</svg>
                    <h3>{card.rating}</h3>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing2;