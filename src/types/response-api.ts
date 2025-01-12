type ResponseAPI<T = undefined> = {
    status: string;
    message: string;
    data?: T | null;
    pagination?: object | null;
  };

export type { ResponseAPI };