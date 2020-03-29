import React, { useState, SetStateAction, useEffect } from "react";
import ReactDOM from "react-dom";
import { IProductService } from "../../../services/productService/IProductService";
import { useInjection } from "../../../ioc.react";
import { PRODUCT_SERVICE_NAME } from "../../../constants";
import { Product } from "../../../types/products/Product";
import { Table, Image } from "react-bootstrap";
import ProductImageModal, { ProductImageModalState } from "./productImageModal";

type Props = ComponentProps;

type ComponentProps = {
  categoryId: string;
};

const tableCellClass: string = "text-center align-middle";
const tableHeaderClass: string = "text-center";

const mapBody = (
  products: Product[] | null,
  setModalState: React.Dispatch<SetStateAction<ProductImageModalState>>
): React.ReactElement | null => {
  if (!products || !products?.some(x => x)) {
    return null;
  }

  return (
    <tbody>
      {products.map(item => {
        return (
          <tr key={"product_item_" + item.id}>
            <td className="w-25">
              <Image
                src={item.imageRef}
                fluid
                onClick={() =>
                  setModalState({ isShown: true, imageRef: item.imageRef })
                }
              />
            </td>
            <td className={tableCellClass}>{item.productName}</td>
            <td className={tableCellClass}>{item.property}</td>
            <td className={tableCellClass}>{item.price}</td>
            <td className={tableCellClass}>{item.creationDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

const productImageModalElement = (
  modalState: ProductImageModalState,
  setModalState: React.Dispatch<SetStateAction<ProductImageModalState>>
) => {
  if (modalState.isShown) {
    return (
      <ProductImageModal
        modalState={modalState}
        setModalState={setModalState}
      />
    );
  }

  return <div></div>;
};

const ProductTable: React.FC<Props> = ({ categoryId }) => {
  const productService: IProductService = useInjection<IProductService>(
    PRODUCT_SERVICE_NAME
  );
  const [products, setProducts] = useState<Product[] | null>(null);
  const [modalState, setModalState] = useState<ProductImageModalState>({
    isShown: false,
    imageRef: ""
  });

  productService
    .getProductsByCategory(categoryId)
    .then(res => setProducts(res));

  return (
    <Table striped bordered variant="dark">
      <thead>
        <tr>
          <th className={tableHeaderClass}>Image</th>
          <th className={tableHeaderClass}>Name</th>
          <th className={tableHeaderClass}>Property</th>
          <th className={tableHeaderClass}>Price</th>
          <th className={tableHeaderClass}>Creation Date</th>
        </tr>
      </thead>
      {mapBody(products, setModalState)}
      <ProductImageModal
        modalState={modalState}
        setModalState={setModalState}
      />
    </Table>
  );
};

export default ProductTable;
