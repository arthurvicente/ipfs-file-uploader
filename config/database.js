import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ipfsDB', 'arthur', 'fuckYou', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
