import React from 'react';

// Updated props interface to include width, height, top, and left
interface CustomDialogProps {
  title: string;
  text: string;
  onClose: () => void; // Callback function for the OK button
  width?: number; // Optional width property
  height?: number; // Optional height property
  top?: string; // Optional top property
  left?: string; // Optional left property
}

/**
 * CustomDialog component creates a dialog box with given title, text, and an OK button.
 * The OK button is right-aligned and styled with a modern appearance. The dialog box size
 * and position can be customized through props. Vertical padding is removed, and horizontal padding
 * is minimized to give a sleek look.
 *
 * @param {CustomDialogProps} props - Properties for customizing the dialog's appearance and behavior.
 * @returns {React.FC<CustomDialogProps>} A dialog component with modern styling.
 */
const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  text,
  onClose,
  width = 400, // Default width if not provided
  height = 200, // Default height if not provided
  top = '50%',
  left = '50%',
}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: top,
        left: left,
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '0 20px 20px 20px', // Added bottom padding for spacing around the button
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex', // Using flex to layout the content
        flexDirection: 'column', // Stack content vertically
      }}
    >
      <h1>{title}</h1>
      <p>{text}</p>
      <div style={{ marginTop: 'auto', textAlign: 'right' }}> {/* Container for the button */}
        <button
          onClick={onClose}
          style={{
            padding: '10px 20px',
            margin: '10px 0',
            backgroundColor: '#007bff', // Example blue color
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')} // Darken button on hover
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')} // Revert button color on mouse out
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;
