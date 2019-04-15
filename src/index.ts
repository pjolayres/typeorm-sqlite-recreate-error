import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Photo } from "./entity/Photo";

createConnection().then(async connection => {

    const user = new User();
    user.name = "Timber";
    user.height = 123.12345;

    const photo = new Photo();
    photo.name = 'Saw';
    photo.user = user;

    user.photos = [photo];

    await connection.manager.save(user);

    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));
