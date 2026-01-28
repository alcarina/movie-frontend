import { AlertCircle, X } from 'lucide-react';
const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <AlertCircle className="text-red-500 --flex-shrink-0 mt-0.5" size={20} />
        <div className="flex-1">
          <p className="text-red-800 font-medium">Error</p>
          <p className="text-red-600 text-sm mt-1">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition"
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;

