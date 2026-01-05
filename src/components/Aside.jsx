import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar" id="customSidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/zairuiy.jpg"}
              alt="Zairui Yang"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Zairui Yang">
              Zairui Yang
            </h1>
            <p className="title">Software Engineer</p>
            <p className="title">Full-stack Development</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:zairuiyang77@gmail.com" className="contact-link">
                  zairuiyang77@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12672069435" className="contact-link">
                  +1 (267) 206-9435
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="2000-07-11">July 11, 2000</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Austin, TX</address>
              </div>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside;
