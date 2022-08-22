export default class Skill {
  constructor(type) {
    this.type = type;
  }

  setAttack(bloks, attack) {
    const procent = {
      1: 100, 2: 90, 3: 80, 4: 70, 5: 60, 6: 50, 7: 40, 8: 30, 9: 20, 10: 10, 11: 0,
    };
    // eslint-disable-next-line no-mixed-operators
    return this.type === 'Magican' || this.type === 'Daemon' ? procent[bloks] / attack * 100 : attack;
  }

  setStonned(bloks, attack) {
    return this.type === 'Magican' || this.type === 'Daemon' ? this.setAttack(bloks, attack) - Math.log2(bloks) * 5 : attack;
  }
}
