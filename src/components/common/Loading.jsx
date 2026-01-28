const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-500 border-t-transparent"></div>
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  );
};
export default Loading;
