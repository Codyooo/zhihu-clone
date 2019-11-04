import React from 'react'
import { LoadingWrapper } from './style'

interface Props {
    className?: string
    x?: number;
    y?: number;
    float?: boolean;
}

const LoadingDot: React.FC<Props> = ({ x, y, float = false }) => {

    return (
        <LoadingWrapper x={x} y={y} float={float}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </LoadingWrapper>
    )
}

export default LoadingDot;
