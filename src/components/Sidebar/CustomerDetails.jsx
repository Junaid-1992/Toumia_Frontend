import React from "react";
import Heading from "../SidebarHeading/Heading";
import controlimg from "../../assets/control/controlimg.png";
import customerimg from "../../assets/customer/customerimg.png";
import edit from "../../assets/customer/edit.png";
import deleteimg from "../../assets/customer/delete.png";

const CustomerDetails = () => {
  const customerData = [
    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },

    {
      Date: "Date",
      name: "Marco Polious",
      Seats: "4 adults",
      Checki: "26.12.24",
      Checko: "28.12.24",
      Location: "Paris",
      Total: "$245.00",
      day: "thu",
      time: "12:00",
    },
  ];
  return (
    <section className="customer-details-section">
      <div className="main-customer">
        <Heading heading={"Bookings"} controlimg={controlimg} />
        <div className="top-padding-dash-inner-sec">
          <div className="card-dash-box dash-box-padding">
            <div className="dash-card-1">
              <div
                className="dash-card-1padding"
                style={{ paddingBottom: "10px" }}
              >
                <span>
                  <p>Total Earnings</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="26"
                    viewBox="0 0 6 26"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="white" />
                    <circle cx="3" cy="13" r="3" fill="white" />
                    <circle cx="3" cy="23" r="3" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_150_2508)">
                      <path
                        d="M17.3425 35.6586C17.8125 35.6586 18.2208 35.6586 18.6819 35.6586C18.6819 35.4853 18.6819 35.3252 18.6819 35.1651C18.6819 29.4209 18.6819 23.6778 18.6819 17.9336C18.6819 17.1023 18.8646 16.9202 19.7021 16.9202C21.2814 16.9202 22.8607 16.919 24.44 16.9202C25.1355 16.9213 25.3457 17.1343 25.3457 17.8354C25.3457 23.6061 25.3457 29.3779 25.3457 35.1486C25.3457 35.3097 25.3457 35.4709 25.3457 35.652C25.8046 35.652 26.2239 35.652 26.6939 35.652C26.6939 35.461 26.6939 35.2877 26.6939 35.1132C26.6939 27.6346 26.6939 20.1549 26.6939 12.6763C26.6939 11.6971 26.8292 11.5646 27.8219 11.5646C29.333 11.5646 30.8429 11.5646 32.354 11.5646C33.1805 11.5646 33.3511 11.7335 33.3511 12.5494C33.3511 20.0832 33.3511 27.6181 33.3511 35.1519C33.3511 35.302 33.3511 35.4533 33.3511 35.673C33.897 35.673 34.4263 35.6719 34.9546 35.673C35.1197 35.673 35.2881 35.6553 35.4476 35.6862C35.7811 35.7491 35.9869 35.9556 35.999 36.3078C36.0111 36.6787 35.8097 36.9017 35.4586 36.9812C35.3277 37.011 35.1857 36.9956 35.0481 36.9956C23.6905 36.9956 12.3328 36.9956 0.976292 36.9956C0.908058 36.9956 0.838724 36.9967 0.77049 36.9956C0.293953 36.9845 -0.00649662 36.7229 0.000106668 36.3243C0.00670995 35.928 0.304958 35.6785 0.7914 35.6752C1.40551 35.6708 2.01851 35.6741 2.67334 35.6741C2.67334 35.4809 2.67334 35.3329 2.67334 35.185C2.67334 32.967 2.67224 30.7502 2.67334 28.5322C2.67334 27.8444 2.86923 27.6468 3.55157 27.6468C5.17158 27.6457 6.79268 27.6457 8.41269 27.6468C9.13685 27.6468 9.32944 27.8444 9.32944 28.5874C9.33055 30.7634 9.32944 32.9394 9.32944 35.1165C9.32944 35.281 9.32944 35.4455 9.32944 35.6432C9.77957 35.6432 10.2077 35.6432 10.6765 35.6432C10.6765 35.4742 10.6765 35.312 10.6765 35.1508C10.6765 31.184 10.6765 27.2173 10.6765 23.2506C10.6765 22.4667 10.8592 22.2857 11.6494 22.2857C13.243 22.2857 14.8355 22.2846 16.4291 22.2857C17.1279 22.2857 17.3403 22.4976 17.3403 23.1954C17.3414 27.1765 17.3403 31.1564 17.3403 35.1375C17.3425 35.2976 17.3425 35.4599 17.3425 35.6586ZM32.0194 12.8883C30.8121 12.8883 29.6477 12.9037 28.4834 12.8795C28.1015 12.8717 28.0046 12.9854 28.0046 13.363C28.0156 20.6462 28.0123 27.9283 28.0123 35.2115C28.0123 35.3583 28.0123 35.5041 28.0123 35.6465C29.3836 35.6465 30.6944 35.6465 32.0183 35.6465C32.0194 28.063 32.0194 20.5082 32.0194 12.8883ZM20.0334 18.2659C20.0334 24.0963 20.0334 29.8747 20.0334 35.6476C21.3782 35.6476 22.6901 35.6476 24.0063 35.6476C24.0063 29.8427 24.0063 24.0631 24.0063 18.2659C22.6714 18.2659 21.3606 18.2659 20.0334 18.2659ZM12.0247 23.6171C12.0247 27.6545 12.0247 31.6521 12.0247 35.6476C13.3652 35.6476 14.6759 35.6476 15.9922 35.6476C15.9922 31.6234 15.9922 27.6258 15.9922 23.6171C14.6594 23.6171 13.3574 23.6171 12.0247 23.6171ZM7.99338 28.9959C6.64191 28.9959 5.33226 28.9959 4.01931 28.9959C4.01931 31.2304 4.01931 33.4373 4.01931 35.6465C5.35647 35.6465 6.66502 35.6465 7.99338 35.6465C7.99338 33.423 7.99338 31.2271 7.99338 28.9959Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M9.57415 1.6077e-07C13.4811 0.00772827 16.4603 3.03163 16.4438 6.97517C16.4284 10.7134 13.3083 13.7859 9.53673 13.777C5.76626 13.7693 2.66712 10.6803 2.67482 6.93764C2.68252 2.98305 5.6573 -0.00772795 9.57415 1.6077e-07ZM3.99327 6.81178C3.99548 10.0134 6.39137 12.4323 9.55544 12.4301C12.7173 12.4279 15.1253 9.99797 15.1253 6.81068C15.1253 3.7934 12.5963 1.28618 9.55544 1.28839C6.50692 1.2906 3.99217 3.78788 3.99327 6.81178Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M25.8191 4.85215C25.4636 4.85215 25.1093 4.85988 24.7549 4.84994C24.3301 4.8389 24.0494 4.57836 24.0417 4.20741C24.034 3.84529 24.3224 3.54279 24.7318 3.53616C25.5968 3.52181 26.4629 3.52071 27.328 3.53727C27.7407 3.545 27.9971 3.80665 28.0048 4.21955C28.0202 5.10056 28.0191 5.98266 28.0059 6.86367C27.9993 7.26663 27.7253 7.52829 27.3665 7.5316C27.0099 7.53491 26.7381 7.27878 26.705 6.87692C26.6852 6.63183 26.7017 6.38342 26.7017 6.01137C26.5378 6.1847 26.4475 6.27302 26.365 6.36797C21.2606 12.1497 15.3804 16.9842 8.71 20.8394C7.09549 21.7723 5.41716 22.5959 3.76304 23.4603C3.30301 23.6999 2.92772 23.595 2.74833 23.2164C2.56894 22.8399 2.72852 22.5043 3.20726 22.2724C10.7504 18.6214 17.4582 13.809 23.279 7.76344C24.1639 6.8449 25.0113 5.88993 25.8763 4.95262C25.8554 4.9195 25.8367 4.88527 25.8191 4.85215Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M8.85351 3.24139C8.97567 2.29856 9.11434 2.03249 9.53695 2.05568C10.3062 2.09763 10.1896 2.72361 10.2281 3.23256C11.1966 3.41583 11.8811 3.92036 12.1882 4.8643C12.2388 5.01996 12.2806 5.18667 12.2795 5.34785C12.2784 5.69452 12.0858 5.91532 11.7523 5.9915C11.4354 6.06436 11.0678 5.86895 11.0216 5.54327C10.9445 4.99788 10.6419 4.71084 10.1367 4.59602C9.50943 4.4525 8.90083 4.47458 8.37807 4.89852C8.05891 5.15686 8.0413 5.53554 8.36706 5.78063C8.61909 5.96942 8.93935 6.09417 9.2486 6.17366C9.59087 6.26088 9.95625 6.25094 10.3073 6.30724C10.4944 6.33705 10.6793 6.40329 10.8554 6.47726C11.7534 6.85152 12.3246 7.62986 12.2861 8.40929C12.2399 9.3201 11.541 10.1879 10.5968 10.4197C10.2666 10.5003 10.1929 10.6339 10.2006 10.9441C10.2127 11.4089 9.95075 11.6937 9.56886 11.7015C9.17927 11.7103 8.88652 11.4089 8.89973 10.9309C8.90853 10.6096 8.80728 10.4992 8.49583 10.412C7.56477 10.1514 7.01889 9.50448 6.84061 8.55281C6.76687 8.16199 7.00349 7.81975 7.37107 7.7524C7.71554 7.68947 8.06441 7.9169 8.11504 8.29779C8.17337 8.72835 8.4331 8.95799 8.79518 9.0993C9.32894 9.30796 9.87151 9.29361 10.3987 9.06839C10.6881 8.94474 10.9269 8.75706 10.9335 8.40377C10.9401 8.02841 10.6892 7.82748 10.3822 7.71266C10.1555 7.62765 9.90563 7.59894 9.66461 7.55478C9.22109 7.47419 8.75776 7.45542 8.33625 7.3119C7.41619 6.99946 6.8395 6.20126 6.8318 5.34454C6.8252 4.50659 7.38868 3.77684 8.32414 3.42024C8.49143 3.35511 8.66201 3.30542 8.85351 3.24139Z"
                        fill="#FF7F47"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_150_2508">
                        <rect width="36" height="37" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>$10,800</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <div
                className="dash-card-1padding"
                style={{ paddingBottom: "10px" }}
              >
                <span>
                  <p>Total Earnings</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="26"
                    viewBox="0 0 6 26"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="white" />
                    <circle cx="3" cy="13" r="3" fill="white" />
                    <circle cx="3" cy="23" r="3" fill="white" />
                  </svg>
                </span>
              </div>
              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 39 39"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_150_2495)">
                      <path
                        d="M19.1866 39C18.661 38.7934 18.2977 38.4505 18.2864 37.8532C18.2742 37.2101 18.7998 36.7237 19.5112 36.7156C21.6046 36.6932 23.6469 36.3615 25.5861 35.5729C31.3681 33.2223 35.0383 29.0076 36.3356 22.9236C38.3156 13.6333 32.1856 4.49863 22.8191 2.63344C21.7158 2.41365 20.5737 2.37702 19.4469 2.29256C18.5202 2.22337 17.9813 1.30553 18.461 0.547447C18.7141 0.147546 19.0958 -0.00610549 19.5653 -0.0010177C22.9671 0.0356144 26.1771 0.831346 29.1073 2.55611C34.5648 5.76956 37.8584 10.5083 38.7923 16.7714C40.2998 26.8819 33.441 36.5823 23.4244 38.593C22.616 38.7548 21.7883 38.8209 20.9697 38.9339C20.8585 38.9491 20.7482 38.9766 20.637 38.999C20.1542 39 19.6704 39 19.1866 39Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M18.2797 13.7625C18.2797 11.8841 18.2746 10.0067 18.2817 8.12826C18.2848 7.27351 18.9778 6.71793 19.7453 6.93467C20.2495 7.07713 20.5669 7.50552 20.57 8.07942C20.5761 9.29744 20.572 10.5155 20.572 11.7345C20.572 14.0189 20.5792 16.3033 20.5639 18.5867C20.5618 18.9103 20.668 19.124 20.8895 19.3438C23.7034 22.137 26.5081 24.9404 29.32 27.7366C29.614 28.0297 29.8181 28.3523 29.7732 28.7776C29.7273 29.2111 29.5119 29.5459 29.0965 29.7168C28.674 29.8908 28.2739 29.8369 27.9115 29.555C27.8115 29.4777 27.7247 29.383 27.6339 29.2935C24.6995 26.369 21.7693 23.4395 18.8267 20.5221C18.4491 20.1477 18.2684 19.7407 18.2735 19.2064C18.2899 17.3921 18.2797 15.5778 18.2797 13.7625Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M12.7881 3.51567C12.2247 3.51058 11.7807 3.15443 11.6562 2.63039C11.5368 2.13077 11.7767 1.56195 12.2768 1.36964C13.0229 1.0837 13.7853 0.831346 14.5569 0.627834C15.1213 0.479271 15.6643 0.836434 15.8511 1.38083C16.0287 1.89978 15.8164 2.52864 15.2969 2.73215C14.5304 3.03334 13.7322 3.25212 12.9463 3.50346C12.8871 3.52279 12.8198 3.51363 12.7881 3.51567Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M1.91309 27.989C1.91207 27.3785 2.22337 26.9511 2.70613 26.8005C3.18788 26.6509 3.70637 26.8046 3.98194 27.2401C4.38816 27.8832 4.77907 28.5385 5.13528 29.209C5.41187 29.73 5.19141 30.3731 4.69231 30.6652C4.17995 30.9654 3.5298 30.8636 3.20013 30.3609C2.76941 29.7046 2.38973 29.0137 2.00188 28.3299C1.93146 28.2047 1.92534 28.0409 1.91309 27.989Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M9.95475 4.32158C9.96495 4.87716 9.79247 5.18548 9.48423 5.42766C8.96472 5.8357 8.44827 6.24782 7.92672 6.6528C7.39496 7.06593 6.72848 7.01607 6.31716 6.53782C5.90788 6.0616 5.9385 5.36152 6.43555 4.93415C6.99385 4.45488 7.57868 4.0041 8.16963 3.56451C8.53503 3.29282 8.94941 3.27552 9.35767 3.49125C9.75266 3.69985 9.94556 4.03666 9.95475 4.32158Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M5.40734 9.20077C5.31446 9.41853 5.24301 9.6485 5.12564 9.85201C4.81536 10.3903 4.48365 10.9164 4.16419 11.4496C3.81308 12.0367 3.15273 12.2433 2.59341 11.937C2.03409 11.6307 1.82792 10.955 2.15861 10.3588C2.5087 9.72685 2.88838 9.10919 3.28541 8.50578C3.5865 8.0489 4.09478 7.90338 4.59388 8.07128C5.07052 8.23307 5.37366 8.67266 5.40734 9.20077Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M2.68817 15.1911C2.58304 15.7467 2.46261 16.3807 2.34217 17.0146C2.31155 17.1764 2.29828 17.3433 2.25031 17.499C2.07374 18.0698 1.53177 18.3883 0.937758 18.2825C0.396814 18.1858 -0.0502301 17.6557 0.0273392 17.094C0.134507 16.3176 0.283522 15.5432 0.467239 14.7801C0.600944 14.2245 1.15107 13.905 1.6961 13.9823C2.26868 14.0647 2.68205 14.5338 2.68817 15.1911Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M11.4483 36.5558C11.4412 35.7876 12.1648 35.2299 12.9119 35.4548C13.6039 35.6634 14.2898 35.8995 14.9695 36.1447C15.5299 36.3472 15.8187 36.9303 15.6738 37.5001C15.534 38.0476 14.9961 38.4617 14.4327 38.3193C13.611 38.1117 12.8047 37.8298 12.0158 37.5184C11.6279 37.3668 11.4554 36.9852 11.4483 36.5558Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M0 21.8765C0.00714454 21.0574 0.418466 20.5812 0.982885 20.5008C1.52281 20.4234 2.09437 20.7511 2.21787 21.2945C2.39444 22.0719 2.53427 22.8605 2.62919 23.6522C2.69655 24.2189 2.24951 24.7226 1.69428 24.8203C1.15639 24.9149 0.568501 24.6076 0.433776 24.0663C0.234749 23.2695 0.111251 22.4535 0 21.8765Z"
                        fill="#FF7F47"
                      />
                      <path
                        d="M9.88021 34.3548C9.78937 35.2676 8.83609 35.8496 8.10938 35.3714C7.42351 34.9196 6.78969 34.3782 6.18342 33.8216C5.75271 33.4268 5.79557 32.7298 6.18954 32.3034C6.57433 31.8862 7.21734 31.7977 7.67969 32.1457C8.27779 32.5965 8.86977 33.0605 9.42092 33.5662C9.63525 33.7626 9.7312 34.0882 9.88021 34.3548Z"
                        fill="#FF7F47"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_150_2495">
                        <rect width="39" height="39" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3>$10,800</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <div
                className="dash-card-1padding"
                style={{ paddingBottom: "10px" }}
              >
                <span>
                  <p>Total Earnings</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="26"
                    viewBox="0 0 6 26"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="white" />
                    <circle cx="3" cy="13" r="3" fill="white" />
                    <circle cx="3" cy="23" r="3" fill="white" />
                  </svg>
                </span>
              </div>

              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M28.6875 4.25H24.4375V3.1875C24.4375 2.90571 24.3256 2.63546 24.1263 2.4362C23.927 2.23694 23.6568 2.125 23.375 2.125C23.0932 2.125 22.823 2.23694 22.6237 2.4362C22.4244 2.63546 22.3125 2.90571 22.3125 3.1875V4.25H11.6875V3.1875C11.6875 2.90571 11.5756 2.63546 11.3763 2.4362C11.177 2.23694 10.9068 2.125 10.625 2.125C10.3432 2.125 10.073 2.23694 9.8737 2.4362C9.67444 2.63546 9.5625 2.90571 9.5625 3.1875V4.25H5.3125C4.46712 4.25 3.65637 4.58582 3.0586 5.1836C2.46083 5.78137 2.125 6.59212 2.125 7.4375V28.6875C2.125 29.5329 2.46083 30.3436 3.0586 30.9414C3.65637 31.5392 4.46712 31.875 5.3125 31.875H28.6875C29.5329 31.875 30.3436 31.5392 30.9414 30.9414C31.5392 30.3436 31.875 29.5329 31.875 28.6875V7.4375C31.875 6.59212 31.5392 5.78137 30.9414 5.1836C30.3436 4.58582 29.5329 4.25 28.6875 4.25ZM5.3125 6.375H28.6875C28.9693 6.375 29.2395 6.48694 29.4388 6.6862C29.6381 6.88546 29.75 7.15571 29.75 7.4375V10.625H4.25V7.4375C4.25 7.15571 4.36194 6.88546 4.5612 6.6862C4.76046 6.48694 5.03071 6.375 5.3125 6.375ZM28.6875 29.75H5.3125C5.03071 29.75 4.76046 29.6381 4.5612 29.4388C4.36194 29.2395 4.25 28.9693 4.25 28.6875V12.75H29.75V28.6875C29.75 28.9693 29.6381 29.2395 29.4388 29.4388C29.2395 29.6381 28.9693 29.75 28.6875 29.75Z"
                      fill="#FF7F47"
                    />
                    <path
                      d="M21.6218 16.1936L14.928 21.9311L12.4354 19.4395C12.235 19.246 11.9666 19.1389 11.688 19.1413C11.4094 19.1437 11.143 19.2554 10.946 19.4524C10.749 19.6494 10.6372 19.9159 10.6348 20.1945C10.6324 20.4731 10.7395 20.7415 10.933 20.9419L14.1205 24.1294C14.3098 24.3184 14.5633 24.429 14.8306 24.4393C15.0979 24.4495 15.3592 24.3586 15.5623 24.1846L22.9998 17.8096C23.1118 17.7208 23.2047 17.6104 23.273 17.4848C23.3413 17.3593 23.3835 17.2213 23.3972 17.079C23.4109 16.9368 23.3958 16.7933 23.3527 16.657C23.3097 16.5207 23.2396 16.3946 23.1466 16.286C23.0537 16.1775 22.9398 16.0888 22.8118 16.0253C22.6838 15.9618 22.5442 15.9248 22.4016 15.9165C22.2589 15.9081 22.1161 15.9287 21.9815 15.9768C21.847 16.025 21.7235 16.0998 21.6186 16.1967L21.6218 16.1936Z"
                      fill="#FF7F47"
                    />
                  </svg>
                </div>
                <h3>$10,800</h3>
              </div>
            </div>

            <div className="dash-card-1">
              <div
                className="dash-card-1padding"
                style={{ paddingBottom: "10px" }}
              >
                <span>
                  <p>Total Earnings</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="26"
                    viewBox="0 0 6 26"
                    fill="none"
                  >
                    <circle cx="3" cy="3" r="3" fill="white" />
                    <circle cx="3" cy="13" r="3" fill="white" />
                    <circle cx="3" cy="23" r="3" fill="white" />
                  </svg>
                </span>
              </div>

              <div className="flex-box-icon">
                <div className="dash-card-1-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="32"
                    viewBox="0 0 38 32"
                    fill="none"
                  >
                    <path
                      d="M19.0371 4.3101C19.5425 3.78887 19.9705 3.29324 20.4538 2.85797C23.5326 0.0890404 27.1168 -0.690063 31.0128 0.617587C34.8866 1.91792 37.2109 4.71611 37.8529 8.73782C38.3952 12.1322 37.4378 15.1389 34.9844 17.5951C30.6512 21.9332 26.2867 26.2402 21.924 30.5491C20.2712 32.1822 17.8011 32.1987 16.152 30.5728C11.7247 26.2018 7.26059 21.8655 2.91635 17.414C0.0275647 14.4512 -0.678951 10.8264 0.636312 6.9638C1.94051 3.13779 4.75181 0.833395 8.78799 0.185971C12.256 -0.371838 15.2942 0.617587 17.8196 3.06829C18.2143 3.45052 18.5888 3.85288 19.0371 4.3101ZM10.4298 2.32393C9.71033 2.43915 8.97246 2.49219 8.27147 2.67874C2.38323 4.2406 0.426017 11.6037 4.76288 15.9564C9.07207 20.2817 13.4292 24.5613 17.7698 28.8573C18.5113 29.5925 19.5351 29.598 20.2767 28.8647C24.6357 24.5503 29.0021 20.2451 33.3371 15.9089C35.2519 13.994 35.951 11.6256 35.5064 8.99386C35.0028 6.01827 33.2707 3.90592 30.4077 2.88906C27.5134 1.86123 24.7722 2.31113 22.3889 4.30461C21.5274 5.02519 20.7674 5.8683 19.9613 6.65472C19.3544 7.24728 18.6995 7.25094 18.1 6.66021C17.4525 6.02193 16.8105 5.37816 16.163 4.74171C14.5785 3.18351 12.6711 2.40258 10.4298 2.32393Z"
                      fill="#FF7F47"
                    />
                  </svg>
                </div>
                <h3>$10,800</h3>
              </div>
            </div>
          </div>

          <div className="customer-table">
            <div className="customer-table-change-btn">
              <div className="customer-table-change-btn-box"></div>
              <div className="customer-table-change-btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="42"
                  viewBox="0 0 45 42"
                  fill="none"
                >
                  <g clip-path="url(#clip0_150_3448)">
                    <path
                      d="M16.6442 32.6038C16.6442 30.1 16.6359 27.5963 16.6526 25.0925C16.6554 24.6869 16.5441 24.3899 16.2659 24.0888C11.2843 18.6922 6.31378 13.2833 1.33774 7.88115C-1.14124 5.19041 -0.0255606 1.09175 3.45363 0.169168C3.8668 0.0591736 4.30917 0.00830115 4.73764 0.00830115C16.5566 5.15699e-05 28.3742 -0.00407322 40.1931 0.00692622C42.2256 0.00830115 43.7405 0.93088 44.5613 2.77329C45.3834 4.61844 45.0245 6.33986 43.664 7.82341C38.7464 13.1856 33.819 18.5396 28.8764 23.8798C28.4577 24.3322 28.2893 24.7708 28.2963 25.3799C28.3283 28.0899 28.2991 30.7999 28.3171 33.5085C28.3213 34.2193 28.0709 34.7569 27.5117 35.1983C24.8644 37.2799 22.224 39.3712 19.5837 41.4611C19.151 41.8034 18.6906 42.0564 18.1119 41.9891C17.2591 41.8901 16.647 41.1861 16.6456 40.2704C16.6401 37.7144 16.6442 35.1598 16.6442 32.6038ZM19.9774 36.8619C20.097 36.8028 20.1471 36.7891 20.1847 36.7602C21.6982 35.5557 23.2187 34.3582 24.7155 33.1345C24.8686 33.0094 24.9645 32.733 24.9659 32.5254C24.9826 29.7632 24.9882 27.0023 24.9687 24.2401C24.9632 23.5622 25.1704 23.0246 25.6323 22.5228C30.6334 17.0946 35.6219 11.6553 40.6147 6.21886C40.7899 6.02775 40.9597 5.83388 41.1391 5.64689C41.5731 5.19866 41.7554 4.68581 41.4925 4.09734C41.2212 3.491 40.7065 3.29026 40.054 3.29164C28.3547 3.29713 16.6554 3.29851 4.95605 3.29026C4.27301 3.29026 3.71238 3.4525 3.42442 4.11384C3.14202 4.75869 3.42303 5.26191 3.86262 5.73901C9.02368 11.3487 14.1764 16.9653 19.3402 22.5723C19.7882 23.059 19.9899 23.587 19.9857 24.2442C19.9676 27.0573 19.9774 29.8704 19.9774 32.6835C19.9774 34.053 19.9774 35.4238 19.9774 36.8619Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_150_3448">
                      <rect width="45" height="42" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Seats</th>
                    <th>Check - in</th>
                    <th>Check - out</th>
                    <th>Location</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {customerData.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.Date}</td>
                      <td>{customer.name}</td>
                      <td>{customer.Seats}</td>
                      <td>
                        <span className="chexk">
                          {customer.Checki}
                          <div className="span-date">
                            {customer.day}
                            <p> {customer.time}</p>
                          </div>
                        </span>
                      </td>
                      <td>
                        <span className="chexk">
                          {customer.Checko}
                          <div className="span-date">
                            {customer.day}
                            <p> {customer.time}</p>
                          </div>
                        </span>
                      </td>
                      <td>{customer.Location}</td>
                      <td>{customer.Total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;