import styles from "./ContactInfo.module.css";
import Button from "../UI/Button/Button";

const ContactInfo = (props) => {
  return (
    <div className={styles["contact-info"]}>
      <h3>
        {props.user.name.first} {props.user.name.last}
      </h3>
      <p>Email: {props.user.email}</p>
      {props.showAge && <p>Age: {props.user.dob.age}</p>}
      <Button onClick={props.showAgeBtnClick}>View age</Button>
    </div>
  );
};

export default ContactInfo;
