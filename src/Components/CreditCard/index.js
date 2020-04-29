import React, { useState, useEffect, useContext } from 'react';
import CreditCardContext from '../../State/CreditCard/context';
import { Main, Fields } from './styles';
import Logo from './logo';

function CreditCard() {

  const { type, number, name, date, cvv, flip } = useContext(CreditCardContext).CreditCard;

  const defaultStyle = [
    { offset: '0', stopcolor: '#5a7589' },
    { offset: '0.323', stopcolor: '#436175'},
    { offset: '0.549', stopcolor: '#315266' },
    { offset: '1', stopcolor: '#124768' }
  ]

  const [style, setStyle] = useState(defaultStyle);

  return (
    <Main className={flip ? 'card card-flip' : ''}>
      <div className="cardFront">
        <Fields>
          <div className="company">
            <Logo />
          </div>
          <div className="cardnumber">
            <p>{number}</p>
          </div>
          <div className="extrafields">
            <div className="name">
              <p>{name}</p>
            </div>
            <div className="date">
              <p>{date}</p>
            </div>
          </div>
        </Fields>
        <svg width="366.913" height="247.564" viewBox="0 0 366.913 247.564">
          <defs>
            <filter id="a" x="0" y="7.054" width="366.913" height="240.51" filterUnits="userSpaceOnUse">
              <feOffset dy="6" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="6" result="b" />
              <feFlood floodOpacity="0.349" />
              <feComposite operator="in" in2="b" />
              <feComposite in="SourceGraphic" />
            </filter>
            <radialGradient id="c" cx="86.687" cy="148.26" r="433.798" gradientTransform="translate(33.394 68.21) scale(0.615 0.54)" gradientUnits="userSpaceOnUse">
              {style.map((item, i) => {
                return (
                  <stop key={i} offset={item.offset} stopColor={item.stopcolor} />
                )
              })}
            </radialGradient>
            <clipPath id="d">
              <rect className="a" width="364.999" height="224.393" />
            </clipPath>
            <clipPath id="e">
              <rect className="a" width="365" height="224.398" />
            </clipPath>
          </defs>
          <g transform="translate(-136.043 -216)">
            <g className="h" transform="matrix(1, 0, 0, 1, 136.04, 216)">
              <rect className="b" width="330.913" height="204.51" rx="10" transform="translate(18 19.05)" />
            </g>
            <g transform="translate(137 216)">
              <g transform="translate(0)">
                <rect className="c" width="364.999" height="224.393" rx="10" />
                <g className="d">
                  <g className="e" transform="translate(-198.747 19.822)">
                    <path className="a" d="M747.561,611.272c34.756-40.1,168.237-173.744,412.978-183.8,84.766-3.481,156.388,7.027,211.036,20.251" transform="translate(-747.559 -426.801)" />
                    <path className="a" d="M747.561,610.4c35.09-39.712,170.618-173.077,415.569-179.775a718.531,718.531,0,0,1,208.443,23.963" transform="translate(-747.559 -425.333)" />
                    <path className="a" d="M747.561,609.592c35.425-39.188,173.018-171.826,418.161-175.778A684.508,684.508,0,0,1,1371.572,461.7" transform="translate(-747.559 -423.893)" />
                    <path className="a" d="M747.561,608.8c35.756-38.76,175.412-170.917,420.752-171.755a649.685,649.685,0,0,1,203.263,31.685" transform="translate(-747.559 -422.499)" />
                    <path className="a" d="M747.561,608.025C783.645,569.68,925.372,437.982,1170.9,440.307a617.7,617.7,0,0,1,200.675,35.475" transform="translate(-747.559 -421.139)" />
                    <path className="a" d="M747.56,607.278C783.967,569.332,927.775,438.07,1173.495,443.6a588.348,588.348,0,0,1,198.079,39.256" transform="translate(-747.56 -419.812)" />
                    <path className="a" d="M747.561,606.553c36.734-37.569,182.627-168.409,428.526-159.619a561.455,561.455,0,0,1,195.487,43.025" transform="translate(-747.559 -418.519)" />
                    <path className="a" d="M747.561,605.855C784.616,568.651,932.6,438.2,1178.677,450.3c77.4,3.806,142.889,24.409,192.9,46.786" transform="translate(-747.559 -417.259)" />
                    <path className="a" d="M747.561,605.177c37.38-36.854,187.472-166.94,433.708-151.481,76.34,4.793,140.963,26.838,190.306,50.537" transform="translate(-747.559 -416.033)" />
                    <path className="a" d="M747.561,604.53c37.7-36.522,189.906-166.275,436.3-147.4,75.286,5.767,139.035,29.252,187.716,54.276" transform="translate(-747.559 -414.842)" />
                    <path className="a" d="M747.561,603.906c38.02-36.206,192.354-165.655,438.89-143.312,74.229,6.726,137.1,31.649,185.119,58" transform="translate(-747.559 -413.683)" />
                    <path className="a" d="M747.561,603.307c38.34-35.9,194.817-165.083,441.481-139.215,73.176,7.675,135.173,34.038,182.531,61.718" transform="translate(-747.559 -412.559)" />
                    <path className="a" d="M747.561,602.736c38.66-35.618,197.291-164.563,444.073-135.11,72.124,8.608,133.246,36.41,179.942,65.426" transform="translate(-747.559 -411.468)" />
                    <path className="a" d="M747.561,602.192c38.977-35.348,199.784-164.1,446.663-131,71.072,9.528,131.32,38.769,177.351,69.123" transform="translate(-747.559 -410.411)" />
                    <path className="a" d="M747.561,601.677c39.3-35.093,202.295-163.685,449.255-126.883,70.023,10.434,129.391,41.111,174.756,72.8" transform="translate(-747.559 -409.388)" />
                    <path className="a" d="M747.561,601.186c39.62-34.855,204.828-163.33,451.846-122.759,68.973,11.329,127.465,43.439,172.164,76.471" transform="translate(-747.559 -408.4)" />
                    <path className="a" d="M747.561,600.747C787.506,566.038,955.006,437.326,1202,482.135c67.974,12.1,125.541,45.648,169.577,80.057" transform="translate(-747.559 -407.484)" />
                    <path className="a" d="M747.561,600.291c40.259-34.42,209.962-162.8,457.028-114.494,66.853,13.072,123.631,48.33,166.986,84.032" transform="translate(-747.559 -406.522)" />
                  </g>
                </g>
                <g transform="translate(0 0.001)">
                  <g className="f">
                    <g className="e" transform="translate(-198.747 19.822)">
                      <path className="g" d="M747.561,411.931c34.756-40.095,168.238-173.746,412.98-183.8,84.767-3.482,156.389,7.027,211.037,20.251" transform="translate(-747.559 -227.457)" />
                      <path className="g" d="M747.561,411.062c35.09-39.711,170.618-173.079,415.57-179.777a718.48,718.48,0,0,1,208.444,23.962" transform="translate(-747.559 -225.989)" />
                      <path className="g" d="M747.561,410.252c35.425-39.189,173.019-171.83,418.162-175.783a684.5,684.5,0,0,1,205.852,27.884" transform="translate(-747.559 -224.548)" />
                      <path className="g" d="M747.561,409.458C783.317,370.7,922.974,238.536,1168.315,237.7a649.671,649.671,0,0,1,203.264,31.687" transform="translate(-747.559 -223.154)" />
                      <path className="g" d="M747.561,408.685c36.084-38.348,177.812-170.047,423.345-167.722a617.648,617.648,0,0,1,200.676,35.476" transform="translate(-747.559 -221.794)" />
                      <path className="g" d="M747.56,407.937c36.408-37.949,180.216-169.212,425.936-163.678a588.343,588.343,0,0,1,198.08,39.257" transform="translate(-747.56 -220.467)" />
                      <path className="g" d="M747.561,407.212C784.3,369.643,930.189,238.8,1176.088,247.59a561.45,561.45,0,0,1,195.488,43.026" transform="translate(-747.559 -219.174)" />
                      <path className="g" d="M747.561,406.512c37.055-37.2,185.044-167.658,431.118-155.559,77.4,3.806,142.89,24.41,192.9,46.786" transform="translate(-747.559 -217.914)" />
                      <path className="g" d="M747.561,405.836c37.38-36.855,187.472-166.943,433.71-151.484,76.34,4.793,140.964,26.838,190.307,50.538" transform="translate(-747.559 -216.688)" />
                      <path className="g" d="M747.561,405.188c37.7-36.521,189.906-166.277,436.3-147.405,75.287,5.768,139.035,29.253,187.717,54.277" transform="translate(-747.559 -215.496)" />
                      <path className="g" d="M747.561,404.564c38.02-36.2,192.355-165.657,438.892-143.315,74.23,6.726,137.1,31.652,185.12,58" transform="translate(-747.559 -214.338)" />
                      <path className="g" d="M747.561,403.966C785.9,368.059,942.378,238.88,1189.043,264.748c73.176,7.674,135.173,34.037,182.531,61.719" transform="translate(-747.559 -213.213)" />
                      <path className="g" d="M747.561,403.4c38.66-35.62,197.292-164.566,444.074-135.113,72.124,8.607,133.246,36.411,179.942,65.428" transform="translate(-747.559 -212.123)" />
                      <path className="g" d="M747.561,402.851c38.977-35.348,199.784-164.1,446.665-131,71.073,9.528,131.321,38.768,177.352,69.124" transform="translate(-747.559 -211.066)" />
                      <path className="g" d="M747.561,402.334c39.3-35.093,202.3-163.687,449.257-126.884,70.023,10.434,129.392,41.112,174.757,72.8" transform="translate(-747.559 -210.043)" />
                      <path className="g" d="M747.561,401.845c39.62-34.855,204.829-163.333,451.847-122.761,68.973,11.329,127.466,43.438,172.165,76.473" transform="translate(-747.559 -209.054)" />
                      <path className="g" d="M747.561,401.406C787.506,366.7,955.007,237.981,1202,282.791c67.974,12.1,125.542,45.649,169.577,80.059" transform="translate(-747.559 -208.138)" />
                      <path className="g" d="M747.561,400.949c40.26-34.421,209.963-162.8,457.03-114.5,66.853,13.072,123.631,48.331,166.987,84.034" transform="translate(-747.559 -207.176)" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="cardBack">
        <Fields>
          <div className="cvv">
            <p>{cvv}</p>
          </div>
        </Fields>
        <svg width="366.913" height="247.564" viewBox="0 0 366.913 247.564">
          <defs>
            <filter id="a" x="0" y="7.054" width="366.913" height="240.51" filterUnits="userSpaceOnUse">
              <feOffset dy="6" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="6" result="b" />
              <feFlood floodOpacity="0.349" />
              <feComposite operator="in" in2="b" />
              <feComposite in="SourceGraphic" />
            </filter>
            <radialGradient id="c" cx="86.687" cy="148.26" r="433.798" gradientTransform="translate(33.394 68.21) scale(0.615 0.54)" gradientUnits="userSpaceOnUse">
              {style.map((item, i) => {
                return (
                  <stop key={i} offset={item.offset} stopColor={item.stopcolor} />
                )
              })}
            </radialGradient>
            <clipPath id="d">
              <rect className="a" width="364.999" height="224.393" />
            </clipPath>
            <clipPath id="e">
              <rect className="a" width="365" height="224.398" />
            </clipPath>
          </defs>
          <g transform="translate(-136.043 -216)">
            <g className="h" transform="matrix(1, 0, 0, 1, 136.04, 216)">
              <rect className="b" width="330.913" height="204.51" rx="10" transform="translate(18 19.05)" />
            </g>
            <g transform="translate(137 216)">
              <g transform="translate(0)">
                <rect className="c" width="363.999" height="224.393" rx="10" />
                <g className="d">
                  <g className="e" transform="translate(-198.747 19.822)">
                    <path className="a" d="M747.561,611.272c34.756-40.1,168.237-173.744,412.978-183.8,84.766-3.481,156.388,7.027,211.036,20.251" transform="translate(-747.559 -426.801)" />
                    <path className="a" d="M747.561,610.4c35.09-39.712,170.618-173.077,415.569-179.775a718.531,718.531,0,0,1,208.443,23.963" transform="translate(-747.559 -425.333)" />
                    <path className="a" d="M747.561,609.592c35.425-39.188,173.018-171.826,418.161-175.778A684.508,684.508,0,0,1,1371.572,461.7" transform="translate(-747.559 -423.893)" />
                    <path className="a" d="M747.561,608.8c35.756-38.76,175.412-170.917,420.752-171.755a649.685,649.685,0,0,1,203.263,31.685" transform="translate(-747.559 -422.499)" />
                    <path className="a" d="M747.561,608.025C783.645,569.68,925.372,437.982,1170.9,440.307a617.7,617.7,0,0,1,200.675,35.475" transform="translate(-747.559 -421.139)" />
                    <path className="a" d="M747.56,607.278C783.967,569.332,927.775,438.07,1173.495,443.6a588.348,588.348,0,0,1,198.079,39.256" transform="translate(-747.56 -419.812)" />
                    <path className="a" d="M747.561,606.553c36.734-37.569,182.627-168.409,428.526-159.619a561.455,561.455,0,0,1,195.487,43.025" transform="translate(-747.559 -418.519)" />
                    <path className="a" d="M747.561,605.855C784.616,568.651,932.6,438.2,1178.677,450.3c77.4,3.806,142.889,24.409,192.9,46.786" transform="translate(-747.559 -417.259)" />
                    <path className="a" d="M747.561,605.177c37.38-36.854,187.472-166.94,433.708-151.481,76.34,4.793,140.963,26.838,190.306,50.537" transform="translate(-747.559 -416.033)" />
                    <path className="a" d="M747.561,604.53c37.7-36.522,189.906-166.275,436.3-147.4,75.286,5.767,139.035,29.252,187.716,54.276" transform="translate(-747.559 -414.842)" />
                    <path className="a" d="M747.561,603.906c38.02-36.206,192.354-165.655,438.89-143.312,74.229,6.726,137.1,31.649,185.119,58" transform="translate(-747.559 -413.683)" />
                    <path className="a" d="M747.561,603.307c38.34-35.9,194.817-165.083,441.481-139.215,73.176,7.675,135.173,34.038,182.531,61.718" transform="translate(-747.559 -412.559)" />
                    <path className="a" d="M747.561,602.736c38.66-35.618,197.291-164.563,444.073-135.11,72.124,8.608,133.246,36.41,179.942,65.426" transform="translate(-747.559 -411.468)" />
                    <path className="a" d="M747.561,602.192c38.977-35.348,199.784-164.1,446.663-131,71.072,9.528,131.32,38.769,177.351,69.123" transform="translate(-747.559 -410.411)" />
                    <path className="a" d="M747.561,601.677c39.3-35.093,202.295-163.685,449.255-126.883,70.023,10.434,129.391,41.111,174.756,72.8" transform="translate(-747.559 -409.388)" />
                    <path className="a" d="M747.561,601.186c39.62-34.855,204.828-163.33,451.846-122.759,68.973,11.329,127.465,43.439,172.164,76.471" transform="translate(-747.559 -408.4)" />
                    <path className="a" d="M747.561,600.747C787.506,566.038,955.006,437.326,1202,482.135c67.974,12.1,125.541,45.648,169.577,80.057" transform="translate(-747.559 -407.484)" />
                    <path className="a" d="M747.561,600.291c40.259-34.42,209.962-162.8,457.028-114.494,66.853,13.072,123.631,48.33,166.986,84.032" transform="translate(-747.559 -406.522)" />
                  </g>
                </g>
                <g transform="translate(0 0)">
                  <g transform="translate(0 0)">
                    <rect className="aback" width="363.999" height="223.778" rx="10" />
                  </g>
                </g>
                <rect className="bback" width="364" height="48.391" transform="translate(0 38.678)" />
                <rect className="cback" width="61.051" height="24.893" transform="translate(166.038 106.258)" />
                <g className="dback" transform="translate(40.721 106.258)">
                  <rect className="cback" width="125.316" height="1.532" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 2.596)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 5.191)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 7.787)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 10.383)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 12.978)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 15.574)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 18.17)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 20.765)" />
                  <rect className="cback" width="125.316" height="1.532" transform="translate(0 23.361)" />
                </g>
              </g>
            </g>
          </g>
        </svg>

      </div>
    </Main>
  )
}

export default CreditCard
