import { openingHours, socials, storeInfo } from "../../constant";

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-heading">
      <img
        src="/images/footer-left-leaf.png"
        alt="decorative leaf"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="decorative leaf"
        id="f-right-leaf"
      />

      <div className="content">
        <div className="footer-shell">
          <section className="main-card" aria-labelledby="contact-heading">
            <p className="eyebrow">Mango Juice House</p>
            <h2 id="contact-heading">
              Fresh craftsmanship with premium ingredients.
            </h2>
            <p className="address">{storeInfo.address}</p>

            <div className="contact-row">
              <a href={`tel:${storeInfo.contact.phone}`}>
                {storeInfo.contact.phone}
              </a>
              <span aria-hidden="true">•</span>
              <a href={`mailto:${storeInfo.contact.email}`}>
                {storeInfo.contact.email}
              </a>
            </div>

            <div className="quick-links" aria-label="Quick links">
              <a href="#cocktails">Cocktails</a>
              <a href="#about">About Us</a>
              <a href="#art">The Art</a>
              <a href="#menu">Menu</a>
            </div>
          </section>

          <div className="side-cards">
            <section className="info-card">
              <h3>Opening Hours</h3>
              <ul>
                {openingHours.map((item) => (
                  <li key={item.day}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="info-card">
              <h3>Visit</h3>
              <p>{storeInfo.heading}</p>
              <p>
                Reservations available for private tasting sessions and events.
              </p>
            </section>
          </div>
        </div>

        <div className="bottom">
          <p>© {new Date().getFullYear()} Mango. All rights reserved.</p>

          <div className="socials" aria-label="Social links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
