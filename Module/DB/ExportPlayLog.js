// * 단위 테스트 O
const Database = require("better-sqlite3");
class ExportPlayLog {
  constructor() {
    this.logQuery = "SELECT * FROM playLog where puuid = ?";
    this.db = new Database("./summoner.db", { verbose: console.log });
    this.db.pragma("journal_mode = WAL");
  }
  exportBattleLog(puuid) {
    let query = this.db.prepare(this.logQuery);
    let logObj = query.all(puuid);
    let arr = [];
    for (let ele of logObj) {
      arr.push(ele.gameId);
    }
    this.db.close();
    return arr;
  }
}

module.exports = ExportPlayLog;