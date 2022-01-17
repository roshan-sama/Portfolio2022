import companies from "../components/Company/companies";

const GetCompanyById = (id: string) => {
  return companies.find((company) => company.id == id);
};

export default GetCompanyById;
