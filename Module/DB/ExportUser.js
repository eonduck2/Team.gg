// * 단위 테스트 O

import Database from 'better-sqlite3';
class ExportUser{
  constructor(params) {
    this.findQuery = "SELECT * FROM summoners where puuid = ?";
    this.db = new Database("./summoner.db", { verbose: console.log });
    this.db.pragma("journal_mode = WAL");
  }
  async exportUserInfo(puuid){
    let query = this.db.prepare(this.findQuery);
    let userObj = query.get(puuid);
    return userObj;
  }
}

export default ExportUser;