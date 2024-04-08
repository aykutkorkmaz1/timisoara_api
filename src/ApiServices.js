import useAxios from 'axios-hooks';

const URL = 'https://65ffe1bcdf565f1a61456e41.mockapi.io/api/v1/products/products';

export const useMethod_GET = () => {
    const { data, error } = useAxios({
      url: URL,
      method: 'GET',
    });
  
    return { data, error };
};

export const useMethod_POST = () => {
    const { data, error } = useAxios({
      URL,
      method: 'POST',
    });
  
    return { data, error };
};

export const useMethod_PUT = () => {
    const { data, error } = useAxios({
      URL,
      method: 'PUT',
    });
  
    return { data, error };
};

export const useMethod_DELETE = () => {
    const { data, error } = useAxios({
      URL,
      method: 'DELETE',
    });
  
    return { data, error };
};