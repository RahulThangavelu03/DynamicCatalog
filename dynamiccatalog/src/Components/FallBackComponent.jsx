import React from 'react';
import Button from '@mui/material/Button';
function ErrorFallback({ error, resetErrorBoundary }) {
   return (
       <div role="alert">
           <p>Something went wrong:</p>
           <pre>{error.message}</pre>
      
           <Button variant="contained"  onClick={resetErrorBoundary}>Try Again</Button>
       </div>
   );
}
export default ErrorFallback;