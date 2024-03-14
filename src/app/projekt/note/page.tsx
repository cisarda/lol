import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faBook, faFile, faGear, faHouse, faLink, faPrint} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
    return (
        <main className="flex h-screen">
            <div
                className="flex w-[82px] flex-col bg-[#FBFBFA] justify-between items-start border-r-[#F5F5F4]-2 py-[10px] shrink-0 self-stretch border-r-2 border-[#F5F5F4]">
                <div className="flex flex-col items-start gap-[16px] self-stretch ">
                    <button className="flex h-[26px] w-[22px] flex-col justify-center items-center gap-[16px] self-stretch "><FontAwesomeIcon icon={faHouse} /></button>
                    <button className="flex h-[26px] w-[22px] flex-col justify-center items-center gap-[16px] self-stretch "><FontAwesomeIcon icon={faBook} /></button>
                    <button className="flex h-[26px] w-[22px] flex-col justify-center items-center self-stretch"><FontAwesomeIcon icon={faGear} /></button>
                </div>
                <div className="flex flex-col items-start justify-center pl-[25px]">
                    <button className="flex h-[64px] flex-col justify-center items-center self-stretch w-[30px]"><FontAwesomeIcon icon={faAnglesLeft} /></button>
                </div>
            </div>
            <div className="flex flex-col items-start w-[196px] bg-[#FBFBFA] py-[24px] gap-[4px] border-r-2 border-[#F5F5F4]">
                <div className="flex py-[6px] px-[16px] items-start gap-[10px] self-stretch bg-[#F1F1F0]">
                    <button className="flex pl-[10px]">I4 HS</button>
                </div>
                <div className="flex py-[6px] px-[16px] items-start gap-[10px] self-stretch bg-[#F1F1F0]">
                    <button className="flex pl-[10px]">I3 HS</button>
                </div>
                <div className="flex py-[6px] px-[16px] items-start gap-[10px] self-stretch bg-[#F1F1F0]">
                    <button className="flex pl-[10px]">I2 HS</button>
                </div>
            </div>
            <div className=" flex flex-col w-full items-center">
                <div id="horni_lista"
                     className="flex w-full h-12 justify-between px-[36px] py-[12px] border-b-2 border-[#F5F5F4]">
                    <div>
                        <p>I4 HS</p>
                    </div>
                    <div className="flex gap-4 justify-end items-start">
                        <div>
                            <button className="w-[16px] h-[16px]"><FontAwesomeIcon icon={faPrint}/></button>
                        </div>
                        <div>
                            <button className="w-[16px] h-[16px]"><FontAwesomeIcon icon={faLink}/></button>
                        </div>
                    </div>
                </div>
                <div id="text" className="flex flex-col items-center w-[708px] h-screen">
                    <div className="flex w-full py-3">
                        <p className="font-bold text-[40px]">I4 HS</p>
                    </div>
                    <div className="flex w-full font-semibold text-[30px] text-[#37352F] pt-9 pb-2">
                        <p>Dynamický routing</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p>Dynamický routing nám zajišťuje routovací infrastrukturu, do které již nemusíme zasahovat.
                            Nemusíme psát routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen
                            nastavit.</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p>Kromě funkcí routingu nám DRP poskytují:</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Škálovatelnost</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Rychlou konvergenci</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Dostupnost</p>
                    </div>
                    <div className="flex w-full font-semibold text-[30px] text-[#37352F] pt-9 pb-2">
                        <p>Charakteristika DRP</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p>O každém dynamickém routovacím protokolu můžeme říct, že má minimálně:</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Algoritmus</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Metriku</p>
                    </div>
                    <div className="flex w-full py-1 text-[16px]">
                        <p> • Zprávy daného protokolu</p>
                    </div>
                </div>
            </div>
        </main>
    )
}