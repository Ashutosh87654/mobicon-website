import axios from "axios";

const axios_post = async (target, object) => {
  let link = "";
  switch (target) {
    case "book_a_stand_email":
      link = "http://localhost/Mobicon/mail/bookAStand.php";
      break;
    case "become_a_partner_email":
      link = "http://localhost/Mobicon/mail/becomeAPartner.php";
      break;
    default:
      break;
  }

  if (link === "") return;

  return await axios.post(link, object);
};

export default axios_post;
