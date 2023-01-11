import { Link  } from "react-router-dom";

export default function FourOFour() {
  return (
    <div className="err">
      <h1>Sorry, no page found</h1>
      <h2 className="return"><Link to={`/`}>
        Return Home!
      </Link></h2>
      <img
        src="https://64.media.tumblr.com/f0e5bed66923db461378c2e3e62f1f6a/tumblr_o1v52sroAY1r0xh2zo1_r1_1280.gif"
        alt="err-img"
        width={500}
      />
    </div>
  );
}
