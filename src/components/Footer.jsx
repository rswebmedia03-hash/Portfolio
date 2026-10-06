function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="RSWEBMEDIA" />
          <p>Modern websites. Digital experiences.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RSWEBMEDIA</span>
          <span>Built with passion.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;