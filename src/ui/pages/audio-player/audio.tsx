import React, {useEffect, useState} from 'react';
import {callsAPI} from '../../../dal/callsAPI';
import s from './audio.module.css'
import {FileDownload, Pause, PlayArrow} from '@mui/icons-material';

type PropsType = {
    record: string;
    partnershipId: string;
};

const AudioPlayer: React.FC<PropsType> = ({record, partnershipId}) => {
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const response = await callsAPI.getRecord(record, partnershipId);
                const blob = new Blob([response.data], {type: 'audio/mpeg'});
                const url = URL.createObjectURL(blob);
                setAudioSrc(url);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecord();
    }, [record, partnershipId]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleTimeUpdate = (event: React.SyntheticEvent<HTMLAudioElement>) => {
        const audioElement = event.currentTarget;
        setCurrentTime(audioElement.currentTime);
        setDuration(audioElement.duration);
    };

    const handleDownload = () => {
        if (audioSrc) {
            const link = document.createElement('a');
            link.href = audioSrc;
            link.download = 'recording.mp3';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
            }, 0);
        }
    };

    return (
        <div>
            {audioSrc && (
                <span className={s.audioBlock}>
                     <button onClick={isPlaying ? handlePause : handlePlay} className={s.buttonPause}>
                        {isPlaying ? <Pause/> : <PlayArrow/>}
                    </button>
                     <audio
                         src={audioSrc}
                         controls={false}
                         autoPlay={isPlaying}
                         onPause={handlePause}
                         onPlay={handlePlay}
                         onTimeUpdate={handleTimeUpdate}
                     />

                    <div>
                        <progress value={currentTime} max={duration}></progress>
                        <span>{`${currentTime.toFixed(2)} / ${duration.toFixed(2)}`}</span>
                    </div>

                    <button onClick={handleDownload} className={s.downloadBtn}><FileDownload/></button>
                </span>
            )}
        </div>
    );
};

export default AudioPlayer;