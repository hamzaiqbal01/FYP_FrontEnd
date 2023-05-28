import { Get } from "./Http";

export const GetDiscaseListService = async () => {
  return await Get("http://localhost:3001/api/disease");
};
