var DefaultController = require("../core/DefaultController.js");

class SearchFormController extends DefaultController {
  riotInit() {
    super.riotInit();
    
    this.rs.btnClick = () => {
      var win = window.open("https://www.google.com/search?q=" + this.rs.searchText.value);
      win.focus();
    };
    
    console.log("INIT FROM SearchFormController");
  }
}

module.exports = SearchFormController;
