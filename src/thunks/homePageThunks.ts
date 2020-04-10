import { Dispatch } from "redux";
import { AppActions } from "../types/actions/appActions";
import { AppState } from "../store/store";
import { User } from "../types/user/user";
import { push } from "connected-react-router";
import { Product } from "../types/products/Product";
import { LOGIN_PAGE_URL } from "../constants";
import {
  addPathToMemoryAction,
  addMethodToMemoryAction
} from "../store/routerMemory/routerMemoryActions";
import { History, Location } from "history";

export const addToCart = (product: Product) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const addToCartStubMethod = (): void => {
      window.console.log(
        "Will be added to cart: productId: ",
        product.id,
        "product name: ",
        product.productName
      );
    };

    const user: User | null = getState().userState.user;

    if (!user) {
      const currentLocation: Location<History.PoorMansUnknown> = getState()
        .router.location;

      const currentPath: string =
        currentLocation.pathname + currentLocation.hash;
      const methodToRemember = (): void => {
        addToCartStubMethod();
      };

      dispatch(addPathToMemoryAction(currentPath));
      dispatch(addMethodToMemoryAction(methodToRemember));

      dispatch(push(LOGIN_PAGE_URL));
      return;
    }

    addToCartStubMethod();
  };
};
