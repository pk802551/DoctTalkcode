import React, { useReducer, useEffect } from "react";
import JoyRide from "react-joyride";
import { JOY_RIDE_STYLES, LOCALE_INPUT, TOUR_STEPS } from "../utility-files/default-values/DefaultValues";

// Tour component
const Tour = () => {
    return (
        <>
            <JoyRide
                steps={TOUR_STEPS}
                continuous={true}
                showSkipButton={true}
                styles={JOY_RIDE_STYLES}
                locale={LOCALE_INPUT}
            />
        </>
    );
};

export default Tour;