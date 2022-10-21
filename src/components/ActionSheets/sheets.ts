import RemoveFavorites from './components/Sheets/RemoveFavorites';

import {registerSheet} from 'react-native-actions-sheet';

registerSheet('example', RemoveFavorites, 'global', 'local');
console.log('register');

export {};
