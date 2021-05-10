import styled from 'styled-components';
   
export const Box = styled.div`
/* Footer */

position: relative;
width: 1850px;
height: 500px;
bottom:0px;



/* Footer background */

position: relative;

background: #172755;
box-shadow: inset 0px 20px 4px #EF2A82;
transform: rotate(-360deg);

   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-bottom:0px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #F8F9FF;
  margin-bottom: 0px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #EF2A82;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #F8F9FF;
  margin-bottom: 10px;
  font-weight: bold;
`;