import {
  HiOutlineCalculator,
  HiOutlineCurrencyRupee,
  HiOutlineGlobeAlt,
  HiOutlineSquare2Stack,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

export default function DashboardStats() {
  return (
    <>
      <Stat
        title="Sales"
        color="purple"
        value={1232}
        icon={<HiOutlineGlobeAlt />}
      />
      <Stat
        title="Items"
        color="yellow"
        value={876}
        icon={<HiOutlineSquare2Stack />}
      />
      <Stat
        title="Revenue"
        color="green"
        value={formatCurrency(42467)}
        icon={<HiOutlineCalculator />}
      />
      <Stat
        title="Profit"
        color="blue"
        value={formatCurrency(22345)}
        icon={<HiOutlineCurrencyRupee />}
      />
    </>
  );
}
