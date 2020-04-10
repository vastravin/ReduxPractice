import React, { useState, useEffect, ReactElement } from "react";
import { IProductService } from "../../../services/productService/IProductService";
import { useInjection } from "../../../ioc.react";
import { PRODUCT_SERVICE_NAME } from "../../../constants";
import { Product } from "../../../types/products/Product";
import { Card, Row, Col, Button } from "react-bootstrap";
import "../styles/productTable.css";
import { User } from "../../../types/user/user";
import { AppState } from "../../../store/store";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { AppActions } from "../../../types/actions/appActions";
import { addToCart } from "../../../thunks/homePageThunks";

type Props = ComponentProps & LinkDispatchProps;

type ComponentProps = {
  categoryId: string;
};

const colValueStyle = "pl-0";
const colPropertyStyle = "pl-0 font-weight-bold text-right";

const buttonVariant = (available: boolean): "success" | "secondary" => {
  return available ? "success" : "secondary";
};

const buttonText = (available: boolean): string => {
  return available ? "Add to cart" : "Out of stock";
};

const cardElement = (
  product: Product,
  authAddToCart: (product: Product) => void
): ReactElement => {
  return (
    <Card className="product-card" key={"product_cart_" + product.id}>
      <Card.Img
        variant="top"
        src={product.imageRef}
        height="180"
        width="180"
      ></Card.Img>
      <Card.Body>
        <Card.Title className="text-center">{product.productName}</Card.Title>

        <Row className="text-danger">
          {product.currency}
          {product.price}
        </Row>
        <Row>
          <Col className={colPropertyStyle}>Material:</Col>
          <Col className={colValueStyle}>{product.property}</Col>
        </Row>
        <Row>
          <Col className={colPropertyStyle}>Date:</Col>
          <Col className={colValueStyle}>{product.creationDate}</Col>
        </Row>
        <Button
          variant={buttonVariant(product.available)}
          className="w-100 mt-5"
          disabled={!product.available}
          onClick={() => authAddToCart(product)}
        >
          {buttonText(product.available)}
        </Button>
      </Card.Body>
    </Card>
  );
};

const ProductTable: React.FC<Props> = ({ categoryId, addToCart }) => {
  const productService: IProductService = useInjection<IProductService>(
    PRODUCT_SERVICE_NAME
  );

  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    productService.getProductsByCategory(categoryId).then(res => {
      setProducts(res);
    });
  }, [categoryId]);

  productService.addProductToCart({
    id: "1",
    imageRef:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS6Jw1GTi9vacVc7mCC_BCbKi0v307n_3ZFb4eiLgOs7lyLGoHP4SSRhfVgFahUmoYK6R5eJeJYFIi5-nfP4EE",
    productSubCategory: "Kettle",
    property: "Metal",
    productName: "Modern Kettle",
    price: 34,
    currency: "$",
    available: true,
    creationDate: "2020"
  });

  return (
    <div className="d-flex flex-wrap">
      {products?.map(item => {
        return cardElement(item, addToCart);
      })}
    </div>
  );
};

type LinkDispatchProps = {
  addToCart: (product: Product) => void;
};

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): LinkDispatchProps => {
  return {
    addToCart: bindActionCreators(addToCart, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ProductTable);
