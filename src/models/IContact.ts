export interface IContact {
  id: number;
  name: string;
  email: string;
  mobile?: number;
}

export interface IContactArrayModel {
  all_contacts: IContact[];
  selected_contact: IContact;
}
