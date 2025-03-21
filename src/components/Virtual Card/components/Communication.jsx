import React from "react";
import CallIcon from "../assets/Call Icon.png";
import EmailIcon from "../assets/Email Icon.png";
import LocationIcon from "../assets/Location Icon.png";
import DesktopBackground from "../assets/TKS Desktop Communication.png";

function Communication() {
  return (
    <div className="virtual-card-communication">
      <img
        src={DesktopBackground}
        className="virtual-card-communication-background"
      />
      <h2>Socials & Connections</h2>
      <div className="virtual-card-communication-container">
        <div className="virtual-card-communication-set">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M29.3327 16C29.3327 8.63996 23.3594 2.66663 15.9993 2.66663C8.63935 2.66663 2.66602 8.63996 2.66602 16C2.66602 22.4533 7.25268 27.8266 13.3327 29.0666V20H10.666V16H13.3327V12.6666C13.3327 10.0933 15.426 7.99996 17.9993 7.99996H21.3327V12H18.666C17.9327 12 17.3327 12.6 17.3327 13.3333V16H21.3327V20H17.3327V29.2666C24.066 28.6 29.3327 22.92 29.3327 16Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M17.3708 2.66663C18.8708 2.67063 19.6321 2.67863 20.2894 2.69729L20.5481 2.70663C20.8468 2.71729 21.1414 2.73063 21.4974 2.74663C22.9161 2.81329 23.8841 3.03729 24.7334 3.36663C25.6134 3.70529 26.3548 4.16396 27.0961 4.90396C27.7744 5.57027 28.299 6.37659 28.6334 7.26663C28.9628 8.11596 29.1868 9.08396 29.2534 10.504C29.2694 10.8586 29.2828 11.1533 29.2934 11.4533L29.3014 11.712C29.3214 12.368 29.3294 13.1293 29.3321 14.6293L29.3334 15.624V17.3706C29.3367 18.3432 29.3265 19.3157 29.3028 20.288L29.2948 20.5466C29.2841 20.8466 29.2708 21.1413 29.2548 21.496C29.1881 22.916 28.9614 23.8826 28.6334 24.7333C28.299 25.6233 27.7744 26.4297 27.0961 27.096C26.4298 27.7742 25.6235 28.2989 24.7334 28.6333C23.8841 28.9626 22.9161 29.1866 21.4974 29.2533L20.5481 29.2933L20.2894 29.3013C19.6321 29.32 18.8708 29.3293 17.3708 29.332L16.3761 29.3333H14.6308C13.6578 29.3367 12.6848 29.3265 11.7121 29.3026L11.4534 29.2946C11.1369 29.2826 10.8205 29.2689 10.5041 29.2533C9.08544 29.1866 8.11744 28.9626 7.26677 28.6333C6.37721 28.2987 5.57136 27.7741 4.90544 27.096C4.2267 26.4298 3.70159 25.6235 3.36677 24.7333C3.03744 23.884 2.81344 22.916 2.74677 21.496L2.70677 20.5466L2.70011 20.288C2.67553 19.3157 2.66442 18.3432 2.66677 17.3706V14.6293C2.66308 13.6568 2.67286 12.6842 2.69611 11.712L2.70544 11.4533C2.71611 11.1533 2.72944 10.8586 2.74544 10.504C2.81211 9.08396 3.03611 8.11729 3.36544 7.26663C3.70103 6.37622 4.22707 5.56987 4.90677 4.90396C5.57231 4.22602 6.37769 3.70139 7.26677 3.36663C8.11744 3.03729 9.08411 2.81329 10.5041 2.74663C10.8588 2.73063 11.1548 2.71729 11.4534 2.70663L11.7121 2.69863C12.6844 2.67494 13.6569 2.66471 14.6294 2.66796L17.3708 2.66663ZM16.0001 9.33329C14.232 9.33329 12.5363 10.0357 11.2861 11.2859C10.0358 12.5362 9.33344 14.2318 9.33344 16C9.33344 17.7681 10.0358 19.4638 11.2861 20.714C12.5363 21.9642 14.232 22.6666 16.0001 22.6666C17.7682 22.6666 19.4639 21.9642 20.7142 20.714C21.9644 19.4638 22.6668 17.7681 22.6668 16C22.6668 14.2318 21.9644 12.5362 20.7142 11.2859C19.4639 10.0357 17.7682 9.33329 16.0001 9.33329ZM16.0001 12C16.5254 11.9999 17.0456 12.1032 17.5309 12.3042C18.0162 12.5051 18.4572 12.7997 18.8287 13.1711C19.2002 13.5424 19.4949 13.9833 19.696 14.4686C19.8971 14.9539 20.0007 15.474 20.0008 15.9993C20.0009 16.5246 19.8975 17.0447 19.6965 17.5301C19.4956 18.0154 19.201 18.4564 18.8297 18.8279C18.4583 19.1994 18.0174 19.4941 17.5321 19.6952C17.0469 19.8963 16.5267 19.9999 16.0014 20C14.9406 20 13.9232 19.5785 13.173 18.8284C12.4229 18.0782 12.0014 17.0608 12.0014 16C12.0014 14.9391 12.4229 13.9217 13.173 13.1715C13.9232 12.4214 14.9406 12 16.0014 12M23.0014 7.33329C22.5594 7.33329 22.1355 7.50889 21.8229 7.82145C21.5104 8.13401 21.3348 8.55793 21.3348 8.99996C21.3348 9.44199 21.5104 9.86591 21.8229 10.1785C22.1355 10.491 22.5594 10.6666 23.0014 10.6666C23.4435 10.6666 23.8674 10.491 24.18 10.1785C24.4925 9.86591 24.6681 9.44199 24.6681 8.99996C24.6681 8.55793 24.4925 8.13401 24.18 7.82145C23.8674 7.50889 23.4435 7.33329 23.0014 7.33329Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 4C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H24ZM10.6667 13.3333C10.313 13.3333 9.97391 13.4738 9.72386 13.7239C9.47381 13.9739 9.33333 14.313 9.33333 14.6667V21.3333C9.33333 21.687 9.47381 22.0261 9.72386 22.2761C9.97391 22.5262 10.313 22.6667 10.6667 22.6667C11.0203 22.6667 11.3594 22.5262 11.6095 22.2761C11.8595 22.0261 12 21.687 12 21.3333V14.6667C12 14.313 11.8595 13.9739 11.6095 13.7239C11.3594 13.4738 11.0203 13.3333 10.6667 13.3333ZM14.6667 12C14.313 12 13.9739 12.1405 13.7239 12.3905C13.4738 12.6406 13.3333 12.9797 13.3333 13.3333V21.3333C13.3333 21.687 13.4738 22.0261 13.7239 22.2761C13.9739 22.5262 14.313 22.6667 14.6667 22.6667C15.0203 22.6667 15.3594 22.5262 15.6095 22.2761C15.8595 22.0261 16 21.687 16 21.3333V16.4533C16.4067 15.9947 17.0933 15.456 17.8573 15.1293C18.3013 14.94 18.9693 14.8627 19.4333 15.0093C19.5873 15.0484 19.7244 15.1363 19.824 15.26C19.8933 15.3533 20 15.5613 20 16V21.3333C20 21.687 20.1405 22.0261 20.3905 22.2761C20.6406 22.5262 20.9797 22.6667 21.3333 22.6667C21.687 22.6667 22.0261 22.5262 22.2761 22.2761C22.5262 22.0261 22.6667 21.687 22.6667 21.3333V16C22.6667 15.1067 22.44 14.312 21.968 13.6747C21.5337 13.0967 20.9258 12.673 20.2333 12.4653C19.0307 12.088 17.6987 12.2973 16.8093 12.6787C16.5246 12.8011 16.2473 12.94 15.9787 13.0947C15.9228 12.7875 15.7608 12.5096 15.5211 12.3096C15.2813 12.1095 14.9789 12 14.6667 12ZM10.6667 9.33333C10.313 9.33333 9.97391 9.47381 9.72386 9.72386C9.47381 9.97391 9.33333 10.313 9.33333 10.6667C9.33333 11.0203 9.47381 11.3594 9.72386 11.6095C9.97391 11.8595 10.313 12 10.6667 12C11.0203 12 11.3594 11.8595 11.6095 11.6095C11.8595 11.3594 12 11.0203 12 10.6667C12 10.313 11.8595 9.97391 11.6095 9.72386C11.3594 9.47381 11.0203 9.33333 10.6667 9.33333Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
            >
              <path
                d="M4 2C1.79375 2 0 3.79375 0 6V26C0 28.2062 1.79375 30 4 30H24C26.2062 30 28 28.2062 28 26V6C28 3.79375 26.2062 2 24 2H4ZM22.5688 7.25L16.0812 14.6625L23.7125 24.75H17.7375L13.0625 18.6313L7.70625 24.75H4.7375L11.675 16.8188L4.35625 7.25H10.4812L14.7125 12.8438L19.6 7.25H22.5688ZM20.2062 22.975L9.5875 8.93125H7.81875L18.5562 22.975H20.2H20.2062Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="virtual-card-communication-set">
          <section>
            <img src={CallIcon} />
            <p>+91819101910</p>
          </section>
          <section>
            <img src={EmailIcon} />
            <p>you@company.com</p>
          </section>
          <section>
            <img src={LocationIcon} />
            <p>Bangalore</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Communication;
