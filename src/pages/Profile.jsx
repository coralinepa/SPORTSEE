import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";

import apple from "../assets/icons/apple.png";
import energy from "../assets/icons/energy.png";
import cheeseburger from "../assets/icons/cheeseburger.png";
import chicken from "../assets/icons/chicken.png";

import getAllUserData from "../services/api";
import Card from "../components/Card";
import {
  BarChart,
  LineChart,
  RadarChart,
  PieChart,
} from "../components/Charts";
import LoadingIndicator from "../components/Loading";
import NotFound from "./NotFound";

const Root = styled.div`
  margin: 110px;
`;

const Header = styled.header`
  margin-bottom: 77px;
`;

const Title = styled.h2`
  color: #000;
  font-weight: 500;
  font-size: 48px;
`;

const Subtitle = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 18px;
  padding-top: 32px;
`;

const User = styled.span`
  color: red;
`;

const Main = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const Charts = styled.div`
  flex: 1 1 auto;
  gap: 28px;
  display: flex;
  flex-direction: column;
`;

const BottomCharts = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

const ChartContainer = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #fbfbfb;
  height: 263px;
  width: 33.33%;
  position: relative;
`;

const Activity = styled(ChartContainer)`
  height: 320px;
  width: 100%;
`;

const Sessions = styled(ChartContainer)`
  background-color: #ff0000;
`;

const Performance = styled(ChartContainer)`
  background-color: #282d30;
`;

const Score = styled(ChartContainer)``;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 39px;
  @media (max-width: 1300px) {
    flex-direction: row;
    gap: 24px;
  }
`;

function transformActivityData(data) {
  return data.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
}

const DAYS_MAPPING = ["L", "M", "M", "J", "V", "S", "D"];

const KIND_LABELS = {
  intensity: "intensité",
  speed: "vitesse",
  strength: "force",
  energy: "énergie",
  cardio: "cardio",
  endurance: "endurance",
};

function transformSessionData(data) {
  return data.sessions.map((session) => ({
    ...session,
    day: DAYS_MAPPING[session.day - 1],
  }));
}

function transformPerformanceData(data) {
  return Object.values(data.kind).map((kind) => {
    const { value = 0 } = data?.data.find((item) => item.kind === kind) || {};

    console.log(kind);

    return {
      kind,
      value,
      label: KIND_LABELS[kind],
    };
  });
}

function transformScoreValue(data) {
  return [{ value: data }, { value: 1 - data }];
}

function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUserData(id)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (!data && !loading) {
    return <Navigate to="/not-found" />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <Root>
      <Header>
        <Title>
          Bonjour <User>{data?.mainData?.firstName}</User>
          <Subtitle>
            Félicitations, vous avez explosé vos objectifs hier
          </Subtitle>
        </Title>
      </Header>
      <Main>
        <Charts>
          <Activity>
            <BarChart data={transformActivityData(data?.activityData)} />
          </Activity>
          <BottomCharts>
            <Sessions>
              <LineChart
                data={transformSessionData(data?.averageSessionsData)}
              />
            </Sessions>
            <Performance>
              <RadarChart
                data={transformPerformanceData(data?.performanceData)}
              />
            </Performance>
            <Score>
              <PieChart
                data={transformScoreValue(data?.mainData?.todayScore)}
              />
            </Score>
          </BottomCharts>
        </Charts>
        <Aside>
          <Card
            userKeyData={data?.mainData?.keyData?.calorieCount}
            unit="kcal"
            subtitle="Calories"
            bgColor="rgba(255, 0, 0, .102)"
            image={energy}
          />
          <Card
            userKeyData={data?.mainData?.keyData?.proteinCount}
            unit="g"
            subtitle="Proteines"
            bgColor="rgba(74, 184, 255, .102)"
            image={chicken}
          />
          <Card
            userKeyData={data?.mainData?.keyData?.carbohydrateCount}
            unit="g"
            subtitle="Glucides"
            bgColor="rgba(253, 204, 12, .102)"
            image={apple}
          />
          <Card
            userKeyData={data?.mainData?.keyData?.lipidCount}
            unit="g"
            subtitle="Lipides"
            bgColor="rgba(253, 81, 129, .102)"
            image={cheeseburger}
          />
        </Aside>
      </Main>
    </Root>
  );
}

export default Profile;
