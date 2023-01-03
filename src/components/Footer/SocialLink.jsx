import IconYoutube from "../../assets/icon-youtube.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconPinterest from "../../assets/icon-pinterest.svg";
import IconInstagram from "../../assets/icon-instagram.svg";
import IconFacebook from "../../assets/icon-facebook.svg";

const SocialLink = () => {
  return (
    <div className="flex justify-between items-center pt-8">
      <img src={IconYoutube} />
      <img src={IconInstagram} />
      <img src={IconFacebook} />
      <img src={IconTwitter} />
      <img src={IconPinterest} />
    </div>
  );
};

export default SocialLink;
