import React, { useEffect } from "react";
import { Row, Col, Tab, Container } from "react-bootstrap";
import ProductBar from "./elements/productBar";
import ProductPane from "./elements/productPane";
import { AppState } from "../../store/store";
import { connect } from "react-redux";
import { CATEGORY_LINK_PREFIX, HOME_PAGE_URL } from "../../constants";
import { MetaDataState } from "../../store/metaData/metaDataReducer";
import { RouterState, push } from "connected-react-router";
import { Dispatch, bindActionCreators } from "redux";
import { AppActions } from "../../types/actions/appActions";

type PushType = typeof push;

type Props = LinkStateProps & LinkDispatchProps;

const HomePage: React.FC<Props> = ({ metaDataState, router, push }) => {
  const routerHash: string = router.location.hash;

  useEffect(() => {
    if (!routerHash) {
      push(HOME_PAGE_URL + CATEGORY_LINK_PREFIX + "1");
    }
  }, [routerHash, push]);

  if (metaDataState.isLoading) {
    return <div>Spinner</div>;
  }

  return (
    <Container className="mt-3">
      <Tab.Container id="products-container" activeKey={routerHash}>
        <Row>
          <Col lg={3}>
            <ProductBar />
          </Col>
          <Col lg={9}>
            <ProductPane />
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

type LinkStateProps = {
  metaDataState: MetaDataState;
  router: RouterState;
};

type LinkDispatchProps = {
  push: PushType;
};

const mapStateToProps = (state: AppState): LinkStateProps => {
  return {
    metaDataState: state.metaDataState,
    router: state.router
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): LinkDispatchProps => {
  return {
    push: bindActionCreators(push, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
