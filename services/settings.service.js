import http from '../db';
// import DataConnection from '../db';
class SettingsService {

    // async updateSetting(id, data) {
    //     return await http.post("settings/:id", data);
    // }

    async getSettings() {
        return await http.get('/settings');
    }

    async getSettingByName(name) {
        return await http.get(`/settings/${name}`)
    }

    async saveSettings(data) {
        return await http.post("/settings", data);
    }


}

export default new SettingsService;