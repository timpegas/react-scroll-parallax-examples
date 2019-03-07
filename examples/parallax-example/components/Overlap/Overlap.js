import React from "react";
import style from "./Overlap.scss";
import { Svg } from "components";
import { Parallax } from "react-scroll-parallax";
import circle from "!!raw-loader!./circle.svg";
import circleRings from "!!raw-loader!./circle-rings.svg";

const Overlap = () => (
    <div className={style.root}>
        <div className={style.container}>
            <Parallax y={[-40, 40]} x={[-40, 20]} className={style.circle}>
                <Svg svg={circle} />
            </Parallax>
            <Parallax y={[-40, 40]} x={[40, -20]} className={style.circleRings}>
                <Svg svg={circleRings} />
            </Parallax>
        </div>
    </div>
);

export default Overlap;
