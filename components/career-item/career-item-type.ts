interface CareerItemType {
  id: string;
  companyId: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  imgUrl?: string;
  roleName?: string;
  projectIDs?: string[];
}

export default CareerItemType;