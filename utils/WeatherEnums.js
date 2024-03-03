export const WeatherEnums =
{
    'LOCATION': 'ACCESS_FINE_LOCATION',

};

export const SETTINGS_FIELD_NAMES =
    [
        { field: 'SERVER_ADDRESS', title: 'Palvelimen ip osoite', type: 'text' },
        { field: 'WEATHER_URL', title: 'Säädatan https osoite', type: 'multitext' },
        { field: 'APP_FIELD_TEST', title: 'Testi kenttä', type: 'text' },
        { field: 'APP_START_VIEW', title: 'Aloitusnäkymä', type: 'select', items: [{ name: 'Valitse aloitusnäyttö...', value: 1 }, { name: 'Graaffi', value: 1 }, { name: 'Säätapahtumat', value: 2 }, { name: 'Säätiedot', value: 3 }] }
    ];

export const PhotoStatus =
{
    'ADDED': 1,
    'REMOVED': 2,
    'EXISTING': 3
};