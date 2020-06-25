import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'NAME', age: 20 });
const root = document.querySelector('#root');
if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();
} else {
    throw new Error('root element not found');
}
