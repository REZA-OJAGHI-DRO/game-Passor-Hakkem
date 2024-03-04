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
  const [cardsRandom, setCardsRandom] = useState();
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
  }
  // console.log(player);
  // console.log(npc1);
  // console.log(npc2);
  // console.log(npc3);
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
      ep.current.children[0].children[0].style.display = "flex";
      m.current.children[x].children[0].setAttribute("data-status", "on");

      if (player[x] < 13) {

       
          const npc111 = npc1.filter((number) => number < 13);
          const npc222 = npc2.filter((number) => number < 13);
          const npc333 = npc3.filter((number) => number < 13);
          const npc1111 = npc111.slice().sort((a, b) => a - b);
          const npc2222 = npc222.slice().sort((a, b) => a - b);
          const npc3333 = npc333.slice().sort((a, b) => a - b);
      
          // console.log(player);
          // console.log(npc1111);
          // console.log(npc2222);
          // console.log(npc3333);

       

       
          let flag=null;
          let flag1=null;
          const x1=npc1111.find(reza=>reza > player[x])

          if(x1){
            setNpc11(cards[x1])
            flag=x1
          }else {
            const x2=npc1111[0]
            setNpc11(cards[x2])
            flag=x2
          }
          
          const npc211=npc2222.find(reza1=>reza1 > flag)
          const npc213=npc2222.find(reza1=>reza1 > player[x])

          if(npc211>player[x]){
            setNpc21(cards[npc211])
            flag1=npc211
          }else if(npc213>npc211){
            setNpc21(cards[npc213])
            flag1=npc213
          }else{
            const npc212=npc2222[0]
            setNpc21(cards[npc212])
            flag1=npc212
          }

            const npc311=npc3333.find(reza2=>reza2 > flag1)
            const npc313=npc3333.find(reza2=>reza2 > player[x])
            const npc314=npc3333.find(reza2=>reza2 > flag)
             console.log(npc311);
            if(npc311>player[x]&&npc311>flag){
             setNpc31(cards[npc311])
            }else if(npc314>player[x]&&npc314>npc311){
              setNpc31(cards[npc314])
            }else if(npc313>npc311){
              setNpc31(cards[npc313])
            }else{
              const npc312=npc3333[0]
              setNpc31(cards[npc312])
      }

    }else if(13<player[x]<26){
      const npc111 = npc1.filter((number) => 13 < number && number < 26);
      const npc222 = npc2.filter((number) => 13 < number && number < 26);
      const npc333 = npc3.filter((number) => 13 < number && number < 26);
      const npc1111 = npc111.slice().sort((a, b) => a - b);
      const npc2222 = npc222.slice().sort((a, b) => a - b);
      const npc3333 = npc333.slice().sort((a, b) => a - b);
  
      let flag=null;
          let flag1=null;
          const x1=npc1111.find(reza=>reza > player[x])

          if(x1){
            setNpc11(cards[x1])
            flag=x1
          }else {
            const x2=npc1111[0]
            setNpc11(cards[x2])
            flag=x2
          }
          
          const npc211=npc2222.find(reza1=>reza1 > flag)
          const npc213=npc2222.find(reza1=>reza1 > player[x])

          if(npc211>player[x]){
            setNpc21(cards[npc211])
            flag1=npc211
          }else if(npc213>npc211){
            setNpc21(cards[npc213])
            flag1=npc213
          }else{
            const npc212=npc2222[0]
            setNpc21(cards[npc212])
            flag1=npc212
          }

            const npc311=npc3333.find(reza2=>reza2 > flag1)
            const npc313=npc3333.find(reza2=>reza2 > player[x])
            const npc314=npc3333.find(reza2=>reza2 > flag)
             console.log(npc311);
            if(npc311>player[x]&&npc311>flag){
             setNpc31(cards[npc311])
            }else if(npc314>player[x]&&npc314>npc311){
              setNpc31(cards[npc314])
            }else if(npc313>npc311){
              setNpc31(cards[npc313])
            }else{
              const npc312=npc3333[0]
              setNpc31(cards[npc312])
      }
      
    }else if(26<player[x]<39){
      const npc111 = npc1.filter((number) => 26 < number && number < 39);
      const npc222 = npc2.filter((number) => 26 < number && number < 39);
      const npc333 = npc3.filter((number) => 26 < number && number < 39);
      const npc1111 = npc111.slice().sort((a, b) => a - b);
      const npc2222 = npc222.slice().sort((a, b) => a - b);
      const npc3333 = npc333.slice().sort((a, b) => a - b);
  
      let flag=null;
          let flag1=null;
          const x1=npc1111.find(reza=>reza > player[x])

          if(x1){
            setNpc11(cards[x1])
            flag=x1
          }else {
            const x2=npc1111[0]
            setNpc11(cards[x2])
            flag=x2
          }
          
          const npc211=npc2222.find(reza1=>reza1 > flag)
          const npc213=npc2222.find(reza1=>reza1 > player[x])

          if(npc211>player[x]){
            setNpc21(cards[npc211])
            flag1=npc211
          }else if(npc213>npc211){
            setNpc21(cards[npc213])
            flag1=npc213
          }else{
            const npc212=npc2222[0]
            setNpc21(cards[npc212])
            flag1=npc212
          }

            const npc311=npc3333.find(reza2=>reza2 > flag1)
            const npc313=npc3333.find(reza2=>reza2 > player[x])
            const npc314=npc3333.find(reza2=>reza2 > flag)
             console.log(npc311);
            if(npc311>player[x]&&npc311>flag){
             setNpc31(cards[npc311])
            }else if(npc314>player[x]&&npc314>npc311){
              setNpc31(cards[npc314])
            }else if(npc313>npc311){
              setNpc31(cards[npc313])
            }else{
              const npc312=npc3333[0]
              setNpc31(cards[npc312])
      }
      
    }else if(39<player[x]<52){
      const npc111 = npc1.filter((number) => 39 < number && number < 52);
      const npc222 = npc2.filter((number) => 39 < number && number < 52);
      const npc333 = npc3.filter((number) => 39 < number && number < 52);
      const npc1111 = npc111.slice().sort((a, b) => a - b);
      const npc2222 = npc222.slice().sort((a, b) => a - b);
      const npc3333 = npc333.slice().sort((a, b) => a - b);
  
      let flag=null;
          let flag1=null;
          const x1=npc1111.find(reza=>reza > player[x])

          if(x1){
            setNpc11(cards[x1])
            flag=x1
          }else {
            const x2=npc1111[0]
            setNpc11(cards[x2])
            flag=x2
          }
          
          const npc211=npc2222.find(reza1=>reza1 > flag)
          const npc213=npc2222.find(reza1=>reza1 > player[x])

          if(npc211>player[x]){
            setNpc21(cards[npc211])
            flag1=npc211
          }else if(npc213>npc211){
            setNpc21(cards[npc213])
            flag1=npc213
          }else{
            const npc212=npc2222[0]
            setNpc21(cards[npc212])
            flag1=npc212
          }

            const npc311=npc3333.find(reza2=>reza2 > flag1)
            const npc313=npc3333.find(reza2=>reza2 > player[x])
            const npc314=npc3333.find(reza2=>reza2 > flag)
             console.log(npc311);
            if(npc311>player[x]&&npc311>flag){
             setNpc31(cards[npc311])
            }else if(npc314>player[x]&&npc314>npc311){
              setNpc31(cards[npc314])
            }else if(npc313>npc311){
              setNpc31(cards[npc313])
            }else{
              const npc312=npc3333[0]
              setNpc31(cards[npc312])
      }
      
    }
  }
  }
  return (
    <main className="w-[100%] h-[100vh] bg flex justify-center items-center">
      <button on onClick={start} className="text-white text-[2rem]">
        start
      </button>
      <br />
      <button on onClick={reset} className="text-white text-[2rem]">
        reset
      </button>
      <section className="w-[400px] h-[90%] rounded-lg bg-[rgba(0,0,0,.2)] bs">
        <article className="w-[100%] h-[100%] flex flex-wrap">
          <div className="w-[100%] h-[15%] flex justify-center items-center">
          <ul ref={m3} className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg -rotate-180 -translate-x-6">
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[120px] z-[2] -rotate-[42deg]">
                <Image
                  src={cards[npc2[0]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[110px] z-[3] -rotate-[35deg]">
                <Image
                  src={cards[npc2[1]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[100px] z-[4] -rotate-[28deg]">
                <Image
                  src={cards[npc2[2]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[90px] z-[5] -rotate-[21deg]">
                <Image
                  src={cards[npc2[3]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[80px] z-[6] -rotate-[14deg]">
                <Image
                  src={cards[npc2[4]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[70px] z-[7] -rotate-[7deg]">
                <Image
                  src={cards[npc2[5]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-1px] right-[60px] z-[8]">
                <Image
                  src={cards[npc2[6]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[50px] z-[9] rotate-[7deg]">
                <Image
                  src={cards[npc2[7]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[40px] z-[10] rotate-[14deg]">
                <Image
                  src={cards[npc2[8]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[30px] z-[11] rotate-[21deg]">
                <Image
                  src={cards[npc2[9]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[20px] z-[12] rotate-[28deg]">
                <Image
                  src={cards[npc2[10]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[10px] z-[13]  rotate-[35deg]">
                <Image
                  src={cards[npc2[11]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[0px] z-[14] rotate-[42deg]">
                <Image
                  src={cards[npc2[12]]}
                  data-status="off"
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
            </ul>
          </div>
          <div className="h-[60%] w-[80px] flex justify-center items-center">
          <ul ref={m4} className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg rotate-90 translate-y-10">
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[120px] z-[2] -rotate-[42deg]">
                <Image
                  src={cards[npc3[0]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[110px] z-[3] -rotate-[35deg]">
                <Image
                  src={cards[npc3[1]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[100px] z-[4] -rotate-[28deg]">
                <Image
                  src={cards[npc3[2]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[90px] z-[5] -rotate-[21deg]">
                <Image
                  src={cards[npc3[3]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[80px] z-[6] -rotate-[14deg]">
                <Image
                  src={cards[npc3[4]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[70px] z-[7] -rotate-[7deg]">
                <Image
                  src={cards[npc3[5]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-1px] right-[60px] z-[8]">
                <Image
                  src={cards[npc3[6]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[50px] z-[9] rotate-[7deg]">
                <Image
                  src={cards[npc3[7]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[40px] z-[10] rotate-[14deg]">
                <Image
                  src={cards[npc3[8]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[30px] z-[11] rotate-[21deg]">
                <Image
                  src={cards[npc3[9]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[20px] z-[12] rotate-[28deg]">
                <Image
                  src={cards[npc3[10]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[10px] z-[13]  rotate-[35deg]">
                <Image
                  src={cards[npc3[11]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[0px] z-[14] rotate-[42deg]">
                <Image
                  src={cards[npc3[12]]}
                  data-status="off"
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
            </ul>
          </div>
          <div ref={ep} className="h-[60%] w-[240px] relative">
            <div className="w-[80px] h-[100px] absolute  bottom-[20px] left-[80px] ">
              <Image
                src={player1}
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
            <div className="w-[80px] h-[100px] absolute bottom-[140px] right-[20px]">
              <Image
                src={npc11}
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="absolute top-0"
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  // display: "none",
                }}
              ></Image>
            </div>
            <div className="w-[80px] h-[100px] absolute top-[20px] left-[80px] ">
              <Image
                src={npc21}
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="absolute top-0"
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  // display: "none",
                }}
              ></Image>
            </div>
            <div className="w-[80px] h-[100px] absolute bottom-[140px] left-[20px]">
              <Image
                src={npc31}
                alt="Picture of the author"
                width="300000"
                height="400000"
                className="absolute top-0"
                style={{
                  width: "80px",
                  height: "100px",
                  objectFit: "cover",
                  // display: "none",
                }}
              ></Image>
            </div>
          </div>
          <div className="h-[60%] w-[80px] flex justify-center items-center">
            <ul ref={m2} className="w-[120px] h-[60px] relative *:cursor-pointer *:rounded-lg -rotate-90 -translate-y-10">
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[120px] z-[2] -rotate-[42deg]">
                <Image
                  src={cards[npc1[0]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[110px] z-[3] -rotate-[35deg]">
                <Image
                  src={cards[npc1[1]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[100px] z-[4] -rotate-[28deg]">
                <Image
                  src={cards[npc1[2]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[90px] z-[5] -rotate-[21deg]">
                <Image
                  src={cards[npc1[3]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[80px] z-[6] -rotate-[14deg]">
                <Image
                  src={cards[npc1[4]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[70px] z-[7] -rotate-[7deg]">
                <Image
                  src={cards[npc1[5]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-1px] right-[60px] z-[8]">
                <Image
                  src={cards[npc1[6]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[-.5px] right-[50px] z-[9] rotate-[7deg]">
                <Image
                  src={cards[npc1[7]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[0px] right-[40px] z-[10] rotate-[14deg]">
                <Image
                  src={cards[npc1[8]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[.5px] right-[30px] z-[11] rotate-[21deg]">
                <Image
                  src={cards[npc1[9]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1px] right-[20px] z-[12] rotate-[28deg]">
                <Image
                  src={cards[npc1[10]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[1.5px] right-[10px] z-[13]  rotate-[35deg]">
                <Image
                  src={cards[npc1[11]]}
                  data-status="off"
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
              <li className="w-[50px] h-[60px] absolute top-[2px] right-[0px] z-[14] rotate-[42deg]">
                <Image
                  src={cards[npc1[12]]}
                  data-status="off"
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
            </ul>
          </div>

          <div className="w-[100%] h-[25%] flex justify-center items-center">
            <ul
              ref={m}
              className="w-[280px] h-[100px] relative *:cursor-pointer *:rounded-lg "
            >
              <li
                onMouseEnter={() => mEnter(0)}
                onMouseLeave={() => mleave(0)}
                onClick={() => clickPlayer(0, event)}
                className="w-[80px] h-[100px] absolute top-[2px] right-[180px] z-[2] -rotate-[42deg]"
              >
                <Image
                  src={cards[player[0]]}
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
              <li
                onMouseEnter={() => mEnter(1)}
                onMouseLeave={() => mleave(1)}
                onClick={() => clickPlayer(1, event)}
                className="w-[80px] h-[100px] absolute top-[-2px] right-[165px] z-[3] -rotate-[35deg]"
              >
                <Image
                  src={cards[player[1]]}
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
              <li
                onMouseEnter={() => mEnter(2)}
                onMouseLeave={() => mleave(2)}
                onClick={() => clickPlayer(2, event)}
                className="w-[80px] h-[100px] absolute top-[-6px] right-[150px] z-[4] -rotate-[28deg]"
              >
                <Image
                  src={cards[player[2]]}
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
              <li
                onMouseEnter={() => mEnter(3)}
                onMouseLeave={() => mleave(3)}
                onClick={() => clickPlayer(3, event)}
                className="w-[80px] h-[100px] absolute top-[-10px] right-[135px] z-[5] -rotate-[21deg]"
              >
                <Image
                  src={cards[player[3]]}
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
              <li
                onMouseEnter={() => mEnter(4)}
                onMouseLeave={() => mleave(4)}
                onClick={() => clickPlayer(4, event)}
                className="w-[80px] h-[100px] absolute top-[-14px] right-[120px] z-[6] -rotate-[14deg]"
              >
                <Image
                  src={cards[player[4]]}
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
              <li
                onMouseEnter={() => mEnter(5)}
                onMouseLeave={() => mleave(5)}
                onClick={() => clickPlayer(5, event)}
                className="w-[80px] h-[100px] absolute top-[-16px] right-[105px] z-[7] -rotate-[7deg]"
              >
                <Image
                  src={cards[player[5]]}
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
              <li
                onMouseEnter={() => mEnter(6)}
                onMouseLeave={() => mleave(6)}
                onClick={() => clickPlayer(6, event)}
                className="w-[80px] h-[100px] absolute top-[-14px] right-[90px] z-[8]"
              >
                <Image
                  src={cards[player[6]]}
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
              <li
                onMouseEnter={() => mEnter(7)}
                onMouseLeave={() => mleave(7)}
                onClick={() => clickPlayer(7, event)}
                className="w-[80px] h-[100px] absolute top-[-10px] right-[75px] z-[9] rotate-[7deg]"
              >
                <Image
                  src={cards[player[7]]}
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
              <li
                onMouseEnter={() => mEnter(8)}
                onMouseLeave={() => mleave(8)}
                onClick={() => clickPlayer(8, event)}
                className="w-[80px] h-[100px] absolute top-[-6px] right-[60px] z-[10] rotate-[14deg]"
              >
                <Image
                  src={cards[player[8]]}
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
              <li
                onMouseEnter={() => mEnter(9)}
                onMouseLeave={() => mleave(9)}
                onClick={() => clickPlayer(9, event)}
                className="w-[80px] h-[100px] absolute top-[-2px] right-[45px] z-[11] rotate-[21deg]"
              >
                <Image
                  src={cards[player[9]]}
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
              <li
                onMouseEnter={() => mEnter(10)}
                onMouseLeave={() => mleave(10)}
                onClick={() => clickPlayer(10, event)}
                className="w-[80px] h-[100px] absolute top-[2px] right-[30px] z-[12] rotate-[28deg]"
              >
                <Image
                  src={cards[player[10]]}
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
              <li
                onMouseEnter={() => mEnter(11)}
                onMouseLeave={() => mleave(11)}
                onClick={() => clickPlayer(11, event)}
                className="w-[80px] h-[100px] absolute top-[6px] right-[15px] z-[13]  rotate-[35deg]"
              >
                <Image
                  src={cards[player[11]]}
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
              <li
                onMouseEnter={() => mEnter(12)}
                onMouseLeave={() => mleave(12)}
                onClick={() => clickPlayer(12, event)}
                className="w-[80px] h-[100px] absolute top-[10px] right-[0px] z-[14] rotate-[42deg]"
              >
                <Image
                  src={cards[player[12]]}
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
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
