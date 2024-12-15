class UserModel {
  constructor(data) {
    this.id = data.id || null;
    this.firstName = data.userInfos?.firstName || "Unknown";
    this.lastName = data.userInfos?.lastName || "Unknown";
    this.age = data.userInfos?.age || null;
    this.todayScore = data.todayScore || data.score || 0;
    this.keyData = {
      calorieCount: data.keyData?.calorieCount || 0,
      proteinCount: data.keyData?.proteinCount || 0,
      carbohydrateCount: data.keyData?.carbohydrateCount || 0,
      lipidCount: data.keyData?.lipidCount || 0,
    };
  }
}

export default UserModel;
