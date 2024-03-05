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

  const [cardsRandom, setCardsRandom] = useState();
  const [cards1, setCards1] = useState();
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
      m.current.children[x].children[0].style.display = "none";
      m2.current.children[x].children[0].style.display = "none";
      m3.current.children[x].children[0].style.display = "none";
      m4.current.children[x].children[0].style.display = "none";
      m.current.children[x].style.zIndex = "1";
      setTimeout(() => {
        ep.current.children[1].children[0].style.display = "flex";
        ep.current.children[2].children[0].style.display = "flex";
        ep.current.children[3].children[0].style.display = "flex";
        ep.current.children[4].children[0].style.display = "flex";
      }, 10);

      m.current.children[x].children[0].setAttribute("data-status", "on");

      let flag3 = null;
      let flag4 = null;
      let flag5 = null;
      let flag6 = null;

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

        if (x1) {
          setNpc11(cards[x1]);
          flag = x1;
        } else {
          const x2 = npc1111[0];
          setNpc11(cards[x2]);
          flag = x2;
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc211 > player[x]) {
          setNpc21(cards[npc211]);
          flag1 = npc211;
        } else if (npc213 > npc211) {
          setNpc21(cards[npc213]);
          flag1 = npc213;
        } else {
          const npc212 = npc2222[0];
          setNpc21(cards[npc212]);
          flag1 = npc212;
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc311 > player[x] && npc311 > flag) {
          setNpc31(cards[npc311]);
          flag2 = npc311;
        } else if (npc314 > player[x] && npc314 > npc311) {
          setNpc31(cards[npc314]);
          flag2 = npc314;
        } else if (npc313 > npc311) {
          setNpc31(cards[npc313]);
          flag2 = npc313;
        } else {
          const npc312 = npc3333[0];
          setNpc31(cards[npc312]);
          flag2 = npc312;
        }

        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;

        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
        // setFlag3(player[x])
        // setFlag4(flag)
        // setFlag5(flag1)
        // setFlag6(flag2)
      } else if (13 < player[x] < 26) {
        const npc111 = npc1.filter((number) => 13 < number && number < 26);
        const npc222 = npc2.filter((number) => 13 < number && number < 26);
        const npc333 = npc3.filter((number) => 13 < number && number < 26);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;
        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (x1) {
          setNpc11(cards[x1]);
          flag = x1;
        } else {
          const x2 = npc1111[0];
          setNpc11(cards[x2]);
          flag = x2;
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc211 > player[x]) {
          setNpc21(cards[npc211]);
          flag1 = npc211;
        } else if (npc213 > npc211) {
          setNpc21(cards[npc213]);
          flag1 = npc213;
        } else {
          const npc212 = npc2222[0];
          setNpc21(cards[npc212]);
          flag1 = npc212;
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc311 > player[x] && npc311 > flag) {
          setNpc31(cards[npc311]);
          flag2 = npc311;
        } else if (npc314 > player[x] && npc314 > npc311) {
          setNpc31(cards[npc314]);
          flag2 = npc314;
        } else if (npc313 > npc311) {
          setNpc31(cards[npc313]);
          flag2 = npc313;
        } else {
          const npc312 = npc3333[0];
          setNpc31(cards[npc312]);
          flag2 = npc312;
        }
        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;
        // setFlag3(player[x])
        // setFlag4(flag)
        // setFlag5(flag1)
        // setFlag6(flag2)

        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
      } else if (26 < player[x] < 39) {
        const npc111 = npc1.filter((number) => 26 < number && number < 39);
        const npc222 = npc2.filter((number) => 26 < number && number < 39);
        const npc333 = npc3.filter((number) => 26 < number && number < 39);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;

        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (x1) {
          setNpc11(cards[x1]);
          flag = x1;
        } else {
          const x2 = npc1111[0];
          setNpc11(cards[x2]);
          flag = x2;
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc211 > player[x]) {
          setNpc21(cards[npc211]);
          flag1 = npc211;
        } else if (npc213 > npc211) {
          setNpc21(cards[npc213]);
          flag1 = npc213;
        } else {
          const npc212 = npc2222[0];
          setNpc21(cards[npc212]);
          flag1 = npc212;
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc311 > player[x] && npc311 > flag) {
          setNpc31(cards[npc311]);
          flag2 = npc311;
        } else if (npc314 > player[x] && npc314 > npc311) {
          setNpc31(cards[npc314]);
          flag2 = npc314;
        } else if (npc313 > npc311) {
          setNpc31(cards[npc313]);
          flag2 = npc313;
        } else {
          const npc312 = npc3333[0];
          setNpc31(cards[npc312]);
          flag2 = npc312;
        }
        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;
        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
        // setFlag3(player[x])
        // setFlag4(flag)
        // setFlag5(flag1)
        // setFlag6(flag2)
      } else if (39 < player[x] < 52) {
        const npc111 = npc1.filter((number) => 39 < number && number < 52);
        const npc222 = npc2.filter((number) => 39 < number && number < 52);
        const npc333 = npc3.filter((number) => 39 < number && number < 52);
        const npc1111 = npc111.slice().sort((a, b) => a - b);
        const npc2222 = npc222.slice().sort((a, b) => a - b);
        const npc3333 = npc333.slice().sort((a, b) => a - b);

        let flag = null;
        let flag1 = null;
        let flag2 = null;
        const x1 = npc1111.find((reza) => reza > player[x]);

        if (x1) {
          setNpc11(cards[x1]);
          flag = x1;
        } else {
          const x2 = npc1111[0];
          setNpc11(cards[x2]);
          flag = x2;
        }

        const npc211 = npc2222.find((reza1) => reza1 > flag);
        const npc213 = npc2222.find((reza1) => reza1 > player[x]);

        if (npc211 > player[x]) {
          setNpc21(cards[npc211]);
          flag1 = npc211;
        } else if (npc213 > npc211) {
          setNpc21(cards[npc213]);
          flag1 = npc213;
        } else {
          const npc212 = npc2222[0];
          setNpc21(cards[npc212]);
          flag1 = npc212;
        }

        const npc311 = npc3333.find((reza2) => reza2 > flag1);
        const npc313 = npc3333.find((reza2) => reza2 > player[x]);
        const npc314 = npc3333.find((reza2) => reza2 > flag);

        if (npc311 > player[x] && npc311 > flag) {
          setNpc31(cards[npc311]);
          flag2 = npc311;
        } else if (npc314 > player[x] && npc314 > npc311) {
          setNpc31(cards[npc314]);
          flag2 = npc314;
        } else if (npc313 > npc311) {
          setNpc31(cards[npc313]);
          flag2 = npc313;
        } else {
          const npc312 = npc3333[0];
          setNpc31(cards[npc312]);
          flag2 = npc312;
        }
        flag3 = player[x];
        flag4 = flag;
        flag5 = flag1;
        flag6 = flag2;
        let y1 = [];
        y1.push(cards[flag3], cards[flag4], cards[flag5], cards[flag6]);
        setCards1(y1);
        // setFlag3(player[x])
        // setFlag4(flag)
        // setFlag5(flag1)
        // setFlag6(flag2)
      }

      console.log(cards1);

      setTimeout(() => {
        if (flag3 > flag4 && flag3 > flag5 && flag3 > flag6) {
          setResults1(para1=>[...para1,'y']);
        } else if (flag4 > flag3 && flag4 > flag5 && flag4 > flag6) {
          setResults2(para1=>[...para1,'x']);
        } else if (flag5 > flag3 && flag5 > flag4 && flag5 > flag6) {
          setResults1(para1=>[...para1,'y']);
        } else if (flag6 > flag3 && flag6 > flag4 && flag6 > flag5) {
          setResults2(para1=>[...para1,'x']);
        }
        
        setCards1([]);
        setPlayer1([]);
        setNpc11([]);
        setNpc21([]);
        setNpc31([]);
        // console.log(flag3);
      }, 2000);
      
      console.log(results1);
      console.log(results2);
    }
  }
  // console.log(results1);

  return (
    <main className="w-[100%] h-[100vh] bg flex justify-center items-center">
      <section className="w-[400px] h-[90%] rounded-lg bg-[rgba(0,0,0,.2)] bs">
        <article className="w-[100%] h-[100%] flex flex-wrap">
          <div className="w-[100%] flex justify-between h-[15%]">
            <div className="w-[33%] h-[100%] flex flex-wrap justify-center content-around">
              <p className="w-[70%] h-[35%] text-[1.2rem] uppercase flex justify-center items-center text-white">
                player
              </p>
              <div className="w-[90%] h-[65%] border relative bottom-0">
                <ul className="w-[100%] h-[100%] absolute">
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  <li  className="w-[38px] h-[50px] absolute top-[5px]">
                  <Image
                        src={cards[npc2[0]]}
                        alt="Picture of the author"
                        width="300000"
                        height="400000"
                        className="absolute top-0"
                        style={{
                          width: "38px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      ></Image>
                  </li>
                  {/* {results1&&results1.map((val,i)=>{
                    return(
                    )
                  })} */}
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

            <div className="w-[33%] h-[100%] border"></div>
          </div>

          <div className="w-[100%] h-[15%] flex justify-center items-center">
            <ul
              ref={m3}
              style={{ display: "none" }}
              className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg -rotate-180 -translate-x-6"
            >
              {player &&
                player.map((val, i) => {
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
              {player &&
                player.map((val, i) => {
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
              {player &&
                player.map((val, i) => {
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
      </section>
    </main>
  );
}
