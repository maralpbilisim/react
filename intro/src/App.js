import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap"

function App() {
  let Productinfo={title:"Product List"}
  let Categoryinfo={title:"Category List"}
  return (
    <div>
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={Categoryinfo}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList info={Productinfo}></ProductList>
          </Col>

        </Row>

      </Container>

    </div>
  );
}

export default App;
