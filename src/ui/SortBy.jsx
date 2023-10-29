import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  return <Select options={options} value={sortBy} type="white" />;
}
