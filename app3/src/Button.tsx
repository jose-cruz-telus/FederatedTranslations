import * as React from 'react';
import { useTranslation } from 'react-i18next';
// import FOMCi18n from 'Translation/Config';
const TT = React.lazy(() => import('Translation/Text'));

interface ButtonProps {
	text?: string;
}

const Button = ({ text }: ButtonProps) => {

  return (
		<React.Suspense fallback="Loading Translation">
	    <button>
		    <TT textKey="a2b" />
    	</button>
		</React.Suspense>
	)
};

export default Button;
