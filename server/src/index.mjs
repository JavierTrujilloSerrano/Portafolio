import { server, PORT } from "./server.mjs";

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default server;