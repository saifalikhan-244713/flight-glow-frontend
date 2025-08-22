const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://flightbookinglaravel.test/api/v1' : 'https://flight.anglara.com/api/v1';