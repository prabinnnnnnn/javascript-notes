class Boss{
  constructor(bossName, bossId) {
    this.bossName = bossName
    this.bossId = bossId
  }

  getBossInfo() {
    return `${this.bossName} is my boss and his id is ${this.bossId}`
  }
}

//Booss is parent of Emp

class Emp extends Boss{
  constructor(bossName, bossId, EmpName) {
    super(bossName, bossId)
    this.EmpName = EmpName
  }

  getBossName() {
    return `${this.getBossInfo()}  ${this.EmpName} is my employee`
  }
  
}

const user2 = new Boss('richers', '0001')
const user1 = new Emp('Prabin', '000', 'rio')

