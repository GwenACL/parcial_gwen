import {IntlProvider} from 'react-intl';
import App from './App';
import localEsMessages from "./locals/es";
import localEnMessages from "./locals/en";
import localFrMessages from "./locals/fr";
import { useState } from 'react';

function Intl() {

    const messages = {
        'es': localEsMessages,
        'en': localEnMessages,
        'fr': localFrMessages,
      };

    const [userLocale,setUserLocale] = useState((navigator.language).substring(0,2) === ('fr' || 'es') ? (navigator.language).substring(0,2) : 'en');

    return(
    <IntlProvider locale={userLocale} messages={messages[userLocale]}>
        <App userLocale={userLocale} setUserLocale={setUserLocale}/>
    </IntlProvider>
    );
}

export default Intl;