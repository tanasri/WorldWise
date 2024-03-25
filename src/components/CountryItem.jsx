import styles from "./CountryItem.module.css";
import FlagemojiToPNG from "./FlagemojiToPNG";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{<FlagemojiToPNG flag={country.emoji} />}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
