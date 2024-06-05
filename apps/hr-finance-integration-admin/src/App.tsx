import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HrInitiativeList } from "./hrInitiative/HrInitiativeList";
import { HrInitiativeCreate } from "./hrInitiative/HrInitiativeCreate";
import { HrInitiativeEdit } from "./hrInitiative/HrInitiativeEdit";
import { HrInitiativeShow } from "./hrInitiative/HrInitiativeShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { EmployeeBenefitsList } from "./employeeBenefits/EmployeeBenefitsList";
import { EmployeeBenefitsCreate } from "./employeeBenefits/EmployeeBenefitsCreate";
import { EmployeeBenefitsEdit } from "./employeeBenefits/EmployeeBenefitsEdit";
import { EmployeeBenefitsShow } from "./employeeBenefits/EmployeeBenefitsShow";
import { PayrollList } from "./payroll/PayrollList";
import { PayrollCreate } from "./payroll/PayrollCreate";
import { PayrollEdit } from "./payroll/PayrollEdit";
import { PayrollShow } from "./payroll/PayrollShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HRFinanceIntegration"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HrInitiative"
          list={HrInitiativeList}
          edit={HrInitiativeEdit}
          create={HrInitiativeCreate}
          show={HrInitiativeShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="EmployeeBenefits"
          list={EmployeeBenefitsList}
          edit={EmployeeBenefitsEdit}
          create={EmployeeBenefitsCreate}
          show={EmployeeBenefitsShow}
        />
        <Resource
          name="Payroll"
          list={PayrollList}
          edit={PayrollEdit}
          create={PayrollCreate}
          show={PayrollShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
