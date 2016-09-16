class Barg {
  constructor() {
    // TODO: implement Controllers
    this.controller = Controllers.getController('barg');

    // TODO: implement event listener
    this.on('lose', this.onLose);
  }

  onLose() {
    this.controller.attemptDestroy();
  }
}

export default { Barg };
