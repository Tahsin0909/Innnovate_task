import Banner from "@/components/banner/Banner";
import CompanyEvent from "@/components/companyEvent/CompanyEvent";
import Customer from "@/components/customer/Customer";
import GridColor from "@/components/gridColor/GridColor";
import Overview from "@/components/overview/Overview";
import Team from "@/components/team/Team";



export default function Home() {
  return (
    <div>
      <Banner />
      <Team />
      <Customer/>
      <Overview/>
      <GridColor/>
      <CompanyEvent/>
    </div>
  );
}
