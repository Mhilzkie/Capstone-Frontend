import Cards from 'react-bootstrap/Card';

function Card() {
  return (
    <>
      {[
        ('Products', '100')
        ('Orders','250')
        ('Customers','20')
        ('Users','2')
        ('Reports','2')
      ].map((menu,count) => (
        <Cards
        //   bg={menu.toLowerCase()}
          key={menu}
          text={menu.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        
        >
          <Cards.Header></Cards.Header>
          <Cards.Body>
            <Cards.Title>{variant}</Cards.Title>
            <Cards.Text>
              {count}
            </Cards.Text>
          </Cards.Body>
        </Cards>
      ))}
    </>
  );
}

export default Card;