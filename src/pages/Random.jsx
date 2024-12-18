import { React, useEffect, useState } from 'react';
import { SpinWheel } from "react-spin-wheel"
import "react-spin-wheel/dist/index.css"
import '../css/Random.css'

const Random = () => {
    const [result, setResult] = useState(null);  // Recive Data of Winner Spin
    const [randomState, setRandomState] = useState(true); // recive state of random data 
    const [randomSets, setRandomSets] = useState([]);
    const [dataWheel, setDataWheel] = useState([]);

    const toFinish = (item) => { // instruction when spinwheel finish
        setResult(item);
    }

    const toReset = () => { // instruction when click Reset
        setResult("");
    }

    useEffect(() => {
        console.log(dataWheel)
    }, [dataWheel])

    useEffect(() => {
        console.log(randomSets)
    }, [randomSets])

    useEffect(() => {
        const dataItem = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z", "aa", "bb", "cc", "dd",
            "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn"
        ];
        randomData(dataItem);
    }, []);

    const randomData = (dataItem) => {
        const dataGroups = [];
        const groupSize = 10; // Size of Group People
        const Wheel = [];

        while (dataItem.length > 0) {
            const group = [];
            for (let i = 0; i < groupSize && dataItem.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * dataItem.length);
                group.push(dataItem[randomIndex]);
                dataItem.splice(randomIndex, 1);
            }
            dataGroups.push(group);
        }

        setRandomSets(dataGroups);
        for (let i = 1; i <= dataGroups.length; i++) {
            Wheel.push(i + "");
        }
        setDataWheel(Wheel);
    };

    return (
        <>
            <div className="d-flex justify-content-center navbar">
                <h3>วงล้อสุ่ม</h3>
            </div>
            <div className="row mt-3">
                <div className="col-md-6 col-sm-12">
                    <SpinWheel  // component from react-spin-wheel
                        items={dataWheel} // set item data for spin
                        onFinishSpin={(item) => toFinish(item)} // Add function to finish spin
                        onReset={() => toReset()} // Add function to Reset WheelSpin
                    />
                </div>
                <div className="col-md-6 col-sm-12 px-5 py-3">
                    <div className="d-flex justify-content-center mb-3">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="fs-1 px-5 ">{result}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <div className="card-body">
                            <p className="text-center fs-3">ผู้โชคดี</p>
                            <hr />
                            <div style={{ maxHeight: "350px", overflowY: "auto" }}>
                                {randomSets[result - 1] && randomSets[result - 1].length > 0 ? (
                                    randomSets[result - 1].map((name, index) => (
                                        <div key={index}>{index + 1}. {name}</div>
                                    ))
                                ) : (
                                    <p className="text-center">ยังไม่มีผู้โชคดี</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer fixed-bottom">
                <div className="grass">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,120 C30,80 70,40 120,60 C170,80 230,50 300,60 C370,70 450,90 520,50 C600,20 680,80 760,70 C840,60 920,40 1000,80 C1080,120 1160,100 1200,120 L1200,0 L0,0 Z" fill="#4caf50" />
                    </svg>
                </div>
                <div className="content">
                    {/* <p>© 2024 Your Website Name. All Rights Reserved.</p> */}
                </div>
            </footer>

        </>
    )
};

export default Random;
