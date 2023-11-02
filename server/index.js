const app = require("./src/app");
const { sequelize } = require("./src/Database/database");
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Servidor levantado en el puerto: ${PORT}`);
});
