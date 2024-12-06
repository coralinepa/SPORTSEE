import {
  UserModel,
  ActivityModel,
  AverageSessionsModel,
  PerformanceModel,
} from "../models";

import config from "../config";
import {
  getUserMainData as mockGetUserMainData,
  getUserActivity as mockGetUserActivity,
  getUserAverageSessions as mockGetUserAverageSessions,
  getUserPerformance as mockGetUserPerformance,
} from "../mockData";

async function fetchData(endpoint, mockFn, Model) {
  const fetchFromApi = async () => {
    const response = await fetch(`${config.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const result = await response.json();
    return result?.data;
  };

  const data = config.useMock === "true" ? mockFn() : await fetchFromApi();
  return new Model(data);
}

const getUserMainData = (userId) =>
  fetchData(`/${userId}`, () => mockGetUserMainData(userId), UserModel);

const getUserActivity = (userId) =>
  fetchData(
    `/${userId}/activity`,
    () => mockGetUserActivity(userId),
    ActivityModel
  );

const getUserAverageSessions = (userId) =>
  fetchData(
    `/${userId}/average-sessions`,
    () => mockGetUserAverageSessions(userId),
    AverageSessionsModel
  );

const getUserPerformance = (userId) =>
  fetchData(
    `/${userId}/performance`,
    () => mockGetUserPerformance(userId),
    PerformanceModel
  );

async function getAllUserData(userId) {
  try {
    const [mainData, activityData, averageSessionsData, performanceData] =
      await Promise.all([
        getUserMainData(userId),
        getUserActivity(userId),
        getUserAverageSessions(userId),
        getUserPerformance(userId),
      ]);

    return {
      mainData,
      activityData,
      averageSessionsData,
      performanceData,
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch all user data: ${error.message}`);
  }
}

export default getAllUserData;
