import { useContext } from 'react';
import { ViewportContext } from '../context/ViewportContext';

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export const useViewport = () => {
	/* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
	const { width, height } = useContext(ViewportContext);
	return { width, height };
};
