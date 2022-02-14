import { AdvertisementsTableHeader } from "./AdvertisementsTableHeader";
import { Table } from "components/Table";
export const AdvertisementsTable = ({ data }) => {
  const thead = AdvertisementsTableHeader();
  return <Table tbody={data} thead={thead} />;
};
