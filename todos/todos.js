// Imports
import UserService from '../services/UserService.js';

// Handlers
async function handlePageLoad() {
    const user = await UserService.getUser();
    if (!user) {
        location.replace('/');
    }
}

handlePageLoad();
