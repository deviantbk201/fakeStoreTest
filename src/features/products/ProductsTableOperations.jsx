import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

import TableOperations from "../../ui/TableOperations";

export default function ProductTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="category"
        options={[
          { value: "all", label: "ALL" },
          { value: "fashion", label: "Fashion" },
          { value: "electronics", label: "Electronics" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-dsc", label: "Sort by name (Z-A)" },
          { value: "price-dsc", label: "Sort by Price(High to Low)" },
          { value: "price-asc", label: "Sort by Price(Low to High)" },
        ]}
      />
    </TableOperations>
  );
}
