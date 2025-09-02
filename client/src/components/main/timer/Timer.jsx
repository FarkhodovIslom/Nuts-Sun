import React, { useEffect, useState } from "react";
import './Timer.css';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(0);

    const TimerData = { days: 1, hours: 12, minutes: 30, seconds: 0 };

    const calculateEndTime = () => {
        const totalSeconds =
            TimerData.days * 86400 +
            TimerData.hours * 3600 +
            TimerData.minutes * 60 +
            TimerData.seconds;

        return Date.now() + totalSeconds * 1000;
    };

    useEffect(() => {
        const endTime = calculateEndTime();

        const interval = setInterval(() => {
            const now = Date.now();
            const diff = Math.max(0, Math.floor((endTime - now) / 1000));

            setTimeLeft(diff);

            if (diff <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    const formatTime = (seconds) => {
        const d = Math.floor(seconds / 86400);
        const h = Math.floor((seconds % 86400) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return { d, h, m, s };
    };

    const { d, h, m, s } = formatTime(timeLeft);

    return (
        <div className="timer-container">
            <div className="timer-bg">
                <h1 className="timer-title">Великі пропозиції незабаром...</h1>
                <div className="timer-time">
                    <div className="timer">
                        <div className="timer-text">
                            <h1>{d}</h1> День
                        </div>
                    </div>
                    <div className="timer">
                        <div className="timer-text">
                            <h1>{h}</h1> Години
                        </div>
                    </div>
                    <div className="timer">
                        <div className="timer-text">
                            <h1>{m}</h1> Xвилин
                        </div>
                    </div>
                    <div className="timer">
                        <div className="timer-text">
                            <h1>{s}</h1> Секунд
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timer;
