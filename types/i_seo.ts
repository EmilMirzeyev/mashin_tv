import { WebPage, WithContext } from "schema-dts";
import { PartialDeep } from "type-fest";
import { IMeta } from "./i_meta";

export interface ISeo extends PartialDeep<IMeta> {
  templateTitle?: string
  structuredData?: WithContext<WebPage>
}
