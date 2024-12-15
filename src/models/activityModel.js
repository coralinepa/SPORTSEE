class ActivityModel {
  constructor(data) {
    this.userId = data.userId || null;
    this.sessions =
      data.sessions?.map((session) => ({
        day: session.day || "Unknown",
        kilogram: session.kilogram || 0,
        calories: session.calories || 0,
      })) || [];
  }
}

export default ActivityModel;
