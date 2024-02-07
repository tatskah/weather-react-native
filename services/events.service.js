import http from '../db';

class EventsService
{


    getEvents()
    {
        return http.get('/events');
    }


}

export default new EventsService;