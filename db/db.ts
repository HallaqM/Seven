
import { DataSource } from 'typeorm';
import { Tasks } from './entities/Tasks.js';

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "hello",
  synchronize: true,
  entities: [Tasks],

})

export default AppDataSource;