import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
//import styles from './module.css';
import logo from './logo.svg';
import './mysaa.scss';
//const pic = require('./mypic.jpg');
import pic from './mypic.jpg';
///home/radhika/pavani/src/mypic.jpg
//import './donor.css';
class Donor extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
      <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text">Importance of Donorship</h3>
                        <p class="para">Donar place a crucial role in student’s life.Donar is a person who makes students life colourful with his valuable donations.Donar trust his/her student,donar trust 				can make a student responsible and committed.student is very transparent to the donar.student accustomed to, true to his word with his donar,which is an exceptional quality.</p>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                    <img className="pic" src={`${process.env.PUBLIC_URL}/donor/donor.jpg`} alt="pic"/>
                    </div>
                </div>
            </div>
      <div class="contain">
                <div class="row">
                    <div class="benefits">
                        <h1 class="benefits title">Benefits You get</h1>
                        <p class=" benefits para">
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour
                        </p>
                    </div>
                </div>
                <div class="benefits list">
                    <div class="row">
                        <div class="row list1">
                            <div class="smile">
                                <div class="smile pic">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/smile.jpg`} alt="pic"/>
                                </div>
                                <div class="smile text">
                                    <h5 class="smile title">Double Your Impact</h5>
                                    <p class="smile para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row list2">
                            <div class="recognition">
                                <div class="recognition pic">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/recognition.jpg`} alt="pic"/>
                                </div>
                                <div class="recognition text">
                                    <h5 class="recognition title">Recognition</h5>
                                    <p class="recognition para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row list3">
                            <div class="thanks">
                                <div class="thanks pic">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/thanks.jpg`} alt="pic"/>
                                </div>
                                <div class="thanks text">
                                    <h5 class="thanks title">Become More Thankful</h5>
                                    <p class="thanks para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
			<div class="row list4">
                            <div class="difference">
                                <div class="difference">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/difference.jpg`} alt="pic"/>
                                </div>
                                <div class="difference text">
                                    <h5 class="difference title">Impact Student's Life</h5>
                                    <p class="difference para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
			  <div class="row list5">
                            <div class="impact student">
                                <div class="impact student pic">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/impact student.jpg`} alt="pic"/>
                                </div>
                                <div class="impact student text">
                                    <h5 class="impact student title">Tax Breaks</h5>
                                    <p class="impact student para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row list6">
                            <div class="tax">
                                <div class="tax pic">
                                <img className="pic" src={`${process.env.PUBLIC_URL}/donor/tax.jpg`} alt="pic"/>
                                </div>
                                <div class="tax text">
                                    <h5 class="tax title">Make difference</h5>
                                    <p class="tax para">
                                        Some quick example text to build on the card
                                        title and make up
                                        the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                <div class="row text-center">
                    <div class="col-12">
                        <div class="about-title">
                            <h1 class="text-uppercase title-h1">What our Donrs say</h1>
                            <p class="para">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti
                                recusandae. Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container carousel py-lg-5">
                <div class="owl-carousel owl-theme">
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">John Martin</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">Mac Hill</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">John Martin</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">Mac Hill</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">John Martin</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                    <div class="client row">
                        <div class="col-lg-4 col-md-12 client-img">
                        <img className="pic" src={`${process.env.PUBLIC_URL}/donor/profile.jpg`} alt="pic"/>
                        </div>
                        <div class="col-lg-8 col-md-12 about-client">
                            <h4 class="text-uppercase">Mac Hill</h4>
                            <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto
                                consequuntur ratione, obcaecati corrupti deserunt.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bodys">
            <h2>Support Us</h2>
            <img className="pic" src={`${process.env.PUBLIC_URL}/support us vector.jpg`} alt="pic"/>
              <p className="p5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti recusandae.
                 Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam! Lorem ipsum dolor sit, amet 
                 consectetur adipisicing elit. Repellendus, deleniti recusandae. Esse incidunt rem repellendus ab 
                 voluptates maxime? Nemo, numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
                  deleniti recusandae. Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam!</p>
          </div>
      <Footer></Footer>
    </div>
   )
  };
}
export default Donor;