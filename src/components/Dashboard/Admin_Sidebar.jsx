import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  cursor: pointer;
  color: ${(props) =>
    props.active ? "#FF7F47" : "#fff"}; /* Active tab color */

  .side-bar-item-child {
    color: inherit;
    display: flex;
    align-items: center;
  }

  .side-nav-pic svg {
    fill: currentColor; /* Use currentColor to match text color */
  }
`;

const Admin_Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeIndex = (p) => {
    if (window.innerWidth <= 768) {
      setIndex(p);
      setIsOpen(!isOpen);
    } else {
      setIndex(p);
    }
  };

  return (
    <>
      {showButton && (
        <div className="ahti" style={{ position: "fixed", top: "0" }}>
          {/* <input
            type="checkbox"
            id="checkbox"
            onClick={() => {
              toggleSidebar();
            }}
          /> */}
          {/* <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label> */}

          <label class="hamburger">
            <input
              id="checkbox"
              onClick={() => {
                toggleSidebar();
              }}
              type="checkbox"
            />
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      )}

      <div
        className="side-bar-container-thiviyo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="fix-side-box">
          <Link
            to=""
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >
            <SidebarItem active={index === 0}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_150_3454)">
                      <path
                        d="M10.8984 18.8906H3.63281C1.62968 18.8906 0 20.5203 0 22.5234V27.3672C0 29.3703 1.62968 31 3.63281 31H10.8984C12.9016 31 14.5312 29.3703 14.5312 27.3672V22.5234C14.5312 20.5203 12.9016 18.8906 10.8984 18.8906ZM12.1094 27.3672C12.1094 28.0349 11.5661 28.5781 10.8984 28.5781H3.63281C2.9651 28.5781 2.42188 28.0349 2.42188 27.3672V22.5234C2.42188 21.8557 2.9651 21.3125 3.63281 21.3125H10.8984C11.5661 21.3125 12.1094 21.8557 12.1094 22.5234V27.3672ZM27.3672 0H20.1016C18.0984 0 16.4688 1.62968 16.4688 3.63281V8.47656C16.4688 10.4797 18.0984 12.1094 20.1016 12.1094H27.3672C29.3703 12.1094 31 10.4797 31 8.47656V3.63281C31 1.62968 29.3703 0 27.3672 0ZM28.5781 8.47656C28.5781 9.14427 28.0349 9.6875 27.3672 9.6875H20.1016C19.4339 9.6875 18.8906 9.14427 18.8906 8.47656V3.63281C18.8906 2.9651 19.4339 2.42188 20.1016 2.42188H27.3672C28.0349 2.42188 28.5781 2.9651 28.5781 3.63281V8.47656ZM27.3672 14.0469H20.1016C18.0984 14.0469 16.4688 15.6766 16.4688 17.6797V27.3672C16.4688 29.3703 18.0984 31 20.1016 31H27.3672C29.3703 31 31 29.3703 31 27.3672V17.6797C31 15.6766 29.3703 14.0469 27.3672 14.0469ZM28.5781 27.3672C28.5781 28.0349 28.0349 28.5781 27.3672 28.5781H20.1016C19.4339 28.5781 18.8906 28.0349 18.8906 27.3672V17.6797C18.8906 17.012 19.4339 16.4688 20.1016 16.4688H27.3672C28.0349 16.4688 28.5781 17.012 28.5781 17.6797V27.3672ZM10.8984 0H3.63281C1.62968 0 0 1.62968 0 3.63281V13.3203C0 15.3234 1.62968 16.9531 3.63281 16.9531H10.8984C12.9016 16.9531 14.5312 15.3234 14.5312 13.3203V3.63281C14.5312 1.62968 12.9016 0 10.8984 0ZM12.1094 13.3203C12.1094 13.988 11.5661 14.5312 10.8984 14.5312H3.63281C2.9651 14.5312 2.42188 13.988 2.42188 13.3203V3.63281C2.42188 2.9651 2.9651 2.42188 3.63281 2.42188H10.8984C11.5661 2.42188 12.1094 2.9651 12.1094 3.63281V13.3203Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_150_3454">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>{" "}
                Dashboard
              </div>
            </SidebarItem>
          </Link>

          <Link
            className="none-list"
            to="AdminBookings1"
            onClick={() => handleChangeIndex(1)}
          >
            <SidebarItem active={index === 1}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M26.1562 3.875H22.2812V2.90625C22.2812 2.64932 22.1792 2.40292 21.9975 2.22124C21.8158 2.03956 21.5694 1.9375 21.3125 1.9375C21.0556 1.9375 20.8092 2.03956 20.6275 2.22124C20.4458 2.40292 20.3438 2.64932 20.3438 2.90625V3.875H10.6562V2.90625C10.6562 2.64932 10.5542 2.40292 10.3725 2.22124C10.1908 2.03956 9.94443 1.9375 9.6875 1.9375C9.43057 1.9375 9.18417 2.03956 9.00249 2.22124C8.82081 2.40292 8.71875 2.64932 8.71875 2.90625V3.875H4.84375C4.07296 3.875 3.33375 4.18119 2.78872 4.72622C2.24369 5.27125 1.9375 6.01046 1.9375 6.78125V26.1562C1.9375 26.927 2.24369 27.6663 2.78872 28.2113C3.33375 28.7563 4.07296 29.0625 4.84375 29.0625H26.1562C26.927 29.0625 27.6663 28.7563 28.2113 28.2113C28.7563 27.6663 29.0625 26.927 29.0625 26.1562V6.78125C29.0625 6.01046 28.7563 5.27125 28.2113 4.72622C27.6663 4.18119 26.927 3.875 26.1562 3.875ZM4.84375 5.8125H26.1562C26.4132 5.8125 26.6596 5.91456 26.8413 6.09624C27.0229 6.27792 27.125 6.52432 27.125 6.78125V9.6875H3.875V6.78125C3.875 6.52432 3.97706 6.27792 4.15874 6.09624C4.34042 5.91456 4.58682 5.8125 4.84375 5.8125ZM26.1562 27.125H4.84375C4.58682 27.125 4.34042 27.0229 4.15874 26.8413C3.97706 26.6596 3.875 26.4132 3.875 26.1562V11.625H27.125V26.1562C27.125 26.4132 27.0229 26.6596 26.8413 26.8413C26.6596 27.0229 26.4132 27.125 26.1562 27.125Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.7148 14.7647L13.6117 19.996L11.339 17.7243C11.1563 17.5478 10.9116 17.4501 10.6576 17.4523C10.4036 17.4546 10.1606 17.5564 9.98101 17.7361C9.80139 17.9157 9.69951 18.1586 9.6973 18.4126C9.6951 18.6666 9.79274 18.9114 9.96921 19.0941L12.8755 22.0003C13.048 22.1726 13.2792 22.2735 13.5229 22.2829C13.7666 22.2922 14.0048 22.2093 14.19 22.0507L20.9713 16.2382C21.0734 16.1572 21.1581 16.0565 21.2203 15.9421C21.2826 15.8276 21.3211 15.7018 21.3336 15.5721C21.3461 15.4424 21.3323 15.3115 21.2931 15.1873C21.2538 15.063 21.1899 14.948 21.1051 14.849C21.0204 14.7501 20.9165 14.6692 20.7998 14.6113C20.6831 14.5534 20.5559 14.5197 20.4258 14.5121C20.2958 14.5045 20.1655 14.5232 20.0428 14.5671C19.9202 14.611 19.8076 14.6792 19.7119 14.7676L19.7148 14.7647Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Bookings
              </div>
            </SidebarItem>
          </Link>

          <Link
            className="none-list"
            to="AdminPropertyManagement1"
            onClick={() => handleChangeIndex(3)}
          >
            <SidebarItem active={index === 3}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                  >
                    <path
                      d="M0 22.1222C0.63057 22.1222 1.26149 22.1222 1.9114 22.1222C1.9114 20.0359 1.9114 17.9839 1.9114 15.8838C1.52788 16.1648 1.16232 16.4328 0.77396 16.7179C0.583925 16.4675 0.399073 16.2246 0.195563 15.956C0.664776 15.6042 1.12121 15.2623 1.61046 14.8958C1.13537 14.5399 0.68067 14.1994 0.195909 13.8363C0.386634 13.5827 0.570104 13.3392 0.77085 13.0726C1.15127 13.3515 1.51821 13.6205 1.92384 13.918C1.92384 13.424 1.92384 12.9785 1.92384 12.5116C2.25174 12.5116 2.55649 12.5116 2.89578 12.5116C2.89578 12.9651 2.89578 13.4178 2.89578 13.9332C3.30799 13.6295 3.66802 13.3639 4.06191 13.0736C4.25056 13.3217 4.43472 13.5642 4.6403 13.8342C4.17593 14.184 3.71984 14.5275 3.22886 14.8968C3.70361 15.2517 4.16591 15.5973 4.64238 15.9536C4.44509 16.215 4.25954 16.4613 4.06536 16.719C3.68149 16.4366 3.31386 16.1665 2.91306 15.8718C2.91306 17.9719 2.91306 20.0222 2.91306 22.0924C3.70913 22.0924 4.49657 22.0924 5.30335 22.0924C5.30335 15.6962 5.30335 9.30595 5.30335 2.87925C5.00102 2.87925 4.6949 2.87925 4.37322 2.87925C4.37322 2.54636 4.37322 2.24953 4.37322 1.92076C5.96536 1.92076 7.55578 1.92076 9.16555 1.92076C9.16555 1.5858 9.16555 1.28245 9.16555 0.954368C8.85631 0.954368 8.55744 0.954368 8.23922 0.954368C8.23922 0.626626 8.23922 0.323276 8.23922 0C12.4169 0 16.5862 0 20.776 0C20.776 0.310908 20.776 0.613915 20.776 0.943031C20.4692 0.943031 20.171 0.943031 19.8517 0.943031C19.8517 1.27112 19.8517 1.57378 19.8517 1.90942C21.448 1.90942 23.0381 1.90942 24.643 1.90942C24.643 2.2382 24.643 2.53433 24.643 2.86826C24.3321 2.86826 24.0266 2.86826 23.7074 2.86826C23.7074 9.29599 23.7074 15.6859 23.7074 22.0944C24.5062 22.0944 25.2936 22.0944 26.0994 22.0944C26.0994 20.0321 26.0994 17.9805 26.0994 15.8752C25.71 16.1614 25.3434 16.4307 24.9485 16.721C24.7567 16.4672 24.568 16.2174 24.3714 15.9566C24.85 15.5987 25.3088 15.2558 25.7894 14.8965C25.3102 14.5371 24.8541 14.1953 24.3746 13.8359C24.5701 13.5773 24.7539 13.3337 24.9512 13.0729C25.3354 13.355 25.7024 13.624 26.1101 13.9232C26.1101 13.4227 26.1101 12.9764 26.1101 12.5102C26.4383 12.5102 26.7434 12.5102 27.0817 12.5102C27.0817 12.9664 27.0817 13.4192 27.0817 13.929C27.4901 13.6278 27.8501 13.3625 28.2402 13.075C28.432 13.3289 28.6154 13.5714 28.8176 13.8394C28.3466 14.1919 27.8895 14.534 27.4065 14.8958C27.8809 15.2507 28.3387 15.5935 28.8176 15.9518C28.6234 16.2119 28.4399 16.4575 28.2447 16.719C27.866 16.44 27.4984 16.1693 27.0993 15.8752C27.0993 17.9719 27.0993 20.0228 27.0993 22.1068C27.7316 22.1068 28.3587 22.1068 29 22.1068C29 22.4366 29 22.7338 29 23.0735C28.8818 23.0735 28.7633 23.0735 28.6448 23.0735C22.5533 23.0735 16.4619 23.0735 10.3704 23.0735C7.02714 23.0735 3.68391 23.0735 0.340681 23.0739C0.227351 23.0739 0.114021 23.078 0.000691036 23.0804C0 22.7609 0 22.4417 0 22.1222ZM10.1738 0.981165C10.1738 8.02762 10.1738 15.0542 10.1738 22.09C10.6616 22.09 11.126 22.09 11.6101 22.09C11.6101 21.1486 11.608 20.2297 11.6111 19.311C11.6125 18.9153 11.7835 18.7438 12.1802 18.7431C13.7285 18.7407 15.2771 18.7411 16.8253 18.7431C17.2348 18.7438 17.4023 18.9153 17.4034 19.3309C17.4058 20.1476 17.4041 20.9645 17.4041 21.7811C17.4041 21.8814 17.4041 21.9817 17.4041 22.0896C17.9027 22.0896 18.3667 22.0896 18.8439 22.0896C18.8439 15.0411 18.8439 8.01594 18.8439 0.981852C15.9408 0.981165 13.0571 0.981165 10.1738 0.981165ZM6.30432 2.88612C6.30432 9.30217 6.30432 15.6928 6.30432 22.0917C7.26797 22.0917 8.21503 22.0917 9.16486 22.0917C9.16486 15.6811 9.16486 9.29118 9.16486 2.88612C8.20916 2.88612 7.269 2.88612 6.30432 2.88612ZM22.706 22.0975C22.706 15.687 22.706 9.29118 22.706 2.88612C21.7455 2.88612 20.8054 2.88612 19.8535 2.88612C19.8535 9.29736 19.8535 15.6935 19.8535 22.0975C20.8136 22.0975 21.7538 22.0975 22.706 22.0975ZM12.5914 19.7154C12.5914 20.5186 12.5914 21.2933 12.5914 22.0731C13.0706 22.0731 13.5343 22.0731 14.0035 22.0731C14.0035 21.2747 14.0035 20.5017 14.0035 19.7154C13.527 19.7154 13.0696 19.7154 12.5914 19.7154ZM16.4235 19.7257C15.9377 19.7257 15.4737 19.7257 15.0138 19.7257C15.0138 20.523 15.0138 21.2964 15.0138 22.0827C15.493 22.0827 15.9508 22.0827 16.4235 22.0827C16.4235 21.2922 16.4235 20.5175 16.4235 19.7257Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.1328 3.34118C11.1328 2.86743 11.1328 2.41223 11.1328 1.93264C11.4407 1.93264 11.7444 1.93264 12.0674 1.93264C12.0674 2.40021 12.0674 2.86262 12.0674 3.34118C11.7617 3.34118 11.4638 3.34118 11.1328 3.34118Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0742 1.92509C13.3924 1.92509 13.6889 1.92509 14.0033 1.92509C14.0033 2.4033 14.0033 2.86537 14.0033 3.34221C13.692 3.34221 13.3942 3.34221 13.0742 3.34221C13.0742 2.8798 13.0742 2.41807 13.0742 1.92509Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.9617 3.34427C15.6313 3.34427 15.3345 3.34427 15.0156 3.34427C15.0156 2.87396 15.0156 2.41292 15.0156 1.90997C15.2889 1.90997 15.5581 1.90344 15.8266 1.91615C15.8735 1.91856 15.9547 2.0017 15.9558 2.04945C15.9658 2.47682 15.9617 2.90419 15.9617 3.34427Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.8725 3.35011C17.5585 3.35011 17.2682 3.35011 16.9531 3.35011C16.9531 2.88186 16.9531 2.42013 16.9531 1.93333C17.2506 1.93333 17.5529 1.93333 17.8725 1.93333C17.8725 2.40639 17.8725 2.87498 17.8725 3.35011Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.0678 5.74394C11.7547 5.74394 11.4507 5.74394 11.1328 5.74394C11.1328 5.2695 11.1328 4.81499 11.1328 4.33884C11.4414 4.33884 11.7451 4.33884 12.0678 4.33884C12.0678 4.80194 12.0678 5.264 12.0678 5.74394Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.005 5.76248C13.7247 5.76248 13.4632 5.77107 13.203 5.75527C13.1512 5.75218 13.0638 5.65873 13.0624 5.6048C13.0506 5.1867 13.0558 4.76826 13.0558 4.33368C13.3875 4.33368 13.6916 4.33368 14.005 4.33368C14.005 4.80949 14.005 5.27087 14.005 5.76248Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.0078 5.76249C15.0078 5.26812 15.0078 4.80674 15.0078 4.33128C15.3202 4.33128 15.618 4.33128 15.9569 4.33128C15.9569 4.76689 15.9611 5.20216 15.9504 5.63709C15.9493 5.68003 15.8588 5.75424 15.8073 5.75699C15.5468 5.76936 15.2856 5.76249 15.0078 5.76249Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.8765 5.74668C17.5541 5.74668 17.2573 5.74668 16.9453 5.74668C16.9453 5.27431 16.9453 4.81843 16.9453 4.33987C17.2463 4.33987 17.5507 4.33987 17.8765 4.33987C17.8765 4.79609 17.8765 5.25816 17.8765 5.74668Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.8788 10.5536C17.5706 10.5536 17.2738 10.5536 16.9531 10.5536C16.9531 10.0912 16.9531 9.62943 16.9531 9.14366C17.2537 9.14366 17.5567 9.14366 17.8788 9.14366C17.8788 9.61363 17.8788 10.0754 17.8788 10.5536Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.9373 10.5549C15.6201 10.5549 15.3222 10.5549 15.0078 10.5549C15.0078 10.0784 15.0078 9.61672 15.0078 9.13782C15.3215 9.13782 15.618 9.13782 15.9373 9.13782C15.9373 9.60641 15.9373 10.0678 15.9373 10.5549Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0703 10.5529C13.0703 10.0812 13.0703 9.62668 13.0703 9.14606C13.3785 9.14606 13.6808 9.14606 14.0046 9.14606C14.0046 9.61225 14.0046 10.074 14.0046 10.5529C13.6998 10.5529 13.4024 10.5529 13.0703 10.5529Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.0641 12.9591C11.7472 12.9591 11.4508 12.9591 11.1367 12.9591C11.1367 12.4809 11.1367 12.0198 11.1367 11.5437C11.4473 11.5437 11.7445 11.5437 12.0641 11.5437C12.0641 12.0071 12.0641 12.4688 12.0641 12.9591Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.1406 16.3485C11.4575 16.3485 11.7539 16.3485 12.0683 16.3485C12.0683 16.8264 12.0683 17.2888 12.0683 17.7666C11.7588 17.7666 11.4609 17.7666 11.1406 17.7666C11.1406 17.3039 11.1406 16.8415 11.1406 16.3485Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0664 17.7581C13.0664 17.285 13.0664 16.8305 13.0664 16.3543C13.3832 16.3543 13.6863 16.3543 14.0055 16.3543C14.0055 16.8236 14.0055 17.2792 14.0055 17.7581C13.7008 17.7581 13.3971 17.7581 13.0664 17.7581Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.0156 17.7649C15.0156 17.2864 15.0156 16.8246 15.0156 16.3478C15.3321 16.3478 15.6282 16.3478 15.9444 16.3478C15.9444 16.8243 15.9444 17.286 15.9444 17.7649C15.6389 17.7649 15.3425 17.7649 15.0156 17.7649Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.876 17.7742C17.5585 17.7742 17.2682 17.7742 16.9531 17.7742C16.9531 17.306 16.9531 16.8446 16.9531 16.3574C17.2503 16.3574 17.5529 16.3574 17.876 16.3574C17.876 16.8233 17.876 17.285 17.876 17.7742Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0547 11.5426C13.3853 11.5426 13.6821 11.5426 14.0211 11.5426C14.0211 11.982 14.0246 12.4166 14.0159 12.8505C14.0152 12.8921 13.9447 12.9402 13.8971 12.9704C13.8701 12.9876 13.8238 12.9749 13.7861 12.9759C13.0547 12.9979 13.0547 12.9979 13.0547 12.2764C13.0547 12.036 13.0547 11.7955 13.0547 11.5426Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.9583 11.544C15.9583 11.9834 15.9635 12.4022 15.9518 12.8206C15.9504 12.8735 15.8609 12.9649 15.8077 12.968C15.5479 12.9835 15.2863 12.9749 15.0078 12.9749C15.0078 12.4812 15.0078 12.0198 15.0078 11.544C15.3184 11.544 15.6163 11.544 15.9583 11.544Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.882 11.544C17.882 12.0195 17.882 12.4743 17.882 12.9525C17.5714 12.9525 17.2673 12.9525 16.9453 12.9525C16.9453 12.4826 16.9453 12.0205 16.9453 11.544C17.2546 11.544 17.5524 11.544 17.882 11.544Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.1328 10.5488C11.1328 10.0692 11.1328 9.61398 11.1328 9.13988C11.4434 9.13988 11.7399 9.13988 12.0609 9.13988C12.0609 9.60333 12.0609 10.0654 12.0609 10.5488C11.7655 10.5488 11.4607 10.5488 11.1328 10.5488Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.1367 8.13398C11.1367 7.66367 11.1367 7.21019 11.1367 6.74125C11.4508 6.74125 11.7479 6.74125 12.0662 6.74125C12.0662 7.20091 12.0662 7.65473 12.0662 8.13398C11.7714 8.13398 11.467 8.13398 11.1367 8.13398Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0625 8.13707C13.0625 7.66538 13.0625 7.21946 13.0625 6.74983C13.3762 6.74983 13.6789 6.74983 14.0013 6.74983C14.0013 7.20743 14.0013 7.66126 14.0013 8.13707C13.6983 8.13707 13.3939 8.13707 13.0625 8.13707Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.9442 8.14291C15.6183 8.14291 15.3212 8.14291 15.0078 8.14291C15.0078 7.67363 15.0078 7.22015 15.0078 6.7464C15.3195 6.7464 15.6232 6.7464 15.9442 6.7464C15.9442 7.21122 15.9442 7.66504 15.9442 8.14291Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.9453 6.74022C17.2653 6.74022 17.5624 6.74022 17.8775 6.74022C17.8775 7.20778 17.8775 7.66126 17.8775 8.13707C17.5697 8.13707 17.2663 8.13707 16.9453 8.13707C16.9453 7.67707 16.9453 7.22359 16.9453 6.74022Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.0712 13.9571C12.0712 14.4274 12.0712 14.8812 12.0712 15.3532C11.7554 15.3532 11.4517 15.3532 11.1328 15.3532C11.1328 14.8829 11.1328 14.4294 11.1328 13.9571C11.4431 13.9571 11.7399 13.9571 12.0712 13.9571Z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.0703 15.3522C13.0703 14.8846 13.0703 14.4312 13.0703 13.9581C13.3861 13.9581 13.6891 13.9581 14.0084 13.9581C14.0084 14.4264 14.0084 14.8798 14.0084 15.3522C13.6943 15.3522 13.3903 15.3522 13.0703 15.3522Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15 15.3481C15 14.8778 15 14.4305 15 13.9605C15.3134 13.9605 15.6178 13.9605 15.9415 13.9605C15.9415 14.4174 15.9415 14.8712 15.9415 15.3481C15.6344 15.3481 15.3317 15.3481 15 15.3481Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.8822 13.956C17.8822 14.4294 17.8822 14.8829 17.8822 15.3536C17.5706 15.3536 17.2738 15.3536 16.9531 15.3536C16.9531 14.8946 16.9531 14.4343 16.9531 13.956C17.2544 13.956 17.5512 13.956 17.8822 13.956Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.20323 11.5526C8.20323 12.0329 8.20323 12.4894 8.20323 12.9608C7.8895 12.9608 7.59166 12.9608 7.27344 12.9608C7.27344 12.4898 7.27344 12.0267 7.27344 11.5526C7.58682 11.5526 7.89882 11.5526 8.20323 11.5526Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.2054 17.7763C7.88165 17.7763 7.59107 17.7763 7.27734 17.7763C7.27734 17.3039 7.27734 16.8353 7.27734 16.3495C7.58382 16.3495 7.88787 16.3495 8.2054 16.3495C8.2054 16.8281 8.2054 17.2898 8.2054 17.7763Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.26562 20.1639C7.26562 19.6877 7.26562 19.2308 7.26562 18.7578C7.57486 18.7578 7.87339 18.7578 8.19576 18.7578C8.19576 19.213 8.19576 19.6764 8.19576 20.1639C7.90069 20.1639 7.59663 20.1639 7.26562 20.1639Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.27344 4.32922C7.58855 4.32922 7.88673 4.32922 8.20115 4.32922C8.20115 4.80434 8.20115 5.26779 8.20115 5.74737C7.89088 5.74737 7.59304 5.74737 7.27344 5.74737C7.27344 5.28015 7.27344 4.8174 7.27344 4.32922Z"
                      fill="white"
                    />
                    <path
                      d="M7.27344 9.13301C7.58855 9.13301 7.88535 9.13301 8.20115 9.13301C8.20115 9.60642 8.20115 10.0681 8.20115 10.5498C7.90021 10.5498 7.5965 10.5498 7.27344 10.5498C7.27344 10.0881 7.27344 9.62565 7.27344 9.13301Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.27734 6.73266C7.59038 6.73266 7.88235 6.73266 8.19746 6.73266C8.19746 7.20057 8.19746 7.66264 8.19746 8.14188C7.8972 8.14188 7.59868 8.14188 7.27734 8.14188C7.27734 7.68531 7.27734 7.2229 7.27734 6.73266Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.21083 13.9619C8.21083 14.4288 8.21083 14.8767 8.21083 15.3481C7.90228 15.3481 7.59753 15.3481 7.27344 15.3481C7.27344 14.8967 7.27344 14.4411 7.27344 13.9619C7.573 13.9619 7.87775 13.9619 8.21083 13.9619Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.8125 16.3454C21.1297 16.3454 21.4261 16.3454 21.7409 16.3454C21.7409 16.8195 21.7409 17.2809 21.7409 17.7625C21.4386 17.7625 21.1349 17.7625 20.8125 17.7625C20.8125 17.2991 20.8125 16.837 20.8125 16.3454Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.8203 18.7523C21.1323 18.7523 21.4308 18.7523 21.746 18.7523C21.746 19.2264 21.746 19.6902 21.746 20.1708C21.4395 20.1708 21.1416 20.1708 20.8203 20.1708C20.8203 19.7063 20.8203 19.2435 20.8203 18.7523Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.8125 9.13301C21.128 9.13301 21.4244 9.13301 21.7399 9.13301C21.7399 9.60607 21.7399 10.0675 21.7399 10.5494C21.4396 10.5494 21.1356 10.5494 20.8125 10.5494C20.8125 10.0881 20.8125 9.626 20.8125 9.13301Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.7447 12.9594C21.4223 12.9594 21.1245 12.9594 20.8125 12.9594C20.8125 12.4867 20.8125 12.0298 20.8125 11.5509C21.1145 11.5509 21.4199 11.5509 21.7447 11.5509C21.7447 12.0099 21.7447 12.474 21.7447 12.9594Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.7458 5.7484C21.4328 5.7484 21.1346 5.7484 20.8164 5.7484C20.8164 5.27774 20.8164 4.81499 20.8164 4.33437C21.1218 4.33437 21.4269 4.33437 21.7458 4.33437C21.7458 4.80674 21.7458 5.26984 21.7458 5.7484Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.7444 8.1467C21.4261 8.1467 21.1276 8.1467 20.8125 8.1467C20.8125 7.67948 20.8125 7.22428 20.8125 6.74744C21.1183 6.74744 21.423 6.74744 21.7444 6.74744C21.7444 7.20573 21.7444 7.66127 21.7444 8.1467Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.8125 13.9509C21.1255 13.9509 21.4241 13.9509 21.7409 13.9509C21.7409 14.4136 21.7409 14.8695 21.7409 15.3481C21.441 15.3481 21.1363 15.3481 20.8125 15.3481C20.8125 14.896 20.8125 14.4408 20.8125 13.9509Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Tours Management
              </div>
            </SidebarItem>
          </Link>

          <Link
            className="none-list"
            to="AdminManageList1"
            onClick={() => handleChangeIndex(4)}
          >
            <SidebarItem active={index === 4}>
              <div className="side-bar-item-child">
                <div className="side-nav-pic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M23.2125 15.2951V14.6566H23.591C24.057 14.6566 24.4361 14.2768 24.4361 13.81V12.9879C24.4361 12.5211 24.057 12.1413 23.591 12.1413H23.5891V4.29836C23.5891 3.36581 22.8317 2.6071 21.9008 2.6071H13.8799L14.5382 1.67473C14.7682 1.34905 14.7975 0.926961 14.6148 0.573318C14.4321 0.219735 14.0712 0 13.673 0H9.91613C9.51791 0 9.15701 0.219674 8.97431 0.573378C8.79161 0.927022 8.82098 1.34905 9.05094 1.67473L9.70922 2.6071H1.68831C0.75736 2.6071 0 3.36581 0 4.29836V28.4918C0 29.4243 0.75736 30.1831 1.68831 30.1831H18.6365C19.6883 30.7056 20.8722 31 22.1237 31C26.4667 31 30 27.4605 30 23.1096C30 19.129 27.042 15.828 23.2125 15.2951ZM22.2417 15.2208C22.2024 15.2202 22.1631 15.2193 22.1237 15.2193C22.0689 15.2193 22.0143 15.2203 21.9597 15.2214V14.6566H22.2417V15.2208ZM23.4653 13.6841H20.7362V13.1139H23.4653V13.6841ZM22.6183 4.29836V12.1413H21.629V5.05695C21.629 4.78841 21.4117 4.57068 21.1436 4.57068H16.7356V3.57965H21.9008C22.2964 3.57965 22.6183 3.90205 22.6183 4.29836ZM7.82425 3.57965H10.647C10.8285 3.57965 10.9947 3.47832 11.0781 3.31688C11.1615 3.1555 11.148 2.96099 11.0433 2.81255L9.8435 1.11314C9.82244 1.0833 9.82008 1.05212 9.83646 1.02039C9.85284 0.988657 9.8796 0.972549 9.91607 0.972549H13.673C13.7094 0.972549 13.7362 0.988657 13.7526 1.02033C13.769 1.05205 13.7666 1.0833 13.7455 1.11308L12.5457 2.81249C12.4409 2.96086 12.4275 3.15544 12.5109 3.31682C12.5943 3.4782 12.7606 3.57959 12.942 3.57959H15.7647V5.34355H7.82425V3.57965ZM16.2502 6.31616C16.5183 6.31616 16.7356 6.09843 16.7356 5.82988V5.54323H20.6582V12.1414H20.6104C20.1444 12.1414 19.7653 12.5211 19.7653 12.988V13.8101C19.7653 14.2769 20.1444 14.6567 20.6104 14.6567H20.9889V15.3016C19.1514 15.5684 17.5173 16.4727 16.3183 17.7832H10.8672C10.5992 17.7832 10.3818 18.0009 10.3818 18.2695C10.3818 18.538 10.5992 18.7557 10.8672 18.7557H15.5585C15.329 19.1019 15.1258 19.467 14.9522 19.8484H10.8673C10.5992 19.8484 10.3819 20.0661 10.3819 20.3347C10.3819 20.6032 10.5992 20.8209 10.8673 20.8209H14.5858C14.4234 21.3566 14.3161 21.916 14.2714 22.4929H10.8673C10.5993 22.4929 10.3819 22.7106 10.3819 22.9791C10.3819 23.2477 10.5993 23.4654 10.8673 23.4654H14.2558C14.2723 23.8368 14.3146 24.2016 14.3809 24.5581H10.8673C10.5993 24.5581 10.3819 24.7758 10.3819 25.0444C10.3819 25.3129 10.5993 25.5306 10.8673 25.5306H14.5332C14.5644 25.5306 14.5948 25.5274 14.6243 25.5218C14.8205 26.1325 15.089 26.7109 15.4199 27.247H2.93084V5.54323H6.85337V5.82988C6.85337 6.09843 7.07072 6.31616 7.33878 6.31616H16.2502ZM1.68831 29.2105C1.29271 29.2105 0.970819 28.888 0.970819 28.4918V4.29836C0.970819 3.90205 1.29271 3.57965 1.68831 3.57965H6.85343V4.57068H2.44543C2.17736 4.57068 1.96002 4.78841 1.96002 5.05695V27.7333C1.96002 28.0018 2.17736 28.2195 2.44543 28.2195H16.1273C16.433 28.579 16.77 28.9109 17.1345 29.2106H1.68831V29.2105ZM22.1237 30.0275C18.316 30.0275 15.2181 26.9241 15.2181 23.1096C15.2181 19.2952 18.316 16.1918 22.1237 16.1918C25.9314 16.1918 29.0292 19.2951 29.0292 23.1096C29.0292 26.9241 25.9314 30.0275 22.1237 30.0275ZM22.1237 16.9435C18.7297 16.9435 15.9685 19.7096 15.9685 23.1096C15.9685 26.5097 18.7297 29.2758 22.1237 29.2758C25.5177 29.2758 28.2789 26.5097 28.2789 23.1096C28.2788 19.7096 25.5176 16.9435 22.1237 16.9435ZM22.1237 28.3032C19.265 28.3032 16.9393 25.9734 16.9393 23.1096C16.9393 20.2459 19.265 17.9161 22.1237 17.9161C24.9823 17.9161 27.308 20.2459 27.308 23.1096C27.308 25.9734 24.9823 28.3032 22.1237 28.3032ZM23.0591 22.6792C23.1932 22.9118 23.1136 23.2092 22.8814 23.3435L22.609 23.501V23.8161C22.609 24.0847 22.3917 24.3024 22.1236 24.3024C21.9334 24.3024 21.7692 24.1925 21.6895 24.0328L19.8202 25.114C19.7438 25.1582 19.6604 25.1792 19.578 25.1792C19.4102 25.1792 19.247 25.092 19.1571 24.936C19.0231 24.7035 19.1026 24.4061 19.3348 24.2718L21.6381 22.9396V19.0406C21.6381 18.772 21.8554 18.5543 22.1235 18.5543C22.3916 18.5543 22.6089 18.772 22.6089 19.0406V22.4374C22.7869 22.4267 22.9641 22.5142 23.0591 22.6792ZM10.3818 13.5596C10.3818 13.2911 10.5992 13.0734 10.8672 13.0734H18.199C18.4671 13.0734 18.6844 13.2911 18.6844 13.5596C18.6844 13.8282 18.4671 14.0459 18.199 14.0459H10.8672C10.5991 14.0459 10.3818 13.8282 10.3818 13.5596ZM10.3818 15.6249C10.3818 15.3563 10.5992 15.1386 10.8672 15.1386H15.7466C16.0147 15.1386 16.232 15.3563 16.232 15.6249C16.232 15.8934 16.0147 16.1111 15.7466 16.1111H10.8672C10.5991 16.1111 10.3818 15.8935 10.3818 15.6249ZM10.3818 8.84995C10.3818 8.58141 10.5992 8.36368 10.8672 8.36368H18.199C18.4671 8.36368 18.6844 8.58141 18.6844 8.84995C18.6844 9.1185 18.4671 9.33623 18.199 9.33623H10.8672C10.5991 9.33623 10.3818 9.11856 10.3818 8.84995ZM10.3818 10.9152C10.3818 10.6467 10.5992 10.4289 10.8672 10.4289H15.7466C16.0147 10.4289 16.232 10.6467 16.232 10.9152C16.232 11.1838 16.0147 11.4015 15.7466 11.4015H10.8672C10.5991 11.4015 10.3818 11.1838 10.3818 10.9152ZM8.7685 17.9709C8.95896 18.1599 8.96042 18.4679 8.77171 18.6586L6.82237 20.6298C6.72753 20.7257 6.60254 20.7738 6.47749 20.7738C6.35528 20.7738 6.23302 20.7279 6.13873 20.6358L5.05129 19.5739C4.85931 19.3865 4.85537 19.0787 5.04249 18.8864C5.22956 18.694 5.53682 18.69 5.72886 18.8775L6.47154 19.6027L8.08201 17.9742C8.27065 17.7834 8.57797 17.7818 8.7685 17.9709ZM8.7685 13.2613C8.95896 13.4502 8.96042 13.7582 8.77171 13.9489L6.82237 15.9201C6.72753 16.016 6.60254 16.0641 6.47749 16.0641C6.35528 16.0641 6.23302 16.0182 6.13873 15.9261L5.05129 14.8642C4.85931 14.6767 4.85537 14.3689 5.04249 14.1766C5.22962 13.9843 5.53694 13.9803 5.72886 14.1678L6.47154 14.893L8.08201 13.2645C8.27065 13.0737 8.57797 13.0722 8.7685 13.2613ZM6.47154 10.1833L8.08201 8.55472C8.27065 8.36392 8.57797 8.36246 8.76844 8.5515C8.9589 8.74048 8.96035 9.04841 8.77165 9.23915L6.82231 11.2103C6.72747 11.3062 6.60248 11.3544 6.47742 11.3544C6.35522 11.3544 6.23296 11.3084 6.13867 11.2163L5.05123 10.1545C4.85925 9.96705 4.85531 9.65924 5.04243 9.46691C5.2295 9.27459 5.53676 9.27058 5.7288 9.4581L6.47154 10.1833ZM8.7685 22.6806C8.95896 22.8696 8.96042 23.1775 8.77171 23.3683L6.82237 25.3395C6.72753 25.4354 6.60254 25.4835 6.47749 25.4835C6.35528 25.4835 6.23302 25.4376 6.13873 25.3455L5.05129 24.2836C4.85931 24.0962 4.85537 23.7884 5.04249 23.596C5.22956 23.4037 5.53682 23.3998 5.72886 23.5872L6.47154 24.3124L8.08201 22.6839C8.27065 22.4931 8.57797 22.4916 8.7685 22.6806Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                Manage List
              </div>
            </SidebarItem>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Admin_Sidebar;