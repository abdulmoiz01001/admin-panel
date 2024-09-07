import  { useState, useEffect } from 'react';

const Timer = ({ countdown }:any) => {
    const [timeLeft, setTimeLeft] = useState(countdown);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev:any) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time:any) => {
        const days = Math.floor(time / (3600 * 24));
        const hours = Math.floor((time % (3600 * 24)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        return `${days} : ${hours} : ${minutes} : ${seconds}`;
    };

    return (
        <div className="text-2xl font-bold text-red-600">
            {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;
