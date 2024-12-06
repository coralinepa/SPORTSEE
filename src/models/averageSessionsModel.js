class AverageSessionsModel {
  constructor(data) {
    this.userId = data.userId || null;
    this.sessions =
      data.sessions?.map((session) => ({
        day: session.day || 0,
        sessionLength: session.sessionLength || 0,
      })) || [];
  }
}
export default AverageSessionsModel;
