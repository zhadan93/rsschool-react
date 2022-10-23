import React from 'react';

import CONTACT_ICONS from 'components/Icons/ContactIcons';
import { CONTACTS_BASE_URLS, CONTACTS_NAME } from '../../constants';
import evgeniia from '../../assets/img/zhadan.jpg';

import './About.scss';

const About = (): JSX.Element => {
  return (
    <div data-testid="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about__personal-info">
          <div className="about__avatar">
            <img className="about__avatar-img" src={evgeniia} alt="my photo" />
          </div>
          <p className="about__name">Zhadan Evgeniia</p>
          <section className="contacts">
            {Object.entries(CONTACTS_BASE_URLS).map(([key, value]) => (
              <a key={key} href={`${value}${CONTACTS_NAME}`} rel="noreferrer" target="_blank">
                {CONTACT_ICONS[key]('about__contact-icon')}
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
