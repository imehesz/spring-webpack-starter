var DefaultController = require("../core/DefaultController.js");

class WebAppController extends DefaultController {
  riotInit() {
    super.riotInit();

    console.log("INIT FROM WebAppTag");
  }
}

module.exports = WebAppController;
