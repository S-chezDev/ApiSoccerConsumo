const headersHandler = (req, res, next) => {
    // Manejar los encabezados de respuesta de la API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Aquí puedes agregar más encabezados según sea necesario

    next();
};

export default headersHandler;