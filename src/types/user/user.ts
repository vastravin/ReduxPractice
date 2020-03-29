export type Profile = {
  name: string;
  birthDate: string;
};

export type User = {
  id: string;
  userName: string;
  profile: Profile;
};