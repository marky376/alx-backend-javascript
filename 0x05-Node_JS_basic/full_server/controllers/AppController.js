/**
 * Contains the miscellaneous route handlers.
 * @author Mark Munyao <https://github.com/marky376>
 */

class AppController {
	static getHomepage(request, response) {
		response.status(200).send('Hello Holberton School!');
	}
}
export default AppController;
module.exports = AppController;
