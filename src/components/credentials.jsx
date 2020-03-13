import React from 'react';

const dagger = require('../images/dagger.png');
const spyglass = require('../images/spyglass.png');
const speakeasy = require('../images/speakeasy.jps');

export default class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakeasyInfo: false,
      machiningInfo: false,
      carpentryInfo: false
    };
    this.speakeasyToggle = this.speakeasyToggle.bind(this);
    this.machiningToggle = this.machiningToggle.bind(this);
    this.carpentryToggle = this.carpentryToggle.bind(this);
  }

  speakeasyToggle() {
    if (this.state.speakeasyInfo === true) {
      this.setState({ speakeasyInfo: false });
    } else {
      this.setState({ speakeasyInfo: true });
    }
  }

  machiningToggle() {
    if (this.state.machiningInfo === true) {
      this.setState({ machiningInfo: false });
    } else {
      this.setState({ machiningInfo: true });
    }
  }

  carpentryToggle() {
    if (this.state.carpentryInfo === true) {
      this.setState({ carpentryInfo: false });
    } else {
      this.setState({ carpentryInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3><img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
            Credentials
          <img className='dagger2' src={ dagger } alt='dagger' rel='preload' /></h3>
          <section>
            <h4>Publications</h4>
            <div className='large-list-wrap top-margin'>
              <ul>
                <li>Medium: Hacking the Developers Toolbox - Coming Soon!</li>
                <li className='list-item-link'>
                  <a
                    href='https://medium.com/@milesmickelson87/a-journey-through-coding-boot-camp-78c55f6b9a20'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='medium article link'
                  >
                    Medium: Journey Through Code School Bootcamp
                  </a>
                </li>
                <li>YouTube: Demonstration of Cheryl Lee's Website - Coming Soon!</li>
              </ul>
            </div>
          </section>
          <section>
            <h4>Education</h4>
              <div className='large-list-wrap top-margin'>
                <ul>
                  <li>San Diego Code School: Fullstack Developer, Graduated 2019</li>
                  <li>Cicerone+Spirits Evaluator: Certified Lvl 1/Advanced, 2017</li>
                  <li>San Diego Union Carpenters: Apprenticeship Lvl 6, 2006-12</li>
                  <li>Las Vegas Dealers School: Certified Poker Dealer, 2010</li>
                </ul>
              </div>
          </section>
          <section>
            <div className='center-wrap'>
              <h4>Experience</h4>
              <p>
                I have always had a highly motivated and self-disciplined personality,&nbsp;
                seeking utmost professionalism and reliability in the workplace.&nbsp;
                Throughout a variety of demanding roles, I have been acknowledged for my 
                capacity to build strong, collaborative relationships, and for my ability to 
                take on a multitude of responsibilities. Furthermore, being touted for competence to 
                lead in a team environment and work as a team player, making positive&nbsp;
                contributions to the success of our objective. Read more below...
              </p>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.speakeasyInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.speakeasyToggle }
                    className='details-button'
                  >
                  Speakeasy Bartending - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `${this.state.speakeasyInfo ? 'visible' : 'inVisible'}` }> 
              <h5>Lead Speakeasy Bartender</h5>
              <div className='clearfix-wrap'>
                <img className='dark-glow-image' id='speakeasy-pic' src={ speakeasy } alt='speakeasy' />
                <div className='center-wrap'>
                  <p id='speakeasy-info' aria-hidden='true'>
                    An unexpected opportunity arrived for me when a restaurant opened up&nbsp;
                    in my neighborhood. I had never worked at one before but found myself&nbsp;
                    hired as a busser & food runner over many applicants. Within a year,&nbsp;
                    I was able to fill the role of server and positioned as barback&nbsp;
                    per my request. After gaining knowledge through attending classes&nbsp;
                    and learning on my own time, I earned a promotion to the speakeasy.&nbsp;
                    Only the highest quality and most knowledgeable bartenders worked in&nbsp;
                    there. Eventually, I secured the role of Lead Bartender, responsible&nbsp;
                    for accommodating all private parties, weekly events, and maintaining&nbsp;
                    an immaculate establishment. My service, passion, attention to detail,&nbsp;
                    and memory for regular’s preferences allowed me to earn a reputation for&nbsp;
                    a local’s favorite bartender among many. Often working alone, my position&nbsp;
                    required performing many roles and consistently methodical self-sufficiency.
                  </p>
                  <button type='submit' className='read-less' onClick={ this.speakeasyToggle }>
                    Close Details
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.machiningInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.machiningToggle }
                    className='details-button'
                  >
                  Machine Operations - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.machiningInfo ? 'visible' : 'inVisible'}` }>
              <h5>Machine Operations Lead</h5>
              <p aria-hidden='true'>
                In 2012 an acquaintance of mine recommended me to a local sign shop&nbsp;
                where I was hired and started on the production floor. After earning&nbsp;
                trust and acknowledgment for high-quality output, within a few months,&nbsp;
                I trained to run every machine on the floor. Eventually gained&nbsp;
                responsibility for laying out production planning, inventory management,&nbsp;
                materials procurement, and interdepartmental communication.
              </p>
              <button type='submit' className='read-less' onClick={ this.machiningToggle }>
                Close Details
              </button>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.carpentryInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.carpentryToggle }
                    className='details-button'
                  >
                  Union Carpentry - View Details
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.carpentryInfo ? 'visible' : 'inVisible'}` }>
              <h5>Nuclear Carpenter</h5>
              <p aria-hidden='true'>
                At 16 years of age, I started my first business pressure washing for&nbsp;
                people in my neighborhood and simultaneously delivered for Pizza Hut&nbsp;
                after getting my license later. During this time, a neighbor took me&nbsp;
                under his wing and offered me an opportunity to work at the San Onofre&nbsp;
                Nuclear Power Plant. He was the highest-level manager for the Union&nbsp;
                Carpenter’s Trade on site. During the first season, my role was&nbsp;
                supporting the tradesman. After being fully immersed 60 hours a week for over&nbsp;
                three months, I decided to go through the Union Carpenters apprenticeship.&nbsp;
                I then found a foreman at a local job site I convinced to&nbsp;
                sponsor me for getting into the trade and hire me as a level 1 apprentice.&nbsp;
                I was a carpenter for the next six years employed by many contractors&nbsp;
                doing finish, roofing, concrete, and scaffolding work. The reputation&nbsp;
                for my work ethic earned me recommendations from my foremen for almost&nbsp;
                every other job I worked as a carpenter. In my last season at the plant&nbsp;
                still being an apprentice, I fulfilled a lead role for journeyman carpenters&nbsp;
                new to the job site. I'm still great friends with Bill Newton and many of&nbsp;
                the individuals I worked together within carpentry today.
              </p>
              <button type='submit' className='read-less' onClick={ this.carpentryToggle }>
                Close Details
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
