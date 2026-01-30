import { X, CircleAlertIcon, Check } from 'lucide-react';

interface PopUpModalProps {
    onClose: () => void;
    popUpMessage: string,
    iconName: string
}

export const PopUpModal = ({ onClose, popUpMessage, iconName }: PopUpModalProps) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm max-h-sm overflow-y-auto">
                <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl">
                    <div className="flex  items-center justify-between">
                        <span>{iconName === "error" ? <CircleAlertIcon  className='text-red-500 h-4 w-4'/> : <Check className='text-green-500 h-4 w-4'/> }</span>
                        <h2 className="text-sm text-slate-800">{popUpMessage}</h2>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
                            <X className="w-6 h-6 text-slate-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
