import FDADataSearch from "./FDADataSearch";

interface RowData {
    name: string;
    email: string;
    company: string;
  }
export default function Progress() {
    const data: RowData[] = [{name: "Jack", email:"jj280822@gmail.com", company:"CAE"}]

  

  return (<FDADataSearch data={data} />);
}