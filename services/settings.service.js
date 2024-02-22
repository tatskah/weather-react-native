import http from '../db';

class SettingsService {

    async getSettings() {
        return await http.get('/settings');
    }

    async getSettingById(id) {
        return await http.get(`/settings/${id}`)
    }

    async addSetting(data) {
        return await http.post("/settings", data);
    }

    async updateSetting(id, data) {
        return await http.post("settings/:id", data);
    }
}

export default new SettingsService;