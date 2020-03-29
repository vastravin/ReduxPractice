import React from "react";
import { Tab } from "react-bootstrap";
import { CATEGORY_LINK_PREFIX } from "../../../constants";
import { MetaDataState } from "../../../store/metaData/metaDataReducer";
import { AppState } from "../../../store/store";
import { connect } from "react-redux";
import ProductTable from "./productTable";

type Props = LinkStateProps;

const ProductPane: React.FC<Props> = ({ metaDataState }) => {
  if (metaDataState.isLoading) {
    return <div>Spinner</div>;
  }

  return (
    <Tab.Content>
      {metaDataState.metaData?.productCategories?.map(item => {
        return (
          <Tab.Pane
            eventKey={CATEGORY_LINK_PREFIX + item.id}
            key={"products_by_category_" + item.id}
          >
            <ProductTable categoryId={item.id} />
          </Tab.Pane>
        );
      })}
    </Tab.Content>
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

export default connect(mapStateToProps)(ProductPane);
