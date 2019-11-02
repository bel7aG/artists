import React from 'react'
import { SEmptyBoxSVG } from './SEmptyBoxSVG'

const EmptyBoxSVG = () => {
  return (
    <div className="svg-box">
      <SEmptyBoxSVG
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 511.998 511.998"
        className="svg empty-box"
      >
        <polygon
          style={{ fill: '#F0DCBE' }}
          points="255.999,27.194 39.674,127.036 255.999,226.878 472.325,127.036 "
        />
        <path
          style={{ fill: '#EBD2AF' }}
          d="M467.491,387.194l-211.491,97.611V226.878l216.326-99.842v252.603
            C472.325,382.884,470.438,385.833,467.491,387.194z"
        />
        <path
          style={{ fill: '#D2B493' }}
          d="M44.507,387.194l211.492,97.611V226.878L39.674,127.036v252.602
            C39.674,382.884,41.561,385.833,44.507,387.194z"
        />
        <path
          style={{ fill: '#F0DCBE' }}
          d="M472.325,127.036l-216.326,99.842l38.661,115.985c1.568,4.704,6.878,7.001,11.38,4.924
            l201.123-92.826c3.849-1.777,5.747-6.164,4.406-10.186L472.325,127.036z"
        />
        <path
          style={{ fill: '#EBD2AF' }}
          d="M39.674,127.036l216.326,99.842l-38.662,115.985c-1.568,4.704-6.878,7.001-11.38,4.924L4.835,254.96
            c-3.849-1.777-5.747-6.164-4.406-10.186L39.674,127.036z"
        />
        <polygon
          style={{ fill: '#D2B493' }}
          points="472.325,127.036 255.999,27.194 255.999,226.878 "
        />
      </SEmptyBoxSVG>
    </div>
  )
}

export default EmptyBoxSVG
