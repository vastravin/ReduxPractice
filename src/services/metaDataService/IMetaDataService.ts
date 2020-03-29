import { MetaData } from "../../types/metaData/metaData";

export interface IMetaDataService {
  getMetaData: () => Promise<MetaData | null>;
}
