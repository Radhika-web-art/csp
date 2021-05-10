import styled from 'styled-components';
export const Box = styled.div`
  padding: 80px 60px;
  background: #172755;
  position: bottom;
  bottom: 0;
  width: 100%;
  
   
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
  margin-left: 300px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(100px, 1fr));
  grid-gap: 50px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const HeaderLink = styled.a`
  color: #F8F9FF;
  margin-bottom: 100px;
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
  margin-bottom: 40px;
  font-weight: bold;
`;