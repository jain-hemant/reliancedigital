import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../../redux/slices/notificationSlice';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

const Notification = () => {
  const dispatch = useDispatch();
  const { message, type, isVisible } = useSelector(state => state.notification);

  useEffect(() => {
    let timer;
    if (isVisible) {
      // Hide notification after 3 seconds
      timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, dispatch]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="text-white text-xl" />;
      case 'error':
        return <FiAlertCircle className="text-white text-xl" />;
      case 'info':
        return <FiInfo className="text-white text-xl" />;
      default:
        return <FiCheckCircle className="text-white text-xl" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex items-center animate-slideIn">
      <div className={`${getBackgroundColor()} text-white px-4 py-3 rounded-md shadow-lg flex items-center`}>
        <div className="mr-3">
          {getIcon()}
        </div>
        <div className="mr-2">
          {message}
        </div>
        <button 
          onClick={() => dispatch(hideNotification())}
          className="ml-2 text-white hover:text-gray-200 focus:outline-none"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Notification;
