import styles from "./ContactImage.module.css";
const ContactImage = (props) => {
  return (
    <div className={styles["contact-image"]}>
      <img src={props.user.picture.large} />
    </div>
  );
};

export default ContactImage;
