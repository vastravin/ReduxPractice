import metaData from "../../stubs/metaData.json";
import { IMetaDataService } from "./IMetaDataService";
import { MetaData } from "../../types/metaData/metaData";
import { injectable } from "inversify";

@injectable()
export class StubMetaDataService implements IMetaDataService {
  async getMetaData(): Promise<MetaData | null> {
    const meta: MetaData | undefined = metaData;

    return meta ? meta : null;
  }
}
