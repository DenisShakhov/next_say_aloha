'use client';

import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Loading = () => {
  useEffect(() => {
    const toastId = toast.loading('Loading ...', {
        position: 'top-center'
    });
    
    return () => {
      toast.dismiss(toastId);
    };
  }, []);

  return null;
};

export default Loading;
