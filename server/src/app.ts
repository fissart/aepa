import express, { Application} from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

import news from './3.routes/1_new.route'
import land from './server/land.route'
import user from './3.routes/1_users.route'
import curse from './3.routes/2_curses.route'
import section from './3.routes/3_sections.route'
import theme from './3.routes/4_themes.route'
import task from './3.routes/5_task.route'
import integer from './3.routes/6_integer.route'

import MV from './3.routes/7_MV.route'
import TESIS from './3.routes/16_TESIS.route'
import BIBLIOTECA from './3.routes/17_BIBLIOTECA.route'
import AVERAGE from './3.routes/AVERAGE.route'
import FilecurseTeacher from './3.routes/FilecurseTeacher.route'

// Initializations
const app: Application = express();
// Settings
app.set('port', process.env.PORT || 8000);
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/news", news);
app.use("/api/land", land);
app.use('/api/users', user);
app.use("/api/curses", curse);
app.use("/api/sections", section);
app.use("/api/themes", theme);
app.use("/api/task", task);
app.use("/api/integer", integer);

app.use("/api/MV", MV);
app.use("/api/TESIS", TESIS);
app.use("/api/BIBLIOTECA", BIBLIOTECA);
app.use("/api/AVERAGE", AVERAGE);
app.use("/api/FilecurseTeacher", FilecurseTeacher);


// this folders for this application will be used to store public file images
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
