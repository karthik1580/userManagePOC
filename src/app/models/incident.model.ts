export class Incident {
      _id?:string;
      title: string;
      email: string;
      issueType: string;
      description: string;
      enterpriseId: string;
      firstName: string;
      lastName: string;
      isVaidUser: boolean;
      createdDate: Date;
      status: string;
      isOpen: boolean;
      isOpenStatus: boolean;
      isClosed: boolean;
      isResolved: boolean;
      isClarification: boolean;
      isCheckBox: boolean;
      isIncidentDropdown: boolean;
}

// export interface IAgGrid {
//       enterpriseId: string;
//       name: string;
//       seatNo: string;
//       Comments: string;

// }