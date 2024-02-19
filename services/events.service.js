import http from '../db';

class EventsService {

    async getEvents() {
        return await http.get('/events');
    }

    async getEventById(id) {
        return await http.get(`/events/${id}`)
    }

    async addEvent(data) {
        return await http.post("/events", data);
    }

    async updateEvent(id, data) {
        return await http.post("events/:id", data);
    }
}

export default new EventsService;