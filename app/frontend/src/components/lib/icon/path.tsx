import React from "react";

type IconSpec = {
  path: React.JSX.Element;
  scale?: number;
  stroke?: boolean | number;
  fill?: boolean;
  viewBox?: string;
};

const arrowRight = <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />;

const up = <polyline points="18 15 12 9 6 15"></polyline>;

const down = <polyline points="6 9 12 15 18 9"></polyline>;

const chatgpt = (
  <>
    <title>ChatGPT</title>
    <text x="-9999" y="-9999">
      ChatGPT
    </text>
    <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path>
  </>
);

const check = (
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </>
);

const copy = (
  <>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </>
);

const close = (
  <>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </>
);

const del = (
  <>
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </>
);
const dots = (
  <>
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="5" cy="12" r="2" />
  </>
);

const edit = (
  <>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </>
);

const edito = (
  <>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </>
);

const file = (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 5.34368C12.6667 5.32614 12.6667 5.31738 12.6659 5.30147C12.6502 4.97229 12.3607 4.68295 12.0315 4.66737C12.0156 4.66662 12.0104 4.66662 12 4.66663H9.8391C9.30248 4.66662 8.85957 4.66661 8.49878 4.69609C8.12405 4.72671 7.77958 4.79242 7.45603 4.95728C6.95426 5.21294 6.54631 5.62089 6.29065 6.12265C6.12579 6.44621 6.06008 6.79068 6.02946 7.16541C5.99999 7.5262 5.99999 7.96911 6 8.50574V15.4942C5.99999 16.0308 5.99999 16.4737 6.02946 16.8345C6.06008 17.2092 6.12579 17.5537 6.29065 17.8773C6.54631 18.379 6.95426 18.787 7.45603 19.0426C7.77958 19.2075 8.12405 19.2732 8.49878 19.3038C8.85958 19.3333 9.30248 19.3333 9.83912 19.3333H14.1609C14.6975 19.3333 15.1404 19.3333 15.5012 19.3038C15.8759 19.2732 16.2204 19.2075 16.544 19.0426C17.0457 18.787 17.4537 18.379 17.7093 17.8773C17.8742 17.5537 17.9399 17.2092 17.9705 16.8345C18 16.4737 18 16.0308 18 15.4942V10.6666C18 10.6562 18 10.6511 17.9993 10.6352C17.9837 10.306 17.6943 10.0164 17.3651 10.0007C17.3492 9.99997 17.3405 9.99997 17.323 9.99997L14.3787 9.99997C14.2105 9.99999 14.0466 10 13.9078 9.98867C13.7555 9.97622 13.5756 9.94684 13.3947 9.85464C13.1438 9.72681 12.9398 9.52284 12.812 9.27195C12.7198 9.09101 12.6904 8.91118 12.678 8.75879C12.6666 8.62001 12.6666 8.45615 12.6667 8.2879L12.6667 5.34368ZM9.33333 12.6666C8.96514 12.6666 8.66667 12.9651 8.66667 13.3333C8.66667 13.7015 8.96514 14 9.33333 14H14.6667C15.0349 14 15.3333 13.7015 15.3333 13.3333C15.3333 12.9651 15.0349 12.6666 14.6667 12.6666H9.33333ZM9.33333 15.3333C8.96514 15.3333 8.66667 15.6318 8.66667 16C8.66667 16.3681 8.96514 16.6666 9.33333 16.6666H13.3333C13.7015 16.6666 14 16.3681 14 16C14 15.6318 13.7015 15.3333 13.3333 15.3333H9.33333Z"></path>
    <path d="M16.6053 8.66662C16.8011 8.66662 16.8989 8.66663 16.9791 8.61747C17.0923 8.54806 17.16 8.38452 17.129 8.25538C17.107 8.16394 17.0432 8.10018 16.9155 7.97265L14.694 5.75111C14.5664 5.62345 14.5027 5.55962 14.4112 5.53764C14.2821 5.5066 14.1186 5.57429 14.0492 5.68752C14 5.7677 14 5.86557 14 6.06132L14 8.13327C14 8.31994 14 8.41328 14.0363 8.48459C14.0683 8.54731 14.1193 8.5983 14.182 8.63026C14.2533 8.66659 14.3466 8.66659 14.5333 8.66659L16.6053 8.66662Z"></path>
  </>
);

const help = (
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </>
);

const info = (
  <>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </>
);

const lock = <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"></path>;

const logout = (
  <>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </>
);

const menu = (
  <>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </>
);

const plus = <path d="m12 4v8m0 0v8m0-8h8m-8 0H4" />;

const prompt = (
  <>
    <path d="M2.75 1C2.75 0.723858 2.52614 0.5 2.25 0.5C1.97386 0.5 1.75 0.723858 1.75 1V1.75H1C0.723858 1.75 0.5 1.97386 0.5 2.25C0.5 2.52614 0.723858 2.75 1 2.75H1.75V3.5C1.75 3.77614 1.97386 4 2.25 4C2.52614 4 2.75 3.77614 2.75 3.5V2.75H3.5C3.77614 2.75 4 2.52614 4 2.25C4 1.97386 3.77614 1.75 3.5 1.75H2.75V1Z"></path>
    <path d="M2.75 8.5C2.75 8.22386 2.52614 8 2.25 8C1.97386 8 1.75 8.22386 1.75 8.5V9.25H1C0.723858 9.25 0.5 9.47386 0.5 9.75C0.5 10.0261 0.723858 10.25 1 10.25H1.75V11C1.75 11.2761 1.97386 11.5 2.25 11.5C2.52614 11.5 2.75 11.2761 2.75 11V10.25H3.5C3.77614 10.25 4 10.0261 4 9.75C4 9.47386 3.77614 9.25 3.5 9.25H2.75V8.5Z"></path>
    <path d="M6.96667 1.32051C6.8924 1.12741 6.70689 1 6.5 1C6.29311 1 6.10759 1.12741 6.03333 1.32051L5.16624 3.57494C5.01604 3.96546 4.96884 4.078 4.90428 4.1688C4.8395 4.2599 4.7599 4.3395 4.6688 4.40428C4.578 4.46884 4.46546 4.51604 4.07494 4.66624L1.82051 5.53333C1.62741 5.60759 1.5 5.79311 1.5 6C1.5 6.20689 1.62741 6.39241 1.82051 6.46667L4.07494 7.33376C4.46546 7.48396 4.578 7.53116 4.6688 7.59572C4.7599 7.6605 4.8395 7.7401 4.90428 7.8312C4.96884 7.922 5.01604 8.03454 5.16624 8.42506L6.03333 10.6795C6.1076 10.8726 6.29311 11 6.5 11C6.70689 11 6.89241 10.8726 6.96667 10.6795L7.83376 8.42506C7.98396 8.03454 8.03116 7.922 8.09572 7.8312C8.1605 7.7401 8.2401 7.6605 8.3312 7.59572C8.422 7.53116 8.53454 7.48396 8.92506 7.33376L11.1795 6.46667C11.3726 6.39241 11.5 6.20689 11.5 6C11.5 5.79311 11.3726 5.60759 11.1795 5.53333L8.92506 4.66624C8.53454 4.51604 8.422 4.46884 8.3312 4.40428C8.2401 4.3395 8.1605 4.2599 8.09572 4.1688C8.03116 4.078 7.98396 3.96546 7.83376 3.57494L6.96667 1.32051Z"></path>
  </>
);

const message = <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />;

const robot = (
  <>
    <circle cx="12" cy="6" r="2" />
    <path d="M7 9h10v2H7zm-3 4h16v2H4zm3 4h10v2H7z" />
  </>
);
const search = <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />;

const send = (
  <>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </>
);

const settings = (
  <>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </>
);

const sidebar = (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
  </>
);
const share = (
  <>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" y1="2" x2="12" y2="15"></line>
  </>
);
const spin = (
  <>
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </>
);

const star = <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />;

const stars = <path d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z" fill="currentColor"></path>;

const sun = (
  <>
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </>
);

const sync = (
  <>
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </>
);

const thumbDown = <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>;

const thumbUp = <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>;

const thunder = <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>;

const user = (
  <>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

const warn = (
  <>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </>
);

const icons: { [key: string]: IconSpec } = {
  up: { viewBox: "0 0 24 24", path: up, fill: false, stroke: 2 },
  down: { viewBox: "0 0 24 24", path: down, fill: false, stroke: 2 },
  "arrow-right": { viewBox: "0 0 20 20", path: arrowRight, fill: true, stroke: false },
  chatgpt: { viewBox: "0 0 41 41", path: chatgpt, scale: 1.1, fill: false, stroke: 0.1 },
  check: { viewBox: "0 0 24 24", scale: 0.8, path: check, fill: false, stroke: 2 },
  close: { viewBox: "0 0 24 24", path: close, stroke: 1.5 },
  copy: { viewBox: "0 0 24 24", scale: 0.8, path: copy, fill: false, stroke: 2 },
  delete: { viewBox: "0 0 24 24", scale: 0.8, path: del, fill: false, stroke: 2 },
  dots: { viewBox: "0 0 24 24", scale: 0.8, path: dots, fill: true, stroke: false },
  edit: { viewBox: "0 0 24 24", scale: 0.8, path: edit, fill: false, stroke: 2 },
  "edit-o": { viewBox: "0 0 24 24", scale: 0.8, path: edito, fill: false, stroke: 2 },
  file: { viewBox: "0 0 24 24", scale: 0.8, path: file, fill: true, stroke: false },
  help: { viewBox: "0 0 24 24", scale: 0.8, path: help, fill: false, stroke: 2 },
  info: { viewBox: "0 0 24 24", scale: 0.8, path: info, fill: false, stroke: 2 },
  lock: { viewBox: "0 0 24 24", scale: 0.8, path: lock, fill: true, stroke: false },
  logout: { viewBox: "0 0 24 24", scale: 0.8, path: logout, fill: false, stroke: 2 },
  menu: { viewBox: "0 0 24 24", scale: 1.2, path: menu, fill: false, stroke: 1.5 },
  robot: { viewBox: "0 0 24 24", scale: 0.7, path: robot, fill: true, stroke: false },
  search: { viewBox: "0 0 20 20", fill: true, stroke: false, path: search },
  send: { viewBox: "0 0 24 24", scale: 0.8, path: send, fill: false, stroke: 2 },
  settings: { viewBox: "0 0 24 24", scale: 0.8, path: settings, fill: false, stroke: 2 },
  sidebar: { viewBox: "0 0 24 24", stroke: 2, path: sidebar },
  share: { viewBox: "0 0 24 24", scale: 0.8, stroke: 2, path: share },
  spin: { viewBox: "0 0 24 24", scale: 0.8, path: spin, fill: false, stroke: 2 },
  star: { viewBox: "0 0 20 20", fill: true, path: star, stroke: false, scale: 0.8 },
  stars: { viewBox: "0 0 16 16", fill: true, path: stars, stroke: false, scale: 0.8 },
  sun: { viewBox: "0 0 24 24", scale: 1.2, path: sun, fill: false, stroke: 1.5 },
  sync: { viewBox: "0 0 24 24", scale: 0.8, path: sync, fill: false, stroke: 2 },
  "thumb-up": { viewBox: "0 0 24 24", scale: 0.8, path: thumbUp, fill: false, stroke: 2 },
  "thumb-down": { viewBox: "0 0 24 24", scale: 0.8, path: thumbDown, fill: false, stroke: 2 },
  thunder: { viewBox: "0 0 24 24", path: thunder, fill: true, stroke: false },
  "thunder-o": { viewBox: "0 0 24 24", scale: 1.2, path: thunder, fill: false, stroke: 1.5 },
  plus: { viewBox: "0 0 24 24", stroke: 2, path: plus },
  prompt: { viewBox: "0 0 12 12", path: prompt, scale: 0.6, fill: true, stroke: false },
  user: { viewBox: "0 0 24 24", scale: 0.8, path: user, fill: false, stroke: 2 },
  warn: { viewBox: "0 0 24 24", scale: 1.2, path: warn, fill: false, stroke: 1.5 },
  message: { viewBox: "0 0 24 24", scale: 0.8, path: message, fill: false, stroke: 2 },
};

export default icons;
