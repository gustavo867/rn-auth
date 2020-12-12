export interface State {
  user: {
    error: boolean;
    user: {
      token: string;
      name: string;
      email: string;
      profilePic: string;
    } | null;
    loading: boolean;
    msg: string;
    signed: boolean;
  };
}
