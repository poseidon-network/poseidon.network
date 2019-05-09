interface IUser {
  id?: string;
  token?: string;
  avatar?: string;
  isLogin?: boolean;
}

interface ITextBaseProps {
  children: React.ReactNode;
  center?: boolean;
  margin?: string;
  color?: string;
  id?: string;
}
