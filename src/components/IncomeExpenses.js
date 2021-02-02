import { Container, Row, Col } from 'react-bootstrap';

const IncomeExpenses = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
    <h4>Income</h4>
    <p className="">$0.00</p>
      </Col>
      <Col>
    <h4>Expenses</h4>
    <p className="">$0.00</p>
      </Col>
    </Row>

    </Container>
    </>
  )
}

export default IncomeExpenses;
