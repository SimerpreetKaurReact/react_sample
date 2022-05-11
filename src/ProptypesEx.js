import "./styles.css";
import PropTypes from "prop-types";
export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src="" />
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <p>{props.mail}</p>
    </div>
  );
}
ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
};

ContactCard.defaultProps = {
  name: "MR whisk",
};
export function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Mr Whiskerson"
        phone="(212) 89898989"
        mail="someone@gmail.com"
      />
      <ContactCard name="Mr adam" phone="(212) 78956" mail="adam@gmail.com" />
      <ContactCard name="Mr Eve" phone="(212) 789946" mail="eve@gmail.com" />
      <ContactCard
        name="Mr steve"
        phone="(212) 4566122"
        mail="steve@gmail.com"
      />
    </div>
  );
}
