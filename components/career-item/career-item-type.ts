interface CareerItemType {
  id: string;
  companyid: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  imgUrl?: string;
  roleName?: string;
  projectIDs?: string[];
}

export default CareerItemType;