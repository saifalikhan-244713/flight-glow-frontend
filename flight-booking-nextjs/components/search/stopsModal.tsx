// components/search/StopsModal.tsx

import React from 'react';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const StopsModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-80"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Your modal content goes here */}
                <p>This is a modal</p>
            </div>
        </div>
    );
};

export default StopsModal;
