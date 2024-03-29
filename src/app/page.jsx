"use client";
import Image from "next/image";
import { number } from "prop-types";
import { useRef, useState } from "react";

export default function Home() {
  const cards = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.png",
    "/18.png",
    "/19.png",
    "/20.png",
    "/21.png",
    "/22.png",
    "/23.png",
    "/24.png",
    "/25.png",
    "/26.png",
    "/27.png",
    "/28.png",
    "/29.png",
    "/30.png",
    "/31.png",
    "/32.png",
    "/33.png",
    "/34.png",
    "/35.png",
    "/36.png",
    "/37.png",
    "/38.png",
    "/39.png",
    "/40.png",
    "/41.png",
    "/42.png",
    "/43.png",
    "/44.png",
    "/45.png",
    "/46.png",
    "/47.png",
    "/48.png",
    "/49.png",
    "/50.png",
    "/51.png",
    "/52.png",
  ];
  const data1 = [
    ["2px", "180px", "2", "-42deg"],
    ["-2px", "165px", "3", "-35deg"],
    ["-6px", "150px", "4", "-28deg"],
    ["-10px", "135px", "5", "-21deg"],
    ["-14px", "120px", "6", "-14deg"],
    ["-16px", "105px", "7", "-7deg"],
    ["-14px", "90px", "8", "0deg"],
    ["-10px", "75px", "9", "7deg"],
    ["-6px", "60px", "10", "14deg"],
    ["-2px", "45px", "11", "21deg"],
    ["2px", "30px", "12", "28deg"],
    ["6px", "15px", "13", "35deg"],
    ["10px", "0px", "14", "42deg"],
  ];
  const data2 = [
    ["2px", "120px", "2", "-42deg"],
    ["1.5px", "110px", "3", "-35deg"],
    ["1px", "100px", "4", "-28deg"],
    [".5px", "90px", "5", "-21deg"],
    ["0px", "80px", "6", "-14deg"],
    ["-.5px", "70px", "7", "-7deg"],
    ["-1px", "60px", "8", "0deg"],
    ["-.5px", "50px", "9", "7deg"],
    ["0px", "40px", "10", "14deg"],
    [".5px", "30px", "11", "21deg"],
    ["1px", "20px", "12", "28deg"],
    ["1.5px", "10px", "13", "35deg"],
    ["2px", "0px", "14", "42deg"],
  ];
  const data3 = [
    ["20px", "80px"],
    ["90px", "140px"],
    ["160px", "80px"],
    ["90px", "20px"],
  ];
  const data4 = [
    ["0px", "2"],
    ["8px", "3"],
    ["16px", "4"],
    ["24px", "5"],
    ["32px", "6"],
    ["40px", "7"],
    ["48px", "8"],
  ];
  const data5 = [
    ["0px", "2"],
    ["8px", "3"],
    ["16px", "4"],
    ["24px", "5"],
    ["32px", "6"],
    ["40px", "7"],
    ["48px", "8"],
  ];
  const [cardsRandom, setCardsRandom] = useState();
  const [cards1, setCards1] = useState();
  const [cardsH, setCardsH] = useState();
  const [player, setPlayer] = useState([]);
  const [player1, setPlayer1] = useState([]);
  const [npc1, setNpc1] = useState([]);
  const [npc11, setNpc11] = useState([]);

  const [npc2, setNpc2] = useState([]);
  const [npc21, setNpc21] = useState([]);
  const [npc3, setNpc3] = useState([]);
  const [npc31, setNpc31] = useState([]);
  const m = useRef();
  const m2 = useRef();
  const m3 = useRef();
  const m4 = useRef();

  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);

  const mdh1 = useRef();
  const mdh2 = useRef();
  const mdh3 = useRef();
  const mdh4 = useRef();
  const H = useRef();
  const i1 = useRef();
  const i2 = useRef();
  const i3 = useRef();
  const i4 = useRef();

  function mdh(x) {
    switch (true) {
      case x == 1:
        mdh1.current.style.scale = ".9";
        break;
      case x == 2:
        mdh2.current.style.scale = ".9";
        break;
      case x == 3:
        mdh3.current.style.scale = ".9";
        break;
      case x == 4:
        mdh4.current.style.scale = ".9";
        break;
    }
  }
  function muh(x) {
    switch (true) {
      case x == 1:
        mdh1.current.style.scale = "1";
        break;
      case x == 2:
        mdh2.current.style.scale = "1";
        break;
      case x == 3:
        mdh3.current.style.scale = "1";
        break;
      case x == 4:
        mdh4.current.style.scale = "1";
        break;
    }
  }
  function clickH(x) {
    switch (true) {
      case x == 1:
        setCardsH(1);
        i1.current.style.display = "flex";
        break;
      case x == 2:
        setCardsH(2);
        i2.current.style.display = "flex";
        break;
      case x == 3:
        setCardsH(3);
        i3.current.style.display = "flex";
        break;
      case x == 4:
        setCardsH(4);
        i4.current.style.display = "flex";
        break;
    }
    H.current.style.display = "none";
  }
  console.log(cardsH);
  function start() {
    const x = [];
    while (x.length < 52) {
      const x1 = Math.floor(Math.random() * 52);
      if (!x.includes(x1)) {
        x.push(x1);
        setCardsRandom(x);
        setPlayer(x.slice(0, 13));
        setNpc1(x.slice(13, 26));
        setNpc2(x.slice(26, 39));
        setNpc3(x.slice(39, 52));
      }
    }
    m.current.style.display = "flex";
    m2.current.style.display = "flex";
    m3.current.style.display = "flex";
    m4.current.style.display = "flex";
  }

  function reset() {
    window.location.reload();
  }

  function mEnter(x) {
    m.current.children[x].children[0].style.top = "-50px";
  }
  function mleave(x) {
    m.current.children[x].children[0].style.top = "0px";
  }

  const ep = useRef();

  function clickPlayer(x, e) {
    if (
      m.current.children[x].children[0].getAttribute("data-status") == "off"
    ) {
      setPlayer1(cards[player[x]]);
      // m.current.children[x].children[0].style.display = "none";
      // m2.current.children[x].children[0].style.display = "none";
      // m3.current.children[x].children[0].style.display = "none";
      // m4.current.children[x].children[0].style.display = "none";
      // // if (npc1.length < x) {
      // }
      // if (npc2.length < x) {
      // }
      // if (npc3.length < x) {
      // }
      m.current.children[x].style.zIndex = "1";

      m.current.children[x].children[0].setAttribute("data-status", "on");

      let flag3 = null;
      let flag4 = null;
      let flag5 = null;
      let flag6 = null;
      console.log(x);
      console.log(player);

      if (player[x] < 13) {
        const npc111 = npc1.filter((number) => number < 13);
        const npc222 = npc2.filter((number) => number < 13);
        const npc333 = npc3.filter((number) => number < 13);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);



        let flag = null;
        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (npc1111.length == 0) {
          const npc20 = npc1.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc1.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc1.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);

          if (cardsH == 1) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }

          if (cardsH == 2) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }

          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }

          if (cardsH == 4) {
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
        } else {
          if (x1) {
            flag = x1;
            const y = npc1.indexOf(x1);
            npc1.splice(y, 1);
          } else {
            const x2 = npc1111[0];
            flag = x2;
            const y = npc1.indexOf(x2);
            npc1.splice(y, 1);
          }
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc2222.length == 0) {
          const npc20 = npc2.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc2.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc2.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);

          if (cardsH == 1) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 2) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }

          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
        } else {
          if (npc211 > player[x]) {
            setNpc21(cards[npc211]);
            flag1 = npc211;
            const y = npc2.indexOf(npc211);
            npc2.splice(y, 1);
          } else if (npc213 > npc211) {
            setNpc21(cards[npc213]);
            flag1 = npc213;
            const y = npc2.indexOf(npc213);
            npc1.splice(y, 1);
          } else {
            const npc212 = npc2222[0];
            setNpc21(cards[npc212]);
            flag1 = npc212;
            const y = npc2.indexOf(npc212);
            npc2.splice(y, 1);
          }
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc3333.length == 0) {
          const npc20 = npc3.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc3.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc3.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);

          if (cardsH == 1) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }

          if (cardsH == 2) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }

          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
        } else {
          if (npc311 > player[x] && npc311 > flag) {
            flag2 = npc311;
            const y = npc3.indexOf(npc311);
            npc3.splice(y, 1);
          } else if (npc314 > player[x] && npc314 > npc311) {
            flag2 = npc314;
            const y = npc3.indexOf(npc314);
            npc3.splice(y, 1);
          } else if (npc313 > npc311) {
            flag2 = npc313;
            const y = npc3.indexOf(npc313);
            npc3.splice(y, 1);
          } else {
            const npc312 = npc3333[0];
            flag2 = npc312;
            const y = npc3.indexOf(npc312);
            npc3.splice(y, 1);
          }
        }

        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;

        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
      }

      if (13 <= player[x] < 26) {
        const npc111 = npc1.filter((number) => 13 <= number && number < 26);
        const npc222 = npc2.filter((number) => 13 <= number && number < 26);
        const npc333 = npc3.filter((number) => 13 <= number && number < 26);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;
        let flag1 = null;
        let flag2 = null;

        const x1 = npc1111.find((reza) => reza > player[x]);

        if (npc1111.length == 0) {
          const npc10 = npc1.filter((number) =>  number && number < 13);
          const npc110 = npc10.slice().sort((a, b) => a - b);
          const npc30 = npc1.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc1.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);
          if (cardsH == 2) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }

          if (cardsH == 1) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 4) {

            if (npc440.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              setNpc11(cards[x2]);
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
        } else {
          if (x1) {
            flag = x1;
            const y = npc1.indexOf(x1);
            npc1.splice(y, 1);
          } else {
            const x2 = npc1111[0];
            flag = x2;
            const y = npc1.indexOf(x2);
            npc1.splice(y, 1);
          }
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc2222.length == 0) {
          const npc10 = npc2.filter((number) =>  number && number < 13);
          const npc110 = npc10.slice().sort((a, b) => a - b);
          const npc30 = npc2.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc2.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);
          if (cardsH == 2) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }

          if (cardsH == 1) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 4) {

            if (npc440.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
        } else {
          if (npc211 > player[x]) {
            flag1 = npc211;
            const y = npc2.indexOf(npc211);
            npc2.splice(y, 1);
          } else if (npc213 > npc211) {
            flag1 = npc213;
            const y = npc2.indexOf(npc213);
            npc2.splice(y, 1);
          } else {
            const npc212 = npc2222[0];
            flag1 = npc212;
            const y = npc2.indexOf(npc212);
            npc2.splice(y, 1);
          }
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc3333.length == 0) {
          const npc10 = npc3.filter((number) =>  number && number < 13);
          const npc110 = npc10.slice().sort((a, b) => a - b);
          const npc30 = npc3.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc3.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);
          if (cardsH == 2) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }

          if (cardsH == 1) {
            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 4) {

            if (npc440.length == 0) {
              if (npc110.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc110[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
        } else {
          if (npc311 > player[x] && npc311 > flag) {
            flag2 = npc311;
            const y = npc3.indexOf(npc311);
            npc3.splice(y, 1);
          } else if (npc314 > player[x] && npc314 > npc311) {
            flag2 = npc314;
            const y = npc3.indexOf(npc314);
            npc3.splice(y, 1);
          } else if (npc313 > npc311) {
            flag2 = npc313;
            const y = npc3.indexOf(npc313);
            npc3.splice(y, 1);
          } else {
            const npc312 = npc3333[0];
            flag2 = npc312;
            const y = npc3.indexOf(npc312);
            npc3.splice(y, 1);
          }
        }

        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;

        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
      }

      if (26 <= player[x] < 39) {
        const npc111 = npc1.filter((number) => 26 <= number && number < 39);
        const npc222 = npc2.filter((number) => 26 <= number && number < 39);
        const npc333 = npc3.filter((number) => 26 <= number && number < 39);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;

        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (npc1111.length == 0) {
          const npc20 = npc1.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc1.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc1.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);

          if (cardsH == 1) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }

          if (cardsH == 2) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
        } else {
          if (x1) {
            flag = x1;
            const y = npc1.indexOf(x1);
            npc1.splice(y, 1);
          } else {
            const x2 = npc1111[0];
            flag = x2;
            const y = npc1.indexOf(x2);
            npc1.splice(y, 1);
          }
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc2222.length == 0) {
          const npc20 = npc2.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc2.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc2.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);

          if (cardsH == 1) {
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }

          if (cardsH == 2) {

            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }

          if (cardsH == 3) {
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }

          if (cardsH == 4) {
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
        } else {
          if (npc211 > player[x]) {
            flag1 = npc211;
            const y = npc2.indexOf(npc211);
            npc2.splice(y, 1);
          } else if (npc213 > npc211) {
            flag1 = npc213;
            const y = npc2.indexOf(npc213);
            npc1.splice(y, 1);
          } else {
            const npc212 = npc2222[0];
            flag1 = npc212;
            const y = npc2.indexOf(npc212);
            npc2.splice(y, 1);
          }
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc3333.length == 0) {
          const npc20 = npc3.filter((number) => 13 <= number && number < 26);
          const npc220 = npc20.slice().sort((a, b) => a - b);
          const npc30 = npc3.filter((number) => 26 <= number && number < 39);
          const npc330 = npc30.slice().sort((a, b) => a - b);
          const npc40 = npc3.filter((number) => 39 <= number && number < 52);
          const npc440 = npc40.slice().sort((a, b) => a - b);
          
          if (cardsH == 2) {

            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 3) {

            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 4) {

            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }

        } else {
          if (npc311 > player[x] && npc311 > flag) {
            setNpc31(cards[npc311]);
            flag2 = npc311;
            const y = npc3.indexOf(npc311);
            npc3.splice(y, 1);
          } else if (npc314 > player[x] && npc314 > npc311) {
            setNpc31(cards[npc314]);
            flag2 = npc314;
            const y = npc3.indexOf(npc314);
            npc3.splice(y, 1);
          } else if (npc313 > npc311) {
            setNpc31(cards[npc313]);
            flag2 = npc313;
            const y = npc3.indexOf(npc313);
            npc3.splice(y, 1);
          } else {
            const npc312 = npc3333[0];
            setNpc31(cards[npc312]);
            flag2 = npc312;
            const y = npc3.indexOf(npc312);
            npc3.splice(y, 1);
          }
        }

        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;
        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
      }

      if (39 <= player[x] < 52) {
        const npc111 = npc1.filter((number) => 39 <= number && number < 52);
        const npc222 = npc2.filter((number) => 39 <= number && number < 52);
        const npc333 = npc3.filter((number) => 39 <= number && number < 52);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;
        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (npc1111.length == 0) {
          if (cardsH == 2) {
            const npc10 = npc1.filter((number) => 13 <= number && number < 26);
            const npc110 = npc10.slice().sort((a, b) => a - b);
            const npc30 = npc1.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc1.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);

            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            const npc30 = npc1.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc20 = npc1.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc40 = npc1.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            const npc40 = npc1.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            const npc20 = npc1.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc1.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
          if (cardsH == 1) {
            const npc20 = npc1.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc1.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc1.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc1.indexOf(x2);
                npc1.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc1.indexOf(x2);
              npc1.splice(y, 1);
            }
          }
        } else {
          if (x1) {
            // setNpc11(cards[x1]);
            flag = x1;
            const y = npc1.indexOf(x1);
            npc1.splice(y, 1);
          } else {
            const x2 = npc1111[0];
            // setNpc11(cards[x2]);
            flag = x2;
            const y = npc1.indexOf(x2);
            npc1.splice(y, 1);
          }
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc2222.length == 0) {
          if (cardsH == 2) {
            const npc10 = npc2.filter((number) => 13 <= number && number < 26);
            const npc110 = npc10.slice().sort((a, b) => a - b);
            const npc30 = npc2.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc2.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);

            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            const npc30 = npc2.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc20 = npc2.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc40 = npc2.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            const npc40 = npc2.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            const npc20 = npc2.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc2.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
          if (cardsH == 1) {
            const npc20 = npc2.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc2.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc2.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              } else {
                const x2 = npc330[0];
                setNpc11(cards[x2]);
                flag = x2;
                const y = npc2.indexOf(x2);
                npc2.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc2.indexOf(x2);
              npc2.splice(y, 1);
            }
          }
        } else {
          if (npc211 > player[x]) {
            setNpc21(cards[npc211]);
            flag1 = npc211;
            const y = npc2.indexOf(npc211);
            npc2.splice(y, 1);
          } else if (npc213 > npc211) {
            setNpc21(cards[npc213]);
            flag1 = npc213;
            const y = npc2.indexOf(npc213);
            npc1.splice(y, 1);
          } else {
            const npc212 = npc2222[0];
            setNpc21(cards[npc212]);
            flag1 = npc212;
            const y = npc2.indexOf(npc212);
            npc2.splice(y, 1);
          }
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc3333.length == 0) {
          if (cardsH == 2) {
            const npc10 = npc3.filter((number) => 13 <= number && number < 26);
            const npc110 = npc10.slice().sort((a, b) => a - b);
            const npc30 = npc3.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc3.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);

            if (npc110.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc110[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 3) {
            const npc30 = npc3.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc20 = npc3.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc40 = npc3.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc330[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 4) {
            const npc40 = npc3.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            const npc20 = npc3.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc3.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc440[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
          if (cardsH == 1) {
            const npc20 = npc3.filter((number) => 13 <= number && number < 26);
            const npc220 = npc20.slice().sort((a, b) => a - b);
            const npc30 = npc3.filter((number) => 26 <= number && number < 39);
            const npc330 = npc30.slice().sort((a, b) => a - b);
            const npc40 = npc3.filter((number) => 39 <= number && number < 52);
            const npc440 = npc40.slice().sort((a, b) => a - b);
            if (npc220.length == 0) {
              if (npc330.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else if (npc330.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc220[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else if (npc440.length == 0) {
              if (npc220.length == 0) {
                const x2 = npc440[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              } else {
                const x2 = npc330[0];
                // setNpc11(cards[x2]);
                flag = x2;
                const y = npc3.indexOf(x2);
                npc3.splice(y, 1);
              }
            } else {
              const x2 = npc220[0];
              // setNpc11(cards[x2]);
              flag = x2;
              const y = npc3.indexOf(x2);
              npc3.splice(y, 1);
            }
          }
        } else {
          if (npc311 > player[x] && npc311 > flag) {
            setNpc31(cards[npc311]);
            flag2 = npc311;
            const y = npc3.indexOf(npc311);
            npc3.splice(y, 1);
          } else if (npc314 > player[x] && npc314 > npc311) {
            setNpc31(cards[npc314]);
            flag2 = npc314;
            const y = npc3.indexOf(npc314);
            npc3.splice(y, 1);
          } else if (npc313 > npc311) {
            setNpc31(cards[npc313]);
            flag2 = npc313;
            const y = npc3.indexOf(npc313);
            npc3.splice(y, 1);
          } else {
            const npc312 = npc3333[0];
            setNpc31(cards[npc312]);
            flag2 = npc312;
            const y = npc3.indexOf(npc312);
            npc3.splice(y, 1);
          }
        }

        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;
        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
      }

      console.log(cards1);
      setTimeout(() => {
        ep.current.children[1].children[0].style.display = "flex";
        ep.current.children[2].children[0].style.display = "flex";
        ep.current.children[3].children[0].style.display = "flex";
        ep.current.children[4].children[0].style.display = "flex";
      }, 10);

      setTimeout(() => {
        if (flag3 > flag4 && flag3 > flag5 && flag3 > flag6) {
          setResults1((para1) => [...para1, "y"]);
        } else if (flag4 > flag3 && flag4 > flag5 && flag4 > flag6) {
          setResults2((para1) => [...para1, "x"]);
        } else if (flag5 > flag3 && flag5 > flag4 && flag5 > flag6) {
          setResults1((para1) => [...para1, "y"]);
        } else if (flag6 > flag3 && flag6 > flag4 && flag6 > flag5) {
          setResults2((para1) => [...para1, "x"]);
        }

        setCards1([]);
        setPlayer1([]);
        setNpc11([]);
        setNpc21([]);
        setNpc31([]);
      }, 2000);
    }
  }

  return (
    <main className="w-[100%] h-[100vh] bg flex justify-center items-center">
      <section className="w-[400px] h-[90%] rounded-lg bg-[rgba(0,0,0,.2)] bs relative">
        <article className="w-[100%] h-[100%] flex flex-wrap absolute">
          <div className="w-[100%] flex justify-between h-[15%]">
            <div className="w-[33%] h-[100%] flex flex-wrap justify-center content-around">
              <p className="w-[70%] h-[35%] text-[1.2rem] uppercase flex justify-center gap-3 items-center text-white">
                player
                <i
                  ref={i1}
                  className="bi bi-suit-spade-fill text-black text-[1.5rem]"
                  style={{ display: "none" }}
                ></i>
                <i
                  ref={i2}
                  className="bi bi-suit-diamond-fill text-red-600 text-[1.5rem]"
                  style={{ display: "none" }}
                ></i>
                <i
                  ref={i3}
                  className="bi bi-suit-heart-fill text-red-600 text-[1.5rem]"
                  style={{ display: "none" }}
                ></i>
                <i
                  ref={i4}
                  className="bi bi-suit-club-fill text-black text-[1.5rem]"
                  style={{ display: "none" }}
                ></i>
              </p>
              <div className="w-[90%] h-[65%] relative bottom-0">
                <ul className="w-[100%] h-[100%] absolute">
                  <li></li>
                  {results1 &&
                    results1.map((val, i) => {
                      return (
                        <li
                          key={i}
                          style={{ left: data4[i][0], zIndex: data4[i][1] }}
                          className="w-[38px] h-[50px] absolute top-[1px]"
                        >
                          <Image
                            src="/53.jpg"
                            alt="Picture of the author"
                            width="300000"
                            height="400000"
                            className="absolute top-0 rounded-sm"
                            style={{
                              width: "40px",
                              height: "57px",
                              objectFit: "cover",
                            }}
                          ></Image>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="w-[33%] h-[100%] flex flex-wrap justify-center content-around">
              <button
                on
                onClick={start}
                className="w-[70%] h-[35%] flex justify-center items-center uppercase bg-[#35374B] rounded-lg bs1 text-white text-[1.2rem]"
              >
                start
              </button>
              <br />
              <button
                on
                onClick={reset}
                className="w-[70%] h-[35%] flex justify-center items-center uppercase bg-[#35374B] rounded-lg bs1 text-white text-[1.2rem]"
              >
                reset
              </button>
            </div>

            <div className="w-[33%] h-[100%] flex flex-wrap justify-center content-around">
              <p className="w-[70%] h-[35%] text-[1.2rem] uppercase flex justify-center items-center text-white">
                Computer
              </p>
              <div className="w-[90%] h-[65%] relative bottom-0">
                <ul className="w-[100%] h-[100%] absolute">
                  <li></li>
                  {results2 &&
                    results2.map((val, i) => {
                      return (
                        <li
                          key={i}
                          style={{ right: data5[i][0], zIndex: data5[i][1] }}
                          className="w-[40px] h-[55px] absolute top-[1px]"
                        >
                          <Image
                            src="/53.jpg"
                            alt="Picture of the author"
                            width="300000"
                            height="400000"
                            className="absolute top-0  rounded-sm"
                            style={{
                              width: "40px",
                              height: "57px",
                              objectFit: "cover",
                            }}
                          ></Image>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[15%] flex justify-center items-center">
            <ul
              ref={m3}
              style={{ display: "none" }}
              className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg -rotate-180 -translate-x-6"
            >
              {npc2 &&
                npc2.map((val, i) => {
                  return (
                    <li
                      key={i}
                      className="w-[50px] h-[60px] absolute"
                      style={{
                        top: data2[i][0],
                        right: data2[i][1],
                        zIndex: data2[i][2],
                        rotate: data2[i][3],
                      }}
                    >
                      <Image
                        src={cards[npc2[i]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </li>
                  );
                })}

              <li></li>
            </ul>
          </div>

          <div className="h-[45%] w-[80px] flex justify-center items-center">
            <ul
              ref={m4}
              style={{ display: "none" }}
              className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg rotate-90 translate-y-10"
            >
              {npc3 &&
                npc3.map((val, i) => {
                  return (
                    <li
                      key={i}
                      className="w-[50px] h-[60px] absolute"
                      style={{
                        top: data2[i][0],
                        right: data2[i][1],
                        zIndex: data2[i][2],
                        rotate: data2[i][3],
                      }}
                    >
                      <Image
                        src={cards[npc3[i]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </li>
                  );
                })}

              <li></li>
            </ul>
          </div>

          <div ref={ep} className="h-[45%] w-[240px] relative">
            <div></div>
            {cards1 &&
              cards1.map((val, i) => {
                return (
                  <div
                    key={i}
                    style={{ bottom: data3[i][0], left: data3[i][1] }}
                    className="w-[80px] h-[100px] absolute  bottom-[20px] left-[80px]"
                  >
                    <Image
                      src={val}
                      alt="Picture of the author"
                      width="300000"
                      height="400000"
                      className="absolute top-0"
                      style={{
                        width: "80px",
                        height: "100px",
                        objectFit: "cover",
                        display: "none",
                      }}
                    ></Image>
                  </div>
                );
              })}
          </div>

          <div className="h-[45%] w-[80px] flex justify-center items-center">
            <ul
              ref={m2}
              style={{ display: "none" }}
              className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg -rotate-90 -translate-y-10"
            >
              {npc1 &&
                npc1.map((val, i) => {
                  return (
                    <li
                      key={i}
                      className="w-[50px] h-[60px] absolute"
                      style={{
                        top: data2[i][0],
                        right: data2[i][1],
                        zIndex: data2[i][2],
                        rotate: data2[i][3],
                      }}
                    >
                      <Image
                        src={cards[npc1[i]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "50px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </li>
                  );
                })}

              <li></li>
            </ul>
          </div>

          <div className="w-[100%] h-[25%] flex justify-center items-center">
            <ul
              ref={m}
              style={{ display: "none" }}
              className="w-[280px] h-[100px] relative *:cursor-pointer *:rounded-lg "
            >
              {player &&
                player.map((val, i) => {
                  return (
                    <li
                      key={i}
                      onMouseEnter={() => mEnter(i)}
                      onMouseLeave={() => mleave(i)}
                      onClick={() => clickPlayer(i, event)}
                      className="w-[80px] h-[100px] absolute"
                      style={{
                        top: data1[i][0],
                        right: data1[i][1],
                        zIndex: data1[i][2],
                        rotate: data1[i][3],
                      }}
                    >
                      <Image
                        src={cards[player[i]]}
                        data-status="off"
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "80px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      ></Image>
                    </li>
                  );
                })}

              <li></li>
            </ul>
          </div>
        </article>
        <article
          ref={H}
          className="w-[100%] h-[100%] flex justify-center items-center absolute"
        >
          <div className="w-[90%] h-[30%] bs1 bg-[#35374b84] flex justify-around items-center rounded-lg backdrop:blur-lg">
            <button
              ref={mdh1}
              onMouseDown={() => mdh(1)}
              onMouseLeave={() => muh(1)}
              onClick={() => clickH(1)}
              className="w-[17%] scale-100 h-[4rem] flex justify-center items-center text-[2rem] rounded-lg bg-[#50727B] bs1"
            >
              <i className="bi bi-suit-spade-fill"></i>
            </button>
            <button
              ref={mdh2}
              onMouseDown={() => mdh(2)}
              onMouseLeave={() => muh(2)}
              onClick={() => clickH(2)}
              className="w-[17%]  h-[4rem] flex justify-center items-center text-[2rem] rounded-lg bg-[#50727B] bs1"
            >
              <i className="bi bi-suit-diamond-fill text-red-600"></i>
            </button>
            <button
              ref={mdh3}
              onMouseDown={() => mdh(3)}
              onMouseLeave={() => muh(3)}
              onClick={() => clickH(3)}
              className="w-[17%]  h-[4rem] flex justify-center items-center text-[2rem] rounded-lg bg-[#50727B] bs1"
            >
              <i className="bi bi-suit-heart-fill text-red-600"></i>
            </button>
            <button
              ref={mdh4}
              onMouseDown={() => mdh(4)}
              onMouseLeave={() => muh(4)}
              onClick={() => clickH(4)}
              className="w-[17%]  h-[4rem] flex justify-center items-center text-[2rem] rounded-lg bg-[#50727B] bs1"
            >
              <i className="bi bi-suit-club-fill"></i>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
