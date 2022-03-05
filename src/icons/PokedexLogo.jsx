import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const PokedexLogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    xmlSpace="preserve"
    {...props}
  >
    <Path fill="#37474F" d="m33 27 6 .001A6 6 0 0 1 39 39h-6V27z" />
    <G fill="#546E7A">
      <Circle cx={39} cy={33} r={4} />
      <Path d="M11 25.001a8 8 0 1 0 0 16v-16z" />
    </G>
    <Path fill="#DD2C00" d="M13 23h19v2H13z" />
    <G fill="#FF3D00">
      <Path d="M11 25.001V41h20c3 0 3-3 3-3V25.001H11zM31 7H14c-3 0-3 3-3 3v13h23V10s0-3-3-3z" />
    </G>
    <G fill="#263238">
      <Path d="M23 28H10.976c-2.717 0-4.919 2.283-4.919 5s2.202 5 4.919 5H23V28zM29 19a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v8z" />
    </G>
    <G fill="#90A4AE">
      <Path d="M31 38a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V28a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10zM31 20a1 1 0 0 1-1 1H18a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10z" />
    </G>
    <G fill="#BBDEFB">
      <Path d="M19 11h10v8H19zM19 29h10v8H19z" />
    </G>
    <G fill="#ECEFF1">
      <Path d="M11 30h2v6h-2z" />
      <Path d="M9 32h6v2H9z" />
    </G>
    <G fill="#AEEA00">
      <Circle cx={39} cy={33} r={2} />
      <Path d="M3 32.994V33c0 .302.022.597.052.891.005.037.012.072.016.109H4a1 1 0 1 0 0-2h-.931c-.005.038-.013.075-.018.113-.028.291-.05.582-.051.881z" />
    </G>
  </Svg>
);

export default PokedexLogo;
