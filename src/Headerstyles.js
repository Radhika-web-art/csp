import styled from 'styled-components';
export const Box = styled.div`


/* Hero */

position: absolute;
width: 1850px;
height: 400px;



/* Hero frame */

/* Auto Layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;

position: absolute;
width: 1850px;
height:400px;



/* Rectangle 392 */

position: static;
left: 0.69%;
right: 0.48%;
top: 1.31%;
bottom: 0%;

background: #172755;
box-shadow: 0px 20px 4px #EF2A82;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;


  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: absolute;
    max-width: 2000px;
    margin: 0 auto;
    /* background: red; */
    
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 200px;
  width:100px;
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(100px, 1fr));
  grid-gap: 70px;
  /* Header */

  position: relative;
  width: 2224px;


   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const HeaderLink = styled.a`
/* Home */

  /* Who we are */

position: static;
width: 136px;
height: 25px;
left: 113.33px;
top: 20px;

font-family: Merriweather;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 25px;

color: rgba(255, 255, 255, 0.8);


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 30px;


  &:hover {
      color: #EF2A82;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #F8F9FF;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const Heading1 = styled.p`
/* Career Acceleration Platform For World-Beating Yet UnderPrivileged Students */
position: absolute;
left: 50px;
right: 50px;
width:1500px;
top: 150px;
bottom: 70px;

font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 72px;
line-height: 144.5%;
/* or 104px */
letter-spacing: 0.04em;

color: #FFFFFF;


`;
