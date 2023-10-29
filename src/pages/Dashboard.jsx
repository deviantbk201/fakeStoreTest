import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../ui/Row";
export default function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>

      <DashboardLayout />
    </>
  );
}
