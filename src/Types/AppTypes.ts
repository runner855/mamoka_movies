
export interface UserData {
  user:LoginProps
}

export interface LoginProps {
  username:string;
  password:string;
  grant_type:string;
}

export interface MoviesData{
  data:MoviesListProps[];
}

export interface MoviesListProps {
  id:number;
  available:string;
  category:CategoryProps[];
  director:string;
  title:string;
  year:string;
}

export interface CategoryProps{
id:number;
name:string;
}

