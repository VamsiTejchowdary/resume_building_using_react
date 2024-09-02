import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Vamsi Tej Chowdary. <br />
        d.vamsitej333@gmail.com.<br/>
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
