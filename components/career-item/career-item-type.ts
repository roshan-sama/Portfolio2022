interface CareerItemType {
  id: string;
  companyId: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  imgUrl?: string;
  roleId?: string;
  projectIDs?: string[];
}

export default CareerItemType;