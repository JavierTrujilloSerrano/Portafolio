import { server, PORT } from './server.js';


  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default server;