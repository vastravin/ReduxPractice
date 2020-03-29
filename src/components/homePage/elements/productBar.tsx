import React from "react";
import { ListGroup } from "react-bootstrap";
import { AppState } from "../../../store/store";
import { connect } from "react-redux";
import { CATEGORY_LINK_PREFIX } from "../../../constants";
import { MetaDataState } from "../../../store/metaData/metaDataReducer";

type Props = LinkStateProps;

const ProductBar: React.FC<Props> = ({ metaDataState }) => {
  if (metaDataState.isLoading) {
    return <div>Spinner</div>;
  }
  return (
    <ListGroup>
      <ListGroup.Item active={true}>Select your product</ListGroup.Item>
      {metaDataState.metaData?.productCategories?.map(item => {
        return (
          <ListGroup.Item
            action
            href={CATEGORY_LINK_PREFIX + item.id}
            key={"category_product_" + item.id}
            variant="dark"
          >
            {item.category}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

type LinkStateProps = {
  metaDataState: MetaDataState;
};

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    metaDataState: state.metaDataState
  };
};

export default connect(mapStateToProps)(ProductBar);
