import { useContext } from 'react';
import { DirectionSettingsContext } from './DirectionSettingsContext';

// ----------------------------------------------------------------------

export const useDirectionSettings = () => useContext(DirectionSettingsContext);
