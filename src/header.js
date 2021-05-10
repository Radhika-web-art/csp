import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './mysaa.scss';
import pic from './mypic.jpg';

class Body extends React.Component {
  
  render() {
    return (
       <div className="container">
        <div className="about us">
        <h2>About Us</h2>
            <img className="s1" src={`${process.env.PUBLIC_URL}/about us.jpg`} alt="pic"/>
              <p className="c0">Career Saathi Program is a selective student support program 
                                for meritorious students who come from financially stressed backgrounds. CSP handpicks 
                                world-beating minds at young age’s, mentors & assists them with all kinds of support, 
                                tracking their growth all along until they’re successfully employed. The support to each 
                                child ranges from administering a psychometric test, aiding in admission into the course of 
                                their choice, various bridge programs for a medium switch, assistance in applications for 
                                higher studies, entrance exams, scholarships and much more, while also equipping with next-gen
                                employability skills.</p>
              <button type="button" onClick="red">Learn more</button></div>
        <div className="achieve">
       <h2>How we achieve The Impossible?</h2>
              <h4 className="k2">SELECTION CONFERENCE</h4>
                  <img className="pic" src={`${process.env.PUBLIC_URL}/selection conference.jpg`} alt="pic"/>
                  <p className="p1">Career Saathi Program conducts selection conference to the select the meritorious 
                                    yet underprivilized students from governament schools every year after completion of 
                                    their tenth standard. They conducts written test, group discussion and interviews for selection.</p>
              <h4>RESIDENTIAL CAMPS</h4> 
                  <img className="s2" src={`${process.env.PUBLIC_URL}/residential camps.jpg`} alt="pic"/>
                  <p className="c1">Career Saathi Program conducts residential camps for selected students once in every 
                                    six months. Various skill development programs like time management, motivational and 
                                    skill enhacement sessions would be conducted in that. 10 residential camps were conducted till date.</p>
              <h4>CAREER ADVANCEMENT FUND</h4>
                  <img className="pic" src={`${process.env.PUBLIC_URL}/mypic.jpg`} alt="pic"/>
                  <p className="p2">Career Advancement Fund is the finacial assistance to the selected students who
                                    are financially poor and unable to pay their college/coaching fees. It would be provided 
                                    based on their academic performance and active participation in residential camps.</p>
              <h4>CAREER ASSISTANCE</h4>
                  <img className="s3" src={`${process.env.PUBLIC_URL}/career assistance vector.jpg`} alt="pic"/>
                  <img className="pic" src={`${process.env.PUBLIC_URL}/mypic.jpg`} alt="pic"/>
                  <p className="c2">Career Assistance would be provided to the selected students who really needs support. 
                                    which includes college admissions, hostels support, scholorships and relevant entrance exam 
                                    coaching. it would be provided based on their active participation in academic and camp activities.</p>
              <h4>MENTORSHIP</h4>
                  <img className="pic" src={`${process.env.PUBLIC_URL}/mentorship.jpg`} alt="pic"/>
                  <p className ="p3">Career Saathi Program supports mentorship program. It is the one-to-one mentorship where 
                                     every student would be connected with individual mentor. The connected mentor teaches and guides 
                                     the students to their goal. </p>
              <h4>INDUSTRIAL VISITS</h4>
                  <img className="s4" src={`${process.env.PUBLIC_URL}/industrial visit.jpg`} alt="pic"/>
                  <p className="c3">Career Saathi Program also conducts industrial visits to the selected students. From these visits 
                                    students explore new things and learn various things. Till date CSP students visited various places 
                                    like Microsoft campus, T-Hub, Google, SEBI, AILA&CONSTELLI and TEDx talks etc.. </p>
              <h4>CAREER GUIDANCE/MONITORING STUDENT’S GROWTH</h4>
                  <img className="pic" src={`${process.env.PUBLIC_URL}/mypic.jpg`} alt="pic"/>
                  <p className="p4">CSP provides career guidance to the students who are in a confusion about their career. 
                                    Career Saathi Program Students are continously monitored and tracked by the cohort leads in academics 
                                    and in every activities.</p>
          </div>
          <div className="support us">
            <h2>Support Us</h2>
            <img className="pic" src={`${process.env.PUBLIC_URL}/support us vector.jpg`} alt="pic"/>
              <p className="p5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti recusandae.
                                Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam! Lorem ipsum dolor sit, amet 
                                consectetur adipisicing elit. Repellendus, deleniti recusandae. Esse incidunt rem repellendus ab 
                                voluptates maxime? Nemo, numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
                                deleniti recusandae. Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam!</p>
          </div>      
      </div>
   )
  };
}
export default Body;

