export type Student = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  enrollNo: string;
  dateOfAdmission: string;
};

export enum ModalType {
    Create="Create",
    Update="Update"
}