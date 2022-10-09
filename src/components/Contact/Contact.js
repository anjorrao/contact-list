import { useState } from "react";
import Card from "../UI/Card/Card";
import ContactImage from "../ContactImage/ContactImage";
import ContactInfo from "../ContactInfo/ContactInfo";

const Contact = (props) => {
  const [showAge, setShowAge] = useState(false);
  const showAgehandler = () => {
    setShowAge(!showAge);
  };

  return (
    <Card>
      <ContactImage user={props.user}></ContactImage>
      <ContactInfo
        showAgeBtnClick={showAgehandler}
        showAge={showAge}
        user={props.user}
      ></ContactInfo>
    </Card>
  );
};

export default Contact;
