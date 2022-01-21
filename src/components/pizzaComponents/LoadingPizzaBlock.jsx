import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingPizzaBlock() {
   return (
      <ContentLoader 
    className='pizza'
    speed={2}
    width={292.8}
    height={503.8}
    viewBox="0 0 292.8 503.8"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="140" r="140" /> 
    <rect x="0" y="294" rx="5" ry="5" width="290" height="28" /> 
    <rect x="0" y="340" rx="10" ry="10" width="290" height="84" /> 
    <rect x="0" y="443" rx="5" ry="5" width="96" height="40" /> 
    <rect x="152" y="443" rx="5" ry="5" width="139" height="40" />
  </ContentLoader>
   )
}

export default LoadingPizzaBlock;
