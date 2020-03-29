const connection = require('../database/connection');

module.exports = {
    async get(request, response) {
        const { id } = request.body;

        const result = await connection('ongs')
            .select('name')
            .where('id', id)
            .first();

        if (!result) {
            return response.status(400).json({
                error: 'ONG not found'
            });
        }

        return response.json(result);
    }
}