import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    
    <Svg 
    viewBox="0 0 400 100" {...props}>
      <image width="400" height="100" href={isDark ? '/images/vsion/Logo_dark.png' : '/images/vsion/Logo_light.png'}/>
      
      </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
