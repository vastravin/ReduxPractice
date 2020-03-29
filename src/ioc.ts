import { Container } from "inversify";
import { IUserService } from "./services/userService/IUserService";
import {
  USER_SERVICE_NAME,
  META_DATA_SERVICE_NAME,
  PRODUCT_SERVICE_NAME
} from "./constants";
import { StubUserService } from "./services/userService/StubUserService";
import { IMetaDataService } from "./services/metaDataService/IMetaDataService";
import { StubMetaDataService } from "./services/metaDataService/StubMetaDataService";
import { IProductService } from "./services/productService/IProductService";
import { StubProductService } from "./services/productService/StubProductService";

export const container = new Container();

container.bind<IUserService>(USER_SERVICE_NAME).to(StubUserService);
container
  .bind<IMetaDataService>(META_DATA_SERVICE_NAME)
  .to(StubMetaDataService);
container.bind<IProductService>(PRODUCT_SERVICE_NAME).to(StubProductService);
