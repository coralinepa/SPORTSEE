class PerformanceModel {
  constructor(data) {
    this.userId = data.userId || null;
    this.kind = data.kind || {};
    this.data =
      data.data.map((item) => ({
        value: item.value || 0,
        kind: data.kind[item.kind] || "Unknown",
      })) || [];
  }
}

export default PerformanceModel;
