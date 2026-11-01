import './BoxLoader.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function BoxLoader() {
  return (
    <div className="vr-loader">
      <DotLottieReact
        src="https://lottie.host/462ccf6f-252b-4e0f-9389-2a69857bbf30/xkH1NC4P2o.lottie"
        loop
        autoplay
        style={{
          width: '180px',
          height: '180px'
        }}
      />

      <p>Packaging...</p>
    </div>
  );
}

export default BoxLoader;