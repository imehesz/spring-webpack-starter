class DefaultController {
  constructor(riotScope) {
    this.riotScope = riotScope;
    
    this.riotInit();
  }
  
  riotInit() {
    this.rs = this.riotScope;
  }
}

module.exports = DefaultController;
